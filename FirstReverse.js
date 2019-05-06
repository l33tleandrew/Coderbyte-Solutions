function FirstReverse(str) {

    var result = '';

    for(var i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }

    return result;
}

function FirstReverse2(str) {

    return str.split('').reverse().join('');
}

// keep this function call here
FirstReverse(readline());
