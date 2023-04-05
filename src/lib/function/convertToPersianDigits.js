export default function convertToPersianDigits(number) {
    const persianDigits = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    const str = number.toString();
    let result = "";
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      const digit = parseInt(str.charAt(i));
      result = (count > 0 && count % 3 === 0) ? `${persianDigits[digit - 1]},${result}` : `${persianDigits[digit - 1]}${result}`;
      count++;
    }
    return result;
  }