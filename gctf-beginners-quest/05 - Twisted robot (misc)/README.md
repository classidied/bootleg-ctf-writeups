# Istanbul - Bazaar

## Description/Storyline
>(continued from 03)  
>You’re closing in on the motorcycle, but before you have time to act, the person turns to a small path, which is impossible to follow by car. You will never see them again, but wait... They dropped something, a small bag! You look inside of it, and you see what looks to be like an ancient amulet. You return to AGENT X and she tells you that the amulet can be a lead, and that you should return to the base to begin some research.

It’s a hot day, and your skin is cracking and dry. It’s difficult to make your way through the crowded bazaar. A high pitch voice pierces through the soundscape from a salesman that’s trying to sell colorful fabrics and then from another corner comes delicious smells. You spot a hand waving - it’s your contact that you’ve been waiting to meet. "Take a seat, my friend, I’m Gökhan, have you been to Istanbul before? No, really? I’m sure that you will have a great time, I’ve ordered tea for the two of us. Show me the amulet, will you?. Wow, this is really something from my younger days, this is as mysterious as it is beautiful and belongs to “The cloaked brotherhood”. They are very dangerous, and eventhough your quest is urgent, I would advise you to not continue looking for the owner of this. Go home, and forget about it." In the blink of an eye, four tough guys show up, and you start to run together with Gökhan through the crowded marketplace and then up on a rooftop. The tough guys are closing in, but the two of you climb down from the rooftop, run around a corner and are able to hide in two crates.

Challenge: Twisted robot (misc)
We found this old robo caller. It basically generates random phone numbers to spam. We found the last list of numbers in generated and also some weird file... Maybe it's got to do with these new beta features they were testing?

## What You'll Need
A [zip file](https://storage.googleapis.com/gctf-2021-attachments-project/8d19115532225f6ab25ed208e355b37d55476dfc2c1996cbe81f6e82c96f79a20756d5d53fac7f90bc7841aedab34d0686335bafcdbe2cf07333163719ecff9b) was provided, with a .py, .txt, and .enc file inside.

## Solution
The .enc file was a Wireshark capture, but when opened it didn't seem to prove useful
![image](https://i.imgur.com/W8wqESG.png)

workspace!!!  
![image](https://i.imgur.com/q2ilCMP.png)
- there are 624 numbers in the .txt file
- hint was this: https://docs.python.org/3/library/random.html


