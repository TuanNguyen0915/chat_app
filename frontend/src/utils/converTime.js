export const convertTime = (time) => {
  const date = new Date(time);
  let hours = date.getHours();
  hours = hours.toString().padStart(2, "0");
  let minutes = date.getMinutes();
  minutes = minutes.toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};
