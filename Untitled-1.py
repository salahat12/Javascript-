def CatAndMouses(catA:float,CatB:float,Moues:float)->str:
    dis_A_mouse=abs(catA-Moues)
    dis_B_mouse=abs(CatB-Moues)
    if dis_A_mouse<dis_B_mouse:
        print("cat A")
    elif dis_B_mouse<dis_A_mouse:
        print("Cat B")

try:
    catA=float(input('cat A pos:'))
    CatB=float(input('cat B pos:'))
    Moues=float(input('Mouse pos:'))
except:
    print ("pls enter valid number")
#---------------------------------------
def extract_freq(string : str)->dict:
    freq={}
    for s in string:
        freq[s]=freq.get(s,0)+1
    return freq

def all_equle(wordfreq:dict)->bool:
    value=wordfreq.values()  #   [1.1.1.2] list set
      #1.2
    return len( set(value))==1
def can_be_valid(wordfreq:dict)->bool:
    """
    
    """
    freq={}
    for i in wordfreq.value():
        freq[s]=freq.get(s,0)+1
    if len(freq)==1:
        return True
    if len(freq)>2:
        return False
    highfreq=max(freq.keys())#max(m,2)->3
    highcount=freq.get(highfreq)#4
    lowfreq=min(freq.keys())#min(3,2)
    lowcount=freq.get(lowfreq)#1
    #aabbcc{a:3,b:2,c:}
    print (highfreq)
    print(lowfreq)
    if highfreq==lowfreq+1 and highcount==1:
        return True
    return False




def is_valid(word:str)->str:
    wordfreq=extract_freq(word)
    if all_equle(wordfreq):
        return'yes'
    
    return'no'
      

word=input('enter your sherlok ')
print (is_valid)
