/*
Given a string S. Partition S such that every substring os the partition is a palindrome.
Return all possible palindrome partitioning of S.
Example:
Input: s = "aab"
Output: [["a","b","c"],["aa","b"]]
*/

let result = [];

const partition = function(s){
    iterate(s,[]);
    return result;
};

const iterate = (str,temp) =>{
    if(str.length ==0){
        result.push(temp)
        return;
    }

    for(let i =1; i<=str.length; i++){
        let value = str.slice(0,i);
        if(isPalindrome(value)){
            iterate(str.slice(i),[...temp,value])
        }
    }
};

const isPalindrome = function(s){
    let l = 0;
    let r = s.length-1;
    let arr = s.split('');
    while(l<r){
        if(arr[l] !== arr[r]) return false;
        l++;
        r--;
    }
    return true;
};

console.log(partition("aab"));

