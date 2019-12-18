# Given a string such as "abcd". Generate an array that gives every 2-letter combination 
# that are adjacent so your code will generate: ["ab", "bc", "cd"]
# Given a string 123456: ["12", "23", "34", "45", "56"]

str = "abcd"
arr = []

(0...str.length - 1).each do |n|
    arr.push(str[n] << str[n + 1])
end

p arr