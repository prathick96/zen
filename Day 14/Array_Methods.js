/* -------------------Array functions------------------- */

// 1. Map function
function map(callback, arr){
    let result =[];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result = [...result, callback(element)];
    }
    return result;
}
/* ------------- */

// 2. reduce function
function reduce(arr,callback) {
    let result;
    for (let index = 0; index < arr.length; index++) {
        result += arr[index];
        callback(result);  
    }
    return result;
}
/* ------------- */

// 3. push function
function push(arr, ...element) { 
    let result = arr;
    result[arr.length] = element;
    return result;
} 
/* ------------- */

// 4. pop function
function pop(arr,callback) {
    let result = [];
    for (let index = 0; index < array.length-1; index++) {
        result = callback(arr[index]);
    }
    return result;
}
/* ------------- */

// 5. foreach function
function foreach(arr,callback) {
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        result = callback(arr[index]);
    }
    return result;
}
/* ------------- */

// 6. every function
function every(arr,callback) {
    let result=0;
    let bool = false;
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]%2===0) {
            result++;
        }
    }
    if(result === arr.length){
        callback(result);
        bool = true;
    }
    else if(result !== arr.length){
        return false;
    }
    return bool;
}
/* ------------- */

// 7. filter function
function filter(arr,callback){
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]%2===0){
            result = callback(arr[index])
        }
        
    }
    return result;
}
/* ------------- */

// 8. find function
function find(arr, val, callback){
    let result;
    for (let index = 0; index < arr.length; index++) {
        if((arr[index]===val)){
            result = callback(arr[index]);
        }
    }
    return result;
}
/* ------------- */

// 9. filter function
function filter(arr, callback) {
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]%2===0){
            callback(arr[index])
        }
    }
    return arr;
}
/* ------------- */

// 10. unshift function
function unshift(arr, ...rest) {
    let result = [];
    result[0] = rest;
    for (let index = 1; index < arr.length; index++) {
        result[index] = arr[index-1];
    }
    return result;
}
/* ------------- */

// 11. shift function
function shift(arr, val) {
    let result = [];
    for (let index = 1; index < arr.length; index++) {
        result[index-1] = arr[index];
    }
    return result;
}
/* ------------ */

//12. toString function
function toString(arr){
    let str="";
    for (let index = 0; index < arr.length; index++) {
        str += arr[index];
        if(index<arr.length-1){
            str+=",";
        }
    }
    return str;
}
/* --------- */

// 13. of function
function of(...rest){
    let arr = [];
    for(let prop in rest){
        arr = [...arr, rest[prop]];
    }
    return arr;
}
/* ------------ */

// 14. reverse function
function reverse(arr) {
    let revArr = [];
    let i = 0;
    for (let index = arr.length-1; index >=0 ; index--) {
        revArr[i] = arr[index];
        i++;        
    }
    return revArr;
}
/* ------------- */

// 15. join function
function join(arr, sep) {
    let str = "";
    if(sep == null){
        for (let index = 0; index < arr.length; index++) {
            str += arr[index];
            if(index<arr.length-1){
                str+=",";
            }
        } 
    }
    else {
        for (let index = 0; index < arr.length; index++) {
            str += arr[index];
            if(index<arr.length-1){
                str+=sep;
            }
        }
    }
    return str; 
}
/* ------------- */