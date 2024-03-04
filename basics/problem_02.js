/*
You are given an array of positive integers where each 
integer represents the height of a vertical line 
on a chart. Find two lines wich together with the 
x-axis forms a container that would hold the 
greatest amount of water. Return the area of water 
it would hold.

[1,8,6,2,9,4] => 24
A két leghosszabb cső a 8-as és a 9-es, tehát a víz ezen két cső között lesz beöntve. 
A feladat az így kialakult víztározó területése kíváncsi. Ebben az esetben a két 
cső között 3 egységnyi hely van, ezért a megoldás 8 * 3 = 24 lesz!
Fontos, hogy nem feltétlen a két legmagasabb cső fogja a megoldást jelenteni, hiszen 
a feladat a legnagyobb terület megtalálását kéri!
A fallal nem lehet területet kialakítani!

Néhány teszteset:
[7,1,2,3,9] => 7 * 4 = 28 => 28
[] => 0
[7] => 0
[6,9,3,4,5,8] => 6 * 5 = 30 vs 8 * 4 = 32 => 32
*/

let height = [6,9,3,4,5,8]

/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height) {
//   let maxArea = 0
//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       let area = Math.min(height[i], height[j]) * Math.abs(i - j)
//       if (area > maxArea) maxArea = area
//     }
//   }
//   if (maxArea > 0) return maxArea
//   return 0
// }

// console.log(maxArea(height))

/*
technique name: two pointers
T:O(n2)
S:O(1)
*/

/*
Az algoritmus javításához elengedhetetlen, hogy észrevegyük azt, 
mennyire is fontos a szélesség a területszámításnál. A szélességnek 
nagyon fontos szerepe van, hiszen minél nagyobb a szélesség, annál 
nagyobb lesz a terület is. Logikus tehát a tömb két szélétől elindulni. 
Viszont ezután egy-két dolgot észre kell venni. Miután megkaptuk a területet 
el kellenne dönteni, hogy balról vagy jobbról kezdünk el közelíteni a tömb 
közepe felé. Mivel úgyis a két szám közül a kisebb kerül kiválasztásra, ha 
az eleve nagyobb cső még nagyobb lesz nem megyünk vele semmire, ha meg kisebb 
lesz akkor meg végképp nem. Egyértelműen látszik ebből, hogy a kisebb cső felől 
kell folytatni a feladatot. Ha nagyobb a rákövetkező szomszéd, akkor szerencsénk 
van mert valószínű a terület is növekedni fog, ha viszont kisebb, akkor is menni 
kell tovább. Mindig lesz így egy számpárom és ahhoz, hogy a legtöbbet hozzam ki 
a területből, muszáj a kisebb számmal befelé haladnom addig, amíg a két pointer 
össze nem ér. 
*/

var maxArea = function (height) {
  if (height.length < 2) return 0
  let maxArea = 0
  let leftIndex = 0
  let rightIndex = height.length - 1
  do {
    let smallerNumber = Math.min(height[leftIndex], height[rightIndex])
    let area = (rightIndex - leftIndex) * smallerNumber
    if (area > maxArea) maxArea = area
    if (smallerNumber === height[leftIndex]) {
      leftIndex++
    } else if (smallerNumber === height[rightIndex]) {
      rightIndex--
    }

  } while (leftIndex !== rightIndex)
  return maxArea
}

console.log(maxArea(height))

/*
technique name: shifting pointers
T:O(n)
S:O(1)
*/
