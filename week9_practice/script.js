// Practice 1: Count up, then count down
console.log("--- Practice 1: Count Up, Then Down ---");

let counter = 0;

while (counter <= 100) {
  console.log(counter);
  counter++;
}

counter = 99;

while (counter >= 0) {
  console.log(counter);
  counter--;
}

//1. the first loop use <= instead of < because this includes 100 in the first loop and doesn't stop at 99. 
//2. counter -- allows the loop to decrease and not run forever 
//3. changing counter to 99 or 100 before the second loop. 

// Practice 2: Multiples of 3
console.log("--- Practice 2: Multiples of 3 ---");

for (let multiple = 3; multiple <= 100; multiple += 3) {
  console.log(multiple);
}

//2nd possible option
//for (let candidate = 1; candidate <= 100; candidate++) {
//  if (candidate % 3 === 0) {
//    console.log(candidate);
//  }
//}

//1. the first loop increases by 3 instead of checking each number one by one, so the first loop does less work. 
//2. changing +=3 to +=5 will make the loop start from 5. 
//3. changing let multiple = 3 to let multiple = 0 

// Practice 3: Doubling numbers
console.log("--- Practice 3: Doubling Numbers ---");

let doubling = 1;
do {
  console.log(doubling);
  doubling = doubling * 2;
} while (doubling <= 1000);


let whileCheck = 5000;

while (whileCheck <= 1000) {
  console.log("while:", whileCheck);
  whileCheck = whileCheck * 2;
}

//1. doubling 512 equals 1024, which is greater than 1000 making the loop stop 
//2. a do...while runs at least once before checking the condition, a while loop checks first then runs 
//3. when not doubling +=2, the value stays 1, causing an infinite loop
