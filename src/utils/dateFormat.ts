export const getDateFormatted = (date: string): string => {
  const dateToFormat = new Date(date);
  return new Intl.DateTimeFormat("en-us", { dateStyle: "medium" }).format(
    dateToFormat
  );
};
