/*
Given an array of integers, return the indexes of the two numbers that add up to a given target!

[1,3,7,9,2] , t = 11 => [3,4]
*/

let nums = [5, 3, 8, 9, 2]
let target = 10

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     let search_for = target - nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] === search_for) {
//         return [i, j]
//       }
//     }
//   }
//   return null;
// }

// console.log(twoSum(nums, target))

/*
T:O(n2)
S:O(1)
*/

/*
Algoritmus javítása: A probléma a jelenlegi algoritmussal a keresés résznél van, 
addig rendben van, hogy megtaláltuk a számot amit keresünk, de a megtalálásához 
nem feltétlenül kellene még egy for ciklust használnunk. Kellene nekünk egy adatszerkezet, 
amivel nagyon gyorsan lehet keresni. A HashMap erre tökéletes, az O(1) időben keres az elemei között. 
Gyűjtsük össze az összes keresendő számot szépen sorba ebbe a HashMap-be, DE még mielőtt kiszámolnánk a következő 
keresendő számot, nézzük meg, hogy a jelenlegi indexen levő szám benne van-e a mi folyamatosan bővülő 
HashMap-ünkben. Ha a feladatnak létezik megoldása, előbb utóbb találnunk kell egyezést! A HashMap 
kulcsai a keresett számok lesznek, értékei a tömbben elfoglalt helyük lesz.
*/

var twoSum = function (nums, target) {
  let HashMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    let search_for = target - nums[i]
    if (HashMap.has(nums[i])) {
      return [HashMap.get(nums[i]), i]
    } else {
      HashMap.set(search_for, i)
    }
  }
  return null
}

console.log(twoSum(nums, target))

/*
T:O(n)
S:O(n)
*/