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
      task.user == user || task.product.user == user
    end

  end
end
