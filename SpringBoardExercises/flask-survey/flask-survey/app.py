from flask import Flask, request, render_template, redirect, flash, jsonify, session
from surveys import satisfaction_survey
#------------------#
app = Flask(__name__)
app.secret_key = 'thousand_sunny_17'

print('Initialize')
# question1 = satisfaction_survey.questions[0]
# Ex: question1[0].question => 'Have you shopped here before?'
def extract(qst):
    return qst.question

RESPONSES_KEY = "responses"
QUESTIONS = list(map(extract, satisfaction_survey.questions))

#--- Routes ---#
@app.route('/')
def home_page():
    return render_template('home.html')

@app.route("/begin", methods=["POST"])
def start_survey():
    session[RESPONSES_KEY] = []
    return redirect("/questions/0")

@app.route('/questions/<int:qst_num>')
def question_page(qst_num):
    responses = session.get(RESPONSES_KEY)

    question = QUESTIONS[qst_num]  
    text = satisfaction_survey.questions[qst_num].allow_text
    choices = satisfaction_survey.questions[qst_num].choices

    if (len(responses) != qst_num):
        flash(f"Invalid question id: {qst_num}.")
        return redirect(f"/questions/{len(responses)}")
    
    return render_template('qst.html', 
        render_question = question, question_num = qst_num, 
        question_choices = choices, text_allowed = text)

@app.route('/answer', methods = ['POST'])
def get_answer():
    user_input = request.form['answer']

    #Log answers to the session
    responses = session[RESPONSES_KEY]
    responses.append(user_input)
    session[RESPONSES_KEY] = responses

    if(len(responses) == len(QUESTIONS)):
        return redirect('/complete')
    else:
        return redirect(f'/questions/{len(responses)}')

@app.route('/complete')
def end_page():
    return render_template('complete.html')

@app.route("/results-json")
def example_json_route():
    """Return results from survey as JSON."""
    json_obj = session.get(RESPONSES_KEY)
    return jsonify(json_obj)