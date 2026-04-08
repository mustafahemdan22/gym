import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const listByMode = query({
  args: { mode: v.union(v.literal("male"), v.literal("female")) },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("programs")
      .withIndex("by_mode", (q) => q.eq("mode", args.mode))
      .collect();
  },
});

export const addProgram = mutation({
  args: {
    id: v.string(),
    title: v.object({
      en: v.string(),
      ar: v.string(),
    }),
    description: v.object({
      en: v.string(),
      ar: v.string(),
    }),
    image: v.string(),
    duration: v.string(),
    intensity: v.union(v.literal("Low"), v.literal("Medium"), v.literal("High")),
    category: v.string(),
    sessions: v.number(),
    mode: v.union(v.literal("male"), v.literal("female")),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("programs", args);
  },
});
