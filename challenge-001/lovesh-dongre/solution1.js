/*
Using 4 modulus operations

Pros
    - easy to understand
Cons
    - uses 4 modulus
    - scalability
*/
for(let i = 1; i <= 20; i++) {
    if(i % 3 == 0 && i % 5 == 0)
        console.log("ThristyBird")
    else if(i % 3 == 0)
        console.log("Thristy")
    else if(i % 5 == 0)
        console.log("Bird")
    else
        console.log(i)
}