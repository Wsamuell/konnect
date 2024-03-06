import { mutation } from './_generated/server';
import { v } from 'convex/values';

export const message = mutation({
  args: {
    message: v.string(),
    sender: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert('konnect', {
      message: args.message,
      sender: args.sender,
    });
  },
});
