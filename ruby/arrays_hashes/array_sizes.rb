# Given an array of words, generate an array of numbers that contains 
# the lengths of each word in the first array in the same order.

words = ["Sandro", "Jiselle", "Guacamole", "Daniel", "Sagar"]

word_lengths = words.map do |word|
    word.length
end

p word_lengths