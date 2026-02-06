//2a. At a restaurant, you order:
// 1 soup for $10
// 3 burgers for $8 each
// 1 ice cream for $5
// Use JavaScript to calculate the cost of the order.
//>3*8+10+5
//>39

//2b.You're at a restaurant with 2 friends (3 people in total) and make the same order as 2a.
//Calculate how much each person pays.
//(10 + 3 * 8 + 5) / 3
//13

//2c.Calculate the total cost of:1 toaster ($18.50),2 shirts ($7.50 each)
//18.5 + 2 * 7.5
//33.5

//2d.Calculate a 10% tax for the total in exercise 2c.
//(18.5 + 2 * 7.5) * 0.1
//3.35

//2e.Calculate a 20% tax for the total in 2c(Remember that 1% = 1 / 100, so 20% = 20 / 100 = 0.2)
//(18.5 + 2 * 7.5) * 0.2
//6.7

//SetupIn the Amazon project, go to the home page and add a toaster ($18.99) to your cart so you have:1 basketball,1 t-shirt,1 toaster.Choose $4.99 shipping for the toaster.

//2f.Calculate the cost of the products(before shipping and taxes)Hint: calculate in cents to avoid inaccuracies.
//2095+799+1899,4793,4793/100,47.93

//2g.Calculate the total before tax.
//(2095 + 799 + 1899 + 499) / 100
//52.92

//2h.Calculate the 10% tax exactly.
//Hint: use Math.round().
//Math.round((2095+799+1899+499)*0.1)/100
//5.29

//2i.Calculate Order total at the bottom.
//(2095 + 799 + 1899 + 499) / 100 + Math.round((2095+799+1899+499)*0.1)/100
//58.21

//2j.Let’s say we want to always round a number down(2.8 → 2)Using Google or an AI tool, search for the code to do this.
//Math.floor(2.8)
//2

//2k.Let’s always round a number up(2.2 → 3)Search how to do this.
//Math.ceil(2.2)
//3

//Challenge Exercises We’ll use JavaScript to convert temperatures from Celsius (°C) to Fahrenheit (°F).Formulas
//Fahrenheit = (Celsius × 9 / 5) + 32
//Celsius = (Fahrenheit − 32) × 5 / 9

//2l.The temperature is 25°C.Calculate the temperature in Fahrenheit.
//25*9/5+32
//77

//2m.The temperature is 86°F.Calculate the temperature in Celsius. 
//(86-32)*5/9
//30

//2n.The temperature is −5°C.Calculate the temperature in Fahrenheit. (23)
//-5*9/5+32
//23