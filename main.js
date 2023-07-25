Canvas = document.getElementById("Canvas");
caneta = Canvas.getContext("2d");
var largura = 2;
color = "Red";
caneta.beginPath();
caneta.strokeStyle = color;
caneta.lineWidth = 2;
caneta.arc(300, 400, 60, 3, 6 * Math.PI);
caneta.stroke();
var evento_do_mouse = "";
var ultima_posiçao_do_x, ultima_posiçao_do_y;
var tamanho_tela = screen.width;
var nova_largura = screen.width - 70;
var nova_altura = screen.height - 300;
if (tamanho_tela < 992) {
    Canvas.width = nova_largura;
    Canvas.height = nova_altura;
    document.body.style.overflow = "hidden";
}
Canvas.addEventListener("mousedown", clicou);
function clicou(evento) {
    color = document.getElementById("cor").value;
    largura = document.getElementById("largura").value;
    evento_do_mouse = "clicou";
}
Canvas.addEventListener("mouseup", soltar);
function soltar(evento) {
    evento_do_mouse = "soltar";
}
Canvas.addEventListener("mouseleave", sair);
function sair(evento) {
    evento_do_mouse = "sair";
}
Canvas.addEventListener("mousemove", mover);
function mover(evento) {
    posiçao_do_x = evento.clientX - Canvas.offsetLeft;
    posiçao_do_y = evento.clientY - Canvas.offsetTop;
    if (evento_do_mouse == "clicou") {
        caneta.beginPath();
        caneta.strokeStyle = color;
        caneta.lineWidth = largura;
        caneta.moveTo(ultima_posiçao_do_x, ultima_posiçao_do_y);
        caneta.lineTo(posiçao_do_x, posiçao_do_y);
        caneta.stroke();
    }
    ultima_posiçao_do_x = posiçao_do_x;
    ultima_posiçao_do_y = posiçao_do_y;
}
Canvas.addEventListener("touchstart", iniciou_toque);
function iniciou_toque(evento) {
    color = document.getElementById("cor").value;
    largura = document.getElementById("largura").value;
    ultima_posiçao_do_x = evento.touches[0].clientX - Canvas.offsetLeft;
    ultima_posiçao_do_y = evento.touches[0].clientY - Canvas.offsetTop;
}
Canvas.addEventListener("touchmove", moveu_toque);
function moveu_toque(evento) {
    posiçao_do_x = evento.touches[0].clientX - Canvas.offsetLeft;
    posiçao_do_y = evento.touches[0].clientY - Canvas.offsetTop;
    caneta.beginPath();
    caneta.strokeStyle = color;
    caneta.lineWidth = largura;
    caneta.moveTo(ultima_posiçao_do_x, ultima_posiçao_do_y);
    caneta.lineTo(posiçao_do_x, posiçao_do_y);
    caneta.stroke();
    ultima_posiçao_do_x = posiçao_do_x;
    ultima_posiçao_do_y = posiçao_do_y;
}