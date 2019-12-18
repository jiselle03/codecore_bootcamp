# Keep asking user for input and add their input to an array until they type "exit".

# After that print out the number of input they've entered and the words. For example print:

# You've entered 5 words:
# 1. Hi
# 2. Hello
# 3. Hey
# 4. What's up?
# 5. Bye

arr = []
while true
    p "Enter input."
    input = gets.chomp
    if input != "exit"
        arr << input
    else
        p "You have entered #{arr.length} words:"
        for i in 0..arr.length - 1
            puts "#{i + 1}. #{arr[i]}"
        end 
    end
    break if input == "exit"
end