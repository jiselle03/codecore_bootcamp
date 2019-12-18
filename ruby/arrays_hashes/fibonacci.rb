# Given a number N from the user. Generate an array that contains the first N numbers of the fibonacci sequence.
# 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
# The sequence starts with 1 and then every number is the sum of the two previous numbers.

p "Enter an integer greater than 0."
n = gets.to_i

arr = []

for number in 1..n
    arr << 1
end

arr.each.with_index do |n, i|
    arr[i] = arr[i - 2] + arr[i - 1] if i != 0 && i != 1
end

p arr