from flask import Flask, request
from flask import render_template

app = Flask(__name__, static_url_path='')

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/')
def index_static():
    return app.send_static_file('index.html')