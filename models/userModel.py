from db import mongo
from flask import request,json
import os

class UserModel():

    def __init__(self):
        pass

    def get_user(self, username):
        users = mongo.db.users
        find_user = users.find_one({'username' : username})
        return find_user

    # def getAllUser(self, _id):
    #     users = mongo.db.users.find()
    #     return toDictionaryArray(users)

    def register_user(self,_first_name, _last_name, _username, _password):
        users = mongo.db.users
        user_id = users.insert({'username': _username, 'password':_password,"firstname":_first_name, "lastname":_last_name,})
        new_id = users.find_one({'_id': user_id })
        return new_id

