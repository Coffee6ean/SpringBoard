from flask import Flask, request, render_template, redirect, flash, jsonify
from surveys import satisfaction_survey
#------------------#
app = Flask(__name__)

print('Initialize')
# question1 = satisfaction_survey.questions[0]
# Ex: question1[0].question => 'Have you shopped here before?'
def extract(qst):
    return qst.question

QUESTIONS = list(map(extract, satisfaction_survey.questions))
RESPONSES = []

#--- Routes ---#
@app.route('/')
def home_page():
    return render_template('home.html')

@app.route("/begin", methods=["POST"])
def start_survey():
    return redirect("/questions/0")

@app.route('/questions/<int:qst_num>')
def question_page(qst_num):
    question = QUESTIONS[qst_num]  
    text = satisfaction_survey.questions[qst_num].allow_text
    choices = satisfaction_survey.questions[qst_num].choices
    return render_template('qst.html', 
        render_question = question, question_num = qst_num, 
        question_choices = choices, text_allowed = text)

@app.route('/answer', methods = ['POST'])
def get_answer():
    user_input = request.form['answer']
    RESPONSES.append(user_input)
    if(len(RESPONSES) == len(QUESTIONS)):
        return redirect('/complete')
    else:
        return redirect(f'/questions/{len(RESPONSES)}')

@app.route('/complete')
def end_page():
    return render_template('complete.html')

@app.route("/results-json")
def example_json_route():
    """Return results from survey as JSON."""
    return jsonify(RESPONSES)