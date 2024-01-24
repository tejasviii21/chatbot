from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__, static_folder='frontend/build', static_url_path='/')
CORS(app)  # Enable CORS for all routes

# Configure OpenAI API credentials
openai.api_key = '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'

@app.route('/chatbot', methods=['POST'])
def chatbot():
    # print("saini")
    data = request.get_json()
    message = data['message']
    print(message)
    # prompt = f"I have a fashion-related question: {message}"
    
    # Make a request to OpenAI API for the chatbot response
    # response = openai.Completion.create(
    #     engine='text-davinci-003',
    #     prompt=prompt,
    #     max_tokens=50,
    #     n=1,
    #     stop=None,
    #     temperature=0.7,
    #     top_p=1,
    #     frequency_penalty=0,
    #     presence_penalty=0
    # )

    # answer = response.choices[0].text.strip()
    from openai import OpenAI

    client = OpenAI(api_key = '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')

    stream = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": message}],
        stream=True,
    )
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            print(chunk.choices[0].delta.content, end="")
    return jsonify({'response': chunk.choices[0].delta.content})

@app.route('/')
def serve_frontend():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run()