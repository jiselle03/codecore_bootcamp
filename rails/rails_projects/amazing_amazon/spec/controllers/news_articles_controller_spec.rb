require 'rails_helper'

RSpec.describe NewsArticlesController, type: :controller do

    def current_user
        @current_user ||= FactoryBot.create(:user)
    end

    describe '#new' do

        context 'with user signed in' do
            before do
                session[:user_id] = current_user.id
            end

            it 'should render the new template' do
                get(:new)
                expect(response).to(render_template(:new)) 
            end

            it 'should set an instance variable with a new news article' do
                get(:new)
                expect(assigns(:news_article)).to(be_a_new(NewsArticle))
            end
        end

        context 'with no user signed in' do
            it 'should redirect to session#new' do
                get(:new)
                expect(response).to redirect_to(new_session_path)
            end

            it 'should send a flash danger message' do
                get(:new)
                expect(flash[:danger]).to be
            end
        end

    end

    describe '#create' do

        def valid_request
            post(:create, params: { news_article: FactoryBot.attributes_for(:news_article) })
        end

        def invalid_request
            post(:create, params: { news_article: FactoryBot.attributes_for(:news_article, title: nil) })
        end

        context 'with user signed in' do

            before do
                session[:user_id] = current_user.id
            end

            context 'with valid parameters' do

                it 'should create a new news_article in the db' do
                    count_before = NewsArticle.count
                    valid_request
                    count_after = NewsArticle.count
                    expect(count_after).to eq(count_before + 1)
                end

                it 'should redirect to the show page of that post' do
                    valid_request
                    news_article = NewsArticle.last
                    expect(response).to(redirect_to(news_article_path(news_article)))
                end
            end

            context 'with invalid parameters' do

                it 'should assign an invalid news_article as an instance variable' do
                    invalid_request
                    expect(assigns(:news_article)).to be_a(NewsArticle)
                    expect(assigns(:news_article).valid?).to be(false)
                end
                
                it 'should render the new template' do
                    invalid_request
                    expect(response).to(render_template(:new))
                end
                
                it 'should not create a news article in the db' do
                    count_before = NewsArticle.count
                    invalid_request
                    count_after = NewsArticle.count
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
            news_article = FactoryBot.create(:news_article)
            get(:show, params: { id: news_article.id })
            expect(response).to render_template(:show)

        end

        it 'should set an instance variable news_article for the shown object' do
            news_article = FactoryBot.create(:news_article)
            get(:show, params: { id: news_article.id })
            expect(assigns(:news_article)).to eq(news_article)
        end

    end

    describe '#destroy' do

        context 'with user signed in' do
            before do
                session[:user_id] = current_user.id
            end

            context 'as owner' do
                before do
                    @news_article = FactoryBot.create(:news_article, user: current_user)
                    delete(:destroy, params: { id: @news_article.id })
                end

                it 'should remove a NewsArticle from the db' do
                    expect(NewsArticle.find_by(id: @news_article.id)).to be(nil)
                end

                it 'redirects to the news articles index' do
                    expect(response).to redirect_to news_articles_path
                end
            end

            context 'as non-owner' do
                before do
                    @news_article = FactoryBot.create(:news_article)
                    delete(:destroy, params: { id: @news_article.id })
                end

                it 'redirects to news article show' do
                    expect(response).to redirect_to(news_article_path(@news_article))
                end

                it 'sets a flash danger' do
                    expect(flash[:danger]).to be
                end

                it 'does not remove a news article' do
                    expect(NewsArticle.find_by(id: @news_article.id)).to eq(@news_article)
                end
                
            end

        end

        context 'with no user signed in' do
            before do
                news_article = FactoryBot.create(:news_article)
                delete(:destroy, params: { id: news_article.id })
            end

            it 'should redirect to session#new' do
                expect(response).to redirect_to(new_session_path)
            end

            it 'should send a flash danger message' do 
                expect(flash[:danger]).to be
            end
        end
        
    end

    describe '#index' do
        it 'should render the index template' do
            get(:index)
            expect(response).to(render_template(:index)) 
        end
        it 'should render a list of news articles' do
            news_article1 = FactoryBot.create(:news_article)
            news_article2 = FactoryBot.create(:news_article)
            get(:index)
            expect(assigns(:news_articles)).to match_array([news_article1, news_article2])
        end
    end

    describe '#edit' do

        context 'with user signed in' do
            before do
                session[:user_id] = current_user.id
            end

            context 'as owner' do
                before do
                    @news_article = FactoryBot.create(:news_article, user: current_user)
                    get(:edit, params: { id: @news_article.id })
                end

                it 'should render the edit template' do
                    expect(response).to(render_template(:edit)) 
                end

                it 'should set an instance variable news_article for the object to edit' do
                    expect(assigns(:news_article)).to eq(@news_article)
                end
                
            end

            context 'as non-owner' do
                before do
                    @news_article = FactoryBot.create(:news_article)
                    get(:edit, params: { id: @news_article.id })
                end

                it 'redirects to news article show' do
                    expect(response).to redirect_to(news_article_path(@news_article))
                end

                it 'sets a flash danger' do
                    expect(flash[:danger]).to be
                end

                it 'does not remove a news article' do
                    expect(NewsArticle.find_by(id: @news_article.id)).to eq(@news_article)
                end
                
            end


        end

        context 'with no user signed in' do
            before do
                @news_article = FactoryBot.create(:news_article)
                get(:edit, params: { id: @news_article.id })
            end
            
            it 'should redirect to session#new' do
                expect(response).to redirect_to(new_session_path)
            end

            it 'should send a flash danger message' do
                expect(flash[:danger]).to be
            end
        end

    end

    describe '#update' do

        context 'with user signed in' do
            before do
                session[:user_id] = current_user.id
                @news_article = FactoryBot.create(:news_article, user: current_user)
            end

            context 'with valid parameters' do
                before do
                    @new_title = "New Title"
                    patch :update, params: { id: @news_article.id, news_article: { title: @new_title }}
                end

                it 'should update the news article in the db' do
                    expect(@news_article.reload.title).to eq(@new_title)
                end
                it 'should redirect to the show page of that post' do
                    expect(response).to(redirect_to(news_article_path(@news_article)))
                end
            end

            context 'with invalid parameters' do
                def invalid_request
                    patch :update, params: { id: @news_article.id, news_article: { title: nil }}
                end

                it "should not update news article" do
                    expect { invalid_request }.not_to change { @news_article.reload.title }
                end

                it "should render the edit template" do
                    invalid_request
                    expect(response).to render_template(:edit)
                end
            end
        end

        context 'with no user signed in' do
            before do
                @news_article = FactoryBot.create(:news_article)
                patch :update, params: { id: @news_article.id, news_article: { title: "New Title" }}
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
