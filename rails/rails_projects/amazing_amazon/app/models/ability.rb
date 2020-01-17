# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)

    user ||= User.new

    alias_action :create, :read, :update, :destroy, to: :crud

    if user.is_admin?
      can :manage, :all
    end
    
    can(:crud, Product) do |product|
      product.user == user 
    end

    can(:crud, Review) do |review|
      review.user == user || review.product.user == user
    end

    can(:crud, NewsArticle) do |news_article|
      news_article.user == user
    end

    can :like, Review do |review|
      user.persisted? && review.user != user
    end

    can :destroy, Like do |like|
      like.user == user
    end

    can :favorite, Product do |product|
      user.persisted? && product.user != user
    end

    can :destroy, Favorite do |favorite|
      favorite.user == user
    end

    can :vote, Review do |review|
      user.persisted? && review.user != user
    end

    can :crud, Vote do |vote|
      vote.user == user
    end

  end
end
