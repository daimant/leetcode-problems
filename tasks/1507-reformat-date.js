/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
  let [day, month, year] = date.split(" ");
  day = day.replace(/[^0-9]/g, "");
  month = new Date(`0 ${month}`).getMonth() + 1 + "";
  return `${year}-${month.length > 1 ? month : "0" + month}-${
    day.length > 1 ? day : "0" + day
  }`;
};
