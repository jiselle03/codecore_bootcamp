results = []
nums = [*1..100]

# For... in loop

for num in nums
    str = ''
    str << 'FIZZ' if num % 3 == 0
    str << "BUZZ" if num % 5 == 0
    str << num.to_s if str.length <= 0
    results << str
end

p results