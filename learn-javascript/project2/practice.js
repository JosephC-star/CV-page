const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt(message, shiftValue) {
  //Creates the function to call later.
  let encryptedMessage = ""; //creates the variable encryptedMessage to store the value.

  for (let i = 0; i < message.length; i++) {
    //creates the loop to cycle through every letter and message to encrypt the message.
    const letter = message[i].toLowerCase(); //creates the varible letter where each letter of the message is given an index value from the shifted alphabet.

    if (alphabet.includes(letter)) {
      // Check if the character is a letter.
      const index = alphabet.indexOf(letter);
      const newIndex = (index + shiftValue) % alphabet.length; //creates the new index by adding the index plus the shift value and dividing by the alphabet length to wrap aroung if going past z.
      encryptedMessage += alphabet[newIndex];
    } else {
      encryptedMessage += letter;
    }
  }

  return encryptedMessage;
}
console.log(encrypt("What up, Bro!", 3)); //displays the message to the console.

function decrypt(encryptedMessage, shiftValue) {
  let decryptedMessage = "";

  for (let i = 0; i < encryptedMessage.length; i++) {
    //loop to cycle through each letter.
    const letter = encryptedMessage[i].toLowerCase();

    if (alphabet.includes(letter)) {
      const index = alphabet.indexOf(letter); //creates the index variable with the alphabet index.
      const newIndex = (index - shiftValue + alphabet.length) % alphabet.length; // Add alphabet.length before subtracting to avoid negative numbers
      decryptedMessage += alphabet[newIndex]; //compares the decrypted message with the alphabet of the newIndex which contains the shift value.
    } else {
      decryptedMessage += letter;
    }
  }

  return decryptedMessage;
}
console.log(
  decrypt(
    "Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.",
    42
  )
);
//I cant get the code to reverse the scramble!!
