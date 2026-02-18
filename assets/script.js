/* Extender site interactions */
(() => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  // Mobile navigation toggle
  if (header && navToggle && navMenu) {
    const openMenu = () => {
      header.classList.add("open");
      navMenu.style.maxHeight = `${navMenu.scrollHeight}px`;
      navToggle.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
      header.classList.remove("open");
      navMenu.style.maxHeight = "0px";
      navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle.addEventListener("click", () => {
      if (header.classList.contains("open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
          closeMenu();
        }
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        navMenu.style.maxHeight = "";
        header.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      } else if (header.classList.contains("open")) {
        navMenu.style.maxHeight = `${navMenu.scrollHeight}px`;
      }
    });
  }

  // Smooth scroll for on-page anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Reveal sections on scroll
  const revealItems = document.querySelectorAll(".reveal");
  if (revealItems.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  // Capabilities accordion toggles
  document.querySelectorAll(".cap-item").forEach((item) => {
    const button = item.querySelector(".cap-toggle");
    const content = item.querySelector(".cap-content");
    if (!button || !content) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(!isOpen));
      if (!isOpen) {
        content.style.maxHeight = `${content.scrollHeight}px`;
      } else {
        content.style.maxHeight = "0px";
      }
    });
  });

  // Contact form validation
  const form = document.querySelector("#contact-form");
  if (form) {
    const errorEl = document.querySelector("#form-error");
    const successEl = document.querySelector("#form-success");
    const submitButton = form.querySelector("button[type='submit']");

    const showError = (message) => {
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add("error");
      }
      if (successEl) {
        successEl.textContent = "";
        successEl.classList.remove("success");
      }
    };

    const showSuccess = (message) => {
      if (successEl) {
        successEl.textContent = message;
        successEl.classList.add("success");
      }
      if (errorEl) {
        errorEl.textContent = "";
        errorEl.classList.remove("error");
      }
    };

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const company = form.querySelector("[name='company']");
      const email = form.querySelector("[name='email']");
      const phone = form.querySelector("[name='phone']");
      const budget = form.querySelector("[name='budget']");
      const timeline = form.querySelector("[name='timeline']");
      const description = form.querySelector("[name='description']");

      if (!company || !email || !budget || !timeline || !description) {
        showError("Something went wrong. Please refresh and try again.");
        return;
      }

      if (!company.value.trim()) {
        showError("Please enter your company name.");
        company.focus();
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
        showError("Please provide a valid email address.");
        email.focus();
        return;
      }

      if (phone && phone.value.trim() && phone.value.trim().length < 7) {
        showError("Please provide a valid phone number.");
        phone.focus();
        return;
      }

      if (!budget.value) {
        showError("Please select a budget range.");
        budget.focus();
        return;
      }

      if (!timeline.value.trim()) {
        showError("Please share your project timeline.");
        timeline.focus();
        return;
      }

      if (!description.value.trim()) {
        showError("Please describe your project needs.");
        description.focus();
        return;
      }

      const endpoint = form.getAttribute("data-endpoint");
      const hasEndpoint = endpoint && endpoint.trim() !== "";

      const finalize = (successMessage) => {
        form.reset();
        showSuccess(successMessage);
      };

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
      }

      if (hasEndpoint) {
        const formData = new FormData(form);
        fetch(endpoint, { method: "POST", body: formData })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            finalize("Thanks for reaching out. We'll respond within one business day.");
          })
          .catch(() => {
            showError("Submission failed. Please try again or email hello@extender.example.");
          })
          .finally(() => {
            if (submitButton) {
              submitButton.disabled = false;
              submitButton.textContent = "Submit";
            }
          });
        return;
      }

      finalize("Thanks for reaching out. We'll respond within one business day.");
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Submit";
      }
    });
  }
})();
