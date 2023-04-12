const date_now = new Date();
const date_minutes =
  date_now.getMinutes() < 10
    ? `0${date_now.getMinutes()}`
    : date_now.getMinutes();
export const format_date = `${date_now.getHours()}:${date_minutes}`;
