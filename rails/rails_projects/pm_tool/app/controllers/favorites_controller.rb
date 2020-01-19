class FavoritesController < ApplicationController
    before_action :authenticate_user!
    before_action :find_project, only: [:create]
    before_action :authorize!, only: [:create]

    def create
        favorite = Favorite.new(user: current_user, project: @project)

        if favorite.save
            flash[:success] = "Product liked"
        else
            flash[:danger] = favorite.errors.full_messages.join(", ")
        end
        redirect_to @project
    end

    def destroy
        favorite = Favorite.find params[:id]
        if can? :destroy, favorite
            favorite.destroy
            flash[:success] = "Project unfavorited"
            redirect_to project_path(favorite.project)
        else
            flash[:alert] = "Can't delete favorite!"
        end
    end

    private

    def find_project
        @project = Project.find params[:project_id]
    end

    def authorize!
        unless can? :favorite, @project
            flash[:danger] = "You can't favorite your own project." 
            redirect_to @project
        end
    end
end
