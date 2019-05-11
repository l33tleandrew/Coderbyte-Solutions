
function LetterChanges(str) {

    var alphabet = {
        'a':'b',
        'b':'c',
        'c':'d',
        'd':'e',
        'e':'f',
        'f':'g',
        'g':'h',
        'h':'i',
        'i':'j',
        'j':'k',
        'k':'l',
        'l':'m',
        'm':'n',
        'n':'o',
        'o':'p',
        'p':'q',
        'q':'r',
        'r':'s',
        's':'t',
        't':'u',
        'u':'v',
        'v':'w',
        'w':'x',
        'x':'y',
        'y':'z',
        'z':'a'
    };

    function replace(char) {
        return alphabet[char];
    }

    function capitalize(char) {
        return char.toUpperCase();
    }

    str = str.replace(/[a-z]/g, replace);
    str = str.replace(/[aeiou]/g, capitalize);

    return str;
}

// keep this function call here
LetterChanges(readline());