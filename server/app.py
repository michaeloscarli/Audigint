import os
from flask import Flask, send_from_directory

BUILD_PATH = '../build/'
app = Flask(__name__, static_folder = BUILD_PATH)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
  if(path == ""):
    return send_from_directory(BUILD_PATH, 'index.html')
  else:
    print(BUILD_PATH + path)
    if(os.path.exists(BUILD_PATH + path)):
      return send_from_directory(BUILD_PATH, path)
    else:
      return send_from_directory(BUILD_PATH, 'index.html')
