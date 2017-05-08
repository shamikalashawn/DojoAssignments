class Product(object):
    """Create objects of Product that have a price, item name, weight, brand, cost, and status."""
    def __init__(self, price, item_name, weight, brand, cost):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.cost = cost
        self.status = "for sale"

    def sell(self):
        self.status = "sold"
        return self
    def addTax(self, tax):
        return self.price * tax
    def Return(self, reason):
        if reason.lower() == 'defective':
            self.price = 0
            self.status = reason
        elif reason.lower() == 'in the box, like new':
            self.status = 'for sale'
        elif reason.lower() == 'box opened':
            self.status = 'used'
            self.price = self.price * .2
    def displayInfo(self):
        print 'Price: {} \nItem Name: {} \nWeight: {} \nBrand: {} \nCost: {} \nStatus: {}'.format(self.price, self.item_name, self.weight, self.brand, self.cost, self.status)
        return self

cereal = Product(2.99, 'Cheerios', '3lbs', 'Cheerios', 2.99)

cereal.displayInfo()
