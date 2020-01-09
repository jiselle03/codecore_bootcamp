require 'minitest/autorun'
require './rectangle.rb'

class RectangleTest < MiniTest::Test

    def test_area
        rectangle = Rectangle.new(3,4)
        area = rectangle.area
        assert_equal(12, area)
    end

    def test_perimeter
        rectangle = Rectangle.new(2,4)
        perimeter = rectangle.perimeter
        assert_equal(12, perimeter)
    end

    def test_is_square?
        rectangle = Rectangle.new(3,3)
        is_square = rectangle.is_square?
        assert(is_square)
        # Opposite of assert:
        refute(Rectangle.new(3,4).is_square?)
    end

    def test_initialize_raises_error_when_args_are_negative
        assert_raises ArgumentError do
            rectangle = Rectangle.new(-1,2)
        end
    end

end