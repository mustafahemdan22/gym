import { v } from "convex/values";
import { query } from "./_generated/server";

export const listByMode = query({
  args: { mode: v.union(v.literal("male"), v.literal("female")) },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("faq")
      .withIndex("by_mode", (q) => q.eq("mode", args.mode))
      .collect();
  },
});
