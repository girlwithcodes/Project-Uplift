class CreateBoards < ActiveRecord::Migration[6.1]
  def change
    create_table :boards do |t|
      t.string :name
      t.text :description
      t.string :cover_image_url
      t.string :background_color
      t.string :font
      t.string :font_color
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
