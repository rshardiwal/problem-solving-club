/*
Simple counting without modulus 

Pros
    - Optimised
    - No modulus operations

Cons
    - Scalablity
*/
for(let i = 1, three = 1, five = 1; i <= 20; i++) {
    if(three == 3 && five == 5)
        console.log("ThristyBird")
    else if(three == 3)
        console.log("Thristy")
    else if(five == 5)
        console.log("Bird")
    else
        console.log(i)
    three = three == 3 ? 1: three + 1;
    five = five == 5 ? 1: five + 1;
}
