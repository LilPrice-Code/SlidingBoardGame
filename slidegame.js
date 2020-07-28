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

var pic1 = new Image();
pic1.src = "num1.png";

var pic2 = new Image();
pic2.src = "num2.png";

var pic3 = new Image();
pic3.src = "num3.png";

var pic4 = new Image();
pic4.src = "num4.png";

var pic5 = new Image();
pic5.src = "num5.png";

var pic6 = new Image();
pic6.src = "num6.png";

var pic7 = new Image();
pic7.src = "num7.png";

var pic8 = new Image();
pic8.src = "num8.png";



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

// ctx.fillRect(play1, play2, 200, 200);
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
    ctx.drawImage(pic1,200, 0, 200, 200);
    ctx.drawImage(pic2,400, 0, 200, 200);
    ctx.drawImage(pic3,0, 200, 200, 200);
    ctx.drawImage(pic4,200, 200, 200, 200);
    ctx.drawImage(pic5,400, 200, 200, 200);
    ctx.drawImage(pic6,0, 400, 200, 200);
    ctx.drawImage(pic7,200, 400, 200, 200);
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
    pot = true
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
                pot = true
                while (pot === true) {
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
                            pot = false
                        } else if (random === 2) {
                            Picstaken.push(random)
                            console.log("Pic 2")
                            pot = false
                        } else if (random === 3) {
                            Picstaken.push(random)
                            console.log("Pic 3")
                            pot = false
                        } else if (random === 4) {
                            Picstaken.push(random)
                            console.log("Pic 4")
                            pot = false
                        } else if (random === 5) {
                            Picstaken.push(random)
                            console.log("Pic 5")
                            pot = false
                        } else if (random === 6) {
                            Picstaken.push(random)
                            console.log("Pic 6")
                            pot = false
                        } else if (random === 7) {
                            Picstaken.push(random)
                            console.log("Pic 7")
                            pot = false
                        } else if (random === 8) {
                            Picstaken.push(random)
                            console.log("Pic 8")
                            pot = false
                        } else if (random === 9) {
                            Picstaken.push(random)
                            console.log("Pic 9")
                            pot = false
                        } else {
                            console.log("Pic 0")
                        }
                    }
                    Picstaken.sort();
                    console.log(Picstaken)
                }
            }
            else if (random === 2) {
                taken.push(random)
                console.log("Spot 2")
                pot = true
                while (pot === true) {
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
                            ctx.drawImage(pic1,200, 0, 200, 200);
                            pot = false
                        } else if (random === 2) {
                            Picstaken.push(random)
                            console.log("Pic 2")
                            ctx.drawImage(pic2,200, 0, 200, 200);
                            pot = false
                        } else if (random === 3) {
                            Picstaken.push(random)
                            console.log("Pic 3")
                            ctx.drawImage(pic3,200, 0, 200, 200);
                            pot = false
                        } else if (random === 4) {
                            Picstaken.push(random)
                            console.log("Pic 4")
                            ctx.drawImage(pic4,200, 0, 200, 200);
                            pot = false
                        } else if (random === 5) {
                            Picstaken.push(random)
                            console.log("Pic 5")
                            ctx.drawImage(pic5,200, 0, 200, 200);
                            pot = false
                        } else if (random === 6) {
                            Picstaken.push(random)
                            console.log("Pic 6")
                            ctx.drawImage(pic6,200, 0, 200, 200);
                            pot = false
                        } else if (random === 7) {
                            Picstaken.push(random)
                            console.log("Pic 7")
                            ctx.drawImage(pic7,200, 0, 200, 200);
                            pot = false
                        } else if (random === 8) {
                            Picstaken.push(random)
                            console.log("Pic 8")
                            ctx.drawImage(pic8,200, 0, 200, 200);
                            pot = false
                        } else if (random === 9) {
                            Picstaken.push(random)
                            console.log("Pic 9")
                            pot = false
                        } else {
                            console.log("Pic 0")
                        }
                    }
                    Picstaken.sort();
                    console.log(Picstaken)
                }
            }
            else if (random === 3) {
                taken.push(random)
                console.log("Spot 3")
                pot = true
                while (pot === true) {
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
                            ctx.drawImage(pic1,400, 0, 200, 200);
                            pot = false
                        } else if (random === 2) {
                            Picstaken.push(random)
                            console.log("Pic 2")
                            ctx.drawImage(pic2,400, 0, 200, 200);
                            pot = false
                        } else if (random === 3) {
                            Picstaken.push(random)
                            console.log("Pic 3")
                            ctx.drawImage(pic3,400, 0, 200, 200);
                            pot = false
                        } else if (random === 4) {
                            Picstaken.push(random)
                            console.log("Pic 4")
                            ctx.drawImage(pic4,400, 0, 200, 200);
                            pot = false
                        } else if (random === 5) {
                            Picstaken.push(random)
                            console.log("Pic 5")
                            ctx.drawImage(pic5,400, 0, 200, 200);
                            pot = false
                        } else if (random === 6) {
                            Picstaken.push(random)
                            console.log("Pic 6")
                            ctx.drawImage(pic6,400, 0, 200, 200);
                            pot = false
                        } else if (random === 7) {
                            Picstaken.push(random)
                            console.log("Pic 7")
                            ctx.drawImage(pic7,400, 0, 200, 200);
                            pot = false
                        } else if (random === 8) {
                            Picstaken.push(random)
                            console.log("Pic 8")
                            ctx.drawImage(pic8,400, 0, 200, 200);
                            pot = false
                        } else if (random === 9) {
                            Picstaken.push(random)
                            console.log("Pic 9")
                            pot = false
                        }
                        else {
                            console.log("Pic 0")
                        }
                    }
                    Picstaken.sort();
                    console.log(Picstaken)
                }
            }
            else if (random === 4) {
                taken.push(random)
                console.log("Spot 4")
                pot = true
                while (pot === true) {
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
                            ctx.drawImage(pic1,0, 200, 200, 200);
                            pot = false
                        } else if (random === 2) {
                            Picstaken.push(random)
                            console.log("Pic 2")
                            ctx.drawImage(pic2,0, 200, 200, 200);
                            pot = false
                        } else if (random === 3) {
                            Picstaken.push(random)
                            console.log("Pic 3")
                            ctx.drawImage(pic3,0, 200, 200, 200);
                            pot = false
                        } else if (random === 4) {
                            Picstaken.push(random)
                            console.log("Pic 4")
                            ctx.drawImage(pic4,0, 200, 200, 200);
                            pot = false
                        } else if (random === 5) {
                            Picstaken.push(random)
                            console.log("Pic 5")
                            ctx.drawImage(pic5,0, 200, 200, 200);
                            pot = false
                        } else if (random === 6) {
                            Picstaken.push(random)
                            console.log("Pic 6")
                            ctx.drawImage(pic6,0, 200, 200, 200);
                            pot = false
                        } else if (random === 7) {
                            Picstaken.push(random)
                            console.log("Pic 7")
                            ctx.drawImage(pic7,0, 200, 200, 200);
                            pot = false
                        } else if (random === 8) {
                            Picstaken.push(random)
                            console.log("Pic 8")
                            ctx.drawImage(pic8,0, 200, 200, 200);
                            pot = false
                        } else if (random === 9) {
                            Picstaken.push(random)
                            console.log("Pic 9")
                            pot = false
                        } else {
                            console.log("Pic 0")
                        }
                    }
                    Picstaken.sort();
                    console.log(Picstaken)
                }
            }
            else if (random === 5) {
                taken.push(random)
                console.log("Spot 5")
                pot = true
                while (pot === true) {
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
                            ctx.drawImage(pic1,200, 200, 200, 200);
                            pot = false
                        } else if (random === 2) {
                            Picstaken.push(random)
                            console.log("Pic 2")
                            ctx.drawImage(pic2,200, 200, 200, 200);
                            pot = false
                        } else if (random === 3) {
                            Picstaken.push(random)
                            console.log("Pic 3")
                            ctx.drawImage(pic3,200, 200, 200, 200);
                            pot = false
                        } else if (random === 4) {
                            Picstaken.push(random)
                            console.log("Pic 4")
                            ctx.drawImage(pic4,200, 200, 200, 200);
                            pot = false
                        } else if (random === 5) {
                            Picstaken.push(random)
                            console.log("Pic 5")
                            ctx.drawImage(pic5,200, 200, 200, 200);
                            pot = false
                        } else if (random === 6) {
                            Picstaken.push(random)
                            console.log("Pic 6")
                            ctx.drawImage(pic6,200, 200, 200, 200);
                            pot = false
                        } else if (random === 7) {
                            Picstaken.push(random)
                            console.log("Pic 7")
                            ctx.drawImage(pic7,200, 200, 200, 200);
                            pot = false
                        } else if (random === 8) {
                            Picstaken.push(random)
                            console.log("Pic 8")
                            ctx.drawImage(pic8,200, 200, 200, 200);
                            pot = false
                        } else if (random === 9) {
                            Picstaken.push(random)
                            console.log("Pic 9")
                            pot = false
                        } else {
                            console.log("Pic 0")
                        }
                    }
                    Picstaken.sort();
                    console.log(Picstaken)
                }
            }
            else if (random === 6) {
                taken.push(random)
                console.log("Spot 6")
                pot = true
                while (pot === true) {
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
                            ctx.drawImage(pic1,400, 200, 200, 200);
                            pot = false
                        } else if (random === 2) {
                            Picstaken.push(random)
                            console.log("Pic 2")
                            ctx.drawImage(pic2,400, 200, 200, 200);
                            pot = false
                        } else if (random === 3) {
                            Picstaken.push(random)
                            console.log("Pic 3")
                            ctx.drawImage(pic3,400, 200, 200, 200);
                            pot = false
                        } else if (random === 4) {
                            Picstaken.push(random)
                            console.log("Pic 4")
                            ctx.drawImage(pic4,400, 200, 200, 200);
                            pot = false
                        } else if (random === 5) {
                            Picstaken.push(random)
                            console.log("Pic 5")
                            ctx.drawImage(pic5,400, 200, 200, 200);
                            pot = false
                        } else if (random === 6) {
                            Picstaken.push(random)
                            console.log("Pic 6")
                            ctx.drawImage(pic6,400, 200, 200, 200);
                            pot = false
                        } else if (random === 7) {
                            Picstaken.push(random)
                            console.log("Pic 7")
                            ctx.drawImage(pic7,400, 200, 200, 200);
                            pot = false
                        } else if (random === 8) {
                            Picstaken.push(random)
                            console.log("Pic 8")
                            ctx.drawImage(pic8,400, 200, 200, 200);
                            pot = false
                        } else if (random === 9) {
                            Picstaken.push(random)
                            console.log("Pic 9")
                            pot = false
                        } else {
                            console.log("Pic 0")
                        }
                    }
                    Picstaken.sort();
                    console.log(Picstaken)
                }
            }
            else if (random === 7) {
                taken.push(random)
                console.log("Spot 7")
                pot = true
                while (pot === true) {
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
                            ctx.drawImage(pic1,0, 400, 200, 200);
                            pot = false
                        } else if (random === 2) {
                            Picstaken.push(random)
                            console.log("Pic 2")
                            ctx.drawImage(pic2,0, 400, 200, 200);
                            pot = false
                        } else if (random === 3) {
                            Picstaken.push(random)
                            console.log("Pic 3")
                            ctx.drawImage(pic3,0, 400, 200, 200);
                            pot = false
                        } else if (random === 4) {
                            Picstaken.push(random)
                            console.log("Pic 4")
                            ctx.drawImage(pic4,0, 400, 200, 200);
                            pot = false
                        } else if (random === 5) {
                            Picstaken.push(random)
                            console.log("Pic 5")
                            ctx.drawImage(pic5,0, 400, 200, 200);
                            pot = false
                        } else if (random === 6) {
                            Picstaken.push(random)
                            console.log("Pic 6")
                            ctx.drawImage(pic6,0, 400, 200, 200);
                            pot = false
                        } else if (random === 7) {
                            Picstaken.push(random)
                            console.log("Pic 7")
                            ctx.drawImage(pic7,0, 400, 200, 200);
                            pot = false
                        } else if (random === 8) {
                            Picstaken.push(random)
                            console.log("Pic 8")
                            ctx.drawImage(pic8,0, 400, 200, 200);
                            pot = false
                        } else if (random === 9) {
                            Picstaken.push(random)
                            console.log("Pic 9")
                            pot = false
                        } else {
                            console.log("Pic 0")
                        }
                    }
                    Picstaken.sort();
                    console.log(Picstaken)
                }
            }
            else if (random === 8) {
                taken.push(random)
                console.log("Spot 8")
                pot = true
                while (pot === true) {
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
                            ctx.drawImage(pic1,200, 400, 200, 200);
                            pot = false
                        } else if (random === 2) {
                            Picstaken.push(random)
                            console.log("Pic 2")
                            ctx.drawImage(pic2,200, 400, 200, 200);
                            pot = false
                        } else if (random === 3) {
                            Picstaken.push(random)
                            console.log("Pic 3")
                            ctx.drawImage(pic3,200, 400, 200, 200);
                            pot = false
                        } else if (random === 4) {
                            Picstaken.push(random)
                            console.log("Pic 4")
                            ctx.drawImage(pic4,200, 400, 200, 200);
                            pot = false
                        } else if (random === 5) {
                            Picstaken.push(random)
                            console.log("Pic 5")
                            ctx.drawImage(pic5,200, 400, 200, 200);
                            pot = false
                        } else if (random === 6) {
                            Picstaken.push(random)
                            console.log("Pic 6")
                            ctx.drawImage(pic6,200, 400, 200, 200);
                            pot = false
                        } else if (random === 7) {
                            Picstaken.push(random)
                            console.log("Pic 7")
                            ctx.drawImage(pic7,200, 400, 200, 200);
                            pot = false
                        } else if (random === 8) {
                            Picstaken.push(random)
                            console.log("Pic 8")
                            ctx.drawImage(pic8,200, 400, 200, 200);
                            pot = false
                        } else if (random === 9) {
                            Picstaken.push(random)
                            console.log("Pic 9")
                            pot = false
                        } else {
                            console.log("Pic 0")
                        }
                    }
                    Picstaken.sort();
                    console.log(Picstaken)
                }
            }
            else if (random === 9) {
                taken.push(random)
                console.log("Spot 9")
                pot = true
                while (pot === true) {
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
                            ctx.drawImage(pic1,400, 400, 200, 200);
                            pot = false
                        } else if (random === 2) {
                            Picstaken.push(random)
                            console.log("Pic 2")
                            ctx.drawImage(pic2,400, 400, 200, 200);
                            pot = false
                        } else if (random === 3) {
                            Picstaken.push(random)
                            console.log("Pic 3")
                            ctx.drawImage(pic3,400, 400, 200, 200);
                            pot = false
                        } else if (random === 4) {
                            Picstaken.push(random)
                            console.log("Pic 4")
                            ctx.drawImage(pic4,400, 400, 200, 200);
                            pot = false
                        } else if (random === 5) {
                            Picstaken.push(random)
                            console.log("Pic 5")
                            ctx.drawImage(pic5,400, 400, 200, 200);
                            pot = false
                        } else if (random === 6) {
                            Picstaken.push(random)
                            console.log("Pic 6")
                            ctx.drawImage(pic6,400, 400, 200, 200);
                            pot = false
                        } else if (random === 7) {
                            Picstaken.push(random)
                            console.log("Pic 7")
                            ctx.drawImage(pic7,400, 400, 200, 200);
                            pot = false
                        } else if (random === 8) {
                            Picstaken.push(random)
                            console.log("Pic 8")
                            ctx.drawImage(pic8,400, 400, 200, 200);
                            pot = false
                        } else if (random === 9) {
                            Picstaken.push(random)
                            console.log("Pic 9")
                            pot = false
                        } else {
                            console.log("Pic 0")
                        }
                    }
                    Picstaken.sort();
                    console.log(Picstaken)
                }
            }
            else {
                console.log("Spot 0")
            }
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