from flask import request, jsonify
from flask_restful import Resource
from database import db
from models import Item

class ItemListResource(Resource):
    def get(self):
        items = Item.query.all()
        return jsonify([item.to_dict() for item in items])

    def post(self):
        data = request.get_json()
        new_item = Item(name=data["name"], quantity=data["quantity"], price=data["price"])
        db.session.add(new_item)
        db.session.commit()
        return new_item.to_dict(), 201

class ItemResource(Resource):
    def delete(self, item_id):
        item = Item.query.get(item_id)
        if not item:
            return {"message": "Item not found"}, 404
        db.session.delete(item)
        db.session.commit()
        return {"message": "Item deleted"}

def initialize_routes(api):
    api.add_resource(ItemListResource, "/items")
    api.add_resource(ItemResource, "/items/<int:item_id>")
