//depth of array finder
//using recursive method 
//only works to find single and first occuring depth of array

function depthOfArray(arr){
    var depth = 0;
    let ans = 0;
    if(typeof arr === 'object'){
        depth++;
        for(let item of arr){
            if(typeof item == 'object'){
                depth++;
                ans = deeper(item, depth);
                console.log("answer:",ans)
                break;
            }
        }
    }
    
    return ans;
}

//deeper is a pure recursive function

function deeper(arr, currentDepth){
let depth;
console.log("deeper started")
    for(let item of arr){
        if(typeof item === 'object'){
            currentDepth++;
            depth = deeper(item, currentDepth);
            break;
        }else{
            depth = currentDepth;
        }
    }
    console.log("depth:",depth)
    return depth;
}



// //recursive depth of array finder
// function depthOfArray(arr){
//     var depth = 0;
//     if(typeof arr == 'object'){
//         depth++;
//         for(let item in arr){
//             if(typeof item == 'object'){
//                 depth++;
//                 depthOfArray(item);
//             }
//         }
//     }
//     return depth;
// }