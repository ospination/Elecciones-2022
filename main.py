from flask import Flask


app = Flask(__name__)


@app.route("/index")

def index():
  animal = "dog"
  return render_template('index.html', value=animal)
