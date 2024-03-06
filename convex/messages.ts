import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

export const sendMessage = mutation({
  args: {
    message: v.string(),
    sender: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert('messages', {
      message: args.message,
      sender: args.sender,
    });
  },
});

export const getMessages = query({
  handler: async (ctx) => {
    // fix this to use the take method to grab first 10, it doent seem to work correctly ATM
    return ctx.db.query('messages').collect();
  },
});
