FactoryBot.define do

  factory :news_article do
    title { Faker::TvShows::Friends.location }
    description { Faker::TvShows::Friends.quote }
    user
  end

end