export const cameltoCababString = (str: string) => {
  if (!hasWhiteSpace(str)) {
    return str.toLowerCase();
  } else if (str.includes("&")) {
    const newStr = str
      .split(" & ")
      .map(item => item.toLowerCase())
      .join("-");
    // console.log(newStr);
    return newStr;
  } else {
    const newStr = str
      .split(" ")
      .map(item => item.toLowerCase())
      .join("-");
    // console.log(newStr);
    return newStr;
  }
};

function hasWhiteSpace(s: string) {
  return /\s/g.test(s);
}
