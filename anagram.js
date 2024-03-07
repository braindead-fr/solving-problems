// checking if the strings entered are anagram or not
{
    function anagram(string1,string2) {
        let split1 = string1.replace(/ /g,"").toLowerCase().split("")
        let split2 = string2.replace(/ /g,"").toLowerCase().split("")

        let sorted1 = split1.sort().join("")
        let sorted2 = split2.sort().join("")

        if (sorted1 == sorted2) {
            console.log(`the entered strings are anagrams`);
        }else{
            console.log(`the entered strings are not anagrams`);
        }
    }

    anagram(`Listen`,`Silent`)//is anagram
    anagram(`listen`,`no`)//not anagram
}
