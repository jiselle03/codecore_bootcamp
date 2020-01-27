class Api::V1::QuestionsController < ApplicationController
    def index
        questions = Question.order(created_at: desc)
        render json: questions
    end

    def show
        question = Question.find(params[:id])
        render json: question, include: ['answers.author']
    end
end
