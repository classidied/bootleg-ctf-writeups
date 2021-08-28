# Moscow - Apartment

## Description/Storyline
It’s a cold day, and the snow is falling horizontally. It pierces your sight. You better use those extra pairs of socks that you were strangely given by the driver. Someone is waving on the other side of the street. You walk over to her. "Hi AGENT, I’m AGENT X, we’ve found the apartment of a person that we suspect got something to do with the mission. Come along!."

Challenge: Logic Lock (misc)
It turned out suspect's appartment has an electronic lock. After analyzing the PCB and looking up the chips you come to the conclusion that it's just a set of logic gates!

## What You'll Need
There was a [zip file](https://storage.googleapis.com/gctf-2021-attachments-project/419bcccb21e0773e1a7db7ddcb4d557c7d19b5a76cd421851d9e20ab451702b252de11e90d14c3992f14bb4c5b330ea5368f8c52eb1e4c8f82f153aea6566d56) containing a singular png:  
![image](https://i.imgur.com/UySyPWD.png)

## Solution
The objective is to find all the places where **1** must be set in order to reach an output of 1. Working backwards in Microsoft Paint, and with the help of this [image](https://www.circuitbasics.com/wp-content/uploads/2020/05/image-88.png), I did whatever the heck this was:  
![image](https://i.imgur.com/Xv12xRm.png)

Flag: `CTF{BCFIJ}`



