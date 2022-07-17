const caesarCipher = (str, num) => {
  let cipherArray = [];
  for (let i = 0; i < str.length; i++) {
    cipherArray.push(String.fromCharCode(str.charCodeAt(i) + num));
  }
  let modifStr = cipherArray.join("");
  for (let i = 0; i < cipherArray.length; i++) {
    if (cipherArray[i].charCodeAt() < 97) {
      cipherArray[i] = String.fromCharCode(cipherArray[i].charCodeAt() + 26);
    }
    if (cipherArray[i].charCodeAt() > 122) {
      cipherArray[i] = String.fromCharCode(cipherArray[i].charCodeAt() - 26);
    }
  }
  return cipherArray.join("");
};

export default caesarCipher;
