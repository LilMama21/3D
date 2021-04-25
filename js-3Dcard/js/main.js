// Если у вас несколько элементов переменная будет выглядить след. образом
// let picas = document.querySelectorAll(".card"); 
let pica = document.querySelector(".card");

// Перебор  элемента picas
// for (let i = 0; i < picas.length; i++) {
//     let card = picas[i];
//     pica.addEventListener("mousemove", startRotate);
//     pica.addEventListener("mouseout", stopRotate);
// }
pica.addEventListener("mousemove", startRotate);
pica.addEventListener("mouseout", stopRotate);


function startRotate(event) {
    let cardItem = this.querySelector(".card--item");
    // Делим высоту на 2
    let halfHeight = cardItem.offsetHeight / 2;
    // Делим ширину на 2
    let halfWidth = cardItem.offsetWidth / 2;
    
    cardItem.style.transform = "rotateX(" + - (event.offsetY - halfHeight) / 5 + "deg) rotateY(" + (event.offsetX - halfWidth) / 5 +"deg)"
}
function stopRotate(event) {
    let cardItem = this.querySelector(".card--item");
    cardItem.style.transform = "rotate(0)";
}