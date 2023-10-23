# universal-mask

This is an npm package that provides functions to apply masks to CPF and CNPJ numbers, as well as allowing the application of masks to general values. It is useful for dynamic formatting.

## Installation

To install this package, you can use npm. Open your terminal and run the following command:

```bash
npm i universal-mask
```
```bash
yarn add universal-mask
```

## Usage

Here's how you can use this package:

```javascript
const {     
    applyMask,
    formatDocumento,
    maskCPF,
    maskCNPJ
    } = require('../universal-mask');

// First, you pass the mask in the object {number-of-characters: mask}, then the value as a string
// Note that only numbers are allowed
// Build your mask: X becomes the value, and special characters remain the same
const maskedValueObj = applyMask({11:'xx.xxx.xxx-xx'}, '12345678901');
console.log(maskedValueObj); // Output: '12.345.678-90'

// Apply a mask to a number based on size
const maskedValue2ObjCPF = applyMask({11:'xx.xxx.xxx-xx', 14:'12.345.678/9012-34'}, '12345678901234');
console.log(maskedValue2ObjCPF); // Output: '12.345.678/9012-34'

const maskedValue2ObjCNPJ = applyMask({11:'xx.xxx.xxx-xx', 14:'12.345.678/9012-34'}, '12345678901234');
console.log(maskedValue2ObjCNPJ); // Output: '12.345.678/9012-34'

// Apply a mask to a CPF
const cpfMasked = maskCPF('12345678901');
console.log(cpfMasked); // Output: '123.456.789-01'

// Apply a mask to a CNPJ
const cnpjMasked = maskCNPJ('12345678901234');
console.log(cnpjMasked); // Output: '12.345.678/9012-34'

// Apply a mask to a CPF or CNPJ
const formattedCPFMasked = formatDocumento('12345678901');
console.log(formattedCPFMasked); // Output: '123.456.789-01'

const formattedCNPJMasked = formatDocumento('12345678901234');
console.log(formattedCNPJMasked); // Output: '12.345.678/9012-34'
```

Please note that the package assumes that the input numbers consist of only numeric digits, and CPF numbers should have 11 digits, while CNPJ numbers should have 14 digits.

## Contribution

If you encounter issues or wish to contribute improvements, feel free to open an issue or send a pull request on the GitHub repository.

## License

This package is distributed under the MIT license. Please refer to the LICENSE file for more details.

Author
- Luan @veconweb [X] https://github.com/VeconWeb/

Acknowledgments:
We thank all the contributors who made this package possible.