let allCorner = document.querySelector('.all-corners');
let topLeft = document.querySelector('.top-left');
let topRight = document.querySelector('.top-right');
let bottomLeft = document.querySelector('.bottom-left');
let bottomRight = document.querySelector('.bottom-right');
let block = document.querySelector('.block');
let out = document.querySelector('.out');
console.log(block);


allCorner.oninput = allCornerRadius;
topLeft.oninput = topLeftRadius;
topRight.oninput = topRightRadius;
bottomLeft.oninput = bottomLeftRadius;
bottomRight.oninput = bottomRightRadius;



function allCornerRadius() {
    block.style.borderRadius = allCorner.value + 'px';
    out.innerHTML =`border-radiud: ${allCorner.value}px ${allCorner.value}px ${allCorner.value}px ${allCorner.value}px`;
}
function topLeftRadius() {
    block.style.borderTopLeftRadius = topLeft.value + 'px';
    out.innerHTML =`border-radiud: ${topLeft.value}px ${topRight.value}px ${bottomLeft.value}px ${bottomRight.value}px`;
}
function topRightRadius() {
    block.style.borderTopRightRadius = topRight.value + 'px';
    out.innerHTML =`border-radiud: ${topLeft.value}px ${topRight.value}px ${bottomLeft.value}px ${bottomRight.value}px`;
}
function bottomLeftRadius() {
    block.style.borderBottomLeftRadius = bottomLeft.value + 'px';
    out.innerHTML =`border-radiud: ${topLeft.value}px ${topRight.value}px ${bottomLeft.value}px ${bottomRight.value}px`;
}
function bottomRightRadius() {
    block.style.borderBottomRightRadius = bottomRight.value + 'px';
    out.innerHTML =`border-radiud: ${topLeft.value}px ${topRight.value}px ${bottomLeft.value}px ${bottomRight.value}px`;
}




