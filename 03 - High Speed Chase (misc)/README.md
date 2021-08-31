# Moscow - Streets

## Description/Storyline
>(continued from 02)
>Well, it’s a rather gloomy and messy apartment, a faint shade is cast from the almost covered master window upon the worn wall. It smells very burnt, and there's a cracked bottle in the sink that suggests some kind of experiment. Someone must have left in a hurry. Thinking about it, do you want to: Look at the beautiful view of the Kremlin from the window or search the apartment thoroughly  
> **>Look at the beautiful view of Kreml, from the window (3)**  
> Wow look at the Kremlin. Ah, the Moscow Kremlin is really something else! But hey wait... look at the street, someone just started to run when he saw you in the window. Could it be the person that we’re looking for? You exit the building and see that they are jumping on a motorcycle and they take off! You spot a parked car, hotwire it and quickly take up the chase.  
 
The person drives into a narrow back alley and despite the danger you try to continue on and give chase. It is impossible to see who they are, clothed all in black and a helmet covering the face. You need to intercept them somehow.

Challenge: High Speed Chase (misc)  
You chase them through city streets until you reach the high way. The traffic is pretty rough for a car and you see them gaining ground - should have hotwired a motorbike as well! Too late for that. You look around your car to spot anything useful, and you notice this is actually one of the new self driving cars. You turn on the autopilot, pull out your laptop, connect it to the system, and enter the not-so-hidden developer's mode. It's time to re-program the autopilot to be a bit more useful in a chase! To make it easier, you replace the in-car LiDAR feed with a feed from an overhead sattelite - you also display it on the the entertainment system. Now all that's left to do, is to write a better controlCar function!

## What You'll Need
https://high-speed-chase-web.2021.ctfcompetition.com/
https://high-speed-chase-web.2021.ctfcompetition.com/task3explained.png

## Solution
Initially, I used hardcoded indices and distances in the algorithm, which I will not be displaying for self-preservation. Debugging by printing to the console helped as well. To solve, you'd find the greatest distance in any lane, and move left/right/straight accordingly. 
This may not be the most elegant iteration of a solution, but I'm sure I'll look back on it years from now and cringe so hard that my face melts off
```javascript
function controlCar(scanArray) {
    var max = Math.max(...scanArray);
    for (let i = 0; i < 16; i++) {
        if (scanArray[i] == max) {
            if (i == 8) {
                return 0;
            } else if (i <= 7) {
                return -1;
            } else {
                return 1;
            }
        }
    }
}
```
Success! (though I did experience the "that was it?" vibe)  
![image](https://i.imgur.com/hBclFw6.png)
Flag: `CTF{cbe138a2cd7bd97ab726ebd67e3b7126707f3e7f}`
