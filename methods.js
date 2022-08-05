// array.form() method
const arrayForm = "amazing";
result = Array.from(arrayForm);
console.log(result);
// Output: ['a','m','a','z','i','n','g']

//array.length method
const arrayLength = ["amazing", "awsome", "fighting"];
console.log(arrayLength.length);
// Output: 3

//array.at()
const arrayAt = ["amazing", "awsome", "fighting"];
console.log(arrayAt.at(2));
// Output: fighting

//array.concat()
const arrayConcat1 = ["amazing", "awsome", "fighting"];
const arrayConcat2 = ["analayze", "attack", "advance"];
concatResult = arrayConcat1.concat(arrayConcat2);
console.log(concatResult);
// Output: ["amazing", "awsome", "fighting", "analayze", "attack", "advance"]

//array.copyWithin()
const arrayCopy = ["amazing", "awsome", "fighting", "analayze", "attack", "advance"];
console.log(arrayCopy.copyWithin(0,2,5));
// Output: ['fighting', 'analayze', 'attack', 'analayze', 'attack', 'advance']

//array.entries()
const arrayEntries = ["amazing", "awsome", "fighting"];
for(const[index, element] of arrayEntries.entries()){
    console.log(index,element)
}
// Output: 0 'amazing' 1 'awsome' 2 'fighting'

//array.every()
const arrayEvery = [31,21,34,22,29,37];
console.log(arrayEvery.every(greaterThan));
function greaterThan(num){
    return num > 20;
}
// Output: true

//array.fill()
const arrayFill = [31,21,34,22,29,37];
console.log(arrayFill.fill(0,1,3));
// Output [31, 0, 0, 22, 29, 37]

//array.filter()
const arrayFilter = [31,21,34,22,29,37];
console.log(arrayFilter.filter(moreThan));
function moreThan(num){
    return num > 26;
}
// Output: [31, 34, 29, 37]

//array.find()
const arrayFind = [6,8,16,31,21,34,22,29,37];
console.log(arrayFind.find(maxNum));
function maxNum(num){
    return num > 20;
}

//array.findIndex()
const arrayIndex = [6,8,16,32,21,34,22,29,37];
console.log(arrayIndex.find(isGreater));
function isGreater(num){
    return num > 20;
}