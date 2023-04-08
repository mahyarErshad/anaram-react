function randomizeClassName() {
  const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let className = "";
  for (let i = 0; i < 5; i++) {
    className += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }
  return className;
}
export default randomizeClassName;
