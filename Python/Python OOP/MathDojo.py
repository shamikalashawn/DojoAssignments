class MathDojo(object):
    def __init__(self):
        self.result = 0


    def add(self, x=0, y=0):
        self.result += x + y
        return self
    def subtract(self, x=0, y=0):
        self.result -= (x + y)
        return self

md = MathDojo().add(2).add(2,5).subtract(3,2).result
print md.result
