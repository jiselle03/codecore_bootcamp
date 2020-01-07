class QuestionsController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    before_action :find_question, only: [:edit,:update,:show, :destroy]
    
    def new
        @question = Question.new
    end

    def create
        @question = Question.new question_params
        @question.user = current_user
        if @question.save # perform validation and save if successful
            flash[:notice] = 'Question Created Successfully'
            redirect_to question_path(@question.id)
        else
            render :new
        end
    end

    def edit
        
    end

    def update
        @question = Question.update question_params
        if @question.update question_params
            flash[:notice] = 'Question updated Successfully'
            redirect_to question_path(@question.id)
        else
            render :edit
        end
    end

    def index
        @questions = Question.all
    end

    def show
        @new_answer = Answer.new
        @answers = @question.answers.order(created_at: :desc)
        @question.update_columns(view_count: @question.view_count + 1)
    end

    def destroy
        @question.destroy
        redirect_to questions_path
    end

    private

    def find_question
        @question=Question.find params[:id]
    end
    
    def question_params
        params.require(:question).permit(:title, :body)
    end

end
