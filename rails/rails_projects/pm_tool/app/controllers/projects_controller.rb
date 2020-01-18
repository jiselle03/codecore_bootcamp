class ProjectsController < ApplicationController

    before_action :find_project, except: [:new, :create, :index]

    def new
        @project = Project.new
    end

    def create
        @project = Project.new project_params
        if @project.save
            flash[:notice] = 'ProjectAdded Successfully'
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
    end

    def destroy
        @project.destroy
        redirect_to projects_path
    end

    private

    def find_project
        @project = Project.find params[:id]
    end
    
    def project_params
        params.require(:project).permit(:title, :description, :due_date)
    end

end
