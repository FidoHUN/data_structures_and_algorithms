/*
BINARY TREES

1) Given a binary tree. Return the maximum depth of it.

            3
          /  \
         6    1
        / \
       9  2
      /    \
     5     4
          /
         8

*/

class binaryTreeNode
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const node1 = new binaryTreeNode(3);
const node2 = new binaryTreeNode(6);
const node3 = new binaryTreeNode(1);
const node4 = new binaryTreeNode(9);
const node5 = new binaryTreeNode(2);
const node6 = new binaryTreeNode(4);
const node7 = new binaryTreeNode(5);
const node8 = new binaryTreeNode(8);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node5.right = node6;
node4.left = node7;
node6.left = node8;

const DFS = function(node, count=0){
    if(!node){
        return count;
    }else{
        count++;
    } 
    return Math.max(DFS(node.left,count),DFS(node.right,count));
};

console.log(DFS(node1));

/*
2) Given a binary tree. Return an array containing it's levels in order
--> [[3],[6,1],[9,2],[5,4],[8]]
*/

const BFS = function(root){
    let res = [], q = [root], row=[], arr = [];
    while(q.length){
        let node = q.shift();
        arr.push(node.data)
        if(node.left) row.push(node.left);
        if(node.right) row.push(node.right);
        if(!q.length){
            res.push(arr);
            q = row;
            row = [];
            arr = [];
        }
    }
    return res;
};

console.log(BFS(node1));

/*
3) Given a binary tree. Imagine you are standing to the right side of the tree. 
    Return an array of the value of the nodes you can see ordered from top to bottom.
    Add an extra parameter to the function so the user can decide if he/she wants to see the left, or the right side of the tree
*/

// O(N)
const sideviewBFS = function(root,side){
    let res = [], q = [root], row=[], arr = [];
    while(q.length){
        let node = q.shift();
        // res.push(node.data); // original version
        arr.push(node.data)
        if(node.left) row.push(node.left);
        if(node.right) row.push(node.right);
        if(!q.length){
            if(side === 'left'){
                res.push(arr[0]);
            }else if(side === 'right'){
                res.push(arr[arr.length-1])
            }
            q = row;
            row = [];
            arr = [];
        }
    }
    return res;
};

console.log(sideviewBFS(node1,'right'));

// right view
// O(logN)
const sideviewDFS = function(node,depth=0,res=[]){
    if(node){
        depth++;
        if(res.length < depth){
            res.push(node.data);
        }
    }else{
        return depth;
    }
    let level = Math.max(sideviewDFS(node.right,depth,res),sideviewDFS(node.left,depth,res)); // right view
    // let level = Math.max(sideviewDFS(node.left,depth,res),sideviewDFS(node.right,depth,res)); // left view
};

sideviewDFS(node1);
