function largestPalindromeOfTwoFactors(len1, len2) {
    // calculate number range for n digits:  10^(n-1)..10^n-1 (e.g. 10-99)

    // 'a' (outer loop) will be the largest multiplicand
    var maxA = Math.pow(10, Math.max(len1, len2)) - 1 |0;
    var minA = (maxA + 1) / 10 |0;

    // 'b' (inner loop) will be the smallest multiplicand
    var maxB = Math.pow(10, Math.min(len1, len2)) - 1 |0;
    var minB = (maxB + 1) / 10 |0;

    var maxMul = 0, maxMulA, maxMulB;

    for (var a = maxA; a >= minA; a--) {
        // in case len1==len2 only process 'b' smaller than current 'a'
        // as the larger numbers were already checked when used for 'a'
        for (var b = Math.min(a, maxB); b >= minB; b--) {
            var mul = a * b;
            if (mul <= maxMul) {
                // no need to continue, we'll never exceed maxMul with a smaller 'b'
                break;
            }
            var mulStr = mul.toString();
            for (var i = mulStr.length-1, j=0; i>=j && mulStr[i] == mulStr[j]; i--, j++) {}
            if (i <= j) {
                maxMul = mul, maxMulA = a, maxMulB = b;
                // 'a' smaller than current 'b' won't produce a bigger product
                minA = Math.max(minA, b);
            }
        }
    }
    // retain the order of input parameters' magnitudes: 2,3 -> 99, 951
    return [maxMul, len1 < len2 ? maxMulB : maxMulA, len1 < len2 ? maxMulA : maxMulB];
}
//Not ByMyself