# Given an array of questions like this:
questions = ["What is your name", "How are you?", "Is that right?", "Are you John?", "How is everything?"]
# Generate an array of questions whose total character count is greater than 15.

q2 = []
questions.each do |n|
    q2 << n if n.length > 15
end

p q2


p questions.select {|q| q.length > 15}