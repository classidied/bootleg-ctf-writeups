# Flag4

## Hints
- You can edit your own posts, what about someone else's?

## Solution
Every time an action was performed on the site, there were very clear parameters in the url that outlined them. 

By checking the params in the url when editing one of your (user's) posts, you get something like:  

`http://35.227.24.107/c776d38955/index.php?page=edit.php&id=15`  

Therefore, we just need to change the page id to someone else's page id. The first post made by **admin** has `id=1`, so we can modify the link to: `http://35.227.24.107/c776d38955/index.php?page=edit.php&id=1`  

And we can edit it now!  
![image](https://i.imgur.com/1sjoGVG.png)

Alternatively, you could go to the first post and edit the `page=` param to `edit.php` instead of `view.php`.

Upon saving, we get the flag.
![image](https://i.imgur.com/KDSxFgd.png)  

## Flag
`41db3bf02d7c99b47d37099baf40ee0eecefadb167a21058d2016dc29c366dab`

## Misc
I initially got this flag nearly randomly, I don't recall actually modifying the url. I ended up with this when I first found the flag:  
![image](https://i.imgur.com/VssH81m.png)

It was funny though
