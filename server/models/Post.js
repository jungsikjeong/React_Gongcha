const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  image: {
    type: String,
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      text: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
      likes: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: 'user',
          },
        },
      ],

      commentsStep: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: 'user',
          },
          text: {
            type: String,
            required: true,
          },

          date: {
            type: Date,
            default: Date.now,
          },

          likes: [
            {
              user: {
                type: Schema.Types.ObjectId,
                ref: 'user',
              },
            },
          ],
        },
      ],
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('post', PostSchema);
