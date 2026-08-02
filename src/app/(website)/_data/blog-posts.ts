// ─────────────────────────────────────────────────────────────
// Blog content lives here as plain data — add a new object to this
// array to publish a new article. Keeps /blog and /blog/[slug]
// simple, and makes it easy to scale to more articles later.
// ─────────────────────────────────────────────────────────────
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO format
  readMinutes: number;
  content: { heading?: string; paragraphs: string[] }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-is-a-school-erp",
    title: "What Is a School ERP? A Complete Guide for Indian Schools",
    description: "A plain-language guide to what School ERP software actually does, why schools adopt one, and what to look for before choosing one.",
    date: "2026-08-01",
    readMinutes: 8,
    content: [
      {
        paragraphs: [
          "If you run a school in India today, chances are you're managing it through some combination of paper registers, Excel sheets, and a lot of phone calls. A School ERP (Enterprise Resource Planning) system is software built to replace that patchwork with one connected system — and this guide explains what that actually means in practice.",
        ],
      },
      {
        heading: "What does 'ERP' mean for a school?",
        paragraphs: [
          "The term ERP originally comes from manufacturing and business software, where it described systems that connected inventory, finance, and operations into one platform. Applied to a school, the same idea covers admissions, attendance, fee collection, academics, HR and payroll, communication, transport, hostel, and library management.",
          "The key word is 'connected.' A School ERP isn't just digital versions of your existing registers sitting separately — a well-built one links them together. When a student's attendance is marked, it's visible to the parent instantly. When a fee payment comes in, it updates the student's ledger and the school's collection report at the same time. That connectedness is what actually saves time, rather than just moving paperwork onto a screen.",
        ],
      },
      {
        heading: "Why do schools move to an ERP?",
        paragraphs: [
          "Most schools don't set out one day to 'digitize.' It usually starts with one specific pain point becoming unmanageable — fee follow-up calls taking too many staff hours, attendance registers getting hard to reconcile at month-end, or parents complaining they never hear about school updates in time.",
          "A School ERP addresses these one by one, but the real value shows up when they're solved together. A front-office staff member who used to spend hours each week chasing fee dues over the phone can instead rely on automatic reminders. A teacher who spent minutes each period on a paper register can mark attendance in seconds from a phone. A parent who used to find out about a school notice days late, from another parent, now gets it the moment it's published.",
        ],
      },
      {
        heading: "What should you look for in a School ERP?",
        paragraphs: [
          "Not all School ERPs are built the same way, and the differences matter more than a feature checklist suggests. A few things worth checking specifically:",
          "Does every user — school admin, teachers, students, and parents — get proper access, or are some of them treated as an afterthought? Many systems focus heavily on the admin panel and leave the parent/student experience thin. A genuinely useful ERP gives each group a real, purpose-built experience, not just a stripped-down view of the admin panel.",
          "Is your school's data actually isolated? If the platform serves many schools, make sure it's built multi-tenant from the ground up — one school's data should never be visible to another, by design, not just by convention.",
          "Does the pricing model make sense for your school's size? A system priced for a 2,000-student institution will feel needlessly complex (and expensive) for a 150-student school, and vice versa. Look for tiered pricing that scales with your school rather than a one-size-fits-all plan.",
          "Is support responsive? Software that manages fee collection and attendance is not something you want to be stuck with an unanswered support ticket for during exam season or fee-due week.",
        ],
      },
      {
        heading: "Where ShikshaMatrix fits in",
        paragraphs: [
          "ShikshaMatrix was built specifically around these questions — every plan, even the entry-level one, includes full access to the School Admin Panel, Staff App, Student App, and Parent App, because a School ERP that treats parents or students as an afterthought defeats the purpose. Data is isolated per school by design, and pricing scales from small schools up to large institutions.",
          "If you're evaluating options, the honest answer is that the right ERP depends on your school's specific size, priorities, and budget — but understanding what a School ERP is actually supposed to do (connect everything, not just digitize each piece separately) is the right place to start before comparing vendors.",
        ],
      },
    ],
  },
  {
    slug: "reduce-manual-work-school-fee-collection",
    title: "How to Reduce Manual Work in School Fee Collection",
    description: "Practical ways schools cut down the hours spent on fee follow-up calls, ledger reconciliation, and receipt management.",
    date: "2026-08-01",
    readMinutes: 6,
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
          "The single highest-leverage change most schools can make is replacing manual follow-up calls with automatic reminders. Instead of staff needing to remember which parents haven't paid and call each one, the system tracks due dates and sends reminders automatically as they approach — turning a task that took hours into something that requires no ongoing staff time at all.",
        ],
      },
      {
        heading: "Digital receipts remove the reconciliation headache",
        paragraphs: [
          "When every payment — online or offline — generates a digital receipt automatically, reconciliation stops being a month-end scramble. The school's collection report and each student's fee ledger update in real time, so there's no separate step where someone has to manually match receipts against a spreadsheet.",
        ],
      },
      {
        heading: "Online payment options reduce cash handling entirely",
        paragraphs: [
          "For payments that don't need to happen in person, giving parents a way to pay online removes an entire category of manual work: no cash to count, no cheque to deposit, no receipt to write by hand. It also tends to reduce late payments, since parents can pay from home the moment they get a reminder, rather than needing to visit the school office during working hours.",
        ],
      },
      {
        heading: "The result",
        paragraphs: [
          "Schools that move fee collection onto a system with automatic reminders, digital receipts, and online payment options typically find that the bulk of the manual work — the phone calls, the register-checking, the end-of-month reconciliation — simply disappears, leaving staff time for things that actually need a person's judgment.",
          "This is exactly the workflow ShikshaMatrix's fee management module is built around — see the Fee Management Software page for specifics on how it works.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
