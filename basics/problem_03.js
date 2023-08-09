/*
Given an array of integers representing an 
elevation map where the width of each bar is 1, 
return how much rainwater can be trapped

[0,1,0,2,1,0,3,1,0,1,2] => 8


      |
   |..|...|
 |.||.||.||
-----------

min(maxLeft,maxRight) - height
első oszlop => min(0,3) - 0 = 0 => 0
második oszlop => min(0,3) - 1 = -1 => null
harmadik oszlop => min(1,3) - 0 = 1 => 1
negyedik oszlop => min(1,3) - 2 = -1 => null
ötödik oszlop => min(2,3) - 1 = 1 => 1
hatodik oszlop => min(2,3) - 0 = 2 => 2
hetedik oszlop => min(2,2) - 3 = -1 => null
nyolcadik oszlop => min(3,2) - 1 = 1 => 1
kilencedik oszlop => min(3,2) - 0 = 2 => 2
tizedik oszlop => min(3,2) - 1 = 1 => 1
tizenegyedik oszlop => min(3,0) - 2 = -2 => null
=> 1 + 1 + 2 + 1 + 2 + 1 = 8 => 8
 */

let height = [0,1,0,2,1,0,3,1,0,1,2]

/**
 * @param {number[]} height
 * @return {number}
 */
//  var trap = function(height) {
//     let maxLeft = 0
//     let maxRight = 0
//     let total = 0
//     for(let i = 0; i < height.length; i++) {
//       for(let j = i-1; j >= 0; j--){
//         if(height[j] > maxLeft) maxLeft = height[j]
//       }
//       for(let j = i+1; j < height.length; j++){
//         if(height[j] > maxRight) maxRight = height[j]
//       }
//       let current = Math.min(maxLeft,maxRight) - height[i]
//       if(current > 0) total += current
//       maxLeft = 0
//       maxRight = 0
//     }
//     return total
// }

// console.log(trap(height))

/*
T:O(n)
S:O(1)
*/

/*
Mint ahogy a második problémánál csináltuk, itt is érdemes a shifting pointers 
technikát alkalmazni, tehát a tömb két szélétől indulunk és megpróbálunk n2 
futásidő helyett n-es futásidőt generálni. Ehhez egyrészt a maxLeft, maxRight, 
és a total változókat folyamatosan számon kell tartanunk, illetve el kell 
dönteni azt is, hogy balról, vagy jobbról érdemes közelíteni a tömb belseje 
felé. Legelőször a total értéke 0, a maxLeft értéke a tömb első eleme, a 
maxRight értéke a tömb utolsó értéke lesz. Mivel ismét minimumot kell számolni, 
ezért most is érdemes a kisebb szám felől közelíteni a tömb belseje felé. 
*/

/*
min(maxLeft,maxRight) - height
első iteráció) min(0,2) - 0 = 0 => 0 => maxLeft = height => minden marad igy => total = 0, maxLeft = 0, maxRight = 2 => maxLfet <= maxRight => balról lépek jobbra
második iteráció) min(0,2) - 1 = -1 => null => maxLeft < height => maxLeft = height = 1 => maxLeft = 1, maxRight = 2, total = 0 => maxLeft <= maxRight => balról lépek jobbra
harmadik iteráció) min(1,2) - 0 = 1 => 1 => maxLeft > height => minden marad így => maxLeft = 1, maxRight = 2, total = 1 => maxLeft <= maxRight => balról lépek jobbra
negyedik iteráció) min(1,2) - 2 = -1 => null => maxLeft < height => maxLeft = height = 2 => maxLeft = 2, maxRight = 2, total = 1 => maxLeft <= maxRight => balról lépek jobbra, bár egyenlőség esetén mindegy
ötödik iteráció) min(2,2) - 1 = 1 => 1 => maxLeft > height => minden marad így => maxLeft = 2, maxRight = 2, total = 2 => maxLeft <= maxRight => balról lépek jobbra
...
a végén a total 8 lesz ha így haladunk tovább, addig megyünk, amíg a két shifitng pointer össze nem ér
*/

var trap = function(height) {
  let p1 = 0
  let p2 = height.length - 1
  let maxLeft = height[p1]
  let maxRight = height[p2]
  let total = 0
  while(p1 <= p2){
    if(maxLeft <= maxRight){
      let current = Math.min(maxLeft,maxRight) - height[p1]
      if(current > 0) total += current
      if(maxLeft < height[p1]) maxLeft = height[p1]
      p1++
    }else{
      let current = Math.min(maxLeft,maxRight) - height[p2]
      if(current > 0) total += current
      if(maxRight < height[p2]) maxRight = height[p2]
      p2--
    }
  }
  return total
}

console.log(trap(height))

/*
T:O(n)
S:O(n)
*/

