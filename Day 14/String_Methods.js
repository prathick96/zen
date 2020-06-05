
/* -------------------String functions------------------- */

// 1. Concat function
function concat(...strings){
    return strings.reduce((accum,val) => (accum+val));
}

// 2. charAt function
function charAt(str, val){
    let arr = Array.from(str);
    return arr[val];
}

// 3. repeat function
function endsWith(str, ends){
    let arr = Array.from(str);
    let earr = Array.from(ends);
    let newArr = []
    let endArr = []
    let i=0
    let j=0
    let bool = false;
    for (let index = arr.length-1; index >=0 ; index--) {
        newArr[i] = arr[index];
        i++;        
    }
    for (let ind = earr.length-1; ind >=0 ; ind--) {
        endArr[j] = earr[ind];
        j++;        
    }
    return endArr.every((e) => {
        return e == newArr;
    });
}
console.log(endsWith("homeland security","asdsad"))