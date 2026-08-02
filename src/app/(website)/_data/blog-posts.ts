// ─────────────────────────────────────────────────────────────
// Blog content lives here as plain data — add a new object to this
// array to publish a new article. Fields beyond title/description/
// content are optional so this scales cleanly as the blog grows
// (categories, tags, and multiple authors) without ever needing a
// schema rewrite later.
// ─────────────────────────────────────────────────────────────
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;           // ISO format — original publish date
  dateModified?: string;  // ISO format — set this when an article is meaningfully updated (freshness signal for Google + AI)
  readMinutes: number;
  category: string;       // single primary category, e.g. "Guides", "Fee Management"
  tags: string[];         // for future filtering/related-post logic
  author: { name: string; role: string };
  content: { heading?: string; paragraphs: string[] }[];
}

const SHIKSHAMATRIX_AUTHOR = { name: "ShikshaMatrix Team", role: "School ERP Product Team" };

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-choose-school-erp-software",
    title: "How to Choose the Right School ERP Software: A Buyer's Checklist",
    description: "A practical checklist for evaluating School ERP options — what to test before committing, and questions worth asking any vendor.",
    date: "2026-08-02",
    readMinutes: 8,
    category: "Guides",
    tags: ["school erp", "buyer's guide", "school management software"],
    author: SHIKSHAMATRIX_AUTHOR,
    content: [
      {
        paragraphs: [
          "Choosing a School ERP is a decision most schools make once and live with for years — switching systems later means migrating years of student records, which nobody wants to do twice. That makes it worth slowing down and evaluating properly rather than picking based on a demo call alone.",
        ],
      },
      {
        heading: "Ask to see the parent and student experience, not just the admin panel",
        paragraphs: [
          "Most ERP sales demos focus heavily on the school admin panel, since that's what the person buying will use directly. But the parent and student experience is what determines whether the system actually gets used day to day. Ask specifically to see the Parent App and Student App, not just screenshots of the admin dashboard.",
        ],
      },
      {
        heading: "Check whether pricing tiers restrict core apps",
        paragraphs: [
          "Some ERPs use pricing tiers to gate access to entire apps — for example, only allowing a Parent App on higher-priced plans. This is worth asking about directly: does every plan include the core apps (admin, staff, student, parent), or does the entry-level plan leave some user group without proper access? A system that treats parents as a premium add-on tends to create adoption problems later.",
        ],
      },
      {
        heading: "Ask how data isolation actually works",
        paragraphs: [
          "If the vendor serves multiple schools on one platform (as most modern School ERPs do), ask specifically how one school's data is kept separate from another's. 'Multi-tenant' is the term to listen for — it means data isolation is built into the system's architecture, not just enforced by a permission setting that could theoretically be misconfigured.",
        ],
      },
      {
        heading: "Test the fee collection workflow specifically",
        paragraphs: [
          "Fee collection is usually the highest-stakes module for a school, since it directly affects cash flow. Ask to see the actual due-reminder and receipt-generation flow, not just a features list. Does a payment update the student's ledger immediately? Are receipts generated automatically? Do parents get notified before a due date, or only after?",
        ],
      },
      {
        heading: "Understand what happens if you outgrow your plan",
        paragraphs: [
          "Ask how upgrading works if your school grows past your current plan's student limit, or if you need a feature currently reserved for a higher tier. A vendor with a clear, straightforward upgrade path is a good sign; vague answers here are worth noting.",
        ],
      },
      {
        heading: "Bringing it together",
        paragraphs: [
          "None of this replaces trying the system yourself with your school's actual data. But going into evaluation with these specific questions — about the parent/student experience, data isolation, fee workflow, and plan flexibility — tends to surface the real differences between School ERPs much faster than a generic feature comparison chart.",
        ],
      },
    ],
  },
  {
    slug: "digital-school-transformation-roadmap",
    title: "Digital School Transformation: A Practical Roadmap",
    description: "Moving a school from paper-based processes to a digital system doesn't have to happen all at once — a practical, phased approach that actually sticks.",
    date: "2026-08-02",
    readMinutes: 7,
    category: "Guides",
    tags: ["digital transformation", "school management software", "onboarding"],
    author: SHIKSHAMATRIX_AUTHOR,
    content: [
      {
        paragraphs: [
          "Moving a school from paper registers and spreadsheets to a digital system can feel daunting — not because any single step is hard, but because trying to change everything at once tends to overwhelm staff and stall out. A phased approach tends to work better in practice.",
        ],
      },
      {
        heading: "Start with the highest-friction process, not everything at once",
        paragraphs: [
          "Rather than trying to digitize admissions, attendance, fees, and communication simultaneously, most schools have more success starting with whichever single process is causing the most day-to-day pain — often fee collection or attendance. Getting one process working smoothly builds staff confidence before adding the next.",
        ],
      },
      {
        heading: "Migrate current-year data first, not years of history",
        paragraphs: [
          "It's tempting to want every historical record digitized before going live, but this often delays the actual transition indefinitely. Migrating the current academic year's active students, staff, and fee structures is usually enough to start — historical data can be added later if genuinely needed, without blocking the switch.",
        ],
      },
      {
        heading: "Get one 'champion' staff member comfortable first",
        paragraphs: [
          "Rather than training the entire staff simultaneously, having one or two staff members become genuinely comfortable with the new system first — and then help the rest of the team — tends to work better than a single all-hands training session that nobody fully absorbs.",
        ],
      },
      {
        heading: "Communicate the change to parents clearly, once",
        paragraphs: [
          "When switching to a system with a Parent App, a clear one-time communication (a printed notice, an SMS, and word from teachers) explaining what's changing and how to get the app installed goes a long way toward smooth adoption, rather than assuming parents will discover it on their own.",
        ],
      },
      {
        heading: "Expect a few weeks of adjustment, not instant perfection",
        paragraphs: [
          "Most schools see real time savings within the first month, but the first couple of weeks typically involve some adjustment as staff build new habits. Planning for that adjustment period, rather than expecting instant results, tends to lead to a much smoother transition overall.",
        ],
      },
    ],
  },
  {
    slug: "school-attendance-system-guide",
    title: "School Attendance System: What Actually Changes When You Go Digital",
    description: "A closer look at how digital attendance tracking changes daily routines for teachers, front-office staff, and parents.",
    date: "2026-08-02",
    readMinutes: 6,
    category: "Guides",
    tags: ["attendance", "digital transformation", "parent communication"],
    author: SHIKSHAMATRIX_AUTHOR,
    content: [
      {
        paragraphs: [
          "Attendance tracking sounds like a simple thing to digitize, but the actual day-to-day change it brings is bigger than it looks on paper — it touches teachers, front-office staff, and parents differently.",
        ],
      },
      {
        heading: "For teachers: seconds instead of minutes, every period",
        paragraphs: [
          "Marking a physical register by hand, roll number by roll number, takes a few minutes at the start of every period. Digital attendance — marking a whole class in seconds from a phone — adds up to real teaching time recovered across a full school day, multiplied across every teacher.",
        ],
      },
      {
        heading: "For front-office staff: no more manual monthly compilation",
        paragraphs: [
          "At most schools, someone in the front office spends real time each month compiling attendance percentages from paper registers into a report for management. When attendance is digital from the start, that report is available instantly, without a separate compilation step.",
        ],
      },
      {
        heading: "For parents: same-day awareness instead of after-the-fact",
        paragraphs: [
          "Perhaps the biggest practical change is for parents. With a paper register, a parent typically only learns their child was absent if the school specifically calls to follow up, often days later if at all. With automatic notification through a Parent App, a parent knows the same day — which matters both for safety and for catching patterns of absenteeism early.",
        ],
      },
      {
        heading: "The pattern-visibility change is easy to underestimate",
        paragraphs: [
          "Chronic absenteeism — a student missing one or two days a week over months — is genuinely hard to spot from paper registers kept separately by different teachers. A digital system that tracks attendance centrally makes these patterns visible at a glance, often surfacing situations that would otherwise go unnoticed until they become serious.",
        ],
      },
    ],
  },
  {
    slug: "what-is-a-school-erp",
    title: "What Is a School ERP? A Complete Guide for Indian Schools",
    description: "A plain-language guide to what School ERP software actually does, why schools adopt one, and what to look for before choosing one — with ShikshaMatrix as a working example.",
    date: "2026-08-01",
    readMinutes: 9,
    category: "Guides",
    tags: ["school erp", "digital transformation", "school management software"],
    author: SHIKSHAMATRIX_AUTHOR,
    content: [
      {
        paragraphs: [
          "If you run a school in India today, chances are you're managing it through some combination of paper registers, Excel sheets, and a lot of phone calls. A School ERP (Enterprise Resource Planning) system is software built to replace that patchwork with one connected system — and this guide explains what that actually means in practice, using ShikshaMatrix as a concrete example of how the pieces fit together.",
        ],
      },
      {
        heading: "What does 'ERP' mean for a school?",
        paragraphs: [
          "The term ERP originally comes from manufacturing and business software, where it described systems that connected inventory, finance, and operations into one platform. Applied to a school, the same idea covers admissions, attendance, fee collection, academics, HR and payroll, communication, transport, hostel, and library management.",
          "The key word is 'connected.' A School ERP isn't just digital versions of your existing registers sitting separately — a well-built one links them together. In ShikshaMatrix, for example, marking a student absent in the Staff App instantly reflects in the Parent App, and a fee payment updates both the student's ledger and the school's collection dashboard at the same moment. That connectedness is what actually saves time, rather than just moving paperwork onto a screen.",
        ],
      },
      {
        heading: "Why do schools move to an ERP?",
        paragraphs: [
          "Most schools don't set out one day to 'digitize.' It usually starts with one specific pain point becoming unmanageable — fee follow-up calls taking too many staff hours, attendance registers getting hard to reconcile at month-end, or parents complaining they never hear about school updates in time.",
          "A School ERP addresses these one by one, but the real value shows up when they're solved together. A front-office staff member who used to spend hours each week chasing fee dues over the phone can instead rely on automatic due reminders. A teacher who spent minutes each period on a paper register can mark attendance in seconds from a phone. A parent who used to find out about a school notice days late, from another parent, now gets it the moment the school's Notice Board publishes it.",
        ],
      },
      {
        heading: "What should you look for in a School ERP?",
        paragraphs: [
          "Not all School ERPs are built the same way, and the differences matter more than a feature checklist suggests. A few things worth checking specifically:",
          "Does every user — school admin, teachers, students, and parents — get proper access, or are some of them treated as an afterthought? Many systems focus heavily on the admin panel and leave the parent/student experience thin. ShikshaMatrix, for instance, ships four purpose-built experiences — a web-based School Admin Panel, and dedicated mobile apps for Staff, Students, and Parents — rather than one app with a stripped-down 'parent mode.'",
          "Is your school's data actually isolated? ShikshaMatrix is multi-tenant by design at the database level — one school's students, staff, and records are never queryable by another school on the platform, not just hidden by a permission flag.",
          "Does the pricing model make sense for your school's size? A system priced for a 2,000-student institution will feel needlessly complex (and expensive) for a 150-student school, and vice versa. ShikshaMatrix's tiers (Economy, Essential, Professional — see Pricing) scale by student count and feature depth, while every tier keeps full access to all four core apps — the plans differ in depth, never in which apps a school gets to use.",
          "Does the curriculum and syllabus tooling actually reflect how a grade is taught? A subtle but real design flaw in many systems is tying curriculum to one specific class-section instead of the whole grade — meaning a school with two Class 5 sections ends up duplicating the same syllabus twice. ShikshaMatrix's Study Center is built at the grade level specifically to avoid that.",
        ],
      },
      {
        heading: "Where ShikshaMatrix fits in",
        paragraphs: [
          "ShikshaMatrix was built specifically around these questions — every plan, even the entry-level one, includes full access to the School Admin Panel, Staff App, Student App, and Parent App, because a School ERP that treats parents or students as an afterthought defeats the purpose.",
          "If you're evaluating options, the honest answer is that the right ERP depends on your school's specific size, priorities, and budget — but understanding what a School ERP is actually supposed to do (connect everything, not just digitize each piece separately) is the right place to start before comparing vendors.",
        ],
      },
    ],
  },
  {
    slug: "reduce-manual-work-school-fee-collection",
    title: "How to Reduce Manual Work in School Fee Collection",
    description: "Practical ways schools cut down the hours spent on fee follow-up calls, ledger reconciliation, and receipt management — and how ShikshaMatrix's fee module handles each one.",
    date: "2026-08-01",
    readMinutes: 7,
    category: "Fee Management",
    tags: ["fee collection", "school administration", "automation"],
    author: SHIKSHAMATRIX_AUTHOR,
    content: [
      {
        paragraphs: [
          "Fee collection is one of the most time-consuming parts of running a school — not because collecting money is inherently complicated, but because manual tracking turns a simple process into a monthly scramble of follow-up calls, ledger updates, and receipt reconciliation.",
        ],
      },
      {
        heading: "Where the manual hours actually go",
        paragraphs: [
          "Ask any front-office staff member where their time goes each month, and fee collection is almost always near the top. It typically breaks down into a few specific tasks: checking who's paid and who hasn't (usually by scanning a register or spreadsheet class by class), calling parents individually about pending dues, manually writing or printing receipts, and reconciling collected amounts against what was expected at month-end.",
          "None of these tasks are hard individually. The problem is that they're repetitive, manual, and easy to get slightly wrong — a missed follow-up call, a receipt written in the wrong ledger, a due date that nobody flagged until it was already overdue.",
        ],
      },
      {
        heading: "Automatic due reminders remove the follow-up-call bottleneck",
        paragraphs: [
          "The single highest-leverage change most schools can make is replacing manual follow-up calls with automatic reminders. In ShikshaMatrix, a fee plan is assigned to a student once, with installments and due dates set up front — from there, reminders go out automatically as due dates approach, turning a task that took hours into something that requires no ongoing staff time at all.",
        ],
      },
      {
        heading: "Digital receipts remove the reconciliation headache",
        paragraphs: [
          "When every payment — online or offline — generates a digital receipt automatically, reconciliation stops being a month-end scramble. In ShikshaMatrix, each payment updates the student's fee ledger and the school's collection dashboard in the same transaction, so there's no separate step where someone has to manually match receipts against a spreadsheet.",
        ],
      },
      {
        heading: "Online payment options reduce cash handling entirely",
        paragraphs: [
          "For payments that don't need to happen in person, giving parents a way to pay online through the Parent App removes an entire category of manual work: no cash to count, no cheque to deposit, no receipt to write by hand. It also tends to reduce late payments, since parents can pay from home the moment they get a reminder, rather than needing to visit the school office during working hours.",
        ],
      },
      {
        heading: "The result",
        paragraphs: [
          "Schools that move fee collection onto a system with automatic reminders, digital receipts, and online payment options typically find that the bulk of the manual work — the phone calls, the register-checking, the end-of-month reconciliation — simply disappears, leaving staff time for things that actually need a person's judgment.",
          "This is exactly the workflow ShikshaMatrix's Fee Management module is built around — see the Fee Management Software page for specifics on how it works.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  const current = getBlogPost(slug);
  if (!current) return [];
  return BLOG_POSTS
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aShared = a.tags.filter((t) => current.tags.includes(t)).length;
      const bShared = b.tags.filter((t) => current.tags.includes(t)).length;
      return bShared - aShared;
    })
    .slice(0, limit);
}
