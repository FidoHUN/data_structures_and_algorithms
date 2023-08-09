/*
Divide and conquer paradigm
Breaks a problem into multiple smaller, but same sub-problems.
Combines the solutions of the sub-problems into the solution of the original problem.

Implement the quck sorting algorithm using recursion!
[5,3,1,6,4,2] --> [1,2,3,4,5,6]
Módszer:    1) Vegyük a tömb legutolsó elemét
            2) Találjuk meg a végső helyét (minden elem tőle balra legyen kisebb, tőle jobbra legyen nagyobb)
            3) Az így keletkezett 2, majd kesőbb több kisebb tömbön végezzük el ugyanezt a műveletet ameddig minden elem a helyére nem került.

           p 
[5,3,1,6,4,2]
 i --> számon tartja a pivot elem végső helyzetét
 j --> végigmegy a tömbön és a pivot elemet hasonlítja a többi elemhez

*/

const array = [2,7,8,6,4,1,9,3,5]

const quickSort = function(array,left,right){
    if(left<right){
        const partitionIndex = partition(array,left,right);
        quickSort(array,left,partitionIndex-1);
        quickSort(array,partitionIndex+1,right);
    }
}

const partition = function(array,left,right){
    const pivotElement = array[right];
    let i = left;
    for(j=left;j<right;j++){
        if(array[j]<pivotElement){
            swap(array,i,j);
            i++;
        }
    }
    swap(array,i,right);
    return i;
}

const swap = function(array,i,j){
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

quickSort(array,0,8);

/*
Binary search
Find the index of the target element in a sorted array
*/

const binarySearch = function(array,target){
    let l = 0;
    let r = array.length-1
    let mid = Math.floor((l + r) / 2);
    if(array[mid] === target){
        return mid;
    }else if(array[mid] > target){
        array=array.slice(-array.length,-(mid+1))
        binarySearch(array,target);
    }else if(array[mid] < target){
        array=array.slice(mid+1);
        binarySearch(array,target);
    }
    return -1;
};

binarySearch(array, 10);