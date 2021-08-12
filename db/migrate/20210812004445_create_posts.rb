class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.text :content
      t.string :image_url
      t.references :board, null: false, foreign_key: true
      t.string :type
      t.boolean :is_public
      t.string :background_color
      t.string :font
      t.string :font_color

      t.timestamps
    end
  end
end
