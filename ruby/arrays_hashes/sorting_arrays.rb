# You can sort an array in Ruby using the `.sort` method. There are many algorithms in Computer Science for 
# sorting arrays. We well learn some of them later. Without looking up any of those algorithms online, come up with 
# your own sorting algorithm (without using the `.sort` method). You will be able to compare yours with others later. 
# To emulate an unsorted array, you can use the `.shuffle` method as in:

array = (1..15).to_a.shuffle
 
for i in 0...array.length
    for j in 0...array.length
        if array[i] < array[j]
            array[i], array[j] = array[j], array[i]
        end 
    end
end

p array # array must sorted here: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]