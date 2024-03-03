const marksWeights = 78;
const marksHeights = 1.69;

const marksBmi = marksWeights / (marksHeights**2)
console.log(marksBmi)

const jhonWeights = 92;
const jhonsHeights = 1.95;
const jhonsBmi = jhonWeights / (jhonsHeights**2);
console.log(jhonsBmi)


if(marksBmi > jhonsBmi){
  console.log("Marks has higher BMI")
}else{
  console.log("Jhons has higher BMI")
}