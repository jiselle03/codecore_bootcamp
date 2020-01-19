class TasksController < ApplicationController
    before_action :authenticate_user!
    before_action :find_task, only: [:edit, :update, :destroy]
    before_action :authorize!, except: [:create]

    def create
        @project = Project.find params[:project_id]
        @task = Task.new task_params
        @task.user = current_user
        @task.project = @project

        if can? :create, @task
            if @task.save
                redirect_to project_path(@project)
            else
                @tasks = @project.tasks.order(created_at: :desc)
                render 'projects/show'
            end
        else
            redirect_to project_path(@task.project), alert: 'Not Authorized'
        end
    end

    def destroy
        @task.destroy
        redirect_to project_path(@task.project)
    end

    def update
        if @task.update task_params
            flash[:notice] = 'Task updated Successfully'
            redirect_to project_path(@task.project)
        else
            render 'projects/show'
        end
    end

    private

    def task_params
        params.permit(:body, :due_date, :is_done)
    end

    def find_task
        @task = Task.find params[:id]
    end

    def authorize!
        unless can? :crud, @task
            redirect_to project_path(@task.project), alert: 'Not Authorized'
        end
    end

end
