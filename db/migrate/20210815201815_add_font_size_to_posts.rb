class AddFontSizeToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :font_size, :int
  end
end
