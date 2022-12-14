const { User, Status } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find()
          .select('-__v -password')
          .populate('status')
          .populate('friends')
          
      },
      user: async (parent, { name }) => {
        return User.findOne({ name })
          .select('-__v -password')
          .populate('status')
          .populate('friends')
      },
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('status')
            .populate('friends')
                
          return userData;
        }
      
        throw new AuthenticationError('Not logged in');
      }

    },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);

        const token = signToken(user);

        return { token,user };
      },
      login: async (parent, { email, password }) => {
          const user = await User.findOne({ email });

          if(!user) {
            throw new AuthenticationError('Incorrect credentials');
          }

          const correctPw = await user.isCorrectPassword(password)

          if(!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
          }
          const token = signToken(user);
          return { token, user};
      },
      addStatus: async (parent, args, context) => {
        if (context.user) {
          const status = await Status.create({ ...args, name: context.user.name });
      
          await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { status: status._id } },
            { new: true }
          );
      
          return status
        }
      
        throw new AuthenticationError('You need to be logged in!');
         
      },
      addFriend: async (parent, { friendId }, context) => {
        if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { friends: friendId } },
            { new: true }
          ).populate('friends');
      
          return updatedUser;
        }
      
        throw new AuthenticationError('You need to be logged in!');
      }
    }
    
  };
  
  module.exports = resolvers;