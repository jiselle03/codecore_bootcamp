a = [15, "Hey", "Bye", [1, 2, 3]]
p a[0] # 15
p a[1] # "Hey"

# Arrays in Ruby are indexed by integers starting from 0
#  We can use square bracket notation to select an element

# Multi-dimensional arrays
m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
p m[1][1] #5

b = [1, 2, 3]
b.push(4) # Ruby has an array method '.push' that allows us to add elements to the end of an array
p b 
b.push 5 # We can omit parenthesis on method calls

# Shovel operator
b << 6 # Another way to push something into an array
p b # [1, 2, 3, 4, 5, 6]

# Use '.include?' method to check if an array has an element

p b.include?(1) # true

# Get the length of an array
arr = [1, 2, 3, 4, 5, 6]
p arr.length
p arr.count
p arr.size

# Turn a multi-dimensional array to a single-dimensional array
marr = [[1, 2, 3], [4, 5, 6]]
marr.flatten
p marr # [[1, 2, 3], [4, 5, 6]]

# Very often methods will have 2 different variations:
# 1) Will mutate the original value. These methods have '!' appended to the method name
# 2) One that will not mutate the original value

marr.flatten!
p marr # [1, 2, 3, 4, 5, 6]

# Methods to remove and add to the front of an array
a1 = [1, 2, 3]
# '.shift' removes one from the beginning
a1.shift
# '.unshift' adds one from the beginning
a1.unshift 1
p a1

# Turn a string into an array of elements
string = "hello codecore students"
p word_array = string.split(" ")

# Turning array to string
p word_array.join('*')

# Swapping elements of an array
a3 = [1, 2, 3]
a4 = a3[1], a3[0], a3[2]
p a4 # [2, 1, 3]

# Iterating over arrays

# In Ruby, there are no concepts of functions. If we want to execute a piece of code multiple times, 
# we use blocks. We can pass blocks as an argument to a method.

# '.each' allows us to do something for every element of an array
arr3 = [1, 2, 3, 4, 5, 6]
arr3.each { |n| p n } # We can define a block using curly braces

arr3.each do |n| # We can define a block using the do...end statement
    p n
end

arr4 = Array(1..5)
arr4.each { |n| p n**2 }

arr5 = [[1, 7, 3], [4, 4, 6], [7, 2, 9]]
arr5.each do |a|
    a.each do |n|
        p n**2
    end
end

arr5.flatten.each do |n|
    p n**2
end

# '.map' will do something on every element of an array and return a new array containing the result
arr6 = [1, 2, 3, 4, 5]
arr7 = arr6.map do |n|
    n * 2
end

arr8 = arr6.map.with_index do |n, i|
    n * i
end

# In Ruby everything is an object. 'array.map' will return an enumerable object which is similar to an array
# but it has a '.with_index' method that we can call to get an index

p arr6.map.class
# We can use the '.class' method to get the type of the object. In this case, arr6.map returns to us 
# the Enumerator class/type/object