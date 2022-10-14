export const DateManagement = {
  addDays: (days: number, date: Date) => {
    return (date.getTime() + days * 86400000).toString();
  },
  dayToMiliseconds: (days: number) => {
    return days * 24 * 60 * 60 * 1000;
  },
};
