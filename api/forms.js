const formidable = require("formidable");
const { google } = require("googleapis");

const cors = (res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
};

const parseForm = (req) =>
  new Promise((resolve, reject) => {
    const form = formidable({ multiples: false });
    form.parse(req, (err, fields) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(fields);
    });
  });

module.exports = async (req, res) => {
  cors(res);

  if (req.method === "OPTIONS") {
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const sheetId = process.env.GOOGLE_SHEET_ID;
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n");
  const sheetName = process.env.GOOGLE_SHEET_TAB || "Leads";

  if (!sheetId || !clientEmail || !privateKey) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Missing Google Sheets environment variables" }));
    return;
  }

  try {
    const fields = await parseForm(req);
    const data = Object.fromEntries(
      Object.entries(fields).map(([key, value]) => [key, Array.isArray(value) ? value[0] : value])
    );

    const timestamp = new Date().toISOString();
    const formType = data.formType || "contact";
    const name = data.company || data.fullName || "";
    const email = data.email || "";
    const phone = data.phone || "";
    const roleOrBudget = data.role || data.budget || "";
    const timelineOrExperience = data.timeline || data.experience || "";
    const details = data.description || data.message || "";
    const link1 = data.linkedin || "";
    const link2 = data.resume || "";

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${sheetName}!A:Z`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            timestamp,
            formType,
            name,
            email,
            phone,
            roleOrBudget,
            timelineOrExperience,
            details,
            link1,
            link2,
            JSON.stringify(data),
          ],
        ],
      },
    });

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: true }));
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Failed to submit form" }));
  }
};
