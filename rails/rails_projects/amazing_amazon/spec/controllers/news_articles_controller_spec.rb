require 'rails_helper'

RSpec.describe NewsArticlesController, type: :controller do

    describe '#new' do
        it 'should render the new template' do
            get(:new)
            expect(response).to(render_template(:new)) 
        end

        it 'should set an instance variable with a new news article' do
            get(:new)
            expect(assigns(:news_article)).to(be_a_new(NewsArticle))
        end
    end

    describe '#create' do
        context 'with valid parameters' do
            def valid_request
                post(:create, params: { news_article: FactoryBot.attributes_for(:news_article) })
            end

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
            def invalid_request
                post(:create, params: { news_article: FactoryBot.attributes_for(:news_article, title: nil) })
            end

            it 'should assign an invalid job_post as an instance variable' do
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
        it 'should remove a NewsArticle from the db' do
            news_article = FactoryBot.create(:news_article)
            delete(:destroy, params: { id: news_article.id })
            expect(NewsArticle.find_by(id: news_article.id)).to be(nil)
        end

        it 'redirects to the job posts index' do
            news_article = FactoryBot.create(:news_article)
            delete(:destroy, params: { id: news_article.id })
            expect(response).to redirect_to news_articles_path
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
        it 'should render the edit template' do
            news_article = FactoryBot.create(:news_article)
            get(:edit, params: { id: news_article.id })
            expect(response).to(render_template(:edit)) 
        end
        it 'should set an instance variable news_article for the object to edit' do
            news_article = FactoryBot.create(:news_article)
            get(:edit, params: { id: news_article.id })
            expect(assigns(:news_article)).to eq(news_article)
        end
    end

    describe '#update' do
        before do
            @news_article = FactoryBot.create(:news_article)
        end

        context 'with valid parameters' do
            it 'should not create or destroy news article in db' do
                count_before = NewsArticle.count
                new_title = "New Title"
                patch :update, params: { id: @news_article.id, news_article: { title: new_title }}
                count_after = NewsArticle.count
                expect(count_after).to eq(count_before)
            end
            it 'should update the news article in the db' do
                new_title = "New Title"
                patch :update, params: { id: @news_article.id, news_article: { title: new_title }}
                expect(@news_article.reload.title).to eq(new_title)
            end
            it 'should redirect to the show page of that post' do
                new_title = "New Title"
                patch :update, params: { id: @news_article.id, news_article: { title: new_title }}
                expect(response).to(redirect_to(news_article_path(@news_article)))
            end
        end

        context 'with invalid parameters' do
            def invalid_request
                patch :update, params: { id: @news_article.id, news_article: { title: nil }}
            end
            it 'should not create or destroy news article in db' do
                count_before = NewsArticle.count
                invalid_request
                count_after = NewsArticle.count
                expect(count_after).to eq(count_before)
            end
            it "should not update news article" do
                invalid_request
                expect { invalid_request }.not_to change { @news_article.reload.title }
            end
            it "should render the edit template" do
                invalid_request
                expect(response).to render_template(:edit)
              end
        end
    end

end
