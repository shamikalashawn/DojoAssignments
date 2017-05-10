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

class Store(object):
    """A store with products, a location, and an owner."""
    def __init__(self, products, location, owner):
        self.products = products
        self.location = location
        self.owner = owner

    def add_product(self, product_name, price, item_name, weight, brand, cost):
        product_name = Product(price, item_name, weight, brand, cost)
        self.products.append(product_name)
        return self
    def remove_product(self, product):
        for idx in range(0,len(self.products)):
            if self.products[idx] == product:
                idx2 = idx
                self.products.pop(idx2)
                break
        return self
    def inventory(self):
        print self.products
        return self

stopNgo = Store([], 'San Antonio', 'Sam Walton')
print stopNgo.products
stopNgo.add_product('cereal', 2.99, 'Cheerios', '3lbs', 'Cheerios', 2.99)
print stopNgo.products[0]
stopNgo.remove_product('cereal')
print stopNgo.products
print stopNgo.location
print stopNgo.owner
