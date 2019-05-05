function FirstFactorial(num) {

    var result = 1;

    for (var i = 2; i <= num; i++) {
        result = result * i;
    }

    return result;
}

// keep this function call here
FirstFactorial(readline());
