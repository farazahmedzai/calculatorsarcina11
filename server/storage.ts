import { 
  users, 
  pensionCalculations, 
  pregnancyCalculations,
  blogPosts,
  type User, 
  type InsertUser,
  type PensionCalculation,
  type InsertPensionCalculation,
  type PregnancyCalculation,
  type InsertPregnancyCalculation,
  type BlogPost,
  type InsertBlogPost
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createPensionCalculation(calculation: InsertPensionCalculation): Promise<PensionCalculation>;
  getPensionCalculations(): Promise<PensionCalculation[]>;
  
  createPregnancyCalculation(calculation: InsertPregnancyCalculation): Promise<PregnancyCalculation>;
  getPregnancyCalculations(): Promise<PregnancyCalculation[]>;
  
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private pensionCalculations: Map<number, PensionCalculation>;
  private pregnancyCalculations: Map<number, PregnancyCalculation>;
  private blogPosts: Map<number, BlogPost>;
  private currentUserId: number;
  private currentCalculationId: number;
  private currentPregnancyCalculationId: number;
  private currentBlogPostId: number;

  constructor() {
    this.users = new Map();
    this.pensionCalculations = new Map();
    this.pregnancyCalculations = new Map();
    this.blogPosts = new Map();
    this.currentUserId = 1;
    this.currentCalculationId = 1;
    this.currentPregnancyCalculationId = 1;
    this.currentBlogPostId = 1;
    
    // Initialize with sample blog posts
    this.initializeBlogPosts();
  }

  private initializeBlogPosts() {
    // Only initialize if no posts exist to prevent duplication
    if (this.blogPosts.size > 0) {
      return;
    }

    const baseTime = new Date('2024-01-01T10:00:00Z');
    const samplePosts = [
      {
        title: "Top 5 Greșeli de Evitat în Planificarea Pensiei",
        slug: "top-5-greseli-planificare-pensie",
        excerpt: "Descoperă cele mai comune greșeli pe care le fac românii când își planifică pensia și cum să le eviți.",
        content: "Planificarea pensiei este unul dintre cele mai importante aspecte ale planificării financiare...",
        category: "Planificare",
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        published: true,
        publishedAt: new Date(baseTime.getTime() + (0 * 24 * 60 * 60 * 1000)) // Jan 1
      },
      {
        title: "Vârsta Standard de Pensionare în România: Tabel Complet 2024",
        slug: "varsta-standard-pensionare-romania-2024",
        excerpt: "Ghid actualizat cu toate modificările legislative privind vârsta de pensionare.",
        content: "Vârsta de pensionare în România a suferit modificări importante în ultimii ani...",
        category: "Legislație",
        imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        published: true,
        publishedAt: new Date(baseTime.getTime() + (7 * 24 * 60 * 60 * 1000)) // Jan 8
      },
      {
        title: "Pilonul II vs. Pilonul III: Ghid de Decizie pentru 2024",
        slug: "pilonul-2-vs-pilonul-3-ghid-decizie-2024",
        excerpt: "Compară avantajele și dezavantajele celor două piloni și ia decizia corectă.",
        content: "Sistemul de pensii din România include mai mulți piloni de asigurare...",
        category: "Investiții",
        imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        published: true,
        publishedAt: new Date(baseTime.getTime() + (14 * 24 * 60 * 60 * 1000)) // Jan 15
      }
    ];

    samplePosts.forEach((post) => {
      const id = this.currentBlogPostId++;
      const { publishedAt, ...postData } = post;
      const blogPost: BlogPost = { 
        id,
        title: postData.title,
        slug: postData.slug,
        excerpt: postData.excerpt,
        content: postData.content,
        category: postData.category,
        imageUrl: postData.imageUrl || null,
        published: true,
        createdAt: publishedAt,
        updatedAt: publishedAt
      };
      this.blogPosts.set(id, blogPost);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createPensionCalculation(calculation: InsertPensionCalculation): Promise<PensionCalculation> {
    const id = this.currentCalculationId++;
    const pensionCalculation: PensionCalculation = { 
      ...calculation, 
      id,
      createdAt: new Date()
    };
    this.pensionCalculations.set(id, pensionCalculation);
    return pensionCalculation;
  }

  async getPensionCalculations(): Promise<PensionCalculation[]> {
    return Array.from(this.pensionCalculations.values());
  }

  async createPregnancyCalculation(calculation: InsertPregnancyCalculation): Promise<PregnancyCalculation> {
    const id = this.currentPregnancyCalculationId++;
    const pregnancyCalculation: PregnancyCalculation = { 
      ...calculation, 
      id,
      lastMenstrualPeriod: calculation.lastMenstrualPeriod || null,
      cycleLength: calculation.cycleLength || null,
      conceptionDate: calculation.conceptionDate || null,
      ultrasoundDate: calculation.ultrasoundDate || null,
      ultrasoundWeeks: calculation.ultrasoundWeeks || null,
      ultrasoundDays: calculation.ultrasoundDays || null,
      createdAt: new Date()
    };
    this.pregnancyCalculations.set(id, pregnancyCalculation);
    return pregnancyCalculation;
  }

  async getPregnancyCalculations(): Promise<PregnancyCalculation[]> {
    return Array.from(this.pregnancyCalculations.values());
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      post => post.slug === slug && post.published
    );
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const now = new Date();
    const blogPost: BlogPost = { 
      ...insertPost, 
      id,
      imageUrl: insertPost.imageUrl || null,
      published: insertPost.published || false,
      createdAt: now,
      updatedAt: now
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }
}

export const storage = new MemStorage();
