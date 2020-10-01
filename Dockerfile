FROM ubuntu:18.04

# We copy just the requirements.txt first to leverage Docker cache
COPY ./requirements.txt /app/requirements.txt


RUN apt-get update 

RUN apt-get install -y python3 python3-dev python3-pip nginx

RUN pip3 install uwsgi

WORKDIR /app


RUN pip3 install --upgrade setuptools \
    && pip3 install --upgrade pip \
    && pip3 install -r requirements.txt \
    pip install python-bcrypt

COPY . /app

CMD ["python3","app.py","--host=0.0.0.0"]
