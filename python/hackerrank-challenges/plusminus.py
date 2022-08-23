from ast import If
from curses.ascii import isalpha


def plusMinus(arr):
    denom = len(arr)
    elementPos = 0
    elementNeg = 0
    elementZero = 0
    for i in arr:
        if i > 0:
            elementPos += 1
        elif i == 0:
            elementZero += 1
            
        else:
            elementNeg += 1

    print('{:0.6f}'.format((elementPos / denom)))
    print('{:0.6f}'.format((elementNeg / denom)))
    print('{:0.6f}'.format((elementZero / denom)))

myArray = [1,1,0,-1,-1]
plusMinus(myArray)
