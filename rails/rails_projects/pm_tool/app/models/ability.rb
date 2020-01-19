# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)

    user ||= User.new

    alias_action :create, :read, :update, :destroy, to: :crud

    if user.is_admin?
      can :manage, :all
    end
    
    can(:crud, Project) do |project|
      project.user == user 
    end

    can(:crud, Task) do |task|
      task.user == user || task.project.user == user
    end

    can :favorite, Project do |project|
      user.persisted? && project.user != user
    end

    can :destroy, Favorite do |favorite|
      favorite.user == user
    end

  end
end
