class CreatePlanes < ActiveRecord::Migration[5.0]
  def change
    create_table :planes do |t|
      t.integer :model_id
      t.string :description
      t.datetime :datetime
      t.decimal :longitude
      t.decimal :latitude
      t.decimal :elevation

      t.timestamps
    end
  end
end
