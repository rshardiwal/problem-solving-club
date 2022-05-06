/*
Using 2 modulus operations with String concatenation

Pros
    - easy to understand
Cons
    - uses string concatenation
    - uses modulus
    - scalability
*/
for(let i = 1; i <= 20; i++) {
    let result = ''
    if(i % 3 == 0)
        result += "Thirsty"
    if(i % 5 == 0)
        result += "Bird"
    if(result === '')
        result = i;
    console.log(result);
}