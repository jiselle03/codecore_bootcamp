class ProductsController < ApplicationController
    before_action :find_product, only: [:edit,:update,:show, :destroy]

    def new
        @product = Product.new
    end

    def create
        @product = Product.new product_params
        if @product.save # perform validation and save if successful
            flash[:notice] = 'Product Added Successfully'
            redirect_to product_path(@product.id)
        else
            render :new
        end
    end

    def edit
        
    end

    def update
        if @product.update product_params
            flash[:notice] = 'Product updated Successfully'
            redirect_to product_path(@product.id)
        else
            render :edit
        end
    end

    def index
        @products = Product.all
    end

    def show

    end

    def destroy
        @product.destroy
        redirect_to products_path
    end


    private

    def find_product
        @product = Product.find params[:id]
    end
    
    def product_params
        params.require(:product).permit(:title, :description, :price)
    end

end
