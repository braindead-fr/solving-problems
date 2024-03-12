//sum of all elements of an array
{
    let a = [1,2,3,4,5]

    let sum = a.reduce((curval, value)=>{
        return curval+value
    })
    console.log(sum);
}
// using loop
{
    let a = [1,2,3,4,5]

    function sum(arr) {
        let result = 0
        for(let i = 0;i<arr.length;i++){
            result+= arr[i]
        }
        console.log(result);  
    }
    sum(a)
}
