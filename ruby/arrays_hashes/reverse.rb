# Ruby String class comes with a `reverse` method that reverses the order of characters in a string:

greeting = "hello world"

# Write a code that gives the same outcome of the reverse method. You can use any method from the Array class.

arr = greeting.split""
arr2 = []

# arr.each.with_index do |n, i|
#     arr2 << arr.slice(-i-1)
# end

# p arr2.join""


arr.each do |n|
    arr2.unshift n
end

p arr2.join""