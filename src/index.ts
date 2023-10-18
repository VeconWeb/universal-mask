class Formatter {
    /**
     * Aplica uma máscara ao CPF fornecido, transformando-o no formato XXX.XXX.XXX-XX.
     * @param cpf - O CPF a ser mascarado, deve conter exatamente 11 dígitos numéricos.
     * @returns O CPF formatado ou lança um erro se o CPF for inválido.
     */
    static maskCPF(cpf: string) {
      if (cpf.length > 11) {
        throw new Error("CPF inválido. Deve conter 11 dígitos numéricos.");
      }
      cpf = cpf.replace(/\D/g, '');
      if (cpf.length <= 3) {
        cpf = cpf.replace(/(\d{0,3})/, '$1');
      } else if (cpf.length <= 6) {
        cpf = cpf.replace(/(\d{3})(\d{0,3})/, '$1.$2');
      } else if (cpf.length <= 9) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
      } else if (cpf.length <= 11) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
      }
      return cpf;
    }
  
    /**
     * Aplica uma máscara ao CNPJ fornecido, transformando-o no formato XX.XXX.XXX/XXXX-XX.
     * @param cnpj - O CNPJ a ser mascarado, deve conter exatamente 14 dígitos numéricos.
     * @returns O CNPJ formatado ou lança um erro se o CNPJ for inválido.
     */
    static maskCNPJ(cnpj: string) {
      if (cnpj.length > 14) {
        throw new Error("CNPJ inválido. Deve conter 14 dígitos numéricos.");
      }
  
      cnpj = cnpj.replace(/\D/g, '');
  
      if (cnpj.length <= 2) {
        cnpj = cnpj.replace(/(\d{0,2})/, '$1');
      } else if (cnpj.length <= 5) {
        cnpj = cnpj.replace(/(\d{2})(\d{0,3})/, '$1.$2');
      } else if (cnpj.length <= 8) {
        cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{0,3})/, '$1.$2.$3');
      } else if (cnpj.length <= 12) {
        cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{0,4})/, '$1.$2.$3/$4');
      } else {
        cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, '$1.$2.$3/$4-$5');
      }
      return cnpj;
    }
    
    /**
     * Aplica uma máscara ao CNPJ ou Cpf fornecido, transformando-o no formato XX.XXX.XXX/XXXX-XX.
     * 
     * @param {string} numero - O CNPJ ou CPF a ser mascarado. Deve conter 12 a 14 dígitos numéricos.
     * @returns {string} O CNPJ ou Cpf formatado no formato XXX.XXX.XXX-XX ou XX.XXX.XXX/XXXX-XX.
     * @throws {Error} Lança um erro se o CNPJ ou Cpf fornecido for maior 14 dígitos numéricos.
     */
    static formatDocumento(numero: string) {
      const cleanNumero = numero.replace(/\D/g, '');
    
      if (cleanNumero.length === 11) {
        return this.maskCPF(cleanNumero);
      } else if (cleanNumero.length === 14) {
        return this.maskCNPJ(cleanNumero);
      } else {
        throw new Error("Número inválido. Deve conter 11 ou 14 dígitos numéricos.");
      }
    }
    /**
     * Aplica uma máscara a um valor, removendo caracteres não numéricos
     * e combinando-o com a máscara fornecida.
     *
     * @param {string} mask - A máscara a ser aplicada (usando 'x' para representar dígitos).
     * @param {string} value - O valor a ser mascarado.
     * @returns {string} - O valor mascarado de acordo com a máscara.
     */
    static applyMask(mask: any, value: string) {
      value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

      let maskedValue = '';
      let valueIndex = 0;
    
      for (let i = 0; i < mask.length; i++) {
        if (valueIndex >= value.length) {
          // Se o valor acabar, pare de adicionar caracteres à máscara
          break;
        }
    
        if (mask[i] === 'x') {
          // Substitua 'x' pelo próximo dígito do valor
          maskedValue += value[valueIndex];
          valueIndex++;
        } else {
          // Mantenha o caractere da máscara
          maskedValue += mask[i];
        }
      }
      return maskedValue;
    }    
}

console.log(Formatter.applyMask("xxx.xxx.xxx-xx", "16199967666")); // Resultado: "161.999.676-66"
console.log(Formatter.applyMask("xxx.xxx.xxx*xx", "1619999990")); // Resultado: "161.99"
console.log(Formatter.applyMask("xxx.xxx.xxx*xx", "161995555555555")); // Resultado: "161.99"

console.log(Formatter.applyMask({"11" : "xxx.xxx.xxx-xx", "14" : "xxx.xxx.xxx/xxxx-xx"}, "82986292000148")); // Resultado: "82.986.292/0001-48"
console.log(Formatter.applyMask({"11" : "xxx.xxx.xxx-xx", "14" : "xxx.xxx.xxx/xxxx-xx"}, "53879580073")); // Resultado: "538.795.800-73"