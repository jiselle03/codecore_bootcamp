# CLI QUIZ
NUM_QUESTIONS = 3
correct = 0

puts "How many sides does a hexagon have? 

1- five
2- six
3- seven

Enter the correct number:"

ans_1 = gets.to_i

if ans_1 == 2
    correct += 1
end

puts "How many sides does a triangle have? 

1- three
2- six
3- eight

Enter the correct number:"

ans_2 = gets.to_i

if ans_2 == 1
    correct += 1 
end

puts "What is 1 + 1? 

1- 1
2- 2
3- 3

Enter the correct number:"

ans_3 = gets.to_i

if ans_3 == 2
    correct += 1
end

percent = (correct / NUM_QUESTIONS.to_f * 100).round

puts "You scored #{percent}%, you got #{correct} out of 3 questions correctly."
