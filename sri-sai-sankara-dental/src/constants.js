export const CLINIC_NAME = "Sri Sai Sankara Dental Clinic";
export const PHONE_NUMBER = ""; // Will be updated after clinic confirmation
export const WHATSAPP_NUMBER = ""; // Will be updated after clinic confirmation
export const MAPS_URL = ""; // Will be updated after clinic confirmation
export const CLINIC_ADDRESS = ""; // Will be updated after clinic confirmation
export const CLINIC_TIMINGS = ""; // Will be updated after clinic confirmation

// Helper to handle demo actions or real links
export const getActionLink = (type, value) => {
  if (type === 'tel') {
    return value ? `tel:${value}` : '#demo-phone';
  }
  if (type === 'whatsapp') {
    return value ? `https://wa.me/${value}` : '#demo-whatsapp';
  }
  if (type === 'maps') {
    return value ? value : '#demo-maps';
  }
  return '#';
};

// Global click handler for demo buttons
export const handleActionClick = (e, type, value) => {
  const link = getActionLink(type, value);
  if (link.startsWith('#demo-')) {
    e.preventDefault();
    const actionType = link.replace('#demo-', '');
    window.dispatchEvent(new CustomEvent('show-demo-modal', { detail: { type: actionType } }));
  }
};
