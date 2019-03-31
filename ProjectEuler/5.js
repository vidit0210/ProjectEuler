//Even Distribution
let s ="07:05:45PM"
let q=s.split(":")
console.log()
function conversion(str){
    if(str.includes("PM")){
    let split = str.split(":");
    let added=parseInt(split[0])+12
    let am =split.slice(split.length-1)
   
    am=am.join('').replace(/\D/g,'')
    split.splice(0,1,added.toString())
    return [...split[0],...[':'],...split[1],...[':'],...am].join('')
    }
    
}
console.log(conversion("07:05:45PM"))