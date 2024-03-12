// Word Search
let paragraph = document.getElementById('para').innerText
let word = document.getElementById('wordInput')
let button = document.getElementById('inputbutton')

button.addEventListener('click',function(){

    let input = word.value

    let checking = paragraph.split(/\s+/)

    if (checking.includes(input)) {
        console.log(`${input} exists in the paragraph`);
    }
    else{
        console.log(`${input} does not exist`);
    }
});