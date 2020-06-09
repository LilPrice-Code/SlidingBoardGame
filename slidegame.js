console.log("Script check 1");
var canvas = document.getElementById("gameboard");
var ctx = canvas.getContext("2d");
ctx.fillRect(0, 0, 200, 200);
x1 = 0;
y1 = 0;
gap1 = 200;
console.log(gap1)
drawboard();
function drawboard() {
    while (x1 <= 600) {
        ctx.moveTo(x1, 0);
        ctx.lineTo(x1, 600);
        ctx.stroke();
        x1 = x1 + gap1;
    }
    while (y1 <= 600) {
        ctx.moveTo(0, y1);
        ctx.lineTo(600, y1);
        ctx.stroke();
        // ctx.strokeStyle = "red";
        y1 = y1 + gap1;
    }
}