let celsius = 20
let fahrenheit = 70

console.log(` ${celsius} degrees Celsius is ${(celsius * (9/5) + 32)} degrees Fahrenheit`)
console.log(`${fahrenheit} degrees Fahrenheit is ${((fahrenheit - 32) * (5/9))} degrees Celsius`)

let LucasBmi = 23.9
let JohnBmi = 28.3
if (LucasBmi < JohnBmi){
    console.log(`Johns bmi(${JohnBmi}) is higher!`)
}
else{
    console.log(`Lucas' bmi(${LucasBmi}) is higher`)
}

let Question = Number(prompt('Please enter a number'))
if(isNaN(Question) == 1){
    console.log('Please enter a number')
}
else if(Question == 8){
    console.log('You win 8 points')
}
else if(Question == 10){
    console.log('You win 10 points')
}
else{
    console.log('Not matched')
}
const nets1 = [80, 92, 100];
const knicks1 = [80, 90, 106];
const nets2 = [98, 110, 101]
const knicks2 = [108, 92, 110]
function winner(a, b){
    const initialValue = 0;
    const sum1 = a.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
    const avg1 = sum1/3;
    const initialValue2 = 0;
    const sum2 = b.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue2);
    const avg2 = sum2/3;
    if(avg1 > avg2 && avg1 > 100){
        console.log('The winner is the nets!')
    }
    else if(avg1 < avg2 && avg2 > 100){
        console.log('The winner is the knicks!')
    }
    else if(avg1 == avg2 && av1 > 100 && avg2 > 100){
        console.log("It's a draw")
    }
    else if(avg1 < 100 && avg2 < 100){
        console.log('Nobody wins!')
    }
}
winner(nets1, knicks1)
winner(nets2, knicks2)

function tipCalculator(tips){
    let tip = (tips >= 30 && tips <= 100) ? tips * 0.15: tips * 0.20
    console.log(`The total is ${tip + tips}, the bill was ${tips}, and the tip was ${tip}`)
}
tipCalculator(285)
tipCalculator(26)
tipCalculator(90)

let ConvertCelsiusToFahrenheit = (Celsius) => {console.log(`${Celsius} degrees C is ${Celsius * (9/5) + 32} degrees F`)}
let ConvertFahrenheitToCelsius = (Fahrenheit) => {console.log(`${Fahrenheit} degrees F is ${(Fahrenheit - 32) * (5/9)} degrees C`)}

ConvertCelsiusToFahrenheit(4)
ConvertFahrenheitToCelsius(20)