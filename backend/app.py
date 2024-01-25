from flask import Flask, request
from flask_cors import CORS,cross_origin

app = Flask(__name__)
cors=CORS(app)

@app.route('/', methods=['POST'])
@cross_origin
def hello():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(host='0.0.0.0',port='8080')