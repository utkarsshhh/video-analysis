from flask import Flask, request
from flask_cors import CORS
from moviepy.editor import *
import openai
import cv2
from youtube_transcript_api import YouTubeTranscriptApi
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
    video_id = link['link'].split('/')[3]
    print (video_id)
    try:
        transcript_list = YouTubeTranscriptApi.list_transcripts(video_id= video_id)
    except:
        try:
            video_id = link['link'].split('/')[4].split('?')[0]
            transcript_list = YouTubeTranscriptApi.list_transcripts(video_id=video_id)
        except:
            return {'err':'Transcript not found'}
    try:
        transcript = transcript_list.find_manually_created_transcript(['en'])
    except:
        try:
            transcript = transcript_list.find_generated_transcript(['en'])
        except:
            return {'err':'English Transcript not found'}

    complete_transcript = transcript.fetch()
    transcript_string = ''
    for i in complete_transcript:
        transcript_string += i['text'] + ' '
    print (transcript_string)
    return '200'

@app.route('/upload_video',methods = ['POST'])
def upload_video():
    # print ("hello")
    file1 = request.form
    print (file1['file1'])
    # print ("before video clip")
    # video_file = VideoFileClip('movie1.mov')
    # print ("after video clip"
    FILE_OUTPUT = 'outvid.mov'
    with open(FILE_OUTPUT, "w") as out_file:
        out_file.write(file1['file1'])

    video = VideoFileClip('outvid.mov')
    audio_file = video.audio
    print ("before 200")
    return '200'


if (__name__=='__main__'):
    app.run()