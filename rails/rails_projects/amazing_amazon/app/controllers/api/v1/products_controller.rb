class Api::V1::ProductsController < Api::ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    before_action :find_product, only: [:show, :edit, :update, :destroy]

    def create
        product = Product.new product_params
        product.user = current_user
        if product.save
            render json: { id: product.id }
        else
            render(
                json: { errors: product.errors },
                status: 422 #unproceesable entity
            )
        end
    end
    
    def index
        products = Product.order(created_at: :desc)
        render json: products
    end

    def show
        render json: @product, include: ['reviews.author']
    end

    def edit
    end

    def update
        if @product.update product_params
            render json: { id: @product.id }
        else
            render(
                json: { errors: question.errors },
                status: 422 #unproceesable entity
            )
        end
    end

    def destroy
        @product.destroy
        render json: { status: 200 }, status: 200
    end

    private

    def product_params
        params.require(:product).permit(:title, :description, :price)
    end

    def find_product
        @product = Product.find(params[:id])
    end

end
