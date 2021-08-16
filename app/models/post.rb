class Post < ApplicationRecord
  belongs_to :board

  delegate :user, to: :board
end
