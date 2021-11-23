# Micro-CMS v1

## Info
| Challenge Name: | Micro-CMS v1 |
| ---- | ---- |  
| Difficulty: | Easy (2pts / flag) |  
| Skill Categories: | Web |  
| Number of Flags: | 4 |

## Solutions
The pages are all made with **Markdown**, and web challenges usually involve some sort of injection, so I wondered if there were Markdown injections, and there are!

Markdown editors can be exploited using XSS (Cross-Site Scripting) vulnerabilities. Unfortunately, this one detects blatant XSS attacks (or does it?):  
![image](https://i.imgur.com/E41uGem.png)

I also noticed that pages 1 and 2 were valid on the server, and any new pages created started indexing at 9 and up. All the pages between 3-8 (inclusive) were not found, and page 5 was forbidden. 

### Flags found in order:  
[Flag2](Flag2.md)
[Flag0](Flag0.md)

