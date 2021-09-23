/*
I didn't know enough js to know what the functions meant shh
const p = Array.from(v).map(a => 0xCafe + a.charCodeAt(0));

takes user input (value), stores in an array
maps each [value + 0xCafe (which is 51966)] into a new array
that array is p

why did I do this in js 
*/
const p = [];

p[0] = 52037 
p[6] = 52081 
p[5] = 52063 
p[1] = 52077 
p[9] = 52077 
p[10] = 52080 
p[4] = 52046 
p[3] = 52066 
p[8] = 52085 
p[7] = 52081 
p[2] = 52077 
p[11] = 52066

// reverse the addition to get v
for (let i = 0; i < 12; i++) {
    process.stdout.write(String.fromCharCode(p[i] - 0xCafe));
}
// console.log('Password: ' + p.join(''));

// Output: Password: GoodPassword
