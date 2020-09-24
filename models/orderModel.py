from db import mongo

class OrderModel():

    def get(self):
        orders = mongo.db.order.find()
        orders_list = []
        for order in orders:
            data = {}
            data['first_name'] = order['first_name']
            orders_list.append(data)
        return orders_list