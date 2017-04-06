'''
Write the following functions.

Part I
Create a function called draw_stars() that takes a list of numbers and prints out *.

For example:

x = [4, 6, 1, 3, 5, 7, 25]

draw_stars(x)should print the following in when invoked:

****
******
*
***
*****
*******
*************************

'''
x = [4, 6, 1, 3, 5, 7, 25]

def draw_stars(alist):
    for idx in range(0, len(alist)):
        for num in range(0, alist[idx]):
            if num < alist[idx] - 1:
                print '*',
            elif num == alist[idx] - 1:
                print '*'

# draw_stars(x)
'''
Part II
Modify the function above. Allow a list containing integers and strings to be passed to the draw_stars() function. When a string is passed, instead of displaying *, display the first letter of the string according to the example below. You may use the .lower() string method for this part.

For example:

x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

draw_stars(x) should print the following in the terminal:

****
ttt
*
mmmmmmm
*****
*******
jjjjjjjjjjj

'''
x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

def draw_stars(alist):
    for idx in range(0, len(alist)):
        if type(alist[idx]) is int:
            for num in range(0, alist[idx]):
                if num < alist[idx] - 1:
                    print '*',
                elif num == alist[idx] - 1:
                    print '*'
        elif type(alist[idx]) is str:
            for ber in range(0, len(alist[idx])):
                if ber < len(alist[idx]) - 1:
                    print alist[idx][0].lower(),
                elif ber == len(alist[idx]) - 1:
                    print alist[idx][0].lower()

draw_stars(x)
