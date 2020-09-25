from flask import Blueprint, render_template, request,abort
from jinja2 import TemplateNotFound
from controller.userControllers import UserController
from controller.orderControllers import OrderController


order_routes = Blueprint('order_routes', __name__)

@order_routes.route('/orderlist', methods=['GET'])
def order_list():
    try:
        orderControllers = OrderController()
        return orderControllers.all_orders()
    except TemplateNotFound:
        abort(404)

@order_routes.route('/neworder', methods=['PUT'])
def new_order():
    try:
        orderControllers = OrderController()
        return orderControllers.add_order()
    except TemplateNotFound:
        abort(404)
