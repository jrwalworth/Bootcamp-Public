from flask import Flask, request, render_template

app = Flask(__name__)

#home route
@app.route('/', defaults={'x':8, 'y':8})
#custom board route
def index(x, y):
    return render_template("index.html", x=x, y=y, color1='red', color2='black')

@app.route('/<int:x>')
def custom_x(x):
    return render_template("index.html", x=x, y=8, color1='red', color2='black')

#Ninja Bonus - route to take in two parameters /x/y
@app.route('/<int:x>/<int:y>')
def custom_xy(x, y):
    return render_template("index.html", x=x, y=y, color1='red', color2='black')

# route to only change one color
@app.route('/<int:x>/<int:y>/<string:color1>')
def custom_onecolor (x, y, color1):
    return render_template("index.html", x=x, y=y, color1=color1, color2='black')

#To Do: Sensei Bonus - route to take in 4 parameters /x/y/color1/color2
@app.route('/<int:x>/<int:y>/<string:color1>/<string:color2>')
def custom_colorboard (x, y, color1, color2):
    return render_template("index.html", x=x, y=y, color1=color1, color2=color2)

if __name__=="__main__":
    app.run(debug=True)
