module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;

  do {
    let tempStr = str;

    bracketsConfig.forEach(brackets => {
      let regExp = parseInt(brackets[0]) ?
          new RegExp(`${brackets[0]}${brackets[1]}`, 'g') :
          new RegExp(`\\${brackets[0]}\\${brackets[1]}`, 'g');

      str = str.replace(regExp, '');
    });

    if (str.length === 0) {
      return true;
    } else if (str === tempStr) {
      return false;
    }
  } while (true);
};