from flask import Blueprint, render_template, request,abort
from jinja2 import TemplateNotFound
from controller.userControllers import UserController

routes = Blueprint('routes', __name__)

# @routes.route('/')
# def index():
#     user_controller = UserController() 
#     return user_controller.index()
    
@routes.route('/register', methods=['POST'])
def register():
    try:
        userController = UserController()
        return userController.register_user()
    except TemplateNotFound:
        abort(404)

@routes.route('/login', methods=['POST'])
def login():
    try:
        user_controller = UserController()
        return user_controller.login()
    except TemplateNotFound:
        abort(404)

@routes.route('/profile', methods=['GET'])
def profile():
    try:
        user_controller = UserController()
        return user_controller.profile()
    except TemplateNotFound:
        abort(404)       



# @routesBack.route('/order', methods=['GET'])
# def orderList():
#     user = UserControllers()
#     return user.login()

