from flask import Flask, request
from flask_cors import CORS
# from moviepy.editor import *
from moviepy.video.io.VideoFileClip import VideoFileClip
import openai
from pytube import YouTube
from youtube_transcript_api import YouTubeTranscriptApi
import speech_recognition as sr
import numpy as np
app = Flask(__name__)
CORS(app)

def read_movie(movie):
    video = VideoFileClip(movie)
    audio_file = video.audio
    audio_file.write_audiofile('mymovie.wav')
    r = sr.Recognizer()

@app.route('/get_transcript',methods = ['GET'])
def get_transcript():
    with open('transcript.txt') as reader:
        transcript = reader.read()
        return {'transcript':transcript}

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
    with open('transcript.txt','w') as writer:
        writer.write(transcript_string)

    return {'transcript':transcript_string}
    return '200'

@app.route('/upload_video',methods = ['POST'])
def upload_video():
    print ("hello")
    file1 = request.form
    video = request.files['video']
    vid_name = video.filename
    print (video.filename)
    if ('.mp4' in vid_name):
        video.save('testvid.mp4')
        video = VideoFileClip('testvid.mp4')
    elif ('.mov' in vid_name):
        video.save('testvid.mov')
        video = VideoFileClip('testvid.mov')

    audio_file = video.audio
    audio_file.write_audiofile("test_audio.wav")
    r = sr.Recognizer()

    # Load the audio file
    with sr.AudioFile("test_audio.wav") as source:
        data = r.record(source)

    # Convert speech to text
    text = r.recognize_google(data)
    print(text)
    with open('transcript.txt','w') as writer:
        writer.write(text)
    print ("before 200")
    return '200'

@app.route('/generate_summary',methods = ['GET'])
def generate_summary():
    with open('apiKey.txt','r') as reader:
        openai.api_key = reader.read()



if (__name__=='__main__'):
    app.run()