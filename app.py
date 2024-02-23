from flask import Flask, send_from_directory,request,json
from flask_cors import CORS
import json
import os

app = Flask(__name__, static_folder="./build", static_url_path="/")
CORS(app)


@app.route("/", methods=["GET"])
def index():
    return send_from_directory(app.static_folder, "index.html")

import datetime

x = datetime.datetime.now()



@app.route('/data/')
def getProjectInfo():
    """
    Returns an API response containing information about the project and the 
    current date and time.

    Returns:
        dict: A dictionary containing the project information
    """
    return {
        'Name': "Project123",
        "ID": "22",
        "Date": x,
        "checkedOutQty": [19, 22]
    }


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=False, port=os.environ.get("PORT", 81))
