from flask import Flask


app = Flask(__name__)


@app.route("/")

def index():
  animal = dog
  return render_template('index.html', value=animal)
