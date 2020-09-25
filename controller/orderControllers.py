from flask import request,session, redirect,jsonify,render_template
from models.orderModel import OrderModel
import bcrypt


class OrderController():

    def __init__(self):
        pass

    def all_orders(self):
        order_list = OrderModel.get_orders_list(self)
        return (jsonify(order_list), 200)

    def add_order(self,time):
        order_list = OrderModel.get_orders_list(self)
        # customer_list = mongo.db.customers
        username = session['username']
        existing_customer = OrderModel.get_order(self,username)
        if existing_customer:
            return (jsonify('alrardy sign in to list'), 401)
        insert=OrderModel.insert_order(self,username,time)
        return (jsonify('user sign in to list'), 200)
