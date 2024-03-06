// check if the entered string is a palindrome or not
{
    function palindrome(str) {
        let newstr = str.split('').reverse().join('')
        let compare = newstr === str
        if(compare === true){
            console.log(`the entered word is a palindrome`);
        }
        else{
            console.log(`the entered word is not a palindrome`);
        }
    }

    // palindrome(`level`)
}
// doing the same without the split.reverse.join
{
    let word=[]
    function palindrome(str) {
        
        for(let i = str.length-1; i >= 0; i--){
            word.push(str[i]);
        }

        let rev = word.join('')

        if (str === rev) {
            console.log(`the entered word is a palindrome`);
        }
        else{
            console.log(`the entered word is not a palindrome`);
        }
    }
    palindrome(`word`);
    
}
