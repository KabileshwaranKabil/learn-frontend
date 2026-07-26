const double = function(number){
    return number * number;
}
let numbers = [2,4,5,3,8,6,1]

numbers.forEach(function(number){
    console.log(double(number));
});