from flask import Blueprint, render_template, request,abort
from jinja2 import TemplateNotFound
from controller.userControllers import UserController
from controller.orderControllers import OrderController
# from flask_cors import CORS, cross_origin
from functools import wraps

order_routes = Blueprint('order_routes', __name__)

# @cross_origin()
@order_routes.route('/orderlist', methods=['GET'])
def order_list():
    try:
        orderControllers = OrderController()
        return orderControllers.all_orders()
    except TemplateNotFound:
        abort(404)


@order_routes.route('/deleteorder', methods=['PUT'])

def delete_order():
    try:
        orderControllers = OrderController()
        return orderControllers.delete_order()
    except TemplateNotFound:
        abort(404)

# @order_routes.route('/<neworder>', defaults={'time': None})
# @order_routes.route('/neworder/<time>/', methods=['PUT'])
# def new_order(time):
#     try:
#         orderControllers = OrderController()
#         return orderControllers.add_order(time)
#     except TemplateNotFound:
#         abort(404)

@order_routes.route('/neworder', methods=['POST'])
def new_order():
    try:
        orderControllers = OrderController()
        return orderControllers.add_order()
    except TemplateNotFound:
        abort(404)
