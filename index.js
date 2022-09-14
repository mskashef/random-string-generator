const RandomStringGenerator = function(chars, length = 32) {
  if (typeof chars !== 'string')
    throw new TypeError(`Expected string but received '${typeof chars}'`)
  if (typeof length !== 'number')
    throw new TypeError(`Expected number but received '${typeof length}'`)
  return {
    new: function(len = length) {
      let res = '';
      for (let i = 0; i < len; i++) {
        res += chars.charAt(Math.floor(Math.random() * chars.length))
      }
      return res
    }
  }
};

module.exports = RandomStringGenerator;
