let bulbStage =  "off";

function changeColor() {
    let r = "";
    let g = "";
    let b = "";

    // Random = Gera números aleatórios entre 0 e 1
    // ceil, floor e round que arredondam o número para cima, para baixo, aou aleatóriamente

    // Determinando para a variável r um valor entre 0 e 255.
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    
    const cabecalho = document.querySelector(".cabecalho");
    cabecalho.setAttribute("style", `background-color: rgb(${r}, ${g}, ${b});`);
    tmp = setTimeout(changeColor, 1000);

    changeImage();
    
}

function changeImage() {
    const le = document.querySelector(".l-e");
    const ld = document.querySelector(".l-d");

    setTimeout(() => {
        changeBackground(le)
        changeBackground(ld)
    }, 2000);
} 

function changeBackground(value) {
    let image = Math.ceil(Math.random() * 3);
    value.style.backgroundImage = `url(./img/banner-lateral-${image}.png)`;
}

function turnBulb() {
    const bulb = document.querySelector(".bulb");
    const button = document.querySelector(".turnonoff");

    if (bulbStage === "off") {
        button.innerHTML = "Deligar";
        bulbStage = "on";
    } else {
        button.innerHTML = "Ligar";
        bulbStage = "off";
    }
    bulb.removeAttribute("src");
    bulb.setAttribute("src",  `./img/pic_bulb${bulbStage}.gif`);
}

changeColor();