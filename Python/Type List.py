'''
Write a program that takes a list and prints a message for each element in the list, based on that element's data type.

Your program input will always be a list. For each item in the list, test its data type. If the item is a string, concatenate it onto a new string. If it is a number, add it to a running sum. At the end of your program print the string, the number and an analysis of what the array contains. If it contains only one type, print that type, otherwise, print 'mixed'.

Here are a couple of test cases. Think of some of your own, too. What kind of unexpected input could you get? Different types.

#input
l = ['magical unicorns',19,'hello',98.98,'world']
#output
"The array you entered is of mixed type"
"String: magical unicorns hello world"
"Sum: 117.98"

# input
l = [2,3,1,7,4,12]
#output
"The array you entered is of integer type"
"Sum: 29"

# input
l = ['magical','unicorns']
#output
"The array you entered is of string type"
"String: magical unicorns"

'''

def typeList(alist):
    listType = ""
    for num in range(0,len(alist)-1):
        listType = type(alist[num])
        if listType != type(alist[num+1]):
            listType = 'mixed'
        elif listType is str:
            listType = 'string'
        elif listType is int:
            listType = 'integer'
    print 'The array you entered is of {} type'.format(listType)
    aString = ''
    aSum = 0
    for element in alist:
        if type(element) is str:
            aString += element + " "
        elif type(element) is int:
            aSum += element
    if listType is "string":
        print 'String: {}'.format(aString)
    elif listType is 'integer':
        print 'Sum: {}'.format(aSum)
    elif listType is 'mixed':
        print 'String: {}'.format(aString)
        print 'Sum: {}'.format(aSum)


l = ['magical unicorns',19,'hello',98.98,'world']
l1 = [2,3,1,7,4,12]
l2 = ['magical','unicorns']
typeList(l)
