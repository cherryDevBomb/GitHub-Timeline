// dateString format is as returned by github API.
// Example: 2020-07-18T22:22:10Z
export const getFormattedDate = dateString => {
  let date = new Date(Date.parse(dateString));
  let now = new Date();

  let options;
  if (date.getFullYear() === now.getFullYear()) {
    options = {month: "short", day: "numeric"};
  } else {
    options = {month: "short", year: "numeric"};
  }

  return date.toLocaleDateString("en-US", options);
}