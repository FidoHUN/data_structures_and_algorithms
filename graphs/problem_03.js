/*
 *
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

Return true if you can finish all courses. Otherwise, return false.

Exmaples:

prerequisites: [[1,0],[2,1],[2,5],[0,3],[4,3],[3,5],[4,5]] => True

   (3)-->(4)
   /^    ^
 </  \  /
(0)  (5)
  \    \
  \     >
  >(1)-->(2)

prerequisites: [[1,0],[2,1],[5,2],[0,3],[4,3],[3,5],[4,5]] => False

   (3)-->(4)
   /^    ^
 </  \  /
(0)  (5)
  \    <
  \     \
  >(1)-->(2)

Basically you need to check if there is a cycle in this directed graph or not...

Tip: Do a DFS then check if you touched the starting point or not.
*/

let ret = true;

var detectCycle = function(adjList){
    for(let i=0 ; i<adjList.length ; i++){
        let startNode = i;
        iterate(adjList,i,startNode);            
    }
    return ret;
};

var iterate = function(adjList,currentNode,startNode){
    for(let i=0 ; i<adjList[currentNode].length ; i++){
        if(adjList[currentNode][i] === startNode){
            ret = false;
            return;
        }
        if(ret){
            iterate(adjList,adjList[currentNode][i],startNode);
        } 
    }
};

var generateAdjacencyList = function(n,prerequisites){
    let ret = new Array(n);
    for(let i=0 ; i<n ; i++){
        ret[i] = [];
    }
    for (let i=0 ; i<prerequisites.length ; i++) {
        let start = prerequisites[i][1];
        let end = prerequisites[i][0];
        ret[start].push(end);
    }
    return ret;
};

let adjList = generateAdjacencyList(6,[[1,0],[2,1],[5,2],[0,3],[4,3],[3,5],[4,5]]);

console.log(((adjList)));

console.log(detectCycle(adjList));
