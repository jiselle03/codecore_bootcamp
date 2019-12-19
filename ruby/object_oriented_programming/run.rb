require "./cookie.rb"
require "./oreo.rb"
require "./cookie_jar.rb"

cj = CookieJar.new(4)
cj.details
cookie = Cookie.new(4, 5)
puts "Adding cookies"
cj.add(cookie)
cj.add(Cookie.new(20, 20))
  .add(Cookie.new(20, 20))
  .add(Oreo.new(10, 10))
  .add(Cookie.new(5, 5))
cj.details

cj.take
cj.take
cj.details