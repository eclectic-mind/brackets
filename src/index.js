module.exports = function check(str, bracketsConfig) {
const pattern = bracketsConfig.flat();
const array = str.split('');
let res = [];

for (let i = 0; i < pattern.length; i += 1) {
  let matches = array.filter((item) => item === pattern[i]);
  if (matches.length < 1) {
    res.push(pattern[i]);
  }
}

return res.length > 0 ? false : true;
}