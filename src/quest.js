function isValidSubsequence(array, sequence) {
    var x;
    var position = [];
    if (sequence.length > array.length) {
        return false;
    } //test if sequence is larger
    // if (array===sequence){return true;} //test if sequence is identical
    for (x = 0; x < sequence.length; x++) {
        var num = sequence[x];
        var i = void 0;
        var match = false;
        console.log("sequence num is = " + num);
        for (i = 0; i < array.length; i++) {
            var arraynum = array[i];
            console.log(i + "  " + arraynum + " " + num);
            var latestmatch = position[position.length - 1];
            console.log("latest" + latestmatch);
            if (arraynum === num && (i > latestmatch || latestmatch === undefined)) {
                position.push(i);
                console.log("yes");
                match = true;
                break;
            }
            else if (arraynum === num && i === latestmatch) {
            }
        }
        if (match) {
            console.log("passed");
            continue;
        }
        else {
            console.log("failed");
            return false;
        }
    }
    return true;
}
if (isValidSubsequence([1, 1, 6, 1], [1, 1, 1, 6])) {
    console.log(true);
}
else {
    console.log(false);
}
// if (isValidSubsequence([45, 5], [4, 1, 2, 7])) {
//   console.log(true);
// } else {
//   console.log(false);
// }
