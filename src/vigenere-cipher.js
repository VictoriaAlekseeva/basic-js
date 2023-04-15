const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {

  constructor(direct) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if ( !message || !key ) throw new Error( 'Incorrect arguments!' );

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let alphabetSize = alphabet.length;

    let keySize = key.length;
    let encryptMessage = '';

    message = message.toLowerCase();
    key = key.toLowerCase();

    let i = 0;
    let keyIndex = 0;
    while (i < message.length) {
      if (alphabet.indexOf(message[i]) != -1) {
        let index = keyIndex % keySize;
        let encIndex = (alphabet.indexOf(message[i]) + alphabet.indexOf(key[index])) % alphabetSize;
        encryptMessage += ALPHABET[encIndex];
        keyIndex++;
      } else {
        encryptMessage += message[i];
      }
      i++;
    }

    if (this.direct == false) {
      return this.reverse(encryptMessage);
     }

    return encryptMessage;
  }

  decrypt(encryptedMessage, key) {
    if ( !encryptedMessage || !key ) throw new Error( 'Incorrect arguments!' );

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let alphabetSize = alphabet.length;
    let keySize = key.length;

    let decryptMessage = '';

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toLowerCase();
    let i = 0;
    let keyIndex = 0;
    while (i < encryptedMessage.length) {
      if (ALPHABET.indexOf(encryptedMessage[i]) != -1) {
        let index = keyIndex % keySize;
        let deccIndex = ((ALPHABET.indexOf(encryptedMessage[i]) - alphabet.indexOf(key[index])) + alphabetSize) % alphabetSize;
        decryptMessage += ALPHABET[deccIndex];
        keyIndex++;
      } else {
        decryptMessage += encryptedMessage[i];
      }
      i++;
    }

    if (this.direct == false) {
    return this.reverse(decryptMessage);
   }

   return decryptMessage;
  }

  reverse(str) {
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reverseStr += str[i];
    }

    return reverseStr;
  }
}

module.exports = {
  VigenereCipheringMachine
};
