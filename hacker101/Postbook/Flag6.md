# Flag6

## Hints
- Deleting a post seems to take an ID that is not a number. Can you figure out what it is?

## Solution
From solving for Flag5, we know that the IDs are MD5 hashes. To delete a page, something like:  
`index.php?page=delete.php&id=eccbc87e4b5ce2fe28308fd9f2a7baf3`   
is appended to the url, where `eccbc87e4b5ce2fe28308fd9f2a7baf3` is the hash for `3`, which corresponds to the index of the first post made by **user**.   

So, we can try deleting a post that **user** didn't make. Let's try subbing the hash for `1` in the link instead, to delete the first post made by **admin**:
(The MD5 hash for `1` is `c4ca4238a0b923820dcc509a6f75849b`)  
![image](https://i.imgur.com/fFsYBKI.png)  

Once saved, we get the flag upon clicking delete!  
![image](https://i.imgur.com/O3exagj.png)  

## Flag
`dd20b926646d8accb22020dc28d509b9727144be46b40f65ea44341d31c79776`