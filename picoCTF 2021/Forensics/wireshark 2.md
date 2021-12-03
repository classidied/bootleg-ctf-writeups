# Wireshark 2

- filter dns packets; they have base64 codes in the links
- encode "picoCTF{", "}" in base64
  - `picoCTF{` -> `cGljb0NURns=` (fun fact this won't show up in the filters cause of some padding thing at the end or something)
  - `}` -> `fQ==`
- filter the packets by `dns contains "cGljb0NURns=" or dns contains "fQ=="`
- ![image](https://i.imgur.com/uDXQTLH.png)
- notice that the destination IP address is either `18.217.1.57` or `192.168.38.104`
- use the filter `dns contains "amazon" and ip.dst == 18.217.1.57` to remove duplicate links
- ![image](https://i.imgur.com/9L6In74.png)
- we get the encoded strings:
  - `cGljb0NU`
  - `RntkbnNf`
  - `M3hmMWxf`
  - `ZnR3X2R1`
  - `YWRiZQVm`
  - `fQ==`
- joining them and decoding from base64: 
  - `cGljb0NURntkbnNfM3hmMWxfZnR3X2R1YWRiZQVmfQ==` -> `picoCTF{dns_3xf1l_ftw_deadbeef}`