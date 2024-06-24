//Testing connection
// alert('Connected successfully!');

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

//Message
let errorMessage = document.getElementById('error_message');

//function to handle encryption
function encrypt(text, key) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            let charcode = char.charCodeAt(0);
            let baseChar = (char.toUpperCase() === char) ? 65 : 97;
            return String.fromCharCode(((charcode - baseChar + key) % 26) + baseChar);
        }
        return char;
    }).join('');
}

//function to handle the decryption
function decrypt(text, key) {
    return text.split('').map(char => {

        //Check for match in the alphabet
        if (char.match(/[a-z]/i)) {
            let charcode = char.charCodeAt(0);
            let baseChar = (char.toUpperCase() === char) ? 65 : 97;
            return String.fromCharCode(((charcode - baseChar - key + 26) % 26) + baseChar);
        }
        return char;

    }).join('');
}

//Function to display encryption result
function encryptPlainText(){
    const text = encryptText.value;
    const key = parseInt(encryptTextKey.value);

    //Check if key value is less than or greater than or key is empty

    if (key < 1 || key > 25) {
        showErrorMessage1()
        setInterval(removeErrorMessage, 2000);
        
        return;
    }

    //Check if text input is empty
    if(text === ''){

        encryptResult.style.color = 'red';
        encryptResult.innerHTML = 'Invalid text input!';
        return;
    }
    encryptResult.innerHTML = encrypt(text, key);
};


//Function to display decryption result
function decryptPlainText() {
    const text = decryptText.value;
    const key = parseInt(decryptTextKey.value);

     //Check if key value is less than or greater than or key is empty
    if (key < 1 || key > 25) {

        showErrorMessage1()
        setInterval(removeErrorMessage, 2000);

        return;
    }

    //Check if text input is empty
    if(text === ''){

        decryptResult.style.color = 'red';
        decryptResult.innerHTML = 'Invalid text input!';
        return;
    }

    decryptResult.innerHTML = decrypt(text, key);
};

//Function to display error message
function showErrorMessage1(){
    errorMessage.innerHTML = "Key must be between 1 and 25";
    errorMessage.classList.add('remove_error');
    
}

function showErrorMessage2(){
    errorMessage.innerHTML = "The is no key!";
    errorMessage.classList.add('remove_error');
    
}
function removeErrorMessage(){
    // errorMessage.innerHTML = "Key must be between 1 and 25";
    errorMessage.classList.remove('remove_error');
    
}

//Toggle both function on either of the button when click
encryptBtn.addEventListener('click', encryptPlainText);
decryptBtn.addEventListener('click', decryptPlainText);     
