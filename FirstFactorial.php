<?php

function FirstFactorial($num) {

    $result = 1;

    for($i = 2; $i <= $num; $i++) {
        $result = $result * $i;
    }

    return $result;
}

// keep this function call here
echo FirstFactorial(fgets(fopen('php://stdin', 'r')));
