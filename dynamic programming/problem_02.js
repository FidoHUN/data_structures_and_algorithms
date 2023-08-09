/*
Given an 8 X 8 chessboard, a knight piece will start at the r-th row and c-th column. The knight will attempt to make k moves.
A knight can move in 8 possible ways. Each move will chosse on of these 8 at random. THe knight continues moving until it finishes k moves, or it moves off the board.
Return the probability that the knight is on the chessboard after it finishes moving.
*/

const dirs =[[-2,-1],[-1,-2],[1,-2],[2,-1],[2,1],[1,2],[-1,2],[-2,1]]

// const KnightProb = function(k,r,c){
//     if(k>0){
//         let chance = 0;
//         for(let i=0 ; i<dirs.length ; i++){
//             let x = dirs[i][0];
//             let y = dirs[i][1];
//             chance += validatePos(r,c,x,y);
//         }
//         chance = chance/8;
//         return chance;
//     }
// };

// const validatePos = function(r,c,x,y){
//     if((r+x) < 0 || (r+x) > 7 || (c+y) < 0 || (c+y) > 7) return 0;
//     return 1;
// };

// KnightProb(1,0,1);

const KnightProb = function(k,r,c){
    if(r<0 || r>7 || c<0 || c>7){
        return 0;
    }
    if(k===0){
        return 1;
    }
    let res = 0;
    for(let i=0 ; i<dirs.length ; i++){
        let x = dirs[i][0];
        let y = dirs[i][1];
        res += KnightProb(k-1,r+x,c+y)/8;
    }
    return res;
};

// console.log(KnightProb(12,2,2));

const MEMO = new Map();

const KnightProbMemo = function(k,r,c){
    if(r<0 || r>7 || c<0 || c>7){
        return 0;
    }
    if(k===0){
        return 1;
    }
    let res = 0;
    for(let i=0 ; i<dirs.length ; i++){
        let x = dirs[i][0];
        let y = dirs[i][1];
        res += KnightProbMemo(k-1,r+x,c+y)/8;
    }
    if(!MEMO.has(`(${k},${r},${c})`)) MEMO.set(`(${k},${r},${c})`,res);
    return MEMO.get(`(${k},${r},${c})`);
};

// console.log(KnightProbMemo(12,2,2));