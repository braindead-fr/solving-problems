// making a custom function for repeated a string multiple times

String.prototype.repeatify = String.prototype.repeatify || function(times){
    let str = ``

    for (let i = 0; i < times; i++) {
        str += this        
    }

    console.log(str)
}

let string = `okay `

string.repeatify(5)
