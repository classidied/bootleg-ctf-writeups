# Flag2  

## Hints
- Sometimes a given input will affect more than one page
- The bug you are looking for doesn't exist in the most obvious place this input is shown  
  
## Solution  
How did I get this flag first? No clue I'm struggling to figure out the other ones :(
![image](https://i.imgur.com/vgJVRYR.png)   

I originally had checked the hints for Flag0, which stated to "try creating a new page". Knowing that I would need to use some sort of injection, I used a script injection (`<script>alert(1)</script>`) in the title field for a new page:  
![image](https://i.imgur.com/guMvUhX.png)

It looked like it didn't work:  
![image](https://i.imgur.com/NwH2LPe.png)

But upon clicking the go home button, it gives you the flag:  
![image](https://i.imgur.com/kDMDT0q.png)  
and the alert:  
![image](https://i.imgur.com/X4OaVyB.png)

## Flag: 
`5454cd2a6ce01c0b209966e954faf15f9e5d066ccb55ff1c125ea52d6d365215`

Note: while I was recreating this for the write-up, the website seemed to break; the alerts kept coming despite no injections thereafter, in fact, it broke so hard that restarting the instance still had issues
