// Only change code below this line
function sumFibonacci(num) {
    var prev_fib = 0, cur_fib = 0;
    var sum = 0;
    while(cur_fib <= num) {
        if (cur_fib % 2 !== 0) {
            sum += cur_fib;
        }

    var next_fib = cur_fib + prev_fib;
    prev_fib = cur_fib;
    cur_fib = next_fib;
}
  
    return sum;
}
// Only change code above this line

console.log(sumFibonacci(1)); // Change this line
module.exports = sumFibonacci;

// 1, 1, 2, 3, 5, 8, 13, 21, 34;