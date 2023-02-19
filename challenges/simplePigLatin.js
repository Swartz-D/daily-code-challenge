function pigIt(str) {
  let strArr = str.split(" ");
  console.log(strArr[strArr.length - 1]);
  for (let i = 0; i < strArr.length; i++) {
    if (!/[A-Za-z]/.test(strArr[i])) return strArr.join(" ");
    let word = strArr[i].split("");
    let first = word.shift();
    let pLatin = word.concat(first + "ay");
    strArr[i] = pLatin.join("");
  }
  let result = strArr.join(" ");
  return result;
}

module.exports = pigIt;
