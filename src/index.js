module.exports = function toReadable (number) {
  return parseInt(number.toString().split('').reverse().join(''))
}
