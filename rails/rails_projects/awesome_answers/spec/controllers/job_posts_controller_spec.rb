require 'rails_helper'

# If you need to generate this file after your controller has already been created, use:
# rails g rspec:controller job_posts

RSpec.describe JobPostsController, type: :controller do

    describe '#new' do
        it 'should render the new template' do
            # GIVEN - defaults
            # WHEN - making a GET request to the new action
            get(:new)
            # THEN - the 'response' contains the rendered template of 'new'
            # The 'response' object is available in any controller. It is
            # similar to the 'response' available in Express Middleware.
            # However, we rarely interactw ith it directly in Rails.
            # RSpec makes it available when testing so that we can verify its contents.

            # Here we verify with the 'render_template' matcher that it contains
            # the right rendered template.
            expect(response).to(render_template(:new)) 
            
        end

        it 'should set an instance variable with a new job post' do
            get(:new)

            # assigns(:job_post) returns the value of an instance variable
            # @job_post from the instance of our JobPostsController.
            # Only available if we have added the gem 'rails-controller-testing'.
            expect(assigns(:job_post)).to(be_a_new(JobPost))
            # The above matcher will verify that the expected value is a
            # new instance of the JobPost Class(/Model)
        end

    end

    describe '#create' do
        # 'context' - functionality is the same as 'describe' but we
        # generally use it to organie groups of branching code paths.
        context 'with valid parameters' do
            def valid_request
                # The post method below simulates an HTTP request to the create
                # action of the JobPostsController using the POST verb.

                # This effectively simulates a user filling out a new form in the
                # browser and pressing submit.
                post(:create, params: { job_post: FactoryBot.attributes_for(:job_post) })
            end

            it 'should create a new job_post in the db' do
                count_before = JobPost.count
                valid_request
                count_after = JobPost.count
                expect(count_after).to eq(count_before + 1)
            end

            it 'should redirect to the show page of that post' do
                valid_request
                job_post = JobPost.last
                expect(response).to(redirect_to(job_post_path(job_post)))
            end

        end

        context 'with invalid parameters' do
            def invalid_request
                post(:create, params: { job_post: FactoryBot.attributes_for(:job_post, title: nil) })
            end

            it 'should assign an invalid job_post as an instance variable' do
                invalid_request
                expect(assigns(:job_post)).to be_a(JobPost)
                expect(assigns(:job_post).valid?).to be(false)
            end

            it 'should render the new template' do
                invalid_request
                expect(response).to(render_template(:new))
            end

            it 'should not create a job post in the db' do
                count_before = JobPost.count
                invalid_request
                count_after = JobPost.count
                expect(count_after).to eq(count_before)
            end

        end

    end

    describe '#show' do
        it 'should render the show template' do
            # GIVEN - a job post in the db
            job_post = FactoryBot.create(:job_post)

            # WHEN - a GET request is made to /job_posts/:id
            get(:show, params: { id: job_post.id })

            # THEN - the response contains the rendered show template
            expect(response).to render_template(:show)

        end

        it 'should set an instance variable job_post for the shown object' do
            job_post = FactoryBot.create(:job_post)
            get(:show, params: { id: job_post.id })
            expect(assigns(:job_post)).to eq(job_post)

        end

    end

    describe '#destroy' do
        it 'should remove a JobPost from the db' do
            job_post = FactoryBot.create(:job_post)
            delete(:destroy, params: { id: job_post.id })
            expect(JobPost.find_by(id: job_post.id)).to be(nil)
        end

        it 'redirects to the job posts index' do
            job_post = FactoryBot.create(:job_post)
            delete(:destroy, params: { id: job_post.id })
            expect(response).to redirect_to job_posts_path
        end

    end

end
