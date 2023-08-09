/*
DYNAMIC PROGRAMMING
Given an array full of cost values.
The goal is to reach the top of the staircase, but each step have a cost.
Once you pay the cost for a step, you can either climb one or two steps.
Find the minimum cost to reach the top of the staircase.
You start from the ground. Your first step can either be the first or the second step.
Exmaple:
cost=[10,15,30]

            FIN
        30
    15
10

10+15+30=55;
10+30=40;
15+30=45;
10+15=25;
15; <-- that's the minimum

Tip: 95% of the time, optimization problems that are MIN/MAX based on all available solutions, and picking the best one, is can be solved with dynamic programming.

                minCost(n)
                /         \
min(   minCost(n-1) ,   minCost(n-2) )
    ...

        
        ˇ    FIN
    ˇ   30
    15
10

minCost(i) = cost(i) + min(minCost(i-1),minCost(i-2))
*/

const cost = [20,15,30,5]

const minCostClimbingStars = function(cost){
    const n = cost.length;
    return Math.min(minCost(n-1,cost),minCost(n-2,cost));
}

const minCost = function(i,cost){
    if(i<0) return 0;
    if(i===0 || i===1) return cost[i];
    return cost[i] + Math.min(minCost(i-1,cost),minCost(i-2,cost));
}

// console.log(minCostClimbingStars(cost));

// S:O(n^2), T:O(n^2)

/*
                                    minCost(n)
                                   /          \
                            minCost(n-1)      !minCost(n-2) 
                            /           \      /           \
               !minCost(n-2)  !!minCost(n-3) !!minCost(n-3)  minCost(n-4)

We can save a lot of time if we save the function parameters with it's return value, so we don't need to calculate it over and over again.
*/

const minCostClimbingStarsMemo = function(cost){
    const n = cost.length;
    const MEMOIZE = [];
    return Math.min(minCostMemo(n-1,cost,MEMOIZE),minCostMemo(n-2,cost,MEMOIZE));
}

const minCostMemo = function(i,cost,m){
    if(i<0) return 0;
    if(i===0 || i===1) return cost[i];
    if(m[i] !== undefined) return m[i];
    m[i] = cost[i] + Math.min(minCostMemo(i-1,cost,m),minCostMemo(i-2,cost,m));
    return m[i];
}

console.log(minCostClimbingStarsMemo(cost));

// S:O(n), T:O(n)