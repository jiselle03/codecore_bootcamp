class CookieJar
    def initialize(capacity = 10)
        @capacity = capacity
        @cookies = []
    end

    def add(cookie)
        unless cookie.is_a? Cookie
            raise ArgumentError.new("You can only put cookies in this jar!")
        end
        if @cookies.length >= @capacity
            puts "No more room, eat some of these cookies!"
        else
            @cookies << cookie
        end
        self
    end

    def take
        @cookies.pop
    end

    def details
        puts "This jar has #{@cookies.length} cookie(s)."
        puts "Here they are:"
        puts @cookies.map { |cookie| cookie.details }.join("\n")
    end
end