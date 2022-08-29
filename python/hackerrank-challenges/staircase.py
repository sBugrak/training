

def staircase(n):
    for i in range(n+1):
        if not (i == 0):
            x = ('#'*i).rjust(n, " ")
            print(x)
staircase(6)