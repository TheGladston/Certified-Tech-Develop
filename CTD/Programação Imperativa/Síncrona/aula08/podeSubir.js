
function podeSubir(height, accompanied) {
    let podeSubir = false;
    let accomp = false;
    
    if (height <= 2 && height > 1.40) {
        podeSubir = true;
        console.log("[OK] Can go Up!!!")
    } else if ((height <= 1.40 && height >= 1.20) && accompanied) {
        podeSubir = true;
        accomp = true;
        console.log("[ATTENTION] Can only go Up accompanied.")
    } else {
        podeSubir = false;
        console.log("[DENIED] Can't go Up.")
    }
    return podeSubir
}

podeSubir()
