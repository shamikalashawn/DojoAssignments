'''
Build a simple program using the NumPy module.

You might have heard of NumPy. It's a library created for handling more complex mathematical functions. NumPy is often cited as being an important asset in any Data Scientist's toolkit and is widely used by scientists, mathematicians, engineers, and more.

Much like the module from the previous assignment, you'll want to install NumPy in a virtual environment. Find the instructions here.

Explore the library's documentation and give it a try starting with the Quickstart Guide.
'''
import numpy as np

# a = np.arange(15).reshape(5,3)

# print a # ndarray
# print a.shape # the dimension of the array in a tuple (n rows, m columns). the length of the shape tuple is the rank (# of dimensions) aka ndim
# print a.ndim # rank or # of dimensions
# print a.dtype.name # an object describing the type of the elements in the array
# print a.itemsize # the size in bytes of each element of the array.
# print a.size # the total number of elements of the array. This is equal to the product of the elements of shape.
# print type(a)
# b = np.array([6,7,8])
# print b
# print type(b)
# c = np.array([[1,2], [3,4]], dtype=complex)
# print c
# print np.zeros((3,4))
# print np.arange(10,30,5) #array with values between 10 and 30 (exclusive) with a step of 5
# when creating an array using floating point arguments, instead of using arange, use linspace which replaces the third argument of step as the number of elements you want
# print np.linspace(0,2,9)
