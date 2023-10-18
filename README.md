# universal-mask

Este é um pacote npm que fornece funções para aplicar máscaras a números de CPF e CNPJ, além de permitir a aplicação de máscaras a valores em geral. É útil para formatar dinamica.

## Instalação

Para instalar este pacote, você pode usar o npm. Abra o terminal e execute o seguinte comando:

```bash
npm i universal-mask
```

## Uso 

Aqui está como você pode usar este pacote 

código:


```javascript
const {     
    applyMask,
    formatDocumento,
    maskCPF,
    maskCNPJ
    } = require('universal-mask');

// Aplicar máscara a um CPF
const cpfMascarado = mascaras.maskCPF('12345678901');
console.log(cpfMascarado); // Saída: '123.456.789-01'

// Aplicar máscara a um CNPJ
const cnpjMascarado = mascaras.maskCNPJ('12345678901234');
console.log(cnpjMascarado); // Saída: '12.345.678/9012-34'

// Aplicar máscara a um número com base no tamanho
const valorMascarado = mascaras.applyMask('xx.xxx.xxx-xx', '12345678901');
console.log(valorMascarado); // Saída: '12.345.678-90'
```
Você também pode usar a função formatDocumento para aplicar máscara a CPF ou CNPJ automaticamente, com base no tamanho do número:

```javascript

const documentoFormatado = mascaras.formatDocumento('12345678901234');
console.log(documentoFormatado); // Saída: '12.345.678/9012-34'
```

Lembre-se de que o pacote assume que os números de entrada são compostos apenas por dígitos numéricos e que os números de CPF devem ter 11 dígitos, enquanto os números de CNPJ devem ter 14 dígitos.

Contribuição

Se você encontrar problemas ou desejar contribuir com melhorias, fique à vontade para abrir uma issue ou enviar um pull request no repositório GitHub.

Licença

Este pacote é distribuído sob a licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.

Autore
- Luan @veconweb [X] https://github.com/VeconWeb/


Agradecimentos:
Agradecemos a todos os colaboradores que tornaram este pacote possível.