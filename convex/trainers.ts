import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const listByMode = query({
  args: { 
    mode: v.union(v.literal("male"), v.literal("female")),
    category: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    const trainers = await ctx.db
      .query("trainers")
      .withIndex("by_mode", (q) => q.eq("mode", args.mode))
      .collect();
    
    if (args.category && args.category !== "all") {
      return trainers.filter(t => t.category === args.category);
    }
    
    return trainers;
  },
});

export const addTrainer = mutation({
  args: {
    id: v.string(),
    name: v.object({
      en: v.string(),
      ar: v.string(),
    }),
    role: v.object({
      en: v.string(),
      ar: v.string(),
    }),
    bio: v.object({
      en: v.string(),
      ar: v.string(),
    }),
    image: v.string(),
    category: v.union(
      v.literal("strength"),
      v.literal("cardio"),
      v.literal("fitness"),
      v.literal("wellness"),
      v.literal("bodybuilding"),
      v.literal("crossfit")
    ),
    experience: v.number(),
    rating: v.number(),
    mode: v.union(v.literal("male"), v.literal("female")),
  },
  handler: async (ctx, args) => {
    const trainerId = await ctx.db.insert("trainers", args);
    return trainerId;
  },
});
