require 'rails_helper'

RSpec.describe ProjectsController, type: :controller do
    def current_user
        @current_user ||= FactoryBot.create(:user)
    end

    describe '#new' do
        context 'with user signed in' do
            before do
                session[:user_id] = current_user.id
            end

            it 'should render the new template' do
                get :new
                expect(response).to(render_template(:new)) 
            end

            it 'should set an instance variable with a new project' do
                get :new
                expect(assigns :project).to be_a_new(Project)
            end
        
        end

        context 'with no user signed in' do
            it 'should redirect to session#new' do
                get :new
                expect(response).to redirect_to(new_session_path)
            end

            it 'should send a flash danger message' do
                get :new
                expect(flash[:danger]).to be
            end
        end

    end

    describe '#create' do

        def valid_request
            post(:create, params: { project: FactoryBot.attributes_for(:project) })
        end

        def invalid_request
            post(:create, params: { project: FactoryBot.attributes_for(:project, title: nil) })
        end

        context 'with user signed in' do

            before do
                session[:user_id] = current_user.id
            end

            context 'with valid parameters' do
    
                it 'should create a new project in the db' do
                    count_before = Project.count
                    valid_request
                    count_after = Project.count
                    expect(count_after).to eq(count_before + 1)
                end
    
                it 'should redirect to the show page of that project' do
                    valid_request
                    project = Project.last
                    expect(response).to(redirect_to(project_path(project)))
                end

                it 'associates the current_user to the created JobPost' do
                    valid_request
                    project = Project.last
                    expect(project.user).to eq(current_user)
                end
    
            end
    
            context 'with invalid parameters' do
    
                it 'should assign an invalid project as an instance variable' do
                    invalid_request
                    expect(assigns(:project)).to be_a(Project)
                    expect(assigns(:project).valid?).to be(false)
                end
    
                it 'should render the new template' do
                    invalid_request
                    expect(response).to render_template(:new)
                end
    
                it 'should not create a project in the db' do
                    count_before = Project.count
                    invalid_request
                    count_after = Project.count
                    expect(count_after).to eq(count_before)
                end
    
            end
        end

        context 'with no user signed in' do
            it 'should redirect to session#new' do
                valid_request
                expect(response).to redirect_to(new_session_path)
            end

            it 'should send a flash danger message' do
                valid_request
                expect(flash[:danger]).to be
            end
        end

    end

    describe '#show' do
        it 'should render the show template' do
            project = FactoryBot.create(:project)
            get(:show, params: { id: project.id })
            expect(response).to render_template(:show)

        end

        it 'should set an instance variable job_post for the shown object' do
            project = FactoryBot.create(:project)
            get(:show, params: { id: project.id })
            expect(assigns :project).to eq(project)

        end

    end

    describe '#destroy' do

        context 'with signed in user' do
            
            before do
                session[:user_id] = current_user.id
            end

            context 'as owner' do
                it 'should remove a Project from the db' do
                    project = FactoryBot.create(:project, user: current_user)
                    delete(:destroy, params: { id: project.id })
                    expect(Project.find_by(id: project.id)).to be(nil)
                end

                it 'redirects to the job posts index' do
                    project = FactoryBot.create(:project, user: current_user)
                    delete(:destroy, params: { id: project.id })
                    expect(response).to redirect_to projects_path
                end
            end

            context 'as non-owner' do

                it 'redirects to project show' do
                    project = FactoryBot.create(:project)
                    delete(:destroy, params: { id: project.id })
                    expect(response).to redirect_to project_path(project)
                end

                it 'sets a flash danger' do
                    project = FactoryBot.create(:project)
                    delete(:destroy, params: { id: project.id })
                    expect(flash[:danger]).to be
                end

                it 'does not remove a project' do
                    project = FactoryBot.create(:project)
                    delete(:destroy, params: { id: project.id })
                    expect(Project.find_by(id: project.id)).to eq(project)
                end
                
            end

        end

        context 'with no user signed in' do
            before do
                project = FactoryBot.create(:project)
                delete(:destroy, params: { id: project.id })
            end

            it 'should redirect to session#new' do
                expect(response).to redirect_to(new_session_path)
            end

            it 'should send a flash danger message' do 
                expect(flash[:danger]).to be
            end
        end

    end
end
