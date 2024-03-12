// converting integer to roman
{
    var intToRoman = function (num) {
        const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
        const rom = [
            'M',
            'CM',
            'D',
            'CD',
            'C',
            'XC',
            'L',
            'XL',
            'X',
            'IX',
            'V',
            'IV',
            'I',
        ]
        let result = ''
    
        for (let i = 0; num; i++) {
            while (num >= nums[i]) {
                result += rom[i]
                num -= nums[i]
            }
        }
        return result
    };
    console.log(intToRoman(354))
}
