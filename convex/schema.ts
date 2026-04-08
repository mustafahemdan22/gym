import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  trainers: defineTable({
    id: v.string(), // Original ID from static data
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
  }).index("by_mode", ["mode"]),

  programs: defineTable({
    id: v.string(), // Original ID from static data
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
  }).index("by_mode", ["mode"]),

  pricing: defineTable({
    id: v.string(),
    name: v.object({
      en: v.string(),
      ar: v.string(),
    }),
    price: v.string(),
    period: v.object({
      en: v.string(),
      ar: v.string(),
    }),
    features: v.array(
      v.object({
        en: v.string(),
        ar: v.string(),
      })
    ),
    isPopular: v.optional(v.boolean()),
    mode: v.union(v.literal("male"), v.literal("female")),
  }).index("by_mode", ["mode"]),

  blog: defineTable({
    id: v.string(),
    title: v.object({
      en: v.string(),
      ar: v.string(),
    }),
    excerpt: v.object({
      en: v.string(),
      ar: v.string(),
    }),
    category: v.object({
      en: v.string(),
      ar: v.string(),
    }),
    date: v.string(),
    image: v.string(),
    author: v.object({
      en: v.string(),
      ar: v.string(),
    }),
    mode: v.union(v.literal("male"), v.literal("female")),
  }).index("by_mode", ["mode"]),
  faq: defineTable({
    id: v.number(),
    category: v.string(),
    question: v.object({
      en: v.string(),
      ar: v.string(),
    }),
    answer: v.object({
      en: v.string(),
      ar: v.string(),
    }),
    mode: v.union(v.literal("male"), v.literal("female")),
  }).index("by_mode", ["mode"]),
});
