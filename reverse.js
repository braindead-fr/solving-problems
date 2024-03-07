//reversing a string
{
    function reverse(str) {
        let revstr = str.split(``).reverse().join(``)
        console.log(revstr);
    }
    reverse(`hello bro`)
}
//without using the split.reverse.join
{
    function reversed(string) {
        let result=[]
        let reversedstr
        for(let i = string.length-1; i>=0;i--){
            result.push(string[i])
            reversedstr = result.join("")
            
        }
        console.log(reversedstr);
    }
    reversed(`hello`)
}
