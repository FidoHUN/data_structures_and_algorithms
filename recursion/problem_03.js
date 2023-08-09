/*
[1,3,3,5,5,5,8,9] target=5 
Find the index(es) of the target number in a [x,y] format
--> [3,5]
*/

const findTargetIndexes = function(arr,t){
    let l = 0;
    let r = arr.length-1;
    let m = Math.floor((l+r)/2);
    if(arr[m] === t){
        let lt=m;
        let rt=m;
        while(arr[lt] === t || arr[rt] === t){
            if(arr[lt] === t) lt--;
            if(arr[rt] === t) rt++;
        }
        return [lt+1,rt-1];
    }else if(arr[m] > t){
        arr=arr.slice(-arr.length,-(m+1))
        findTargetIndexes(arr,t);
    }else if(arr[m] < t){
        arr=arr.slice(m+1);
        findTargetIndexes(arr,t);
    }
    return -1;
}

console.log(findTargetIndexes([1,3,3,5,5,5,8,9],5));

