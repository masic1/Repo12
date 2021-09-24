// Only change code below this line
function rangeOfNumbers(startN, endN) {
    if(startN > endN) {
        return "The starting number will always be less than or equal to the ending number";
    } else {
        const arr = [];
        for(var i = startN; i <= endN; i++) {
            arr.push(i);
        }
        return arr;
    }
}
// Only change code above this line

console.log(rangeOfNumbers(6,5)); // Change this line
module.exports = rangeOfNumbers;