// program that accepts a string as input and swaps the case of each character
{
    let untouched = `The Quick Brown Fox`
    let touched = ``
    function touching(str) {
        for (let i = 0; i < str.length; i++) {
            let char = str[i]

            if (char === char.toUpperCase()) {
                touched += char.toLowerCase()
            }
            else{
                touched += char.toUpperCase()
            }
        }
        console.log(touched);
    }
    touching(untouched)
}
