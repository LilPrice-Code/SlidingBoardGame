console.log("Script check 1");
var canvas = document.getElementById("gameboard");
var ctx = canvas.getContext("2d");
gap1 = 200;
x1 = 0;
y1 = 0;
play1 = 0;
play2 = 0;

spot1x = 0;
spot1y = 0;

spot2x = 200;
spot2y = 0;

spot3x = 400;
spot3y = 0;

spot4x = 0;
spot4y = 200;

spot5x = 200;
spot5y = 200;

spot6x = 400;
spot6y = 200;

spot7x = 0;
spot7y = 400;

spot8x = 200;
spot8y = 400;

spot9x = 400;
spot9y = 400;

function newgame() {
    Spots = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    taken = []
    console.log("New Game");
    console.log(taken);
    while (Spots !== taken) {
        random = Math.floor(Math.random() * 10);
        full = taken.length
        check = 0
        if (full !== 0) {
            for (x = 0; x < full; x++) {
                if (taken[x] === random) {
                    check = check + 1
                }
            }
        }
        if (check === 0) {
            if (random === 1) {
                taken.push(random)
                console.log("Spot 1")
            } else if (random === 2) {
                taken.push(random)
                console.log("Spot 2")
            } else if (random === 3) {
                taken.push(random)
                console.log("Spot 3")
            } else if (random === 4) {
                taken.push(random)
                console.log("Spot 4")
            } else if (random === 5) {
                taken.push(random)
                console.log("Spot 5")
            } else if (random === 6) {
                taken.push(random)
                console.log("Spot 6")
            } else if (random === 7) {
                taken.push(random)
                console.log("Spot 7")
            } else if (random === 8) {
                taken.push(random)
                console.log("Spot 8")
            } else if (random === 9) {
                taken.push(random)
                console.log("Spot 9")
            }

        }
        else {
            console.log("Spot 0")
        }
        taken.sort();
        breakcheck = 0;
        for (x = 0; x < 9; x++) {
            next = x + 1
            if (taken[x] === next) {
                breakcheck = breakcheck + 1
            }
        }
        if(breakcheck === 9){
            console.log(taken)
            console.log(Spots)
            break;
        }
    }
}

ctx.fillRect(play1, play2, 200, 200);
console.log(gap1)
drawboard();
drawpic();
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
        ctx.strokeStyle = "red";
        y1 = y1 + gap1;
    }
}
function drawpic() {
    var pic1 = new Image();
    pic1.src = "num1.png";
    ctx.drawImage(pic1,200, 0, 200, 200);

    var pic2 = new Image();
    pic2.src = "num2.png";
    ctx.drawImage(pic2,400, 0, 200, 200);

    var pic3 = new Image();
    pic3.src = "num3.png";
    ctx.drawImage(pic3,0, 200, 200, 200);

    var pic4 = new Image();
    pic4.src = "num4.png";
    ctx.drawImage(pic4,200, 200, 200, 200);

    var pic5 = new Image();
    pic5.src = "num5.png";
    ctx.drawImage(pic5,400, 200, 200, 200);

    var pic6 = new Image();
    pic6.src = "num6.png";
    ctx.drawImage(pic6,0, 400, 200, 200);

    var pic7 = new Image();
    pic7.src = "num7.png";
    ctx.drawImage(pic7,200, 400, 200, 200);

    var pic8 = new Image();
    pic8.src = "num8.png";
    ctx.drawImage(pic8,400, 400, 200, 200);

}


function moving(move) {
    ctx.clearRect(play1, play2, 200, 200);
    if(move === 'up'){
        console.log("up")
        play2 = play2 - 200
    }
    else if(move === 'down'){
        console.log("down")
        play2 = play2 + 200
    }
    else if(move === 'left'){
        console.log("left")
        play1 = play1 - 200
    }
    else if(move === 'right'){
        console.log("right")
        play1 = play1 + 200
    }
    if (play1 > 400){
        play1 = 400
    }
    else if (play1 < 0){
        play1 = 0
    }
    if (play2 > 400){
        play2 = 400
    }
    else if (play2 < 0){
        play2 = 0
    }
    ctx.fillRect(play1, play2, 200, 200);
    console.log(play1,play2)
    drawboard();
    drawpic();

}

