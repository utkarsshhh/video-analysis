from flask import Flask, request
from flask_cors import CORS
from moviepy.editor import *
import openai
import speech_recognition as sr
app = Flask(__name__)
CORS(app)

def read_movie(movie):
    video = VideoFileClip(movie)
    audio_file = video.audio
    audio_file.write_audiofile('mymovie.wav')
    r = sr.Recognizer()


@app.route('/upload_link',methods = ['POST'])
def upload_link():
    link = request.get_json()
    print ("link ",link)
    return '200'

@app.route('/upload_video',methods = ['POST'])
def upload_video():
    file1 = request.files[0]
    video_file = VideoFileClip(file1)
    return '200'


if (__name__=='__main__'):
    app.run()