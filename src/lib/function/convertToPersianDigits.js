export const convertToPersian = (number) => {
  const persian = number.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  return persian;
};
export function separateNumberByThousand(number) {
  let newNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  newNumber = persian(newNumber);
  return newNumber;
}