export const redirectUser = (location: string) => {
  window.location.href = `${import.meta.env.VITE_TRACCAR}${location}`;
};
