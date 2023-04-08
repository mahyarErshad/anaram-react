function randomizeClassName() {
  const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let className = "";
  for (let i = 0; i < 10; i++) {
    className += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }
  return className;
}
export default randomizeClassName;
