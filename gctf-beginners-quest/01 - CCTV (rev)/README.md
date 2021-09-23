# Novosibirsk - Chemical plant

## Description/Storyline
"You must wonder why we have summoned you, AGENT? It has come to our attention that something terrible is about to take place. There is still time to prevent the disaster, and we could not think of anyone more suited for this task than you. We believe that if you can’t solve this quest, neither can anybody else. You have to travel to Novosibirsk, and investigate a suspicious chemical plant. This mission must be executed in secrecy. It’s classified, and it regards the safety of the whole world, therefore we can’t tell you anything more just yet. Go now, you have the fate of the world in your hands."

Challenge: CCTV (rev)  
You arrive at your destination. The weather isn't great, so you figure there's no reason to stay outside and you make your way to one of the buildings. No one bothered you so far, so you decide to play it bold - you make yourself a cup of coffee in the social area like you totally belong here and proceed to find an empty room with a desk and a chair. You pull out our laptop, hook it up to the ethernet socket in the wall, and quickly find an internal CCTV panel - that's a way better way to look around unnoticed. Only problem is... it wants a password. 

## What You'll Need
https://cctv-web.2021.ctfcompetition.com/

## Solution
This script was in the source:
```javascript
const v = document.getElementById("password").value;
const p = Array.from(v).map(a => 0xCafe + a.charCodeAt(0));

if(p[0] === 52037 &&
    p[6] === 52081 &&
    p[5] === 52063 &&
    p[1] === 52077 &&
    p[9] === 52077 &&
    p[10] === 52080 &&
    p[4] === 52046 &&
    p[3] === 52066 &&
    p[8] === 52085 &&
    p[7] === 52081 &&
    p[2] === 52077 &&
    p[11] === 52066) {
    window.location.replace(v + ".html");
} else {
    alert("Wrong password!");
}
```
Reversing the operations on **p**:
```javascript
for (let i = 0; i < 12; i++) {
    process.stdout.write(String.fromCharCode(p[i] - 0xCafe));
}
```
(or in python)
```python
for x in range(len(p)):
    print(chr(p[x] - 0xCafe), end="")
```
outputs `Password: GoodPassword`.

Once entered into the site, we get 4 CCTV cams and the flag:
![image](https://user-images.githubusercontent.com/71155602/131226939-ba5c3d8f-d6c7-4ae0-a646-32e87dc27d90.png)

Flag: `CTF{IJustHopeThisIsNotOnShodan}`

