// def compute():
// 	ans = 0
// 	x = 1  # Represents the current Fibonacci number being processed
// 	y = 2  # Represents the next Fibonacci number in the sequence
// 	while x <= 4000000:
// 		if x % 2 == 0:
// 			ans += x
// 		x, y = y, x + y
//     return str(ans)
    
// function even_fib(n){
//     let a=0;b=1;
//     let sum=0;
//     for(let i=0;i<=n;i++){
//         let result = a+b;
//         if(result%2==0){
//             sum+=result;
//             console.log(sum)
//         }
//         a=b;
//         b=result;
        
//     }
//     return sum
    
// }

function even_fib(n){
    let  a; 
    let  b = 0;
    let  c = 1;
    let  sum = 0;

    for (let  i = 0; i < n; i++) { // Finds fibonacci sequence
        a = b;
        b = c;
        c = a + b;

        if ( c % 2 == 0 && c<=n) { // Check if it's even
            sum += c;
        }
    }
    return sum
}
console.log(even_fib(100))