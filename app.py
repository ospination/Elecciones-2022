import os
import json
import random

import requests
import urllib.parse

from flask import Flask, flash, jsonify, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
from werkzeug.security import check_password_hash, generate_password_hash

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Ensure responses aren't cached


@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response
  
@app.route("/")
def index():
    partidos = ["Perros","Gatos","Caballos","Lobos","Aguilas","Zarigueyas"]
    votos = []
    for i in partidos:
      a = random.randrange(100,100000)
      votos.append(a)
    return render_template("index.html", partidos=partidos, votos=votos)
