from flask import request,session, redirect,jsonify,render_template
import bcrypt
from models.orderModel import OrderModel


class OrderController():

    def __init__(self):
        pass

    def all_orders(self):
        order_list = OrderModel.get_orders_list(self)
        return (jsonify(order_list), 200)

    def add_order(self):
        time = request.get_json()['time']
        username = request.get_json()['username']
        order_list = OrderModel.get_orders_list(self)
        existing_customer = OrderModel.get_order(self,username)
        if existing_customer:
            return (jsonify('alrardy sign in to list'), 301)
        insert=OrderModel.insert_order(self,username,time)
        return (jsonify('user sign in to list'), 200)

    def delete_order(self):
        order_list = OrderModel.get_orders_list(self)
        username = request.get_json()['username']
        existing_customer = OrderModel.get_order(self,username)
        if existing_customer:
            _delete=OrderModel._delete_order(self,username)
            if(_delete=='Succses delete this order'):
                return (jsonify('Succses delete this order'), 200)
            return (jsonify('Can`t delete this order'), 400)
        return (jsonify('No existing customer '), 401)
        



