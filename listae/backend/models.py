from database import db

class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    quantity = db.Column(db.Integer, default=1)
    price = db.Column(db.Float, default=0.0)

    def to_dict(self):
        return {"id": self.id, "name": self.name, "quantity": self.quantity, "price": self.price}
