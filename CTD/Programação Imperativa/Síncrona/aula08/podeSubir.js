var yesOrNot = false;
var acomp = false;
var altura = "";

function podeSubir(height, accompanied) {
    if (height <= 2 && height > 1.40) {
        yesOrNot = true;
        altura = height;
    } else if (height <= 1.4 && height >= 1.2 && accompanied) {
        yesOrNot = true;
        acomp = true;
        altura = height;
    } else {
        yesOrNot = false;
    }
    return
}

podeSubir(1.35, true);

if (yesOrNot === true && altura > 1.4) {
    console.log("[OK] Can go Up!!!")
} else if (altura <= 1.4 && altura >= 1.2 && acomp === true) {
    console.log("[ATTENTION] Can only go Up accompanied.")
} else {
    console.log("[DENIED] Can't go Up.")
}


console.log(yesOrNot);
console.log(acomp);
console.log(altura)