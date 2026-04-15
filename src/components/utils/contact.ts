export const openContactForm = (
  type: 'allman' | 'offert' = 'allman',
) => {
  const formElement = document.getElementById(
    'contact',
  );

  console.log('Hittade jag formuläret?', formElement);

  if (formElement) {
    const event = new CustomEvent('setContactIssue', {
      detail: type,
    });
    window.dispatchEvent(event);
    formElement.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  window.location.href = `/?contact=${type}`;
};
