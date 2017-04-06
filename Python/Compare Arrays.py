'''
Write a program that compares two lists and prints a message depending on if the inputs are identical or not.

Your program should be able to accept and compare two lists: list_one and list_two. If both lists are identical print "The lists are the same". If they are not identical print "The lists are not the same." Try the following test cases for lists one and two:
'''

l1 = [1,2,5,6,2]
l2 = [1,2,5,6,2]

l3 = [1,2,5,6,5]
l4 = [1,2,5,6,5,3]

l5 = [1,2,5,6,5,16]
l6 = [1,2,5,6,5]

l7 = ['celery','carrots','bread','milk']
l8 = ['celery','carrots','bread','cream']


def compareArrays(l1, l2):
    if len(l1) != len(l2):
        print 'The lists are not the same'
    else:
        for num in range(0, len(l1)):
                if l1[num] != l2[num]:
                    print 'The lists are not the same'
                    return False
        print 'The lists are the same'

compareArrays(l7, l8)
