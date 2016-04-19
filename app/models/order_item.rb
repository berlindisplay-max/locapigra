class OrderItem < ActiveRecord::Base
  belongs_to :product
  belongs_to :order

  #validates :order_id, uniqueness: { scope: :product_id, message: "Product already in your Cart, you can change the quantity there" }
  validates :quantity, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validate :product_present
  validate :order_present

  before_save :finalize

  def unit_price
    if persisted?
      self[:unit_price]
    else
      product.price
    end
  end

  def total_price
    unit_price * quantity
  end

  private

    def product_present
      if product.nil?
        puts "product not present"
        errors.add(:product, "is not valid or not active")
      end
    end

    def order_present
      if order.nil?
        puts "order not present"
        errors.add(:order, "is not a valid order")
      end
    end

    def finalize
      self[:unit_price] = unit_price
      self[:total_price] = quantity * self[:unit_price]
    end

end
