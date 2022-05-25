const exampleSet = new Set([1,1,1,1,2,2,2,2]);
//Sets basically delete repeating values in an array, so a set would be just 1,2 in this example
exampleSet.add(5);
exampleSet.add(5).add(17);

console.log(exampleSet.has(5));

// exampleSet.clear();

console.log(exampleSet.size);