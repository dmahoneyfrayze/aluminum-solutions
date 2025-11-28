export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    imageUrl: string;
    content: string; // HTML or Markdown string
}

export const blogPosts: BlogPost[] = [
    {
        slug: "glass-railings-vs-aluminum-pickets",
        title: "Glass Railings vs. Aluminum Pickets: Which is Right for You?",
        excerpt: "Comparing the aesthetics, maintenance, and cost of the two most popular modern railing choices.",
        date: "October 15, 2024",
        category: "Guides",
        imageUrl: "/images/blog/glass-vs-aluminum.jpg", // Placeholder
        content: `
      <p>When upgrading your deck or porch, the choice often comes down to two contenders: sleek glass railings or classic aluminum pickets. Both offer significant advantages over traditional wood, but they serve different aesthetic and functional needs.</p>
      
      <h3>1. The View Factor</h3>
      <p>If you have a backyard pool, a garden you love, or a view of the lake, <strong>glass railings</strong> are the clear winner. They provide an unobstructed view, making your outdoor space feel larger and more connected to the surroundings.</p>
      
      <h3>2. Privacy & Airflow</h3>
      <p><strong>Aluminum pickets</strong> allow for maximum airflow, keeping your deck cool on hot summer days. Glass, on the other hand, can act as a windbreak—perfect for waterfront properties where the breeze can be too strong.</p>
      
      <h3>3. Maintenance</h3>
      <p>Both systems are low maintenance compared to wood. Aluminum needs a quick wash with a hose. Glass requires occasional cleaning to remove water spots, similar to your windows.</p>
      
      <h3>Conclusion</h3>
      <p>Choose glass for views and wind protection. Choose aluminum for airflow and a slightly lower price point. Either way, you're getting a durable, rust-free solution from Aluminum Solutions.</p>
    `,
    },
    {
        slug: "project-spotlight-oakville-waterfront",
        title: "Project Spotlight: Modern Glass Enclosure in Oakville",
        excerpt: "See how we transformed a windy waterfront patio into a usable 3-season space.",
        date: "November 2, 2024",
        category: "Case Studies",
        imageUrl: "/images/blog/oakville-project.jpg", // Placeholder
        content: `
      <p>The owners of a beautiful property in Oakville loved their view of Lake Ontario but rarely used their patio due to the strong winds coming off the water. They needed a solution that would block the wind without blocking the view.</p>
      
      <h3>The Challenge</h3>
      <p>The patio was elevated and exposed to high winds. Standard railings wouldn't provide enough protection, and a full sunroom would be too expensive and obstruct the open-air feeling they wanted.</p>
      
      <h3>The Solution</h3>
      <p>We installed a <strong>6-foot tall frameless glass wind wall</strong> on the lake-facing side, transitioning to standard height glass railings on the sides. We used 12mm tempered safety glass with heavy-duty spigots to withstand the wind load.</p>
      
      <h3>The Result</h3>
      <p>The homeowners now enjoy their morning coffee on the patio, protected from the wind while enjoying a crystal-clear view of the lake. The property value increased, and the "usable square footage" of their home effectively grew.</p>
    `,
    },
    {
        slug: "increasing-home-value-curb-appeal",
        title: "5 Ways New Railings Increase Your Home's Value",
        excerpt: "First impressions matter. Here is how upgrading your front porch railings can offer a high ROI.",
        date: "November 20, 2024",
        category: "Tips",
        imageUrl: "/images/blog/curb-appeal.jpg", // Placeholder
        content: `
      <p>Real estate agents agree: curb appeal sells homes. One of the most cost-effective ways to boost your home's exterior look is by replacing old, rotting wood railings with modern aluminum.</p>
      
      <h3>1. Modern Aesthetic</h3>
      <p>Clean lines and black or dark grey finishes signal to buyers that the home is updated and well-cared for.</p>
      
      <h3>2. Low Maintenance Appeal</h3>
      <p>Buyers love "maintenance-free." Knowing they won't have to sand and stain the porch every year is a huge selling point.</p>
      
      <h3>3. Safety & Code Compliance</h3>
      <p>Old railings often don't meet current building codes (SB-13). Installing new, code-compliant railings removes a potential red flag during the home inspection.</p>
    `,
    },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}
