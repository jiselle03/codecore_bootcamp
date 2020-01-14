class NewsArticlesController < ApplicationController

    before_action :authenticate_user!, except: [:index, :show]
    before_action :find_news_article, only: [:edit, :update, :show, :destroy]
    before_action :authorize!, except: [:index, :show]

    def new
        @news_article = NewsArticle.new
    end

    def create
        @news_article = NewsArticle.new news_article_params
        @news_article.user = current_user

        if @news_article.save
            redirect_to @news_article
        else
            render :new
        end
    end

    def show
    end

    def destroy
        @news_article.destroy
        redirect_to news_articles_path
    end

    def index
        @news_articles = NewsArticle.all
    end

    def edit
    end
    
    def update
        if @news_article.update news_article_params
            redirect_to news_article_path(@news_article.id)
        else
            render :edit
        end
    end

    private 

    def find_news_article
        @news_article = NewsArticle.find params[:id]
    end

    def news_article_params
        params.require(:news_article).permit(:title, :description, :published_at, :view_count)
    end

    def authorize!
        unless can? :crud, @news_article
            flash[:danger] = "Access denied"
            redirect_to news_article_path(@news_article)
        end
    end

end
