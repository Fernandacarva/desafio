const textoArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const resultado = document.querySelector('.texto-resultado');

function btnEncripito() {
    const textoEncriptado = criptografar(textoArea.value);
    mensagem.value = textoEncriptado;
    textoArea.value = "";
}

function criptografar(stringCripto) {
    let matrizCodigo = [["a" , "ai"] , ["e" , "enter"] , ["i" , "imes"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringCripto = stringCripto.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringCripto.includes(matrizCodigo[i][0])) {
            stringCripto = stringCripto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringCripto;
}

function btnDesencripitar() {
    const textoDesencriptar = desencriptar(textoArea.value);
    mensagem.value = textoDesencriptar;
    textoArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["a" , "ai"] , ["e" , "enter"] , ["i" , "imes"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
        console.log(stringDesencriptada);
    }
    return stringDesencriptada;
}

