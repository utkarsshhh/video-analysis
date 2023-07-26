from flask import Flask, request
from flask_cors import CORS
from moviepy.editor import *

app = Flask(__name__)
CORS(app)



@app.route('/upload_link',methods = ['POST'])
def upload_link():
    link = request.get_json()
    print ("link ",link)
    return '200'

if (__name__=='__main__'):
    app.run()