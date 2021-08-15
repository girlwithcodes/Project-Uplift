class User < ApplicationRecord
  has_many :boards, dependent: :destroy
  has_many :posts, through: :boards

  validates :email, presence: true, uniqueness: true

  has_secure_password
end
