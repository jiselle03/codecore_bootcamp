class TasksController < ApplicationController
    before_action :authenticate_user!

    def create
        @project = Project.find params[:project_id]
        @task = Task.new task_params
        @task.user = current_user
        @task.project = @project

        if can?(:crud, @task)
            if @task.save
                redirect_to project_path(@project)
            else
                @tasks = @project.tasks.order(created_at: :desc)
                render 'projects/show'
            end
        else
            redirect_to project_path(@project), alert: 'Not Authorized'
        end
    end

    def destroy
        if can?(:crud, @task)
            @task = Task.find params[:id].destroy
            @task.destroy
            redirect_to project_path(@task.project)
        else
            redirect_to project_path(@project), alert: 'Not Authorized'
        end
    end

    private

    def task_params
        params.require(:task).permit(:body, :is_done, :due_date)
    end

end
