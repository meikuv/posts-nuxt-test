export function formatDate(date: Date): string {
  const dateTime = new Date(date);
  const day = ("0" + dateTime.getDate()).slice(-2);
  const month = ("0" + (dateTime.getMonth() + 1)).slice(-2);
  const year = dateTime.getFullYear();
  return `${month}/${day}/${year}`;
}
