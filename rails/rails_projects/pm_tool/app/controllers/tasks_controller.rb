class TasksController < ApplicationController
    def create
        @project = Project.find params[:project_id]
        @task = Task.new task_params
        @task.project = @project

        if @task.save
            redirect_to project_path(@project)
        else
            @tasks = @project.tasks.order(created_at: :desc)
            render 'projects/show'
        end
    end

    def destroy
        @task = Task.find params[:id].destroy
        @task.destroy
        redirect_to project_path(@task.project)
    end

    private

    def task_params
        params.require(:task).permit(:title, :is_done, :due_date)
    end
end
