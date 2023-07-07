class Question:
    def __init__(self, prompt, answer):
        self.prompt = prompt
        self.answer = answer

# Create a list of questions
questions = [
    Question("What is the capital of France? ", "Paris"),
    Question("What is the largest planet in our solar system? ", "Jupiter"),
    Question("Which country is home to the kangaroo? ", "Australia")
]

def run_quiz(questions):
    score = 0
    for question in questions:
        user_answer = input(question.prompt)
        if user_answer.lower() == question.answer.lower():
            score += 1
    print("You got", score, "out of", len(questions), "correct!")

run_quiz(questions)
