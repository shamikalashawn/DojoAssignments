# declare a class and give it name User
class User(object): # A class is instructions for how to build many objects that share characteristics
    """Creating users for the site."""
    # the __init__ method is called every time a new object is created
    def __init__(self, name, email): # magic method which is automatically created and sometimes invoked when a new instance of a class is created.
        # self refers to the individual instance of the object.
        # set some instance variables, just like any variable we can call these anything
        # An attribute is a value or variable that is stored within an object
        self.name = name
        self.email = email
        self.logged = True
    # this is a method we created to help a user login
    # A method is a set of instructions and functions that are associated with an object. Any function included in the parent class defintion can be caled by an object of that class.
    def login(self):
        self.logged = True
        print self.name + " is logged in."
        return self # by returning self, we are allowing the methods to be chained
    def logout(self):
        self.logged = False
        print self.name + " is not logged in."
        return self
    def show(self):
        print "My name is {}. You can email me at {}.".format(self.name, self.email)
        return self
# An object is a data type built according to specifications provided by the class defintion
new_user = User('Anna', 'anna@anna.com')
print new_user.email
