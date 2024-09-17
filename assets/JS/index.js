function countVowel(str){
    let vowel = "aeiouAEİOU";

    let count = 0;

    for(let i = 0; i < str.length; i++){
        if(vowel.includes(str[i])){
            count++;
        }
    }
    return count;
}

let string = "Mələk";
console.log(countVowel(string));
