class CreateAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :answers do |t|
      t.text :body
      t.references :question, null: false, foreign_key: true
      # The above creates a 'question_id' column of type big_int.
      # It also sets a foreign_key constraint to enforce the
      # association to the questions table at the db level.
      
      # The question_id field will refer to the id of a question
      # in the questions table. It is said that the answer
      # 'belongs_to' the question.

      # As of Rails 5, this will also add an index to the 
      # foreign key field (question_id). If you don't want an
      # index, you can pass the option: 'index: false'.
      t.timestamps
    end
  end
end
