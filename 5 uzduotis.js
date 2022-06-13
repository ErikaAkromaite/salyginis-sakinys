window.onload = function() {
    let x = "architektūra";
    let y = "švitrinis";
    let z = "zoologija";
    let a = "reformacija";
    let b = "pusiausvyra"
    let c = "kardiograma"
    
    console.log(palygintiDuZodzius(x, y));
    console.log(palygintiDuZodzius(z, a));
    console.log(palygintiDuZodzius(b, c));
    }


    function palygintiDuZodzius(zodis1,zodis2) {
        if (zodis1.length === zodis2.length) {
            return 0;
        }
        else if (zodis1.length > zodis2.length) {
            return 1;
        }
        else {
            return -1;
        }
    }