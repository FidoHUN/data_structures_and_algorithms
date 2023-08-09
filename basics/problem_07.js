/*
Write a function called 'sumIntervals' that accepts an array of intervals, and returns the sum of all the interval lengths.
Overlapping intervals should only be counted once.

sumIntervals( [
   [1, 4],
   [7, 10],
   [3, 5]
] ) => 9

Tipp: A legegszerűbb megoldás halmazt (Set) használni
*/

let testCase = [[1,4],[7,10],[3,5]];

var sumIntervals = function(intervals){
    let set = new Set();
    for(let i=0;i<intervals.length;i++){
        for(let j=intervals[i][0];j<=intervals[i][1];j++){
            set.add(j);
        }
    }
    return set.size;
};

console.log(sumIntervals(testCase));