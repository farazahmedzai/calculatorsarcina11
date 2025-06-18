import { pgTable, text, serial, integer, boolean, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const pensionCalculations = pgTable("pension_calculations", {
  id: serial("id").primaryKey(),
  currentAge: integer("current_age").notNull(),
  monthlySalary: decimal("monthly_salary", { precision: 10, scale: 2 }).notNull(),
  contributionYears: integer("contribution_years").notNull(),
  pensionType: text("pension_type").notNull(),
  calculatedAmount: decimal("calculated_amount", { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const pregnancyCalculations = pgTable("pregnancy_calculations", {
  id: serial("id").primaryKey(),
  calculationType: text("calculation_type").notNull(),
  lastMenstrualPeriod: text("last_menstrual_period"),
  cycleLength: integer("cycle_length"),
  conceptionDate: text("conception_date"),
  ultrasoundDate: text("ultrasound_date"),
  ultrasoundWeeks: integer("ultrasound_weeks"),
  ultrasoundDays: integer("ultrasound_days"),
  calculatedDueDate: text("calculated_due_date").notNull(),
  currentWeek: integer("current_week").notNull(),
  currentDay: integer("current_day").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url"),
  published: boolean("published").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertPensionCalculationSchema = createInsertSchema(pensionCalculations).omit({
  id: true,
  createdAt: true,
}).extend({
  monthlySalary: z.union([z.string(), z.number()]).transform(val => String(val)),
  calculatedAmount: z.union([z.string(), z.number()]).transform(val => String(val)),
});

export const insertPregnancyCalculationSchema = createInsertSchema(pregnancyCalculations).omit({
  id: true,
  createdAt: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type PensionCalculation = typeof pensionCalculations.$inferSelect;
export type InsertPensionCalculation = z.infer<typeof insertPensionCalculationSchema>;
export type PregnancyCalculation = typeof pregnancyCalculations.$inferSelect;
export type InsertPregnancyCalculation = z.infer<typeof insertPregnancyCalculationSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
