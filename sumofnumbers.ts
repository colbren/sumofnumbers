function sumFor(numbers: number[]): number {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

function sumWhile(numbers: number[]): number {
  let total = 0;
  let i = 0;
  while (i < numbers.length) {
    total += numbers[i];
    i++;
  }
  return total;
}

function sumRecursion(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumRecursion(numbers.slice(1));
}

function sumTheFunctionalWay(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumFor([1, 2, 3, 4]));            
console.log(sumWhile([1, 2, 3, 4]));          
console.log(sumRecursion([1, 2, 3, 4]));      
console.log(sumTheFunctionalWay([1, 2, 3, 4])); 
