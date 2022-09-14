# Random String Generator

### Sample Usage

```js
const RandomStringGenerator = require("@mskashef/random-string-generator");

const myRSG = RandomStringGenerator('0123456789ABCDEF', 6);

console.log(myRSG.new()); // C57F56
console.log(myRSG.new()); // 071F93
console.log(myRSG.new()); // 79DD28
console.log(myRSG.new()); // 88F402
console.log(myRSG.new()); // 42CF9C
```

or with a custom length at each time: 
```js
console.log(myRSG.new(5)); // 6AE7F
```