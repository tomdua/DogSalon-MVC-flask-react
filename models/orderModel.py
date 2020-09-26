from db import mongo
from flask import request,json
from datetime import datetime
from bson.objectid import ObjectId

class OrderModel():

    def __init__(self):
        pass

    def get_orders_list(self):
        orders = mongo.db.customers.find()
        orders_list = []
        for order in orders:
            data = {}
            data = {'Username': order['Username'], 'currentTime': order['currentTime'], 'arriveTime': order['arriveTime']}
            orders_list.append(data)
        return orders_list

    def get_order(self,username):
        orders = mongo.db.customers
        existing_customer=orders.find_one({'Username' : username})
        return existing_customer
        return None
        
    def insert_order(self,username,time):
        orders = mongo.db.customers
        new_customer = {"Username":username ,"currentTime":datetime.now() ,"arriveTime": time}
        orders.insert_one(new_customer)
    
    def _delete_order(self,username):
        orders = mongo.db.customers
        orders.delete_one({'Username' : username})
        return 'Succses delete this order'
        return 'Cant delete this order'



