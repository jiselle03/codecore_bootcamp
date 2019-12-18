# Given an array of arrays:
array = [[2,3,4], [5,6,7], [6,7,8]]

# Write a piece of code that will take that array and give back an array of arrays with each element 
# multiplied by itself so you will get back:
# [[4, 9, 16], [25, 36, 49], [36, 49, 64]]

r = []
arr2 = []

array.each do |n|
    n.each do |m|
        r << m*m
    end
    arr2 << r
    r = []
end

p arr2