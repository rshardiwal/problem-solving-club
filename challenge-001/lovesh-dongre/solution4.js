/*
Solution 2 + Solution 3
Simple Counting + String concatenation + Addition Memory

Pros
    - Scalability
Cons
    - uses string concatenation
    - Uses additional memory
*/

// factor, state count, term
let arr = [
    [3, 1, "Thirsty"],
    [5, 1, "Bird"]
]

for(let i = 1; i <= 20; i++) {
    let result = arr.filter(el => el[0] == el[1]).reduce( (acc, el) => acc + el[2], '')
    console.log(result.length == 0 ? i: result);
    arr.forEach(el => el[1] = el[1] == el[0] ? 1: el[1] + 1)
}
