'''
Assignment: String and List Practice
Use only the built-in methods and functions from the previous tabs to do the following exercises.

Find and Replace
In this string: str = "It's thanksgiving day. It's my birthday,too!" print the position of the first instance of the word "day". Then create a new string where the word "day" is replaced with the word "month".
'''
str = "It's thanksgiving day. It's my birthday,too!"
# print str[0] + str[1] + str[2]
modLength = len(str)-2
for number in range(0, modLength):
    word = str[number] + str[number + 1] + str[number + 2]
    if word == 'day':
        # print "The word 'day' first appears in str at index", number
        break
newStr = ''

#iterate through str
#add letters from str to newStr
#if come across word 'day', add 'month' instead

for number in range(0, len(str)):
    if str[number] == 'd' and str[number + 1] == 'a' and str[number + 2] == 'y':
        newStr += 'month'
    elif str[number - 1] == 'd' and str[number] == 'a' and str[number + 1] == 'y':
        continue
    elif str[number - 2] == 'd' and str[number - 1] == 'a' and str[number] == 'y':
        continue
    else:
        newStr += str[number]
# print newStr
'''
Min and Max
Print the min and max values in a list like this one: x = [2,54,-2,7,12,98]. Your code should work for any list.
'''
x = [2,54,-2,7,12,98]
max = x[0]
min = x[0]

for number in x:
    if number > max:
        max = number
    elif number < min:
        min = number
# print "Max for list x is", max, "and Min for list x is", min

'''
First and Last
Print the first and last values in a list like this one: x = ["hello",2,54,-2,7,12,98,"world"]. Now create a new list containing only the first and last values in the original list. Your code should work for any list.
'''
x = ["hello",2,54,-2,7,12,98,"world"]
# print 'The first item in list x is', x[0], "and the last item in list x is", x[len(x)-1]
newX = []
newX.append(x[0])
newX.append(x[len(x)-1])
# print newX

'''
New List
Start with a list like this one: x = [19,2,54,-2,7,12,98,32,10,-3,6]. Sort your list first. Then, split your list in half. Push the list created from the first half to position 0 of the list created from the second half. The output should be: [[-3, -2, 2, 6, 7], 10, 12, 19, 32, 54, 98]. Stick with it, this one is tough!
'''
x = [19,2,54,-2,7,12,98,32,10,-3,6]

for value in range(0, len(x)):
    for number in range(0, len(x)-1):
        if x[number] > x[number + 1]:
            temp = x[number + 1]
            x[number + 1] = x[number]
            x[number] = temp

print x
frontHalfList = x[0:len(x)/2]
backHalfList = x[(len(x)/2) : len(x)]
print backHalfList
fullList = []
fullList.append(frontHalfList)
print fullList
for number in backHalfList:
    fullList.append(number)

print fullList
