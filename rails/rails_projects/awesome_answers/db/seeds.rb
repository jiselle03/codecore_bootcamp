# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Question.destroy_all
Answer.destroy_all

200.times do
    q = Question.create(
        title: Faker::Hacker.say_something_smart,
        body: Faker::ChuckNorris.fact,
        view_count: rand(100_000),
        created_at: Faker::Date.backward(days:365 * 5),
        updated_at: Faker::Date.backward(days:365 * 5)
    )
    if q.valid?
        q.answers = rand(0..15).times.map do
            Answer.new(body: Faker::GreekPhilosophers.quote)
        end
    end
end

puts Cowsay.say("Generated #{Question.count} questions and #{Answer.count} answers.", :frogs)