const alphabet = "abcdefghijklmnopqrstuvwxyz";

// function randomLetter() {
//   const i = Math.floor(Math.random() * alphabet.length);
//   return alphabet[i];
// }
function encrypt(message, shiftValue) {
  //Creates the function to call later.

  let encryptedMessage = ""; //creates the variable encryptedMessage with an empty string.
  let letterCount = 0;

  for (let i = 0; i < message.length; i++) {
    //creates the loop to cycle through every letter and message to encrypt the message.
    const letter = message[i].toLowerCase(); //creates the varible letter where each letter of the message is given an index value from the shifted alphabet.

    if (letterCount === 2) {
      encryptedMessage += randomLetter();
      letterCount = 0;
    }

    // Check if the character is a letter.
    const index = alphabet.indexOf(letter);
    if (index === -1) {
      encryptedMessage += letter;
    } else {
      let newIndex = (index + shiftValue) % alphabet.length; //creates the new index by adding the index plus the shift value and dividing by the alphabet length to wrap aroung if going past z.
      if (letter === letter.toUpperCase()) {
        encryptedMessage += alphabet[newIndex].toUpperCase();
      }
      if (newIndex < 0) {
        newIndex = alphabet.length + newIndex;
      } else {
        encryptedMessage += alphabet[newIndex];
      }
    }

    letterCount++;
  }

  return encryptedMessage;
}
console.log(encrypt("Hello Brutus, meet me at the high gardens.", 42)); //displays the message to the console.

function randomLetter() {
  const i = Math.floor(Math.random() * alphabet.length);
  return alphabet[i];
}
function decrypt(encryptedMessage, shiftValue) {
  let decryptedMessage = "";
  let letterCount = 0;
  for (let i = 0; i < encryptedMessage.length; i++) {
    //loop to cycle through each letter.
    const letter = encryptedMessage[i].toLowerCase();

    if (letterCount === 2) {
      letterCount = 0;
      continue;
    }

    const index = alphabet.indexOf(letter); //creates the index variable with the alphabet index.

    if (index === -1) {
      decryptedMessage += letter;
    } else {
      let newIndex = (index - shiftValue + alphabet.length) % alphabet.length; // Add alphabet.length before subtracting to avoid negative numbers

      if (newIndex < 0) {
        //fixes the negative number issue
        newIndex = alphabet.length + newIndex;
      }
      decryptedMessage += alphabet[newIndex]; //compares the decrypted message with the alphabet of the newIndex which contains the shift value.
    }

    letterCount++; //increases letter count
  }

  return decryptedMessage;
}
console.log(decrypt("xulbbje grhbkjhkix, kcuxujx ccu sqji jwxus xfywpx xwqthtsudxi.", 42));
