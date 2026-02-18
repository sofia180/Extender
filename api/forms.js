const formidable = require("formidable");

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
      const data = Object.fromEntries(
        Object.entries(fields).map(([key, value]) => [key, Array.isArray(value) ? value[0] : value])
      );
      resolve(data);
    });
  });

const forwardToSheets = async (data) => {
  const endpoint = process.env.SHEETS_WEBHOOK_URL;
  const secret = process.env.FORMS_SECRET;

  if (!endpoint || !secret) {
    throw new Error("Missing Sheets webhook configuration");
  }

  const payload = new URLSearchParams();
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      payload.append(key, String(value));
    }
  });
  payload.append("secret", secret);

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: payload.toString(),
  });

  if (!response.ok) {
    throw new Error("Sheets webhook failed");
  }
};

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

  try {
    const data = await parseForm(req);
    await forwardToSheets(data);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: true }));
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Failed to submit form" }));
  }
};
