# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

PASSWORD = "supersecret"  
 
Answer.delete_all 
Question.delete_all 
User.delete_all 

super_user = User.create( 
    first_name: "Jon", 
    last_name: "Snow", 
    email: "js@winterfell.gov", 
    password: PASSWORD  
) 

10.times do 
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

200.times do
    user = users.sample 
    q = Question.create(
        title: Faker::Hacker.say_something_smart,
        body: Faker::ChuckNorris.fact,
        view_count: rand(100_000),
        created_at: Faker::Date.backward(days:365 * 5),
        updated_at: Faker::Date.backward(days:365 * 5),
        user_id: user.id
    )
    if q.valid?
        q.answers = rand(0..15).times.map do
            user = users.sample
            Answer.new(body: Faker::GreekPhilosophers.quote, user_id: user.id)
        end
    end
end

puts Cowsay.say("Generated #{Question.count} questions", :frogs)
puts Cowsay.say("Generated #{Answer.count} answers", :tux)