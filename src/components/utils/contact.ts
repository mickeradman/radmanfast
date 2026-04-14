export const openContactForm = (type: 'allman' | 'offert' = 'allman') => {
    const event = new CustomEvent('setContactIssue', { detail: type });
    window.dispatchEvent(event);

    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};