const ingresaTexto = document.getElementById
("ingresaTexto");
const botonEncriptar = document.getElementById
("botonEncriptar");
const botonDesencritar = document.getElementById
("botonDesencritar");
const botonCopiar = document.getElementById
("botonCopiar");
const mensajeFinal = document.getElementById
("mensajeFinal");
const muñeco = document.getElementById
("muñeco");
const rightInfo = document.getElementById
("rightInfo");
const right = document.getElementById
("right");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

let reemplazar = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
];

// const remplace = ()


botonEncriptar.addEventListener("click", () => {
    const texto = ingresaTexto.value.toLowerCase();
    if(texto==""){
        alert("ingrese texto a encriptar")
    }else
    function encriptar(newText) {
        let textoEncriptado = "";
        for (let i = 0; i < newText.length; i++) {
            let reemplazo = newText[i];
            for (let j = 0; j < reemplazar.length; j++) {
                if (newText[i] === reemplazar[j][0]) {
                    reemplazo = reemplazar[j][1];
                    break;
                }
            }
            textoEncriptado += reemplazo;
        }
        return textoEncriptado;
    }

    const textoEncriptado = encriptar(texto);

    mensajeFinal.innerHTML = textoEncriptado;

    muñeco.style.display = ("none");

    ingresaTexto.value = ""
    rightInfo.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
});


botonDesencritar.addEventListener("click", () => {
    const texto = ingresaTexto.value.toLowerCase();

    if(texto==""){
        alert("ingrese texto a desencritar")
    }else
    function desencriptar(newText) {
        for (let i = 0; i < reemplazar.length; i++) {
            if (newText.includes(reemplazar[i][1])) {
                newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
            };
        };
        return newText;
    }
    const textoDesencriptado = desencriptar(texto);

    mensajeFinal.innerHTML = textoDesencriptado;
     
    muñeco.style.display = ("none");

    ingresaTexto.value = ""
    rightInfo.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
});

botonCopiar.addEventListener("click", () =>{
    let texto = mensajeFinal;

    texto.select();
    document.execCommand("Copy")
    alert("Texto Copiado");
    
    mensajeFinal.innerHTML = "";

    muñeco.style.display = ("");
    rightInfo.style.display = "block";
    
    botonCopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresaTexto.focus();
})