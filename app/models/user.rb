class User < ActiveRecord::Base
  has_many :orders
  rolify
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def admin?
    self.has_role? :admin
  end

  def beta?
    self.has_role? :beta
  end

end
