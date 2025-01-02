const passwordBox = document.getElementById('password');
const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('copy');

const length = 12;

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbol = '!@#$%^&*()}{?><[];/.`~'

const allChars = uppercase + lowercase + numbers + symbol

const createPassword = () => {
    let password = ''
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password
}

function copyPassword() {
    passwordBox.select()
    document.execCommand('copy')
    alert("Password copied to clipboard")
}


generateButton.addEventListener('click', createPassword)
copyButton.addEventListener('click', copyPassword)
