from flask import Flask, render_template, url_for, request, session, redirect,jsonify, make_response
from pymongo import MongoClient
from db import mongo
import json
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config import config
from routes.userRoutes import user_routes
from routes.orderRoutes import order_routes

import os

def run():
    app = Flask(__name__)
    CORS(app, resources={r"/api/*": {"origins": "*"}}, support_credentials=True)
    jwt = JWTManager(app)
    try:
        app.config['CORS_HEADERS'] = 'application/json'
        app.config['MONGO_DBNAME'] = config['MONGO_DBNAME']
        app.config['MONGO_URI'] = config['MONGO_URI']
        app.config['SECRET_KEY'] = config['SECRET_KEY']
        mongo.init_app(app)
        app.register_blueprint(user_routes, url_prefix='/userRoutes')
        app.register_blueprint(order_routes, url_prefix='/orderRoutes')
        app.run(debug=True)
        return app

    except ValueError as e:
        pass

if __name__ == '__main__':
    run()