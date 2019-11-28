// Write a script triangleArea.js that takes 3 number arguments, each representing the length of a side. 
// Then, calculate and log the perimeter and area of the triangle. If given lengths do not create a valid triangle, 
// log "Impossible triangle!" instead.

// Example usage:

// $ node triangleArea.js 3 4 3
// Perimeter: 10
// Area: 4.4721

// $ node triangleArea.js 10 0 0
// Impossible triangle!

const args = process.argv.slice(2);
const s0 = parseInt(args[0]);
const s1 = parseInt(args[1]);
const s2 = parseInt(args[2]);

if (s0 <= 0 || s1 <= 0 || s2 <=0 || s0 + s1 <= s2 || s0 + s2 <= s1 || s1 + s2 <= s0) {
    console.log('Impossible triangle!')
} else {
    const perimeter = s0 + s1 + s2;
    console.log(`Perimeter: ${perimeter}`);
    const halfP = perimeter / 2;
    const area = Math.sqrt(halfP * (halfP -s0) * (halfP - s1) * (halfP - s2));
    console.log(`Area: ${area.toFixed(4)}`);
}

