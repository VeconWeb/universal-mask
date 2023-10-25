"use strict";
/**
 * Aplica uma máscara ao CPF fornecido, transformando-o no formato XXX.XXX.XXX-XX.
 * @param cpf - O CPF a ser mascarado, deve conter exatamente 11 dígitos numéricos.
 * @returns O CPF formatado ou lança um erro se o CPF for inválido.
 */
function maskCPF(cpf) {
    return this.applyMask({11 : "xxx.xxx.xxx-xx"}, cpf);
}

/**
 * Aplica uma máscara ao CNPJ fornecido, transformando-o no formato XX.XXX.XXX/XXXX-XX.
 * @param cnpj - O CNPJ a ser mascarado, deve conter exatamente 14 dígitos numéricos.
 * @returns O CNPJ formatado ou lança um erro se o CNPJ for inválido.
 */
function maskCNPJ(cnpj) {
    return this.applyMask({14 : "xxx.xxx.xxx/xxxx-xx"}, cnpj);
}

/**
 * Aplica uma máscara ao CNPJ ou Cpf fornecido, transformando-o no formato XX.XXX.XXX/XXXX-XX.
 *
 * @param {string} numero - O CNPJ ou CPF a ser mascarado. Deve conter 12 a 14 dígitos numéricos.
 * @returns {string} O CNPJ ou Cpf formatado no formato XXX.XXX.XXX-XX ou XX.XXX.XXX/XXXX-XX.
 * @throws {Error} Lança um erro se o CNPJ ou Cpf fornecido for maior 14 dígitos numéricos.
 */
function formatDocumento(numero) {
    return this.applyMask({"11" : "xxx.xxx.xxx-xx", "14" : "xxx.xxx.xxx/xxxx-xx"}, numero);
}

/**
* Aplica uma máscara a um valor, removendo caracteres não numéricos
* e combinando-o com a máscara fornecida. A máscara pode ser fornecida como uma string
* ou um objeto que mapeia o comprimento do valor para a máscara correspondente.
* ex de `mask` obj :
* {"11" : "xxx.xxx.xxx-xx", "14" : "xxx.xxx.xxx/xxxx-xx"}
* @param {string | Record<string, string>} mask - A máscara a ser aplicada (usando 'x' para representar dígitos) ou um objeto de mapeamento.
* @param {string} value - O valor a ser mascarado.
* @returns {string} - O valor mascarado de acordo com a máscara.
*/
function applyMask(mask, value) {
    value = value.replace(/\D/g, '');
    let maskedValue = '';
    let valueIndex = 0;
    let maskMap;
    maskMap = mask;
    for (const length in maskMap) {
        if (parseInt(length) >= value.length) {
            mask = maskMap[length];
            break;
        }
    }
    if (typeof mask === "string") {
        for (let i = 0; i < mask.length; i++) {
            if (valueIndex >= value.length) {
                break;
            }
            if (mask[i] === 'x') {
                maskedValue += value[valueIndex];
                valueIndex++;
            }
            else {
                maskedValue += mask[i];
            }
        }
    }
    else {
        maskedValue = value;
    }
    return maskedValue;
}

module.exports = {
    applyMask,
    formatDocumento,
    maskCPF,
    maskCNPJ
};
