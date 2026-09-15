export type NavItem = { label: string; href: string; description?: string };
export type NavGroup = { label: string; items: NavItem[] };

export const navGroups: NavGroup[] = [
  {
    label: "Product",
    items: [
      { label: "Solution", href: "/solution", description: "SafeCore and the modular platform concept" },
      { label: "Technology", href: "/technology", description: "Architecture, hardware roadmap and AI safety intelligence" },
      { label: "Product Demo", href: "/product", description: "Interactive concept demonstration" },
      { label: "Safety System", href: "/safety-system", description: "Privacy and security architecture" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "Problem", href: "/problem", description: "Why caregivers need better tools" },
      { label: "Roadmap", href: "/roadmap", description: "From concept to commercial launch" },
      { label: "About", href: "/about", description: "Founder, mission and status" },
      { label: "FAQ", href: "/faq", description: "Common investor and parent questions" },
    ],
  },
  {
    label: "Investors",
    items: [
      { label: "Business Model", href: "/business", description: "How Project Guardian could make money" },
      { label: "Market", href: "/market", description: "Market opportunity and methodology" },
      { label: "Competition", href: "/competition", description: "Competitive landscape" },
      { label: "Funding", href: "/funding", description: "Investment opportunity and use of funds" },
      { label: "Investor Deck", href: "/investor-deck", description: "Full deck structure" },
    ],
  },
];

export const flatNav: NavItem[] = [
  { label: "Home", href: "/" },
  ...navGroups.flatMap((g) => g.items),
  { label: "Contact", href: "/contact" },
];

export const footerColumns: { title: string; items: NavItem[] }[] = [
  {
    title: "Product",
    items: navGroups[0].items,
  },
  {
    title: "Company",
    items: navGroups[1].items,
  },
  {
    title: "Investors",
    items: navGroups[2].items,
  },
  {
    title: "Get involved",
    items: [
      { label: "Investor Inquiry", href: "/contact?type=investor" },
      { label: "Strategic Partners", href: "/contact?type=partner" },
      { label: "Schools & Institutions", href: "/contact?type=school" },
      { label: "Early Access Waitlist", href: "/early-access" },
    ],
  },
];
