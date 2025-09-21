function sumFor(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
function sumWhile(numbers) {
    var total = 0;
    var i = 0;
    while (i < numbers.length) {
        total += numbers[i];
        i++;
    }
    return total;
}
function sumRecursion(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    return numbers[0] + sumRecursion(numbers.slice(1));
}
function sumTheFunctionalWay(numbers) {
    return numbers.reduce(function (acc, num) { return acc + num; }, 0);
}
console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
