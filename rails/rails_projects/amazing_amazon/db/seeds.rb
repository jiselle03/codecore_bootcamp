# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.destroy_all()

1000.times do
    Product.create(
        title: Faker::Movies::BackToTheFuture.character,
        description: Faker::Movies::StarWars.quote,
        price: Faker::Number.decimal(l_digits: 2),
        created_at: Faker::Date.backward(days:365 * 5),
        updated_at: Faker::Date.backward(days:365 * 5)
    )
end

puts Cowsay.say("Generated #{Product.count} products", :dragon)