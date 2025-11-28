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
    slug: "the-advantages-of-aluminum-railings",
    title: "The Advantages of Aluminum Railings",
    excerpt: "Why aluminum is the superior choice for Canadian homes: No rust, low maintenance, and high durability.",
    date: "July 5, 2023",
    category: "Product Info",
    imageUrl: "/images/migrated/blog-aluminum-advantages.jpg",
    content: `
      <p><strong>No Rusting or Rotting</strong><br>
      Aluminum is naturally resistant to rust and corrosion, making it an ideal choice for outdoor use in various climatic conditions. With aluminum railings, homeowners can be confident that they won’t have to worry about their bars rusting or deteriorating due to exposure to moisture. This durability ensures the barriers maintain their structural integrity and appearance over time.</p>

      <h3>Benefits of Aluminum Railings:</h3>
      <ul>
        <li>No need for regular maintenance or repainting</li>
        <li>Suitable for coastal areas with high humidity levels</li>
        <li>Resistant to rot caused by moisture exposure</li>
        <li>Long-lasting investment for your home’s exterior</li>
      </ul>
      <p>Investing in aluminum railings provides homeowners with peace of mind, as they can enjoy a beautiful and functional railing system without dealing with the issues commonly associated with other materials. Say goodbye to constant painting and repairs – aluminum railings are built to last.</p>

      <h3>Safety and Security</h3>
      <p>Aluminum railings offer a range of advantages for homeowners, particularly regarding safety and security. Firstly, these railings are incredibly sturdy and reliable, providing a solid barrier that can withstand various weather conditions without compromising its integrity. Secondly, aluminum railings help prevent accidents and fall by offering stability and support to individuals as they navigate stairways or elevated areas in their homes. Lastly, the presence of aluminum railings acts as a deterrent to potential intruders, adding an extra layer of protection to your property.</p>

      <h3>Sturdy and Reliable</h3>
      <p>Aluminum railings are the epitome of sturdy and reliable. They are crafted from long-lasting materials that withstand the elements, making them highly weather-resistant. Homeowners will appreciate how low-maintenance these railings are, as they require minimal upkeep to maintain their durability.</p>
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
      
      <h3>The Challenge: High Winds & Unobstructed Views</h3>
      <p>The patio was elevated and exposed to high winds, often exceeding 50km/h. Standard picket railings wouldn't provide any wind protection, and a full sunroom would be too expensive (upwards of $50k) and would obstruct the open-air feeling they wanted. The client needed a middle ground: structural integrity without visual clutter.</p>
      
      <h3>The Solution: 12mm Tempered Glass Wind Wall</h3>
      <p>We designed and installed a custom <strong>6-foot tall frameless glass wind wall</strong> on the lake-facing side. Here is how we engineered it for safety and style:</p>
      <ul>
        <li><strong>12mm Tempered Safety Glass:</strong> We upgraded from the standard 10mm to 12mm thickness to handle the increased wind load.</li>
        <li><strong>Heavy-Duty Spigots:</strong> Instead of a bottom channel which can collect water and dirt, we used marine-grade stainless steel spigots (Duplex 2205) which offer superior corrosion resistance.</li>
        <li><strong>Seamless Transition:</strong> The wind wall transitions gracefully into standard 42-inch height glass railings on the sides, maintaining a cohesive look.</li>
      </ul>

      <h3>The Result</h3>
      <p>The homeowners now enjoy their morning coffee on the patio, protected from the wind while enjoying a crystal-clear view of the lake. The property value increased, and the "usable square footage" of their home effectively grew by 400 sq ft.</p>
      <blockquote>"Aluminum Solutions transformed our patio. We used to sit inside and look at the lake. Now we sit outside and feel like we're part of it." - Sarah & Mark, Oakville</blockquote>
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
      <p>Real estate agents agree: curb appeal sells homes. Potential buyers form an opinion within the first 7 seconds of seeing a property. One of the most cost-effective ways to boost your home's exterior look is by replacing old, rotting wood railings with modern aluminum.</p>
      
      <h3>1. Modern Aesthetic</h3>
      <p>Clean lines and black or dark grey finishes signal to buyers that the home is updated and well-cared for. It instantly modernizes the facade of even a traditional brick home, creating a "transitional" look that is highly desirable in today's market.</p>
      
      <h3>2. Low Maintenance Appeal</h3>
      <p>Buyers love "maintenance-free." Knowing they won't have to sand, stain, or paint the porch every year is a huge selling point. Wood railings are seen as a liability; aluminum railings are seen as an asset.</p>
      
      <h3>3. Safety & Code Compliance</h3>
      <p>Old railings often don't meet current building codes (SB-13). They may be too low (under 36" or 42") or have gaps wider than 4 inches. Installing new, code-compliant railings removes a potential red flag during the home inspection, preventing last-minute price renegotiations.</p>

      <h3>4. Defined Outdoor Living Space</h3>
      <p>A well-railed porch creates a defined "outdoor room." By adding a glass enclosure or privacy screen, you effectively add square footage to the home's livable area, which directly correlates to appraisal value.</p>

      <h3>5. The "Luxury" Factor</h3>
      <p>Glass railings, in particular, are associated with luxury custom homes. Adding them to a standard porch elevates the perceived value of the entire property, often allowing you to list at a higher price point.</p>

      <p><strong>Ready to boost your home's value?</strong> <a href="/contact">Contact us today</a> for a free design consultation.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
