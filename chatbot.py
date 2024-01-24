from flask import Flask, request, jsonify
import openai

app = Flask(__name__, static_folder='frontend/build', static_url_path='/')

# Configure OpenAI API credentials
openai.api_key = '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'

@app.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.get_json()
    message = data['message']

    prompt = f"I have a fashion-related question: {message}"
    
    # Make a request to OpenAI API for the chatbot response
    response = openai.Completion.create(
        engine='text-davinci-003',
        prompt=prompt,
        max_tokens=50,
        n=1,
        stop=None,
        temperature=0.7,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )

    answer = response.choices[0].text.strip()

    return jsonify({'response': answer})

@app.route('/')
def serve_frontend():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run()
