'''
Create a series of functions based on the below descriptions.

Odd/Even:
Create a function called odd_even that counts from 1 to 2000. As your loop executes have your program print the number of that iteration and specify whether it's an odd or even number.

Your program output should look like below:

Number is 1.  This is an odd number.
Number is 2.  This is an even number.
Number is 3.  This is an odd number.
...
Number is 2000.  This is an even number.
'''
def odd_even():
    for number in range(1,2001):
        if number % 2 == 0:
            print 'Number is {}.  This is an {} number'.format(number, 'even')
        else:
            print 'Number is {}.  This is an {} number'.format(number, 'odd')

# odd_even()
'''
Multiply:
Create a function called 'multiply' that iterates through each value in a list (e.g. a = [2, 4, 10, 16]) and returns a list where each value has been multiplied by 5.

The function should multiply each value in the list by the second argument. For example, let's say:

a = [2,4,10,16]
Then:

b = multiply(a, 5)
print b
Should print [10, 20, 50, 80 ].
'''
a = [2,4,10,16]
def multiply(alist, num):
    for idx in range(0,len(alist)):
        alist[idx] = alist[idx] * num
    return alist

# print multiply(a, 5)
'''
Hacker Challenge:
Write a function that takes the multiply function call as an argument. Your new function should return the multiplied list as a two-dimensional list. Each internal list should contain the number of 1's as the number in the original list. Here's an example:

def layered_multiples(arr)
  # your code here
  return new_array
x = layered_multiples(multiply([2,4,5],3))
print x
# output
>>>[[1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]
'''

def layered_multiples(arr):
    new_array = []
    for idx in range(0, len(arr)):
        twoDlist = []
        for num in range(0, arr[idx]):
            twoDlist.append(1)
            if num == arr[idx] - 1:
                new_array.append(twoDlist)
    return new_array

x = layered_multiples(multiply([2,4,5],3))
print x
