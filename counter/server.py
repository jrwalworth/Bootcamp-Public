#!/usr/bin/env python
from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)  
app.secret_key = 'lh$#sdf435@#634sdn@#'

@app.route('/')
def index():
    if 'key' not in session:
        session['key'] = 1
        print('Key exists!')
    else:
        session['key'] += 1
    return render_template("index.html")

#Ninja Bonus - reset the counter using reset button
@app.route('/destroy_session')
def destroy():
    session.clear()
    return redirect('/')

#Ninja Bonus to add one more to the refresh (add two)
@app.route('/add_two')
def add_two():
    #add two to session count
    session['key'] += 1
    return redirect('/')

#To Do Sensei Bonus: Add form that allows user to specify the increment of the counter.

'''To Do Sensei Bonus: Adjust code to display both how many times the user actually visited the page
                        as well as the value of the counter
'''

#To Do Sensei Bonus: Decode the cookie information as show in the video.

if __name__ == "__main__":
    app.run(debug=True) 