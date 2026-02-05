/* ciclo da 1 a 100 */
for (let i=1; i<=100; i++) {
    console.log(i);

    /* SE il numero è multiplo di 3 e 5  */
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

     /* ALTRIMENTI SE il numero è divisibile solo per 3 */
    else if (i % 3 === 0) {
        console.log("Fizz");
    }

}

