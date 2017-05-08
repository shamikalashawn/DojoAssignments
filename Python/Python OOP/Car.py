class Car(object):
    """Create a Car object with a price, speed, fuel, and mileage."""
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if self.price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12

    def display_all(self):
        print 'Price: {} \nSpeed: {} \nFuel: {} \nMileage: {} \nTax: {}'.format(self.price, self.speed, self.fuel, self.mileage, self.tax)
        return self

volvo = Car(2000, '35mph', 'Full', '15mpg')
saturn = Car(2000, '5mph', 'Not Full', '105mpg')
volkswagon = Car(2000, '15mph', 'Kind of Full', '95mpg')
chevy = Car(2000, '25mph', 'Full', '25mpg')
lincoln = Car(2000, '45mph', 'Empty', '25mpg')
cadillac = Car(20000000, '35mph', 'Empty', '15mpg')

print 'volvo \n'
volvo.display_all()
print '\nsaturn \n'
saturn.display_all()
print '\nvolkswagon \n'
volkswagon.display_all()
print '\nchevy \n'
chevy.display_all()
print '\nlincoln \n'
lincoln.display_all()
print '\ncadillac \n'
cadillac.display_all()
