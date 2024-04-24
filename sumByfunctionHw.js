const arr =[12, 13, 10, 25, 45]
var sum=0
function sumOfArray(array){
  for(var i= 0; i<array.length; i++){
    sum +=array[i]
  }
  return sum
}
const result = sumOfArray(arr)
console.log(result)