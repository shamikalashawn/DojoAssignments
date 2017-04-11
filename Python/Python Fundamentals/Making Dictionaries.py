'''
Create a function that takes in two lists and creates a single dictionary where the first list contains keys and the second values. Assume the lists will be of equal length.

Your first function will take in two lists containing some strings. Here are two example lists:
'''
name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]


'''
Here's some help starting your function.

def make_dict(arr1, arr2):
  new_dict = {}
  # your code here
  return new_dict
'''

def make_dict(arr1, arr2):
    new_dict = {}
    for idx in range(len(arr1)):
        new_dict[arr1[idx]] = arr2[idx]
    return new_dict

# print make_dict(name, favorite_animal)

'''
Hacker Challenge:
If the lists are of unequal length, the longer list should be used for the keys, the shorter for the values.
'''
def make_dict(arr1, arr2):
    new_dict = {}
    if len(arr1) > len(arr2):
        big = arr1
        small = arr2
    else:
        big = arr2
        small = arr1
    for idx in range(len(big)):
        try:
            new_dict[big[idx]] = small[idx]
        except IndexError:
             new_dict[big[idx]] = None
    return new_dict

name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["spider", "giraffe", "ticks", "dolphins", "llamas"]

print make_dict(name, favorite_animal)
