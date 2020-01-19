class ProjectsController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    before_action :find_project, except: [:new, :create, :index, :favorited]
    before_action :authorize!, only: [:edit, :update, :destroy]

    def new
        @project = Project.new
    end

    def create
        @project = Project.new project_params
        @project.user = current_user
        if @project.save
            flash[:notice] = 'Project added successfully'
            redirect_to project_path(@project.id)
        else
            render :new
        end
    end

    def edit
        
    end

    def update
        if @project.update project_params
            flash[:notice] = 'Project updated successfully'
            redirect_to project_path(@project.id)
        else
            render :edit
        end
    end

    def index
        @projects = Project.all.order(created_at: :desc)
    end

    def show
        @task = Task.new
        @tasks = @project.tasks.order(created_at: :desc)
        @favorite = @project.favorites.find_by(user: current_user)
    end

    def destroy
        @project.destroy
        redirect_to projects_path
    end

    def favorited
        @projects = current_user.favorited_projects.order('favorites.created_at DESC')
    end

    private

    def find_project
        @project = Project.find params[:id]
    end
    
    def project_params
        params.require(:project).permit(:title, :description, :due_date)
    end

    def authorize!
        unless can?(:crud, @project)
            redirect_to project_path(@project)
            flash[:danger] = "Access denied"
        end
    end

end
