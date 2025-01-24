function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseInt(a, 10) : a;
  const numB = typeof b === 'string' ? parseInt(b, 10) : b;
  return numA + numB; 
}

let result1 = add(1, 2); // Correct usage: 3
let result2 = addSafe(1, "2"); // Safe usage: 3