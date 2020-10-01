from models.userModel import UserModel
from flask import request,session, redirect,jsonify,render_template,Flask
from flask_bcrypt import bcrypt
import os

class UserController():

    def __init__(self):
        pass

    def login(self):
        username=request.get_json()['username']
        find_user = UserModel.get_user(self,username)
        hashpass = find_user['password']
        if find_user:
            if bcrypt.hashpw(bytes(request.get_json()['password'], 'utf-8'), hashpass) == hashpass:
                session['username'] = request.get_json()['username']
                session['firstname'] = find_user['firstname']
                session['lastname'] = find_user['lastname']
                return (jsonify('Suscs username/password combination'),200) 
        return (jsonify('Invalid username/password combination'),401)

    def register_user(self):
        username=request.get_json()['username']
        find_user = UserModel.get_user(self,username)
        if find_user:
            return (jsonify('That username already exists!Try again'), 401)
        user_name = request.get_json()['username']
        first_name = request.get_json()['firstname']
        last_name = request.get_json()['lastname']
        hashpass = bcrypt.hashpw(request.get_json()['password'].encode('utf-8'), bcrypt.gensalt())
        user_id = UserModel.register_user(self, first_name, last_name, username, hashpass)
        if user_id:
            return (jsonify('User created'), 200)
        return (jsonify('Try'), 401)

    def profile(self):
      user_details = {"username": session['username'], "firstname":session['firstname'],"lastname":session['lastname']}
      return(jsonify(user_details), 200)


csercontroller=UserController()