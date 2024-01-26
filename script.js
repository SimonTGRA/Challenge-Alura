const textarea = document.querySelector("#text");
const btnEncrypt = document.querySelector(".bot.enc");
const btnDecrypt = document.querySelector(".bot.des");
const btnCopy = document.querySelector(".copiar");
const encryptedTextarea = document.querySelector("#textarea-encriptado");
const cardContent = document.querySelector(".contenedor-carta");

function showTextEncrypted(textareaValue) {
    if (textareaValue !=="") {
        encryptedTextarea.classList.remove("hidden");
        cardContent.style.display = "none";
    } else {
        encryptedTextarea.classList.add("hidden");
        cardContent.style.display = "flex";
    }
    encryptedTextarea.value = textareaValue;
}

function showTextarea(textareaValue) {
    if (encryptedTextarea-value == "") {
        encryptedTextarea.classList.add("hidden");
        cardContent.style.display = "flex";
    }
    textarea.value = textareaValue;
}

function checkText(textareaValue) {
    let lowerCaseText = textareaValue.toLowerCase();
    let newText = lowerCaseText.replace(/á/g, "a")
                               .replace(/é/g, "e")
                               .replace(/í/g, "i")
                               .replace(/ó/g, "o")
                               .replace(/ú/g, "u");
    return newText;
} 

function encryptText(textareaValue) {
    let cleanText = checkText(textareaValue);
    let newText = "";
    for (let i = 0; i < cleanText.length; i++) {
        let letter = cleanText [i];
        switch(letter) {
            case "a" :
                newText += "ai";
                break;
            case "e" :
                 newText += "enter";
                 break;
             case "i" :
                 newText += "imes";
                 break;
            case "o" :
                 newText += "ober";
                 break;
            case 'u':
                newText += "ufat";
                break;
                newText += letter;
        }
    }
    showTextEncrypted(newText);
}

function decryptText(textareaValue) {
    let cleanText = checkText(textareaValue);
    let newText = cleanText.replace(/ufat/g, "u")
                           .replace(/ober/g, "o")
                           .replace(/imes/g, "i")
                           .replace(/enter/g, "e")
                           .replace(/ai/g, "a");
    textareaValue = newText;
    showTextEncrypted(textareaValue);
}

function copyText(value) {
    let originalText = btnCopy.innerHTML;
    if (value !== "") {
        encryptedTextarea.select();
        encryptedTextarea.setSelectionRange(0, 999);
        navigator.clipboard.writeText(value);
        btnCopy.innerHTML = "Texto Copiado!"
        setTimeout(function(){
            btnCopy.innerHTML = originalText;
        }, 800);
    }
}

btnEncrypt.addEventListener("click", () => {
    encryptText(textarea.value);
});

btnDecrypt.addEventListener("click", () => {
    decryptText(textarea.value);
});

btnCopy.addEventListener("click", function() {
    copyText(encryptedTextarea.value);
});