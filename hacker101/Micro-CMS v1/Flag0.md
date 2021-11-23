# Flag0  

## Hints
- Try creating a new page
- How are pages indexed?
- Look at the sequence of IDs
- If the front door doesn't open, try the window
- In what ways can you retrieve page contents?

## Solution
Through checking page indices, I noticed that the pages on the server were indexed with 1 and 2, and any new pages created started at index 9. Indices 3-8 (inclusive) were all unaccessible, and page 5 was forbidden.   

Since page 5 did have content, it should be possible to edit it. By changing the index to `5` on the request to edit a page (`http://35.227.24.107/1c974b9c69/page/edit/5`), we get the flag:  
![image](https://i.imgur.com/PPHsPEn.png)  

## Flag
`e3726a3a88fb60dbd12457335646f684e298b09b1e8e11e9df16a1e38171f9f9`
