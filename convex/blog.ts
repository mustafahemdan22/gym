import { v } from "convex/values";
import { query } from "./_generated/server";

export const listByMode = query({
  args: { mode: v.union(v.literal("male"), v.literal("female")) },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("blog")
      .withIndex("by_mode", (q) => q.eq("mode", args.mode))
      .collect();
  },
});

export const getById = query({
  args: { id: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("blog")
      .filter((q) => q.eq(q.field("id"), args.id))
      .unique();
  },
});
