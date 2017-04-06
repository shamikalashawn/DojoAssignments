'''
Write a program that prints all the prime numbers and all the perfect squares for all numbers between 100 and 100000.

For all numbers between 100 and 10000 test that number for whether it is prime or a perfect square. If it is a prime number print "Foo". If it is a perfect square print "Bar". If it is neither print "FooBar". Do not use the python math library for this exercise. For example, if the number you are evaluating is 25, you will have to figure out if it is a perfect square. It is, so print "Bar".

This assignment is extra challenging! Try pair programming and pulling up a white board.
'''

def fooBar():
    for num in range(100, 100001):
        sqrt = num ** (0.5)
        sqrt2 = int(sqrt * 100)
        for number in range(2,11):
            if sqrt2 % 100 == 0: # perfect square
                print 'Bar'
                break
            elif num == 0 or num == 1: # prime number
                print 'Foo'
                break
            elif (num % number == 0) and (num != number):
                print 'FooBar'
                break
            else:
                print 'Foo'
                break

fooBar()
