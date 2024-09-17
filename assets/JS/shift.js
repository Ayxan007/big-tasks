// function shiftOne(str) {
//     return str.split(' ').map(text => {
//         return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
//     }).join(' ');
// }

// let words = "salam necesen?";
// console.log(shiftOne(words));


function shiftOne(str) {
    return str.split(' ').map(text => {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }).join('');
}

let words = "salam necesen?";
console.log(shiftOne(words));