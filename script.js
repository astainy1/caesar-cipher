//Testing connection
// alert('Connected successfully!');

/*

Caesar Cipher Algorithm Steps

Input the Plaintext and Shift Value:

Get the plaintext (message to be encrypted).
Get the shift value (number of positions to shift each letter).
Initialize an Empty Ciphertext String:

Create an empty string to hold the resulting ciphertext.
Iterate Through Each Character of the Plaintext:

Loop through each character in the plaintext.
Check if the Character is a Letter:

If the character is an uppercase letter:
Convert the character to its ASCII value.
Shift the character by the given shift value.
Wrap around if necessary (using modulo 26).
Convert the new ASCII value back to a character.
Append the shifted character to the ciphertext.
Else if the character is a lowercase letter:
Convert the character to its ASCII value.
Shift the character by the given shift value.
Wrap around if necessary (using modulo 26).
Convert the new ASCII value back to a character.
Append the shifted character to the ciphertext.
Else (if the character is not a letter):
Append the character to the ciphertext without changing it.
Output the Ciphertext:

Return or display the resulting ciphertext.
Example of Steps
Input:

Plaintext: "HELLO WORLD"
Shift value: 3
Initialize:

Ciphertext: ""
Iterate:

For each character in "HELLO WORLD":
H -> K
E -> H
L -> O
L -> O
O -> R
(space) -> (space)
W -> Z
O -> R
R -> U
L -> O
D -> G

Output:

Ciphertext: "KHOOR ZRUOG"

*/

//get reference to html elements
    //encryption container element
let encryptText = document.getElementById('encrypt_text');
let encryptTextKey = document.getElementById('encrypt_key');
let encryptBtn = document.getElementById('encrypt_btn');
let encryptResult = document.getElementById('encrypt_result');
    //decryption container element
let decryptText = document.getElementById('decrypt_text');
let decryptTextKey = document.getElementById('decrypt_key');
let decryptBtn = document.getElementById('decrypt_btn');
let decryptResult = document.getElementById('decrypt_result');

//Global string
let emptyString = '';

//encryption toggle button
encryptBtn.addEventListener('click', () => {
    console.log(encryptText.value);
    encryptResult.textContent = encryptText.value;
})
