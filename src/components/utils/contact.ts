export const openContactForm = (type: "allman" | "offert" = "allman") => {
  const formElement = document.getElementById("contact");

  if (formElement) {
    const event = new CustomEvent("setContactIssue", {
      detail: type,
    });
    window.dispatchEvent(event);
    formElement.scrollIntoView({ behavior: "smooth" });
    return;
  }

  window.location.href = `/?contact=${type}`;
};
