// function to filter false, null, 0 and blank values from an array
{
    let unfiltered = [58, '', 'abcd', true, null, false, 0]
    let filtered =[]
    function filtering(array) {
        array.filter((value)=>{
            if (typeof value === 'number' && value !== 0) {
                filtered.push(value)
            }
            else if(typeof value === 'string' && value != ' ' && value != ''){
                filtered.push(value)
            }
        })
        console.log(filtered);
    }
    filtering(unfiltered)
}
