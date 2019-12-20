# Make two classes dog and bones. The dog class must have an initialize method that takes dog's colour 
# and type. The bone must have an initialize method that assigns a size for the bone.

# The dog class must have a give method that takes a bone object and adds it to an array of bones for 
# the dog. The dog can take a maximum of three bones so if you give it more than three it will will 
# print, I have too many bones.

# The dog class must have an eat bone method so that when you call it it removes a bone from the array 
# of bones and prints "yummy! I ate 'big' bone" the 'big' part comes from the size attribute of bone.

class Dog
    attr_accessor :color, :type, :max_bones

    def initialize color, type, max_bones: 3
        @color = color
        @type = type
        @max_bones = max_bones
        @bones = []
    end

    def add(bone)
        unless bone.is_a? Bone
            raise ArgumentError.new("You can only feed the dog bones!")
        end
        if @bones.length >= @max_bones
            p "I have too many bones!"
        else
            @bones << bone
        end
        self
    end

    def eat
        if @bones.length > 0
            p "Yummy! I ate a #{@bones[0].size} bone!"
            @bones.shift
        else
            p "I don't have any bones. :("
        end
        self
    end
end

class Bone
    attr_accessor :size

    def initialize size
        @size = size
    end
end

d = Dog.new "black", "shiba"
b1 = Bone.new "big"
b2 = Bone.new "small"

d.add(b1)
 .add(b2)
d.eat
 .eat
 .eat