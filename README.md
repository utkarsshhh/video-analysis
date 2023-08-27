# video-analysis

This web application is used for summarising videos using Large Language Models(LLM). For this application we have used gpt-3.5-turbo model from [OpenAI](https://openai.com)  for summarizing the videos.


## Introduction

The objective of the application is to provide the summary of a video. The videos can be uploaded in the app in .mov or .mp4 format or else we can directly fetch videos from Youtube by providing the video URL in the app.


## Usage

### Installation

The Back-end code is built on Python 3.9 using the Flask framework and the Front-end is built on Angular 14.2.7. The IDE is used in the development of the back-end code is [PyCharm](https://www.jetbrains.com/pycharm/) and for the front-end it is [Visual Studio Code](https://code.visualstudio.com).The same IDE's can be used for the running the application by the users or any other IDE's supporting the mentioned environments.
Angular can be installed by following the steps [here](https://angular.io/guide/setup-local) and Python can be downloaded from [here](https://www.python.org/downloads/).

### Data

No data was required for training as I used the API of gpt3-3.5-turbo model for summarising the video and it didn't require any training. For testing the performance I picked random videos from YouTube and recorded videos of my own

### Code

The code is divided into two sections: 

1. __Front-end__ 
The Front-end code is based on Angular Framework and is present inside the directory __video-ui__ in the repository. The front-end can be run by executing the following command in the command prompt or terminal from inside the video-ui directory:

> ng serve

2. __Back-end__
The Back-end code is based on Flask framework in Python3.9 and is written in the file __app.py__ present in the repository. It can be run by executing the following command in the root directory:

> python app.py

The key for accessing the API is stored in the file apiKey.txt but that file is not uploaded on the repository due to privacy.

### Libraries

#### 1. [flask](https://flask.palletsprojects.com/en/2.2.x/)
#### 2. [Flask-Cors](https://flask-cors.readthedocs.io/en/latest/)
#### 3. [moviepy](https://pypi.org/project/moviepy/)
#### 4. [openai](https://openai.com/blog/openai-api)
#### 5. [youtube_transcript_api](https://pypi.org/project/youtube-transcript-api/)
#### 6. [speech_recognition](https://pypi.org/project/SpeechRecognition/)

### How it works

The landing page of the app contains an input field for entering the youtube video for which we need the summary and it also contains an option for directly uploading a video.
After submitting the link or the video the app redirects to the page where the transcript of the video is displayed in case any user wants to view or download that.
Then if the user clicks on generate summary it redirects to the summary page and displays the summary of the video.


## Conclusion

The summary is correctly being displayed on the webpage.