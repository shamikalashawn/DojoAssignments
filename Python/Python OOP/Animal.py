class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100
    def walk(self):
        print '{} is walking...'.format(self.name)
        self.health -= 1
        return self
    def run(self):
        print '{} is running...'.format(self.name)
        self.health -= 5
        return self
    def displayHealth(self):
        print "{}'s health is {}".format(self.name, self.health)
        return self

jaguar = Animal('Ernest')
jaguar.walk().walk().walk().run().run().displayHealth()

class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.health = 150
    def pet(self):
        print 'petting {}...'.format(self.name)
        self.health += 5
        return self


rover = Dog('Rover')
print rover.health
rover.walk().walk().walk().run().run().pet().displayHealth()
# rover.fly()

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170
    def fly(self):
        print '{} is flying...'.format(self.name)
        self.health -= 10
        return self
    def displayHealth(self):
        super(Dragon, self).displayHealth()
        print 'This is a dragon!'

eragon = Dragon('Eragon')
eragon.walk().walk().walk().run().run().fly().fly().displayHealth()

class Bird(Animal):
    def __init__(self, name):
        super(Bird, self).__init__(name)

tweety = Bird('Tweety')
# tweety.pet()
# tweety.fly()
tweety.displayHealth()
