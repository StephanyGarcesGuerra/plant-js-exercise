console.log("==== Garden Area ====");
    let pi = 3.1415
    let rad = 5
    const gardrad = (pi * rad**2)
    console.log(gardrad);

    console.log("==== start area of plants ====");
    let plants = 20
    let plantrad = 0.8
    const start = (plants * plantrad)
    console.log(start);

    console.log("==== Current Plant Area ====");
    let w = 3
    const current = (plants * (2**w)) * plantrad
    console.log(current);

    console.log( "==== Prune / Monitor / Plant ====");
    if (current > (0.8*gardrad)) {
        console.log("prune");
    } else if ((0.5*gardrad <= current) && (current <= 0.8*gardrad)){
        console.log("monitor");
    } else if (current < 0.5*gardrad) {
        console.log("plant");}
    
        console.log("==== Percentage covered by Plants ====");
        const percent = (current / gardrad) * 100
        console.log(percent);


console.log("==== Part 2 100 Plants Total Needed Area ====");
let plant100 = 100
let weeks10 = 10
const part2area = plant100 * 2**weeks10
console.log(part2area);

console.log("==== Part 2 Garden Radius ====");
const part2rad = Math.sqrt(part2area/pi)
console.log(part2rad);

console.log("==== Part 3: Try and Catch ====");

let plant100area= plant100*0.8
try {
	if (current <= gardrad) {
		console.log("Less than Garden Area");
	} else {
		throw "Error - plants exceed area";
	}
} catch (err) {
	console.log(err);
}

