'''
Write a program that takes a list of strings and a string containing a single character, and prints a new list of all the strings containing that character.

Hint: how many loops will you need to complete this task?
'''

# input
l = ['hello','world','my','name','is','Anna']
char = 'o'
# output
n = ['hello','world']


def findCharacters(alist, char):
    newList = []
    for string in alist:
        if char in string:
            newList.append(string)
    return newList

print findCharacters(l, char)
