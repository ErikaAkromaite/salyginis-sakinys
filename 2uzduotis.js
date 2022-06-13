window.onload = function() {
    let x = 256;
    let y = -389;

    console.log(arLyginis(x));
    console.log(arLyginis(y));

}

    function arLyginis(skaicius) {
        if (skaicius % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
