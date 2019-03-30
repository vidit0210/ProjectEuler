// Getting Factors of a number

function getFactors(number){
    let factor_list =[]
    for(let i=1;i<=number;i++){
        if(number%i==0){
            factor_list.push(i)
        }
    }
    return factor_list;

}
function isPrimenumber(number){
    let result = getFactors(number)
    if (result.length==2) return true;
    return false;
}
function getLargestPrimeFactor(number){
    allfactors = getFactors(number)
    let largestFactor=0;
    allfactors.forEach(factor =>{
        if(isPrimenumber(factor) && factor>largestFactor){
            largestFactor=factor
        }
    })
    return largestFactor;
}
console.log(getLargestPrimeFactor(13195))