# Flag2

## Hints
- You should definitely use "Inspect Element" on the form when creating a new post

## Solution
On the form to create a new post, there are a few hidden attributes, with one of them being **user_id**. 
![image](https://i.imgur.com/Lyw18Zf.png)  

By changing the value of it to anything else, ex.
```html
<input type="hidden" name="user_id" value="5">
```  
then clicking "Create post", we get the flag:  
![image](https://i.imgur.com/u6ywcTd.png)    
## Flag
`7f37f5e12d3925a82eaf9868ea516c6e27e84008f288e9f3749235fb0bd8c75f`
