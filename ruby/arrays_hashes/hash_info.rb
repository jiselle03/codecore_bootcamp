# Ask the user for personal information: first name, last name, city of birth and age. 
# Then store that information in a hash. After that loop through the hash and display the results, for example:
# Your first name is Tam.
# Capitalize the inputs from the user if they are capitalizable.

info = {}

p "What is your first name?"
info[:"first name"] = gets.chomp.capitalize
p "What is your last name?"
info[:"last name"] = gets.chomp.capitalize
p "What is your city of birth?"
info[:"city of birth"] = gets.chomp.capitalize
p "What is your age?"
info[:"age"] = gets.chomp.capitalize

info.each do |key, val|
    p "Your #{key} is #{val}."
end