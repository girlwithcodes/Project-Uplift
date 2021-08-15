# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Board.destroy_all
Post.destroy_all

user1 = User.create(username: "Flo", email: "flo_milli@gmail.com", password_digest: BCrypt::Password.create('milli'))

user2 = User.create(username: "impossible dreamer", email: "time_lord@gallifrey.com", password_digest: BCrypt::Password.create('tardis'))

user3 = User.create(username: "slayer", email: "the_chosen_one@sunnyvale.com", password_digest: BCrypt::Password.create('dawn'))

board1 = Board.create(name: "Hip Hop Affirmations", description: "Affirmations with beat", cover_image_url: "https://images.unsplash.com/photo-1508973379184-7517410fb0bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", background_color: "#000000", font: "Arial", font_color: "#dbdbdb", user: user1)

board2 = Board.create(name: "Manifest Money", description: "Get the Green", cover_image_url: "https://images.unsplash.com/photo-1534205643743-6737932c79ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60", background_color: "#000000", font: "Arial", font_color: "#dbdbdb", user: user1)

board3 = Board.create(name: "Quotes", description: "The Doctor's Wisdom", cover_image_url: "https://images.unsplash.com/photo-1457364887197-9150188c107b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNwYWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", background_color: "#578a9e", font: "Arial", font_color: "#073040", user: user2)

board4 = Board.create(name: "Spacing Out", description: "Thoughts on the Infinite", cover_image_url: "https://images.unsplash.com/photo-1594683734152-0eccf2501041?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHNwYWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", background_color: "#578a9e", font: "Arial", font_color: "#ffffff", user: user2, background_url: "https://images.unsplash.com/photo-1594683734152-0eccf2501041?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHNwYWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60")


board5 = Board.create(name: "Pithiniess", description: "Sarcasm will save you", cover_image_url: "https://images.unsplash.com/photo-1583846762363-5fc36ec494a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2Fzc3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", background_color: "#f8ff2b", font: "Arial", font_color: "#000000", user: user3)

Post.create(content: "I am healthy, I am wealthy, I am rich, I am that bitch (yeah)
I am gonna go get that bag and I am not gonna take your shit (uh)
I am protected, well respected, I'm a queen, I'm a dream (yeah)
I do what I wanna do and I'm who I wanna be
'Cause I am me", image_url: "https://images.unsplash.com/photo-1621608559536-0846fd224dc2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhpcCUyMGhvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", background_color: "#f8ff2b", font: "Arial", font_color: "#c433a7", board: board1, is_public: true, post_type: "affirmation", user_id: user1.id)

Post.create(content: "So it’s like I’m kind of self-made in a way. So that’s why I said that because like you can’t judge me if you weren’t a part of like me creating me. That’s why like when I see successful people, I don’t get envious.", image_url: "https://images.unsplash.com/photo-1601128426315-7a1d9168f163?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGhpcCUyMGhvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", background_color: "#ff1100", font: "Arial", font_color: "#000000", board: board1, is_public: true, post_type: "affirmation", user_id: user1.id)

Post.create(content: "The universe is big. It’s vast and complicated and ridiculous. And sometimes, very rarely, impossible things just happen and we call them miracles.", background_color: "#ff1100", font: "Arial", font_color: "#000000", board: board3, background_url: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", is_public: true, post_type: "quote", user_id: user2.id)

Post.create(content: "You don’t just give up. You don’t just let things happen. You make a stand! You say no! You have the guts to do what’s right, even when everyone else just runs away.", background_color: "#ff1100", font: "Arial", font_color: "#000000", board: board3, is_public: true, post_type: "quote", user_id: user2.id)

Post.create(content: "I am and always will be the optimist. The hoper of far-flung hopes and the dreamer of improbable dreams.", image_url: "https://images.unsplash.com/photo-1498673394965-85cb14905c89?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFnaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", background_color: "#ff1100", font: "Arial", font_color: "#000000", board: board3, is_public: true, post_type: "quote", user_id: user2.id)

Post.create(content: "When you’re a kid, they tell you it’s all: grow up, get a job, get married, get a house, have a kid, and that’s it. But the truth is, the world is so much stranger than that. It’s so much darker. And so much madder. And so much better.", image_url: "https://images.unsplash.com/photo-1521763041807-c5f24b03ade7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fG1hZ2ljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", background_color: "#ff1100", font: "Arial", font_color: "#000000", board: board3, is_public: true, post_type: "quote", user_id: user2.id)

Post.create(content: "People assume that time is a strict progression of cause to effect, but actually from a non-linear, non-subjective viewpoint — it’s more like a big ball of wibbly wobbly… time-y wimey… stuff.", image_url: "https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHNwYWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", background_color: "#ff1100", font: "Arial", font_color: "#000000", board: board3, is_public: true, post_type: "quote", user_id: user2.id)

Post.create(content: "Buffy!", image_url: "https://images.unsplash.com/photo-1618590067592-a867d8b44403?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmFtcGlyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", background_color: "#ff1100", font: "Arial", font_color: "#000000", board: board5, is_public: false, post_type: "quote", user_id: user3.id)

