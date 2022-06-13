window.onload = function() {
    let x = 90;
    let y = 100;
    let z = -100;
    

    console.log(arKartotinis(x));
    console.log(arKartotinis(y));
    console.log(arKartotinis(z));
}

function arKartotinis(skaicius) {
    if ((skaicius % 3 === 0) && (skaicius % 5 === 0) && (skaicius % 10=== 0)) {
        return true;
    }
    else {
        return false;
    }
}