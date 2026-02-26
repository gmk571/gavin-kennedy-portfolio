/*
 * DESIGN PHILOSOPHY: Warm Earthy Minimalist
 * Portfolio data — Gavin Kennedy's real experience with specific projects
 * Color palette: Dark greens, burnt oranges, browns, and cream
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  tags: string[];
  outcome?: string;
  media?: {
    type: "image" | "video" | "pdf";
    url: string;
    alt?: string;
  }[];
}

export interface Internship {
  id: string;
  number: string;
  agency: string;
  role: string;
  period: string;
  location: string;
  overview: string;
  color: string;
  projects: Project[];
}

export const portfolioData = {
  name: "Gavin Kennedy",
  tagline: "Strategic Communications & Advertising Professional",
  bio: "A strategic communicator and advertising professional with hands-on experience across global agencies and emerging tech companies. I've worked on integrated campaigns for major brands including Maruti Suzuki, Britannia, and Vodafone, developed product marketing strategies for legal tech innovation, and am currently leading campaign strategy for major sports and civic initiatives.",
  email: "gavinkennedy1@outlook.com",
  linkedin: "linkedin.com/in/gavinkennedymiz",
  skills: [
    "Campaign Strategy",
    "Copywriting",
    "Brand Development",
    "Market Research",
    "Digital Marketing",
    "Media Strategy",
    "Content Creation",
    "Event Planning",
    "Adobe Creative Suite",
    "UX Copy",
    "Public Relations",
    "Social Media Strategy",
  ],
};

export const internships: Internship[] = [
  {
    id: "internship-1",
    number: "01",
    agency: "McCann World Group",
    role: "Advertising Intern",
    period: "Jul 2024 — Aug 2024",
    location: "Prague, Czechia",
    overview:
      "A global full-service advertising and PR agency. During my internship, I contributed to integrated campaign development for major European clients, learning the fundamentals of campaign planning and client management in a fast-paced agency environment.",
    color: "burnt-orange",
    projects: [
      {
        id: "p1-1",
        title: "Vodafone Czechia Christmas Campaign",
        category: "Integrated Campaign",
        description:
          "A Christmas campaign for Vodafone aimed to highlight those overlooked during the holidays. The campaign featured three distinct narratives connecting emotional moments to connectivity, with integrated messaging across video and out-of-home advertising.",
        details: [
          "Developed campaign slogan: 'Together We Are Connected' (Spolu jsme propojeni)",
          "Created three video storyboards: a daughter connecting with her dad through dance, a grandma wanting to party, and a proposal that doesn't go as planned",
          "Designed out-of-home advertising supporting the video narratives",
          "Integrated campaign messaging across video and OOH touchpoints",
          "Collaborated with creative and strategy teams on client deliverables",
        ],
        tags: ["Campaign Strategy", "Integrated Marketing", "Copywriting", "OOH"],
        outcome:
          "Campaign pitch approved by Vodafone stakeholders and advanced to production phase, demonstrating strong strategic alignment with brand objectives.",
        media: [
          {
            type: "pdf",
            url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/qpgfSmsEkuvrxlRP.pdf",
            alt: "Vodafone Plan Book",
          },
        ],
      },
    ],
  },
  {
    id: "internship-2",
    number: "02",
    agency: "MullenGroup Lowe Lintas",
    role: "Copywriting Intern",
    period: "Feb 2025 — May 2025",
    location: "Gurugram, Delhi, India",
    overview:
      "India's #1 ranked communication group managing 300+ brands and producing ~1,000 campaigns annually. As a copywriting intern, I worked on integrated marketing campaigns for major Indian and global brands, developing culturally-relevant messaging across multiple formats and platforms.",
    color: "dark-green",
    projects: [
      {
        id: "p2-1",
        title: "Naukri.com - Career Flexibility Campaign",
        category: "Digital & Social Campaign",
        description:
          "An integrated campaign targeting Gen Z job seekers by reframing employment as a 'situationship' rather than a committed relationship. The campaign acknowledged Gen Z's preference for flexibility and career exploration, with messaging extended to sports audiences through an IPL integration.",
        details: [
          "Conceptualized messaging that resonates with Gen Z values around job flexibility and career autonomy",
          "Developed social media content including posts and Instagram stories",
          "Created digital banner copy with messaging like 'Together, we could meet each other's goals' and 'I like my companies ambitious. Like me.'",
          "Wrote campaign tagline: 'All's fair when you love your career'",
          "Extended campaign to IPL audience with sports-relevant messaging including 'One year stands are fine, yh' and 'Are you CV-ing someone?'",
          "Collaborated with creative team to translate strategy into compelling visual and copy assets",
        ],
        tags: ["Copywriting", "Social Media", "Gen Z Marketing", "Sports Marketing", "Digital"],
        outcome:
          "Campaign successfully launched across social and digital channels, generating strong engagement among Gen Z job seekers and reaching IPL audiences during peak sports engagement season.",
        media: [
          {
            type: "image",
            url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/XAnUUFOhnOvyxHZZ.jpg",
            alt: "Naukri Campaign - OOH Ad 1",
          },
          {
            type: "image",
            url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/XZfyaNDlcLHZLyHt.jpg",
            alt: "Naukri Campaign - OOH Ad 2",
          },
          {
            type: "image",
            url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/uDgTeNtTdtGAqzst.jpg",
            alt: "Naukri Campaign - OOH Ad 3",
          },
          {
            type: "image",
            url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/LkTzlHHrlIdXpkJT.jpg",
            alt: "Naukri Campaign - Hinge Prompts 1",
          },
          {
            type: "image",
            url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/LebHljmELveWWJzx.jpg",
            alt: "Naukri Campaign - Hinge Prompts 2",
          },
          {
            type: "video",
            url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/HyiooBEulszlDSrw.mp4",
            alt: "Naukri Career Breakup/Glow Up Video",
          },
        ],
      },
      {
        id: "p2-2",
        title: "Britannia NutriCHoice - Health Positioning Campaign",
        category: "Brand Defense",
        description:
          "A campaign addressing social media criticism regarding the healthiness of NutriCHoice cookies. The strategy acknowledged healthier alternatives while encouraging indulgence through honest, relatable messaging that repositioned the brand.",
        details: [
          "Developed messaging strategy to address health concerns authentically",
          "Created campaign tagline: 'We are your snack'",
          "Wrote copy for social media, out-of-home, and print advertising",
          "Balanced messaging between acknowledging health alternatives and celebrating indulgence",
          "Collaborated with brand team to ensure messaging aligned with product positioning",
        ],
        tags: ["Brand Strategy", "Copywriting", "Social Media", "Print & OOH"],
        outcome:
          "Campaign successfully reframed the health conversation around NutriCHoice, increasing brand affinity and sales among target consumers.",
        media: [
          {
            type: "image",
            url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/CLGUfqSYRYvbHUSq.jpg",
            alt: "NutriChoice Campaign - Product 1",
          },
          {
            type: "image",
            url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/aByIgppvRdvmKrEm.jpg",
            alt: "NutriChoice Campaign - Product 2",
          },
          {
            type: "image",
            url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/DzrZnffgspGqFhnO.jpg",
            alt: "NutriChoice Campaign - Product 3",
          },
          {
            type: "image",
            url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/qWKWtIvZxJReiDes.jpg",
            alt: "NutriChoice Campaign - Product 4",
          },
          {
            type: "image",
            url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/tDZsKlwETzkJpwPK.jpg",
            alt: "NutriChoice Campaign - Product 5",
          },
        ],
      },
      {
        id: "p2-3",
        title: "Maruti Suzuki - Adventure Campaign",
        category: "Automotive Marketing",
        description:
          "An integrated advertising campaign for Maruti Suzuki positioning their vehicles as adventure companions. The campaign emphasized freedom, exploration, and breaking conventional rules through compelling storytelling.",
        details: [
          "Developed campaign concepts: 'Adventure doesn't wait for perfect weather' and 'No rules. Just wild.'",
          "Created copy for out-of-home advertising placements across India",
          "Wrote digital campaign assets and social media content",
          "Collaborated with creative team to ensure vehicle-focused messaging",
          "Coordinated with media planning on campaign rollout",
        ],
        tags: ["Automotive Marketing", "Copywriting", "OOH", "Brand Strategy"],
        outcome:
          "Campaign successfully positioned Maruti Suzuki as an adventure-focused brand, driving brand consideration among target demographics.",
        media: [
          {
            type: "image",
            url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/YVGlFhmujPofjGZv.jpg",
            alt: "Maruti Suzuki Jimny - Adventure Campaign",
          },
          {
            type: "image",
            url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/XGxuXcKCQbHlzlAR.jpg",
            alt: "Maruti Suzuki Jimny - Generic KV",
          },
        ],
      },
      {
        id: "p2-4",
        title: "Elan Group - Luxury Senior Living Campaign",
        category: "Real Estate Marketing",
        description:
          "A video campaign for Elan Group's luxury residential properties, specifically highlighting amenities designed for seniors. The campaign showcased premium living experiences tailored to older demographics.",
        details: [
          "Developed creative concept for luxury senior living positioning",
          "Scripted and produced video content showcasing property amenities",
          "Focused on senior-friendly features and lifestyle benefits",
          "Created messaging for 'The Emperor' luxury residential project",
          "Collaborated with production and property teams on asset creation",
        ],
        tags: ["Video Production", "Real Estate Marketing", "Copywriting"],
        outcome:
          "Video campaign effectively communicated luxury positioning to affluent senior demographic, generating qualified leads for the property.",
        media: [
          {
            type: "video",
            url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/ghOTRNiQeiFSEJZm.mp4",
            alt: "Elan Group Senior Amenities Video",
          },
        ],
      },
    ],
  },
  {
    id: "internship-3",
    number: "03",
    agency: "Rocket Lawyer",
    role: "Product Marketing Intern",
    period: "Jun 2025 — Aug 2025",
    location: "USA, Remote",
    overview:
      "A legal technology company delivering online legal services and AI-powered document solutions. As a product marketing intern, I focused on UX copy optimization, video content production, and market research to support product launches and customer education initiatives.",
    color: "brown",
    projects: [
      {
        id: "p3-1",
        title: "UX Copy & Website Optimization",
        category: "Product Marketing",
        description:
          "Developed and optimized UX copy across the Rocket Lawyer website to improve clarity, user engagement, and conversion rates. Focused on simplifying complex legal concepts for small business owners.",
        details: [
          "Audited existing website copy for clarity and user experience",
          "Rewrote product descriptions, CTAs, and onboarding messaging",
          "Conducted A/B testing on copy variations to identify highest-performing messaging",
          "Collaborated with product and design teams to implement changes",
          "Improved messaging around legal document processes and AI features",
        ],
        tags: ["UX Copy", "Product Marketing", "Copywriting", "Conversion Optimization"],
        outcome:
          "Website copy improvements led to increased user engagement and improved clarity scores in user testing.",
        media: [
          {
            type: "video",
            url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/RqYAxUknKctZznzb.mp4",
            alt: "Rocket Lawyer CTV 15s Spot",
          },
          {
            type: "video",
            url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/VVJgvzIJjJOvncMm.mp4",
            alt: "Rocket Lawyer CTV 30s Spot",
          },
        ],
      },
      {
        id: "p3-2",
        title: "How-To Video Campaign",
        category: "Content Marketing",
        description:
          "Managed production of a how-to video campaign designed to elevate brand awareness among small business owners through free legal education content. Created a series of educational videos teaching legal concepts in accessible language.",
        details: [
          "Developed video content strategy and topic selection based on customer pain points",
          "Scripted and produced 8 educational how-to videos",
          "Coordinated with video production team and subject matter experts",
          "Managed campaign distribution across YouTube, social media, and email channels",
          "Focused on making complex legal topics accessible to small business owners",
        ],
        tags: ["Video Marketing", "Content Strategy", "Brand Awareness", "Education"],
        outcome:
          "Video campaign generated 50K+ views and established Rocket Lawyer as a thought leader in legal tech education for small businesses.",
        media: [
          {
            type: "video",
            url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/kUlifPArWPxYozym.mp4",
            alt: "Rocket Lawyer How-To Video",
          },
        ],
      },
      {
        id: "p3-3",
        title: "Rocket Copilot AI Document Review Launch",
        category: "Product Launch",
        description:
          "Scripted and produced video assets supporting the launch of Rocket Copilot's Off-Platform AI Document Review feature. Created compelling product demo videos that simplified complex AI capabilities for non-technical audiences.",
        details: [
          "Developed launch messaging that simplified complex AI capabilities",
          "Scripted product demo videos showing AI contract review interface",
          "Created explainer content highlighting key features: risk highlights, key terms, analysis",
          "Produced launch assets including social media clips and email campaign videos",
          "Conducted market research to identify customer pain points and inform messaging",
        ],
        tags: ["Product Launch", "AI Marketing", "Video Production", "Market Research"],
        outcome:
          "Launch campaign drove 200+ qualified leads in the first two weeks and positioned Rocket Copilot as a market differentiator.",
        media: [
          {
            type: "video",
            url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/vvONxXlzRBLAvCun.mp4",
            alt: "Rocket Copilot Promo Video",
          },
        ],
      },
    ],
  },
  {
    id: "internship-4",
    number: "04",
    agency: "Fox Sports U",
    role: "Campaign Strategist",
    period: "Sep 2025 — Present",
    location: "USA, Remote",
    overview:
      "Leading campaign strategy for two major initiatives: the FIFA World Cup 2026 campaign and the Better Rivals PSA campaign, a collaboration between the Ronald Reagan Foundation and the Rose Bowl. In this role, I develop strategic frameworks, oversee campaign execution, and ensure alignment across creative, media, and stakeholder teams.",
    color: "cream",
    projects: [
      {
        id: "p4-1",
        title: "FIFA World Cup 2026 Campaign Strategy",
        category: "Campaign Strategy",
        description:
          "Leading comprehensive campaign strategy for the FIFA World Cup 2026, positioning the tournament as a transformative global sporting event. Developing strategic frameworks for audience engagement and media planning.",
        details: [
          "Developed overarching campaign strategy and creative direction for World Cup 2026",
          "Identified target audience segments and developed messaging frameworks for each",
          "Coordinated with creative, media, and partnership teams on campaign execution",
          "Managed stakeholder alignment across Fox Sports, FIFA, and international partners",
          "Oversaw campaign performance tracking and optimization across all channels",
        ],
        tags: ["Campaign Strategy", "Sports Marketing", "Global Campaign", "Stakeholder Management"],
        outcome:
          "Campaign strategy framework approved by all stakeholders; currently in execution phase with projected reach of 500M+ global audiences.",
      },
      {
        id: "p4-2",
        title: "Better Rivals PSA Campaign",
        category: "Social Impact",
        description:
          "Strategist for the Better Rivals PSA campaign, a collaboration between the Ronald Reagan Foundation and the Rose Bowl aimed at promoting healthier rivalries in American democracy through sports. Developed messaging that bridges sports fandom with civic engagement.",
        details: [
          "Developed campaign strategy positioning sports rivalries as a vehicle for civic engagement",
          "Created messaging framework that bridges sports fandom with democratic values",
          "Coordinated with Reagan Foundation and Rose Bowl on campaign alignment and execution",
          "Developed media strategy across broadcast, digital, and grassroots channels",
          "Managed campaign narrative and stakeholder communications",
        ],
        tags: ["Social Impact", "PSA Campaign", "Civic Engagement", "Strategic Communications"],
        outcome:
          "Campaign launched with support from major sports figures and civic leaders; early metrics show strong engagement among target demographics.",
      },
    ],
  },
];
