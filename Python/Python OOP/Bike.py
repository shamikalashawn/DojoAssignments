class Bike(object):
    """Creating bikes with a price, max speed, and miles."""
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def displayInfo(self):
        print "This bike costs {}, has a maxiumum speed of {} and a total number of miles of {}.".format(self.price, self.max_speed, self.miles)
        return self

    def ride(self):
        print "Riding..."
        self.miles = self.miles + 10
        return self

    def reverse(self):
        print "Reversing..."
        self.miles = self.miles - 5
        if self.miles < 0:
            self.miles = 0
        return self

bike1 = Bike(200, '25mph')
bike2 = Bike(150, '20mph')
bike3 = Bike(300, '40mph')

print "bike1 "
bike1.ride().ride().ride().reverse().displayInfo()

print "bike2 "
bike2.ride().ride().reverse().reverse().displayInfo()

print "bike3 "
bike3.reverse().reverse().reverse().displayInfo()
