/*
  1    4---6
 /    /    |
0----3--5  7
    /
   2---8

grap bfs = [0,1,3,4,5,2,6,8,7]

graph dfs = [0,1,3,4,6,7,5,2,8];

graph adjacency list : 
[
    0: [1,3],
    1: [0],
    2: [3,8],
    3: [0,2,4,5],
    4: [3,6],
    5: [3],
    6: [4,7],
    7: [6],b
    8: [2]
]
*/

let graph = [
    [1,3],
    [0],
    [3,8],
    [0,2,4,5],
    [3,6],
    [3],
    [4,7],
    [6],
    [2]
]

var bfs = function(graph){
    let q = [0];
    let ans = new Set();
    while(q.length>0){
        let curr = q.shift()
        for(let i=0;i<graph[curr].length;i++){
            if(!ans.has(graph[curr][i])){
                q.push(graph[curr][i]);
            }
        }
        ans.add(curr);
    }
    return ans;
};

console.log('bfs',bfs(graph));

var dfs = function(graph,vertex=0,ans=new Set()){
    ans.add(vertex);
    const connections = graph[vertex];
    for(let i=0;i<connections.length;i++){
        const connection = connections[i];
        if(!ans.has(connection)){
            dfs(graph,connection,ans);
        }
    }
    return ans;
};

console.log('dfs',dfs(graph));