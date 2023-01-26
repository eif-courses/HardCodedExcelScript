function findSubarrays(n, arr) {
    if(n < 715 || n > 720) {
      console.log("n must be between 715 and 720")
      return [[],[]];
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr.slice(i, j + 1).reduce((acc, cur) => acc + cur) === n) {
                let subArray = arr.slice(i, j + 1);
                let remainingElements = arr.filter(x => !subArray.includes(x));
                return [subArray, remainingElements];
            }
        }
    }
    return [[],[]];
}
let n = 720;
const arr = [78, 80, 80, 300, 180, 89, 70, 200, 900, 100];
const [subarray, remainingElements] = findSubarrays(n, arr);

while(subarray.length == 0 && n > 715){
    const [subarray, remainingElements] = findSubarrays(n--, arr);
    if(subarray.length != 0){
        console.log(subarray);
        console.log(remainingElements);
        break;
    }
}



// Typescript version 
function findSubarrays(n: number, arr: number[]): [number[], number[]] {
    if(n < 715 || n > 720) {
      console.log("n must be between 715 and 720")
      return [[],[]];
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr.slice(i, j + 1).reduce((acc, cur) => acc + cur) === n) {
                let subArray = arr.slice(i, j + 1);
                let remainingElements = arr.filter(x => !subArray.includes(x));
                return [subArray, remainingElements];
            }
        }
    }
    return [[],[]];
}
