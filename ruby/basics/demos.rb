# Ruby Basics

# 'print' to output to the terminal like 'console.log'
print("Hello World")
# Doesn't add a new line (i.e. \n)
print "Hello World 2" 
# Bracket syntax for method arguments is optional

# There's also 'puts'
puts("Hello from puts")
# Adds a new line like 'console.log'

# And there's `p`
p("I'm printing with p")
# Prints a value how ruby sees it. Useful for debugging. Also returns the value passed to p().
# Similar to 'console.dir'

# Single line comment

print "Hello World 3" #Inline comments work too

=begin
    Multi
    line
    comment
=end

# Variables
# Creating variables does not require a keyword

a = 1
b = a * 10

a1 = 10
# 1a = 12 will give us an error

# Ruby convention for variable name is snake_case
first_name = "Jiselle"

# If you start a variable name with a capital, it's considered a constant
# Constants in Ruby can be changed, but Ruby will give you a warning
# Convention is to use ALL CAPS for naming constants

MAX_PASSWORD_ATTEMPTS = 5

# Receiving user input

print 'What is your name?'
name = gets
puts 'Hello' + name + 'You are great!' 
# captures the 'enter' after you type your name which will print 'You are great!' on a new line

# chomp is a string method that removes the last new line character at the end of a string
first_name = gets.chomp
print 'What is your last name?'
last_name = gets.chomp
puts 'Hello ' + first_name + last_name

# Everything is an object (has a class)
# To know the 'type' of value, use the .class method
1.class # => Integer
3.14.class # => Float
"My String".class # => String

# Strings
"I'm a string"
'I\'m also a string'

# You can use string interpolation only with double quotes
# Strings defined with single quotes are considered literal strings
# Use #{ expression } inside a string to interpolate a Ruby expression
"#{1 + 10} is not equal to #{8 + 8}"

# Strings are mutable

puts "What is your name?"
name = gets.chomp
puts name.capitalize
puts name.upcase
puts name.downcase
puts name.swapcase
puts ("Name reversed: #{name.reverse}")

# To remove duplicate neighboring characters in a string
"Helllllllllllloooooooooooo mmmmmmmyyyyyyy nnammeeee is Jiselle".squeeze
# squeeze! will mutate the string

# To search and replace a part of a string use .sub or .gsub
str = "My name is Joe and your name is Bob"
str.sub("name", "title")
# sub will replace first occurrence, gsub will replace all

# Number
1
10
100
100_300 # '_' are ignored in numbers
100_000_000

# to_i / to_f
# all integers will return integer
5 / 3 # => 1
5.0 / 3 # will return float
5.to_f / 3

# Operations
1 + 1
1 - 1
1 / 1
1 * 1
1 % 1
1 ** 1

(1 > 4) || (8 > 4) # true
(1 > 5) && (6 > 4) # false

#if, else, and friends

if true
    # My ifs block
    puts "When condition is true"
end # we terminate code blocks with 'end'

if false
    puts "when condition is false"
else 
    puts "The default condition with else"
end

# Inline conditionals
# You can do single line conditionals if you write 'if' at the end of the line

puts "It's true" if true

temp = 10
puts "It's cold" if temp < 10
puts "It's cold" unless temp >= 10

# Loops

# while
x = 1
while x <= 100
    puts x
    x += 1
end

print "How many times should I repeat?"
number = gets.to_i
i = 0
while i < number
    print "Hello World"
    i += 1
    # You can use the keyword 'break' to stop any loop early
    break if i > 100
end

# loop do

x = 1
loop do
    x += 1
    puts x
    break if x == 12
end

# for
for number in 1..100 # inclusive of 100
    puts number
end

for number in 1...100 # not inclusive of 100
    puts number
end

num_times = gets.to_i
for number in 1..num_times
    puts number
end