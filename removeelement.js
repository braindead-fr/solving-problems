// remove a specific element from an array
{
    let arr = [2, 5, 9, 6]
    let newarr = []

    function removing(array, remove) {
        for (let n = 0; n < array.length; n++) {
            if (array[n] !== remove) {
                newarr.push(array[n])
            }
        }
        console.log(newarr);
    }

    // removing(arr,9)
}
// using foreach
{
    let arr = [2, 5, 9, 6]
    let newarr = []

    function removing(array, remove) {
        array.forEach((element)=>{
            if(element !== remove){
                newarr.push(element)
            }
        })
        console.log(newarr);
    }
    // removing(arr,2)
}
// using map
{
    let arr = [2, 5, 9, 6]

    function removing(array, remove) {
        let anotherarray = array.map((element)=>{
            if(element !== remove){
                return element
            }
        }).filter((element)=>element !== undefined)
        return anotherarray
    }
    console.log(removing(arr,2))
}