function NewCheck() {
    Spots = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    taken = []
    Pics = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    Picstaken = []
    console.log("New Test");
    console.log(taken);
    while (Spots !== taken) {
        random = Math.floor(Math.random() * 10);
        full = taken.length
        check = 0
        if (full !== 0) {
            for (x = 0; x < full; x++) {
                if (taken[x] === random) {
                    check = check + 1
                }
            }
        }
        if (check === 0) {
            if (random === 1) {
                taken.push(random)
                console.log("Spot 1")
                random = Math.floor(Math.random() * 10);
                full = Picstaken.length
                check = 0
                if (full !== 0) {
                    for (x = 0; x < full; x++) {
                        if (Picstaken[x] === random) {
                            check = check + 1
                        }
                    }
                }
                if (check === 0) {
                    if (random === 1) {
                        Picstaken.push(random)
                        console.log("Pic 1")
                    } else if (random === 2) {
                        Picstaken.push(random)
                        console.log("Pic 2")
                    } else if (random === 3) {
                        Picstaken.push(random)
                        console.log("Pic 3")
                    } else if (random === 4) {
                        Picstaken.push(random)
                        console.log("Pic 4")
                    } else if (random === 5) {
                        Picstaken.push(random)
                        console.log("Pic 5")
                    } else if (random === 6) {
                        Picstaken.push(random)
                        console.log("Pic 6")
                    } else if (random === 7) {
                        Picstaken.push(random)
                        console.log("Pic 7")
                    } else if (random === 8) {
                        Picstaken.push(random)
                        console.log("Pic 8")
                    } else if (random === 9) {
                        Picstaken.push(random)
                        console.log("Pic 9")
                    }

                }
                else {
                    console.log("Pic 0")
                }
                Picstaken.sort();
                console.log(Picstaken)
            }
            else if (random === 2) {
                taken.push(random)
                console.log("Spot 2")
                random = Math.floor(Math.random() * 10);
                full = Picstaken.length
                check = 0
                if (full !== 0) {
                    for (x = 0; x < full; x++) {
                        if (Picstaken[x] === random) {
                            check = check + 1
                        }
                    }
                }
                if (check === 0) {
                    if (random === 1) {
                        Picstaken.push(random)
                        console.log("Pic 1")
                    } else if (random === 2) {
                        Picstaken.push(random)
                        console.log("Pic 2")
                    } else if (random === 3) {
                        Picstaken.push(random)
                        console.log("Pic 3")
                    } else if (random === 4) {
                        Picstaken.push(random)
                        console.log("Pic 4")
                    } else if (random === 5) {
                        Picstaken.push(random)
                        console.log("Pic 5")
                    } else if (random === 6) {
                        Picstaken.push(random)
                        console.log("Pic 6")
                    } else if (random === 7) {
                        Picstaken.push(random)
                        console.log("Pic 7")
                    } else if (random === 8) {
                        Picstaken.push(random)
                        console.log("Pic 8")
                    } else if (random === 9) {
                        Picstaken.push(random)
                        console.log("Pic 9")
                    }

                }
                else {
                    console.log("Pic 0")
                }
                Picstaken.sort();
                console.log(Picstaken)
            } else if (random === 3) {
                taken.push(random)
                console.log("Spot 3")
            } else if (random === 4) {
                taken.push(random)
                console.log("Spot 4")
            } else if (random === 5) {
                taken.push(random)
                console.log("Spot 5")
            } else if (random === 6) {
                taken.push(random)
                console.log("Spot 6")
            } else if (random === 7) {
                taken.push(random)
                console.log("Spot 7")
            } else if (random === 8) {
                taken.push(random)
                console.log("Spot 8")
            } else if (random === 9) {
                taken.push(random)
                console.log("Spot 9")
            }

        }
        else {
            console.log("Spot 0")
        }
        taken.sort();
        breakcheck = 0;
        for (x = 0; x < 9; x++) {
            next = x + 1
            if (taken[x] === next) {
                breakcheck = breakcheck + 1
            }
        }
        if(breakcheck === 9){
            console.log(taken)
            console.log(Spots)
            console.log(Picstaken)
            console.log(Pics)
            break;
        }
    }
}