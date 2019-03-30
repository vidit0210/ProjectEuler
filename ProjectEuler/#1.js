function get_sum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++){
        if (1%15===0||i % 5 == 0 || i % 3 == 0) {
            Math.round(sum += i);
        }
    }
    return Math.round(sum);
}
//Time out on testCase 2 and 3 coz of Large Numers