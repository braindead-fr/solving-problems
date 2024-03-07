// Write a function that finds the longest word in a sentence.
{
    function longestword (string) {
        let longest = 0
        let divided = string.split(" ")
        divided.forEach((val)=>{
            if(val.length > longest){
                longest = val.length
            }
        })
        console.log(longest);
    }
    longestword(`hello bro how are you doin brother`)
}
