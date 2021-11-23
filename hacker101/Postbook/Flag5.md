# Flag5

## Hints
- The cookie allows you to stay signed in. Can you figure out how they work so you can sign in to user with ID 1?

## Solution
To check cookies, you'd look in the **application** section of inspect element. 
![image](https://i.imgur.com/llYhSi9.png)  

I accidentally right clicked on the value and saw the "Search Google" option,   
![image](https://cdn.discordapp.com/attachments/488107788329943042/912495814910283796/unknown.png)

which I thought was funny, so I checked, and it turns out that it's the MD5 hash for `2`.  
![image](https://i.imgur.com/5Vcp7QF.png)

~~the name of this repository is extremely appropriate~~

Since we need to sign into the user with ID `1`, we just need to [get it's MD5 hash](https://www.md5hashgenerator.com/): `c4ca4238a0b923820dcc509a6f75849b`  

Resetting the cookie's value, we get a new flag on the home page:  
![image](https://i.imgur.com/xDWYHj8.png)  

## Flag
`8c9813f4e32a44a7491940ee37056a8ceb7e0db71d7a46abb216c08f9a3815ad`