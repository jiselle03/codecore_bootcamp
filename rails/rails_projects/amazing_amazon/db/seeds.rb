# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.destroy_all()
Review.destroy_all()
User.destroy_all()

PASSWORD = "supersecret"  

super_user = User.create( 
    first_name: "Arya", 
    last_name: "Stark", 
    email: "noone@winterfell.gov", 
    password: PASSWORD,
    is_admin: true
) 

100.times do 
    first_name = Faker::Name.first_name 
    last_name = Faker::Name.last_name 
    User.create( 
        first_name: first_name, 
        last_name: last_name,  
        email: "#{first_name.downcase}.#{last_name.downcase}@example.com", 
        password: PASSWORD 
    )  
end 

users = User.all 
puts Cowsay.say("Created #{users.count} users", :tux)  
 
puts "Login with #{super_user.email} and password of '#{PASSWORD}'"

1000.times do
    user = users.sample 
    p = Product.create(
        title: Faker::Commerce.product_name,
        description: Faker::Movies::StarWars.quote,
        price: Faker::Number.decimal(l_digits: 2),
        created_at: Faker::Date.backward(days:365 * 5),
        updated_at: Faker::Date.backward(days:365 * 5),
        user_id: user.id
    )
    if p.valid?
        p.reviews = rand(0..15).times.map do
            user = users.sample
            Review.new(body: Faker::Movies::BackToTheFuture.quote, rating: Faker::Number.within(range: 1..5), user_id: user.id)
        end
    end
end

puts Cowsay.say("Generated #{Product.count} products and #{Review.count} reviews.", :dragon)