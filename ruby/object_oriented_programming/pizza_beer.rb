class Food
    attr_accessor :protein, :sugar, :fat
    def initialize protein, sugar, fat
        @protein = protein
        @sugar = sugar
        @fat = fat
    end     

end

class Pizza < Food
    attr_accessor :weight

    def initialize weight
        super protein, sugar, fat
        @weight = weight
    end
end

class Beer < Food
    attr_accessor :volume
    
    def initialize volume
        super protein, sugar, fat
        @volume = volume
    end
end