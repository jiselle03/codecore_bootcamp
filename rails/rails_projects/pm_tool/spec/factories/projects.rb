FactoryBot.define do
  factory :project do
    title { Faker::Movies::StarWars.character }
    description { Faker::Movies::StarWars.quote }
    due_date { Faker::Date.between(from: 30.days.ago, to: Date.today) }
    user
  end
end
