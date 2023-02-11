## VALANDOS IŠ DROPDOWN
```
=LOOKUP(10^6,1*MID([@Veikla],MIN(FIND({0,1,2,3,4,5,6,7,8,9},[@Veikla]&"0123456789",FIND("iki"," "&[@Veikla]&" "))),{2,3,4,5,6}))
```
## APRIBOJIMAI DATA VALIDATION
```
=M56 >= N56
```


## 
Teorija:
Target	Criteria
Cells with 3 characters	```"???"```
Cells equal to ```"xyz", "xaz", "xbz", etc	"x?z"```
Cells that begin with ```"xyz"	"xyz*"```
Cells that end with ```"xyz"	"*xyz"```
Cells that contain ```"xyz"	"*xyz*"```
Cells that contain text in A1	```"*"&A1&"*"```

```
=SUMIFS(N19:N28,C19:C28,"*,*")
=SUMIFS(N19:N28,C19:C28,"*E")
```
