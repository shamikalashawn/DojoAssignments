'''
This assignment has several parts. All of your code should be in one file that is well commented to indicate what each block of code is doing and which problem you are solving. Don't forget to test your code as you go!

Multiples
Part I - Write code that prints all the odd numbers from 1 to 1000. Use the for loop and don't use a list to do this exercise.

Part II - Create another program that prints all the multiples of 5 from 5 to 1,000,000.
'''

for number in range(1, 1001, 2):
    # print number
    pass

for number in range(5, 1000001, 5):
    # print number
    pass
'''
Sum List
Create a program that prints the sum of all the values in the list: a = [1, 2, 5, 10, 255, 3]
'''
a = [1, 2, 5, 10, 255, 3]
sum = 0
for number in a:
    sum += number
# print sum

'''
Average List
Create a program that prints the average of the values in the list: a = [1, 2, 5, 10, 255, 3]
'''
a = [1, 2, 5, 10, 255, 3]
sum = 0
for number in a:
    sum += number
average = sum/len(a)
print average
