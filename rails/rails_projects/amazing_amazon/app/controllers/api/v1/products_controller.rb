class Api::V1::ProductsController < Api::ApplicationController
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
        product = Product.find(params[:id])
        render json: product
    end

    private

    def product_params
        params.require(:question).permit(:title, :description, :price)
    end

end
