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
    // intersting, you can only grab the first 10 which is kind of wonky, so to past this, i am sorting in desending order and then grabbing the first 10 which ends up being the last 10 and then reverse it before returning it
    const messages = await ctx.db.query('messages').order('desc').take(10);
    return messages.reverse();
  },
});
