class Rectangle
    attr_accessor(:length, :width)
  
    def initialize(length, width)
        if length < 0 || width < 0
            raise ArgumentError.new("Negative arguments not allowed.")
        end

      @length = length
      @width = width
    end
  
    def area
        length * width
    end
  
    def perimeter
        2 * (length + width)
    end

    def is_square?
        length == width
    end
  
  end