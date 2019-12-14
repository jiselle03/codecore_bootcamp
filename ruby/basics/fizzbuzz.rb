#FizzBuzz

num_1 = gets.to_i
num_2 = gets.to_i

# Solution 1
for number in 1..100
    if number % num_1 == 0 && number % num_2 == 0
        puts "FizzBuzz" 
    elsif number % num_1 == 0
        puts "Fizz"
    elsif number % num_2 == 0
        puts "Buzz"
    else
        puts number
    end
end


# Solution 2
for number in 1..100
    result = ""
    result += "Fizz" if number % num_1 == 0
    result ++ "Buzz" if number % num_2 == 0
    if result.empty?
        puts number
    else
        puts result
    end
end