def fun1(d,x,sw='Python'):
    global s1,s2
    if x in ('Himalaya','McGrawhill'):
    	for p in d:
         if sw =='Data Structures' and p ==sw:
            s1 = s1 + d[p][2]
         elif sw=='Python' and p == sw:
            s2 = s2 + d[p][1]


c = {'BPB':{'C':('Dennis Ritchie',12,150),'Python':('Mark pilgrim',30,275)},
    'Himalaya':{'Data Structures':('Grey Perry',5,385),'Python':('Allen',37,545)},
    'Mcgrawhill':{'Digital Computer':('MorrisMano',7,560),
    'Data Structures':('Micheal',8,450)}}
s1,s2 = 0,0
for x,y in c.items():
	fun1(y,x,sw='Data Structures')
    
for x,y in c.items():
	fun1(y,x)
print(s1,s2,end='#')