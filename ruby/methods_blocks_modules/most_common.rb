# Create a method, most_common_letter, that takes a string as an argument 
# and returns the most common letter in the string. Ignore special characters 
# and include numbers.

def most_common_letter str
    str.gsub!(/[^0-9A-Za-z]/, "")
    arr = str.split("")
    letters = Hash.new(0)
    arr.each do |n|
        letters[n] += 1
    end
    p letters.key(letters.values.max)
end


most_common_letter("aaaabbc") # => "a"
most_common_letter("T a d c g d g d d n") # => "d"
most_common_letter("1111 monkeys on the wall") # => "1"
