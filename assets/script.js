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

  document.querySelectorAll(".cap-content img").forEach((img) => {
    const updateHeight = () => {
      const item = img.closest(".cap-item");
      const content = img.closest(".cap-content");
      if (item && content && item.classList.contains("open")) {
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    };

    if (img.complete) {
      updateHeight();
    } else {
      img.addEventListener("load", updateHeight);
    }
  });

  // Form validation (contact + careers)
  document.querySelectorAll(".js-form").forEach((form) => {
    const errorEl = form.querySelector("[data-form-message='error']");
    const successEl = form.querySelector("[data-form-message='success']");
    const submitButton = form.querySelector("button[type='submit']");
    const submitLabel = submitButton ? submitButton.textContent : "Submit";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

      const requiredFields = Array.from(form.querySelectorAll("[required]"));
      for (const field of requiredFields) {
        if (!field.value || !field.value.trim()) {
          showError("Please complete all required fields.");
          field.focus();
          return;
        }
      }

      const emailField = form.querySelector("input[type='email']");
      if (emailField && !emailPattern.test(emailField.value.trim())) {
        showError("Please provide a valid email address.");
        emailField.focus();
        return;
      }

      const phoneField = form.querySelector("input[type='tel']");
      if (phoneField && phoneField.value.trim() && phoneField.value.trim().length < 7) {
        showError("Please provide a valid phone number.");
        phoneField.focus();
        return;
      }

      const urlFields = Array.from(form.querySelectorAll("input[type='url']"));
      for (const field of urlFields) {
        if (field.value.trim()) {
          try {
            new URL(field.value.trim());
          } catch (error) {
            showError("Please provide a valid URL.");
            field.focus();
            return;
          }
        }
      }

      const endpoint = form.getAttribute("data-endpoint");
      const hasEndpoint = endpoint && endpoint.trim() !== "";
      const successMessage =
        form.getAttribute("data-success") ||
        "Thanks for reaching out. We'll respond within one business day.";

      const finalize = () => {
        form.reset();
        showSuccess(successMessage);
      };

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
      }

      if (hasEndpoint) {
        const formData = new FormData(form);
        fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        })
          .then((response) => {
            if (!response.ok && response.status >= 400) {
              throw new Error("Network response was not ok");
            }
            finalize();
          })
          .catch(() => {
            showError("Submission failed. Please try again or email hello@extender.cards.");
          })
          .finally(() => {
            if (submitButton) {
              submitButton.disabled = false;
              submitButton.textContent = submitLabel;
            }
          });
        return;
      }

      finalize();
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = submitLabel;
      }
    });
  });
})();
