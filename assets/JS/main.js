function modPalindrom(str){
    let cleanStr = str.toLowerCase().replace();

    let reversedStr = cleanStr.split('').reverse('').join('');

    return cleanStr === reversedStr;
}

let text = "ala"

console.log(modPalindrom(text));
