window.onload = function() {
    let x = "rutina";
    let y = "dehidratacija";

    console.log(ArDaugiauNei10Raidziu(x));
    console.log(ArDaugiauNei10Raidziu(y));
    }
    function ArDaugiauNei10Raidziu(zodis) {
        if (zodis.length > 10) {
            return true;
        }
        else {
            return false;
        }
    }
