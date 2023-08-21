/*
A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company is the one with headID.

Each employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1. Also, it is guaranteed that the subordination relationships have a tree structure.

The head of the company wants to inform all the company employees of an urgent piece of news. He will inform his direct subordinates, and they will inform their subordinates, and so on until all employees know about the urgent news.

The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e., After informTime[i] minutes, all his direct subordinates can start spreading the news).

Return the number of minutes needed to inform all the employees about the urgent news.

Example:

n=8
headId=4
employees=  [0,1,2,3,4,5,6,7]
managers=   [2,2,4,6,-1,4,4,5]
informTime= [0,0,4,0,7,3,6,0]

                    7  
                 /  |  \
                3   4   6
               /   /  \  \
              0   0    0  0

=> 13
*/
let ans = 0;
var numOfMinutes = function(n,headID,manager,informTime,track=0){
    let isManager = false;
    for(let i=0;i<n;i++){
        if(manager[i] === headID){
            isManager = true;
            ans = track;
            ans += informTime[headID];
            numOfMinutes(n,i,manager,informTime,ans);
        }
    }
    if(!isManager){
        console.log(ans);
    }
};

numOfMinutes(8,4,[2,2,4,6,-1,4,4,5],[0,0,4,0,7,3,6,0]);


