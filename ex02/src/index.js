// Only change code below this line
function myCounter(n) {
    if(n < 1) {
        return [];
    } else {
        const countArr = myCounter(n-1);
        countArr.unshift(n);
        return countArr;
    }
}
// Only change code above this line

console.log(myCounter(n)); // Change this line
module.exports = myCounter;