class LikesController < ApplicationController

    before_action :authenticate_user!
    before_action :find_question, only: [:create]
    before_action :authorize!, only: [:create]

    def create
        like = Like.new(user: current_user, question: @question)

        if like.save
            flash[:success] = "Question liked"
        else
            flash[:danger] = like.errors.full_messages.join(", ")
        end
        redirect_to @question
        # The above is the same as: redirect_to question_path(question)
    end

    def destroy
        like = current_user.likes.find params[:id]
        if can? :destroy, like
            like.destroy
            flash[:success] = "Question unliked"
            redirect_to question_path(like.question)
        else
            flash[:alert] = "Can't delete like!"
        end
    end

    private

    def find_question
        @question = Question.find params[:question_id]
    end

    def authorize!
        unless can? :like, @question
            flash[:danger] = "Don't be a narcissist." 
            redirect_to question_path(@question)
        end
    end

end
