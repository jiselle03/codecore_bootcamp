class ProductMailer < ApplicationMailer
    def new_product(product)
        @product = product
        @owner = @product.user
        mail(
            to: @owner.email,
            subject: 'Thank you for adding a product to Amazing Amazon!'
        )
    end
end
