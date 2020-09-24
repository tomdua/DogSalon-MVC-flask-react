from flask import Flask, render_template, url_for, request, session, redirect,jsonify, make_response
from pymongo import MongoClient
from datetime import datetime
from db import mongo
import json
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config import config
from routes.routes import routes
import os

def run():
    app = Flask(__name__)
    CORS(app, support_credentials=True)
    jwt = JWTManager(app)
    try:
        app.config['MONGO_DBNAME'] = config['MONGO_DBNAME']
        app.config['MONGO_URI'] = config['MONGO_URI']
        app.config['SECRET_KEY'] = config['SECRET_KEY']
        mongo.init_app(app)
        app.register_blueprint(routes, url_prefix='/routes')
        app.run(debug=True)
        return app

    except ValueError as e:
        pass

if __name__ == '__main__':
    run()




