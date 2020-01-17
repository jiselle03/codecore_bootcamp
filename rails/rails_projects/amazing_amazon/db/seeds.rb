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
Favorite.destroy_all()
Like.destroy_all()
Tag.destroy_all()
Vote.destroy_all()

PASSWORD = "supersecret"  

super_user = User.create( 
    first_name: "Arya", 
    last_name: "Stark", 
    email: "noone@winterfell.gov", 
    password: PASSWORD,
    is_admin: true
) 

50.times do 
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
puts Cowsay.say("Created #{users.count} users.", :frogs)  
puts "Login with #{super_user.email} and password of '#{PASSWORD}'."

10.times do
    Tag.create(
        name: Faker::Movies::StarWars.planet
    )
end

tags = Tag.all

250.times do
    random_date = Faker::Date.backward(days:365 * 5)
    p = Product.create(
        title: Faker::Commerce.product_name,
        description: Faker::Movies::StarWars.quote,
        price: Faker::Number.decimal(l_digits: 2),
        created_at: random_date,
        updated_at: random_date,
        user: users.sample
    )
    if p.valid?
        rand(0..15).times.map do
            r = Review.create(
                body: Faker::Movies::StarWars.wookiee_sentence, 
                rating: Faker::Number.within(range: 1..5), 
                product: p,
                user: users.sample
                )
            p.fans = users.shuffle.slice(0..rand(users.count))
            p.tags = tags.shuffle.slice(0..rand(tags.count))
            if r.valid?
                r.likers = users.shuffle.slice(0..rand(users.count))
                users.shuffle.slice(0..rand(users.count)).each do |user|
                    Vote.create(
                        review: r,
                        user: user,
                        is_up: [true, false].sample
                    )
                end
            end
        end
    end
end

puts Cowsay.say("Generated #{Product.count} products and #{Review.count} reviews.", :dragon)
puts Cowsay.say("Generated #{Favorite.count} favorites.", :tux)
puts Cowsay.say("Generated #{Like.count} likes.", :tux)
puts Cowsay.say("Generated #{Tag.count} tags.", :tux)
puts Cowsay.say("Generated #{Vote.count} votes.", :tux)