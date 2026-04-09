import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createBooking = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    date: v.string(),
    time: v.string(),
    trainerId: v.optional(v.string()),
    programId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const bookingId = await ctx.db.insert("bookings", {
      name: args.name,
      email: args.email,
      phone: args.phone,
      date: args.date,
      time: args.time,
      trainerId: args.trainerId,
      programId: args.programId,
      createdAt: Date.now(),
    });
    return bookingId;
  },
});
