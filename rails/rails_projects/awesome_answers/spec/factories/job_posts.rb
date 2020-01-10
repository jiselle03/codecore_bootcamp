FactoryBot.define do
  # FactoryBot methods:
    # FactoryBot.attributes_for(:job_post)
    # Returns a plain hash of the parameters required to create a job post
    # {
    #   title: <generated from our factory below>,
    #   description: <generated from our factory below>,
    #   min_salary: <generated from our factory below>,
    #   max_salary: <generated from our factory below>,
    #   company: <generated from our factory below>
    # }

    # FactoryBot.build(:job_post)
    # Returns a new unpersisted instance of a JobPost (using the factory)

    # FactoryBot.create(:job_post)
    # Returns a persisted instance of a JobPost (using the factory)

  # All your factories must always generate valid instances of your data.
  factory :job_post do
    title { Faker::Job.title }
    description { Faker::Job.field }
    min_salary { rand(20_001..100_000) }
    max_salary { rand(100_000..200_000) }
    company_name { Faker:: Company.name }
  end
end
