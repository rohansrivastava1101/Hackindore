from flask import Flask, render_template
from googletrans import Translator


translator = Translator()

app = Flask(__name__)
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'


@app.route("/")
def main():
    return render_template('index.html')





@app.route("/translate/<text>", methods = ["GET"])
def translate(text):
	print(text)
	dialect = translator.detect(text).lang
	if dialect == 'hi':
		translated = translator.translate(text, dest='hi')
		print(translated.text)
		return translated.text
	else :
		print(text)
		return text


if __name__ == '__main__':
    app.run()