require 'rails_helper'

RSpec.describe NewsArticle, type: :model do
  
  describe "validates" do
    
    it("should require a title") do
      news_article = NewsArticle.new
      news_article.valid?
      expect(news_article.errors.messages).to(have_key(:title))
    end

    it("should require a unique title") do
      persisted_article = FactoryBot.create(:news_article)
      article = NewsArticle.new(title: persisted_article.title)
      article.valid?
      expect(article.errors.messages[:title]).to(include('has already been taken'))
    end

    it("should require a description") do
      news_article = NewsArticle.new
      news_article.valid?
      expect(news_article.errors.messages).to(have_key(:description))
    end

    it("should have published at be after created at") do
      news_article = FactoryBot.create(:news_article)
      news_article.published_at = "2017-08-08 00:00:00"
      news_article.valid?
      expect(news_article.errors.messages).to have_key(:published_at)
    end

  end

end
