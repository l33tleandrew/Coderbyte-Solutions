<?php

function LetterChanges($str) {

    $firstReplacement = [
        'a' => 'b',
        'b' => 'c',
        'c' => 'd',
        'd' => 'e',
        'e' => 'f',
        'f' => 'g',
        'g' => 'h',
        'h' => 'i',
        'i' => 'j',
        'j' => 'k',
        'k' => 'l',
        'l' => 'm',
        'm' => 'n',
        'n' => 'o',
        'o' => 'p',
        'p' => 'q',
        'q' => 'r',
        'r' => 's',
        's' => 't',
        't' => 'u',
        'u' => 'v',
        'v' => 'w',
        'w' => 'x',
        'x' => 'y',
        'y' => 'z',
        'z' => 'a',
    ];

    $secondReplacement = ['a' => 'A', 'e' => 'E', 'i' => 'I', 'o' => 'O', 'u' => 'U'];

    $str = strtr($str, $firstReplacement);
    $str = strtr($str, $secondReplacement);

    return $str;
}

// keep this function call here
echo LetterChanges(fgets(fopen('php://stdin', 'r')));
