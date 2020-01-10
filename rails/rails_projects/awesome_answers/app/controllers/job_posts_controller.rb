class JobPostsController < ApplicationController

    def new
        @job_post = JobPost.new
    end

    def create
        @job_post = JobPost.new job_post_params
        if @job_post.save
        # redirect_to job_post_path(@job_post)
        # The above is equivalent to the below to redirect to job_posts show page
            redirect_to @job_post
        else
            render :new
        end
    end

    def show
        @job_post = JobPost.find(params[:id])
    end

    def destroy
        job_post = JobPost.find(params[:id])
        job_post.destroy
        redirect_to job_posts_path
    end

    private

    def job_post_params
        params.require(:job_post).permit(:title, :description, :min_salary, :max_salary)
    end
    
end