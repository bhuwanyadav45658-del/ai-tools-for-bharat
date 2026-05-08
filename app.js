const LAST_UPDATED = "8 May 2026";
const SITE_NAME = "AI Tools for Bharat";
const POSITIONING = "Free AI prompts, templates, and mini-tools for Indian work, study, business, content, and daily productivity.";

const languages = ["English", "Hindi", "Hinglish", "Telugu", "Tamil", "Kannada", "Marathi", "Bengali", "Malayalam", "Gujarati"];
const tones = ["Formal", "Friendly", "Simple", "Professional", "Polite", "Short", "Detailed", "Hinglish", "Marketing style", "Student-friendly", "Teacher-friendly", "Corporate"];
const formats = ["Bullet points", "Table", "Email", "WhatsApp message", "Instagram caption", "Checklist", "Study plan", "Script", "Resume format", "Lesson plan", "FAQ", "Summary"];

const aiLinks = [
  ["ChatGPT", "https://chatgpt.com/"],
  ["Gemini", "https://gemini.google.com/app"],
  ["Perplexity", "https://www.perplexity.ai/"],
  ["Copilot", "https://copilot.microsoft.com/"],
  ["Claude", "https://claude.ai/"]
];

const categoryContent = {
  "ai-tools-for-students-india": {
    title: "Free AI Tools for Indian Students",
    category: "Students",
    accent: "#2952ff",
    description: "Free prompt generators for study plans, notes, interviews, assignments, project ideas, and revision workflows for Indian students.",
    sections: ["Use AI for learning, revision, brainstorming, and understanding concepts.", "Create study plans, summarize notes, prepare viva questions, and simplify difficult topics.", "Follow your school or college rules before submitting any AI-assisted work."]
  },
  "ai-tools-for-teachers-india": {
    title: "Free AI Tools for Indian Teachers",
    category: "Teachers",
    accent: "#138a53",
    description: "Lesson plans, worksheets, MCQs, report card remarks, parent messages, and classroom ideas for Indian teachers.",
    sections: ["Plan CBSE, ICSE, and state-board lessons faster.", "Create classroom-ready worksheets, quiz questions, parent notes, and slow-learner support ideas.", "Review every generated output for age appropriateness and school policy."]
  },
  "ai-tools-for-small-business-india": {
    title: "Free AI Tools for Small Business India",
    category: "Small Business",
    accent: "#ff7a1a",
    description: "WhatsApp marketing messages, Instagram captions, review replies, festival offers, and local business copy for Indian shops.",
    sections: ["Create practical messages for kirana stores, boutiques, salons, restaurants, coaching centers, and local services.", "Use regional language prompts for WhatsApp-first business workflows.", "Avoid spammy claims, misleading discounts, and private customer data."]
  },
  "ai-tools-for-job-seekers-india": {
    title: "Free AI Tools for Job Seekers India",
    category: "Job Seekers",
    accent: "#d93663",
    description: "Resume summaries, cover letters, fresher introductions, interview prep, ATS keywords, and recruiter messages for Indian job seekers.",
    sections: ["Prepare fresher and experienced resumes for Indian job portals.", "Draft cover letters, recruiter messages, salary negotiation emails, and interview answers.", "Always verify facts, dates, and achievements before using generated content."]
  },
  "ai-tools-for-office-employees-india": {
    title: "Free AI Tools for Office Employees India",
    category: "Office Employees",
    accent: "#101820",
    description: "Professional emails, meeting summaries, status updates, presentation outlines, and corporate communication prompts.",
    sections: ["Draft clear emails, action items, summaries, escalations, reminders, and weekly updates.", "Keep confidential company, customer, financial, and personal information out of public AI tools.", "Use outputs as drafts and adjust for your company tone."]
  },
  "ai-tools-for-accountants-india": {
    title: "Free AI Tools for Accountants India",
    category: "Accountants",
    accent: "#f2bd00",
    description: "Invoice emails, payment reminders, accounting explanations, checklists, and admin templates for Indian finance teams.",
    sections: ["Use these prompts for admin drafts and educational explanations only.", "GST, tax, accounting, legal, and financial matters must be verified by a qualified professional.", "Never paste sensitive client data into public AI tools."]
  },
  "ai-tools-for-hr-india": {
    title: "Free AI Tools for HR India",
    category: "HR",
    accent: "#2952ff",
    description: "Hiring workflows, JDs, candidate emails, onboarding, reviews, policy explainers, and HR communication templates.",
    sections: ["Create clear HR drafts for hiring, onboarding, feedback, surveys, and internal announcements.", "Protect candidate and employee privacy.", "Review policy, legal, and compliance language with your organization."]
  },
  "ai-tools-for-creators-india": {
    title: "Free AI Tools for Creators India",
    category: "Creators",
    accent: "#d93663",
    description: "Instagram captions, YouTube titles, reel scripts, hooks, hashtags, and regional content prompts for Indian creators.",
    sections: ["Plan posts, reels, shorts, captions, hooks, and creator bios.", "Review outputs before posting and avoid copyrighted or misleading claims.", "Adapt examples to your niche, audience, city, language, and platform."]
  },
  "ai-tools-for-freelancers-india": {
    title: "Free AI Tools for Freelancers India",
    category: "Freelancers",
    accent: "#138a53",
    description: "Proposals, project quotations, scope documents, onboarding questions, portfolio bios, and payment follow-ups for Indian freelancers.",
    sections: ["Draft proposals, gig descriptions, client summaries, timelines, and follow-up emails.", "Clarify scope, deliverables, revisions, and payment terms.", "Use templates as starting points and adapt to each client."]
  },
  "ai-tools-for-sales-marketing-india": {
    title: "Free AI Tools for Sales and Marketing India",
    category: "Sales and Marketing",
    accent: "#ff7a1a",
    description: "Sales emails, WhatsApp follow-ups, product pitches, ad copy, landing page copy, and objection-handling prompts.",
    sections: ["Create concise outreach and marketing drafts for Indian audiences.", "Personalize messages and keep claims truthful.", "Use prompt outputs to test angles, offers, and follow-ups."]
  }
};

const categories = Object.entries(categoryContent).map(([slug, value]) => ({ slug, ...value }));

const tools = [
  {
    slug: "resume-summary-generator-india",
    title: "Resume Summary Generator India",
    h1: "Free Resume Summary Generator for Indian Job Seekers",
    category: "Job Seekers",
    categorySlug: "ai-tools-for-job-seekers-india",
    description: "Create a sharp resume summary for freshers, experienced candidates, and career switchers applying in India.",
    profession: ["Job Seeker", "Fresher", "Student"],
    tasks: ["Write", "Resume", "Career"],
    languages,
    fields: ["role", "experience", "skills", "targetRole", "audience", "language", "tone", "format", "goal"],
    keywords: ["resume summary generator india", "fresher resume summary", "ats resume prompt"],
    relatedTools: ["cover-letter-generator-india", "interview-question-generator-for-freshers", "linkedin-about-section-generator"],
    disclaimerType: "student",
    accent: "#d93663"
  },
  {
    slug: "cover-letter-generator-india",
    title: "Cover Letter Generator India",
    h1: "Free Cover Letter Generator for Indian Job Applications",
    category: "Job Seekers",
    categorySlug: "ai-tools-for-job-seekers-india",
    description: "Generate a practical cover letter prompt for Naukri, LinkedIn, email, referrals, and campus placement applications.",
    profession: ["Job Seeker", "Fresher", "Professional"],
    tasks: ["Write", "Email", "Career"],
    languages,
    fields: ["role", "company", "experience", "skills", "audience", "language", "tone", "format", "goal"],
    keywords: ["cover letter india", "job application email", "fresher cover letter"],
    relatedTools: ["resume-summary-generator-india", "job-description-generator-india", "professional-email-generator"],
    disclaimerType: "student",
    accent: "#d93663"
  },
  {
    slug: "interview-question-generator-for-freshers",
    title: "Interview Question Generator for Freshers",
    h1: "Free Interview Question Generator for Freshers India",
    category: "Students",
    categorySlug: "ai-tools-for-students-india",
    description: "Prepare role-specific HR, technical, aptitude, and self-introduction questions for fresher interviews.",
    profession: ["Student", "Fresher", "Job Seeker"],
    tasks: ["Prepare Interviews", "Career", "Practice"],
    languages,
    fields: ["role", "degree", "skills", "experience", "audience", "language", "tone", "format", "goal"],
    keywords: ["fresher interview questions", "campus placement prompt", "hr interview answers india"],
    relatedTools: ["resume-summary-generator-india", "study-plan-generator", "cover-letter-generator-india"],
    disclaimerType: "student",
    accent: "#2952ff"
  },
  {
    slug: "study-plan-generator",
    title: "Study Plan Generator",
    h1: "Free Study Plan Generator for Indian Students",
    category: "Students",
    categorySlug: "ai-tools-for-students-india",
    description: "Build a study timetable for exams, boards, semester tests, entrance preparation, or daily routines.",
    profession: ["Student", "Parent", "Tutor"],
    tasks: ["Plan", "Study Plan", "Checklist"],
    languages,
    fields: ["classLevel", "subject", "exam", "duration", "hoursPerDay", "audience", "language", "tone", "format", "goal"],
    keywords: ["study plan generator india", "exam timetable prompt", "student routine ai"],
    relatedTools: ["notes-summarizer-for-students", "mcq-question-generator", "interview-question-generator-for-freshers"],
    disclaimerType: "student",
    accent: "#2952ff"
  },
  {
    slug: "notes-summarizer-for-students",
    title: "Notes Summarizer for Students",
    h1: "Free Notes Summarizer Prompt for Indian Students",
    category: "Students",
    categorySlug: "ai-tools-for-students-india",
    description: "Create a prompt to summarize notes into key points, definitions, flashcards, questions, and revision checklists.",
    profession: ["Student", "Teacher", "Tutor"],
    tasks: ["Summarize", "Explain", "Study"],
    languages,
    fields: ["subject", "topic", "classLevel", "notesContext", "audience", "language", "tone", "format", "goal"],
    keywords: ["notes summarizer students", "study notes prompt", "revision summary ai"],
    relatedTools: ["study-plan-generator", "mcq-question-generator", "assignment-explainer"],
    disclaimerType: "student",
    accent: "#2952ff"
  },
  {
    slug: "lesson-plan-generator-for-teachers",
    title: "Lesson Plan Generator for Teachers",
    h1: "Free AI Lesson Plan Generator for Indian Teachers",
    category: "Teachers",
    categorySlug: "ai-tools-for-teachers-india",
    description: "Generate lesson plan prompts for CBSE, ICSE, and state-board classes with objectives, activities, and assessment ideas.",
    profession: ["Teacher", "Tutor", "School"],
    tasks: ["Plan", "Lesson Plan", "Teaching"],
    languages,
    fields: ["classLevel", "subject", "chapter", "board", "duration", "studentLevel", "language", "tone", "format", "goal"],
    keywords: ["lesson plan generator india", "cbse lesson plan ai", "teacher prompt generator"],
    relatedTools: ["worksheet-generator-for-teachers", "mcq-question-generator", "report-card-remarks-generator"],
    disclaimerType: "teacher",
    accent: "#138a53"
  },
  {
    slug: "worksheet-generator-for-teachers",
    title: "Worksheet Generator for Teachers",
    h1: "Free Worksheet Generator for Indian Teachers",
    category: "Teachers",
    categorySlug: "ai-tools-for-teachers-india",
    description: "Create classroom worksheets with questions, answer keys, difficulty levels, and regional-language instructions.",
    profession: ["Teacher", "Tutor", "School"],
    tasks: ["Create", "Worksheet", "Questions"],
    languages,
    fields: ["classLevel", "subject", "chapter", "board", "questionCount", "studentLevel", "language", "tone", "format", "goal"],
    keywords: ["worksheet generator india", "teacher worksheet prompt", "cbse worksheet ai"],
    relatedTools: ["lesson-plan-generator-for-teachers", "mcq-question-generator", "report-card-remarks-generator"],
    disclaimerType: "teacher",
    accent: "#138a53"
  },
  {
    slug: "mcq-question-generator",
    title: "MCQ Question Generator",
    h1: "Free MCQ Question Generator for Indian Classrooms",
    category: "Teachers",
    categorySlug: "ai-tools-for-teachers-india",
    description: "Generate multiple-choice questions with answer keys and explanation prompts for school, college, and coaching use.",
    profession: ["Teacher", "Student", "Tutor"],
    tasks: ["Questions", "Quiz", "Exam"],
    languages,
    fields: ["classLevel", "subject", "chapter", "board", "questionCount", "difficulty", "language", "tone", "format", "goal"],
    keywords: ["mcq generator india", "quiz question prompt", "exam questions ai"],
    relatedTools: ["worksheet-generator-for-teachers", "study-plan-generator", "notes-summarizer-for-students"],
    disclaimerType: "teacher",
    accent: "#138a53"
  },
  {
    slug: "whatsapp-offer-message-generator",
    title: "WhatsApp Offer Message Generator",
    h1: "Free WhatsApp Offer Message Generator for Indian Shops",
    category: "Small Business",
    categorySlug: "ai-tools-for-small-business-india",
    description: "Create ready-to-send WhatsApp offer messages for kirana shops, boutiques, salons, restaurants, coaching centers, and local services.",
    profession: ["Small Business Owner", "Shop Owner", "Kirana Store", "Boutique Owner"],
    tasks: ["Write", "Marketing", "WhatsApp", "Festival Offer"],
    languages,
    fields: ["businessType", "productOrService", "offer", "city", "occasion", "audience", "language", "tone", "format", "goal"],
    keywords: ["whatsapp offer message generator", "kirana shop marketing message", "small business whatsapp message india"],
    relatedTools: ["instagram-caption-generator-india", "customer-review-reply-generator", "professional-email-generator"],
    disclaimerType: "business",
    accent: "#ff7a1a"
  },
  {
    slug: "instagram-caption-generator-india",
    title: "Instagram Caption Generator India",
    h1: "Free Instagram Caption Generator for Indian Creators and Shops",
    category: "Creators",
    categorySlug: "ai-tools-for-creators-india",
    description: "Generate captions, hooks, hashtags, and CTA prompts for Indian creators, boutiques, food pages, and local brands.",
    profession: ["Creator", "Small Business Owner", "Influencer"],
    tasks: ["Create Captions", "Marketing", "Social Media"],
    languages,
    fields: ["businessType", "productOrService", "occasion", "city", "audience", "language", "tone", "format", "goal"],
    keywords: ["instagram caption generator india", "reels caption prompt", "boutique caption ai"],
    relatedTools: ["whatsapp-offer-message-generator", "customer-review-reply-generator", "professional-email-generator"],
    disclaimerType: "creator",
    accent: "#d93663"
  },
  {
    slug: "customer-review-reply-generator",
    title: "Customer Review Reply Generator",
    h1: "Free Customer Review Reply Generator for Indian Businesses",
    category: "Small Business",
    categorySlug: "ai-tools-for-small-business-india",
    description: "Reply politely to positive, negative, and mixed reviews for Google Business Profile, Zomato, Swiggy, Amazon, and social pages.",
    profession: ["Small Business Owner", "Support Team", "Creator"],
    tasks: ["Reply", "Customer Service", "Review"],
    languages,
    fields: ["businessType", "reviewType", "customerIssue", "city", "audience", "language", "tone", "format", "goal"],
    keywords: ["customer review reply generator", "google review reply india", "customer service prompt"],
    relatedTools: ["whatsapp-offer-message-generator", "professional-email-generator", "instagram-caption-generator-india"],
    disclaimerType: "business",
    accent: "#ff7a1a"
  },
  {
    slug: "professional-email-generator",
    title: "Professional Email Generator",
    h1: "Free Professional Email Generator for Office Employees India",
    category: "Office Employees",
    categorySlug: "ai-tools-for-office-employees-india",
    description: "Draft clear office emails, reminders, apologies, follow-ups, updates, and client messages without sharing confidential data.",
    profession: ["Office Employee", "Manager", "Freelancer"],
    tasks: ["Generate Emails", "Write", "Corporate"],
    languages,
    fields: ["emailType", "recipient", "topic", "context", "audience", "language", "tone", "format", "goal"],
    keywords: ["professional email generator india", "office email prompt", "polite email ai"],
    relatedTools: ["meeting-summary-generator", "cover-letter-generator-india", "customer-review-reply-generator"],
    disclaimerType: "corporate",
    accent: "#101820"
  },
  {
    slug: "meeting-summary-generator",
    title: "Meeting Summary Generator",
    h1: "Free Meeting Summary Generator for Indian Office Teams",
    category: "Office Employees",
    categorySlug: "ai-tools-for-office-employees-india",
    description: "Generate meeting notes, action items, decisions, blockers, and follow-up prompts for office workflows.",
    profession: ["Office Employee", "Project Manager", "Team Lead"],
    tasks: ["Summarize", "Meetings", "Action Items"],
    languages,
    fields: ["meetingType", "topic", "context", "participants", "audience", "language", "tone", "format", "goal"],
    keywords: ["meeting summary generator", "minutes of meeting ai", "office meeting prompt"],
    relatedTools: ["professional-email-generator", "job-description-generator-india", "study-plan-generator"],
    disclaimerType: "corporate",
    accent: "#101820"
  },
  {
    slug: "job-description-generator-india",
    title: "Job Description Generator India",
    h1: "Free Job Description Generator for HR Teams India",
    category: "HR",
    categorySlug: "ai-tools-for-hr-india",
    description: "Create role descriptions, responsibilities, skills, interview criteria, and inclusive job post prompts for Indian hiring teams.",
    profession: ["HR", "Founder", "Recruiter"],
    tasks: ["Write", "Hiring", "Job Description"],
    languages,
    fields: ["role", "company", "experience", "skills", "location", "audience", "language", "tone", "format", "goal"],
    keywords: ["job description generator india", "hr prompt generator", "jd generator ai"],
    relatedTools: ["interview-question-generator-for-freshers", "professional-email-generator", "cover-letter-generator-india"],
    disclaimerType: "corporate",
    accent: "#2952ff"
  },
  {
    slug: "report-card-remarks-generator",
    title: "Report Card Remarks Generator",
    h1: "Free Report Card Remarks Generator for Indian Teachers",
    category: "Teachers",
    categorySlug: "ai-tools-for-teachers-india",
    description: "Generate balanced report card comments for strengths, improvement areas, conduct, participation, and parent communication.",
    profession: ["Teacher", "Class Teacher", "School"],
    tasks: ["Write", "Feedback", "Reports"],
    languages,
    fields: ["classLevel", "subject", "studentStrength", "improvementArea", "studentLevel", "audience", "language", "tone", "format", "goal"],
    keywords: ["report card remarks generator india", "teacher feedback prompt", "student remarks ai"],
    relatedTools: ["lesson-plan-generator-for-teachers", "worksheet-generator-for-teachers", "parent-message-generator"],
    disclaimerType: "teacher",
    accent: "#138a53"
  }
];

const fieldDefs = {
  role: ["Target role", "Example: Junior accountant, maths teacher, sales executive"],
  experience: ["Experience", "Example: Fresher, 2 years in retail sales"],
  skills: ["Skills or strengths", "Example: Excel, communication, Python, lesson planning"],
  targetRole: ["Target job", "Example: Data analyst trainee"],
  company: ["Company or organization", "Example: ABC Technologies"],
  degree: ["Degree or course", "Example: BCom final year"],
  classLevel: ["Class or level", "Example: Class 8, BCom, beginner"],
  subject: ["Subject", "Example: Maths, EVS, commerce"],
  exam: ["Exam or goal", "Example: CBSE boards, semester test"],
  duration: ["Duration", "Example: 7 days, 40 minutes, 1 month"],
  hoursPerDay: ["Hours per day", "Example: 2 hours daily"],
  topic: ["Topic", "Example: client follow-up, fractions, quarterly review"],
  notesContext: ["Notes context", "Paste safe, non-private notes or describe the chapter"],
  chapter: ["Chapter or topic", "Example: Photosynthesis, Indian constitution"],
  board: ["Board", "Example: CBSE, ICSE, state board"],
  studentLevel: ["Student level", "Example: mixed ability, slow learners, advanced"],
  questionCount: ["Question count", "Example: 10"],
  difficulty: ["Difficulty", "Example: easy, mixed, exam level"],
  businessType: ["Business type", "Example: kirana shop, saree boutique, coaching center"],
  productOrService: ["Product or service", "Example: groceries, silk sarees, weekend thali"],
  offer: ["Offer", "Example: 15% off till Sunday"],
  city: ["City or locality", "Example: Pune, Kukatpally, Indiranagar"],
  occasion: ["Festival or occasion", "Example: Diwali, admissions open, weekend sale"],
  reviewType: ["Review type", "Example: positive, negative, mixed"],
  customerIssue: ["Customer issue", "Example: late delivery, pricing concern, helpful staff"],
  emailType: ["Email type", "Example: reminder, apology, follow-up, escalation"],
  recipient: ["Recipient", "Example: client, manager, HR, vendor"],
  context: ["Context", "Use only safe, non-confidential details"],
  meetingType: ["Meeting type", "Example: sprint planning, client review, PTA"],
  participants: ["Participants", "Example: marketing team, parent and teacher"],
  location: ["Location", "Example: Remote, Mumbai, Hyderabad"],
  studentStrength: ["Student strength", "Example: regular homework, confident speaking"],
  improvementArea: ["Improvement area", "Example: handwriting, problem solving"],
  audience: ["Audience", "Example: Indian students, local customers, HR team"],
  language: ["Language", "Choose output language"],
  tone: ["Tone", "Choose writing tone"],
  format: ["Output format", "Choose output style"],
  goal: ["Goal", "Example: make it concise, respectful, practical"]
};

const fieldOptions = {
  language: languages,
  tone: tones,
  format: formats,
  board: ["CBSE", "ICSE", "State board", "NCERT aligned", "College", "Coaching"],
  difficulty: ["Easy", "Medium", "Difficult", "Mixed", "Exam level"],
  reviewType: ["Positive", "Negative", "Mixed", "Complaint", "Suggestion"],
  studentLevel: ["Beginner", "Average", "Mixed ability", "Slow learners", "Advanced"],
  emailType: ["Reminder", "Follow-up", "Apology", "Escalation", "Request", "Update", "Thank you"],
  meetingType: ["Team meeting", "Client meeting", "Project review", "Parent-teacher meeting", "Sprint meeting"],
  occasion: ["Regular day", "Diwali", "New Year", "Admissions open", "Weekend sale", "Independence Day", "Local festival"]
};

const promptPages = [
  {
    slug: "chatgpt-prompts-for-indian-students",
    title: "ChatGPT Prompts for Indian Students",
    audience: "students preparing for school, college, interviews, entrance exams, and daily revision",
    prompts: [
      "Act as a patient Indian tutor. Explain [topic] for a Class [number] student using simple examples and a quick quiz.",
      "Create a 7-day revision plan for [subject] with daily tasks, practice questions, and one rest slot.",
      "Turn these notes into key points, flashcards, likely exam questions, and a one-page summary: [paste safe notes].",
      "Explain this assignment question step by step without writing the final answer for me: [question].",
      "Create fresher interview questions for [role] with simple answer frameworks and practice tips.",
      "Make a last-minute revision checklist for [exam] in India with high-priority topics and time blocks."
    ]
  },
  {
    slug: "gemini-prompts-for-teachers",
    title: "Gemini Prompts for Teachers India",
    audience: "Indian teachers creating lesson plans, worksheets, quizzes, parent notes, and classroom activities",
    prompts: [
      "Act as an Indian school teacher. Create a 40-minute lesson plan for Class [class], subject [subject], chapter [chapter].",
      "Create a mixed-difficulty worksheet with 10 questions, answer key, and 3 challenge questions for [topic].",
      "Write parent-friendly feedback for a student who is strong in [strength] and needs support in [area].",
      "Generate classroom activity ideas for [topic] using low-cost materials available in Indian classrooms.",
      "Create MCQs for [chapter] with options, correct answers, and one-line explanations.",
      "Explain [topic] in English and simple Hindi so students can understand the idea quickly."
    ]
  },
  {
    slug: "ai-prompts-for-small-business-owners",
    title: "AI Prompts for Small Business Owners India",
    audience: "kirana stores, boutiques, salons, restaurants, coaching centers, and local service businesses",
    prompts: [
      "Write a WhatsApp offer message for my [business type] in [city]. Product: [product]. Offer: [offer]. Keep it polite and short.",
      "Create 5 Instagram captions for a [business type] announcing [occasion] in Hinglish with local Indian context.",
      "Reply politely to this customer review and invite them to visit again: [review].",
      "Create a Google Business Profile description for my [business] serving customers in [locality].",
      "Write a festival sale message for [festival] with one short version and one detailed version.",
      "Create a customer follow-up message after purchase that sounds warm, not pushy."
    ]
  }
];

const templatePages = [
  "resume-prompts-for-freshers",
  "whatsapp-business-message-templates",
  "teacher-lesson-plan-prompts",
  "hr-email-templates",
  "accounting-email-templates",
  "instagram-caption-prompts",
  "interview-answer-prompts",
  "study-planner-ai-prompts",
  "small-business-festival-message-templates",
  "office-email-prompt-pack",
  "youtube-script-prompt-pack",
  "linkedin-profile-prompt-pack",
  "job-seeker-ai-prompt-pack",
  "creator-caption-prompt-pack",
  "customer-service-reply-templates"
];

const languagePages = [
  ["hindi-ai-tools", "Hindi", "Hindi AI tools for students, teachers, shops, creators, and office users."],
  ["telugu-ai-tools", "Telugu", "Telugu prompts for teachers, students, WhatsApp business messages, and captions."],
  ["tamil-ai-tools", "Tamil", "Tamil AI prompt generators for learning, business, content, and office writing."],
  ["kannada-ai-tools", "Kannada", "Kannada prompt tools for classrooms, local shops, study plans, and creators."],
  ["marathi-ai-tools", "Marathi", "Marathi AI tools for business messages, study support, teaching, and content."],
  ["bengali-ai-tools", "Bengali", "Bengali prompt tools for students, teachers, creators, and local businesses."],
  ["malayalam-ai-tools", "Malayalam", "Malayalam AI prompts for work, study, business, and daily productivity."],
  ["gujarati-ai-tools", "Gujarati", "Gujarati prompt generators for business, education, creators, and office teams."],
  ["hinglish-ai-tools", "Hinglish", "Hinglish AI prompts for WhatsApp, Instagram, emails, resumes, and student work."]
].map(([slug, name, description]) => ({ slug, name, description }));

const staticPages = {
  "/about": {
    title: "About AI Tools for Bharat",
    description: "AI Tools for Bharat is a free frontend-first utility library for Indian users.",
    body: [
      "AI Tools for Bharat helps Indian users turn everyday work into practical AI prompts and reusable templates. The mission is simple: make AI useful for students, teachers, job seekers, shop owners, office teams, HR teams, creators, freelancers, and regional-language users without login friction.",
      "India-specific AI tools matter because a generic prompt often misses local context. A school teacher may need CBSE-style lesson plans, a kirana store owner may need WhatsApp offers in Hinglish, and a fresher may need a resume summary suited to Indian job portals.",
      "The tools work completely on the frontend. You enter safe context, generate a prompt or template, copy it, download it, share it, or open your preferred AI tool and paste the prompt. Your favorites, recent tools, and saved prompts stay in your browser localStorage."
    ]
  },
  "/contact": {
    title: "Contact",
    description: "Suggest a tool, report incorrect content, or contact AI Tools for Bharat.",
    body: [
      "Use this page for tool suggestions, incorrect content reports, advertising inquiries, and partnership questions.",
      "Email placeholder: hello@example.com. Replace this with your real email before publishing.",
      "You can also suggest new tools for regional languages, festival workflows, school use cases, small business needs, and office templates."
    ]
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    description: "Privacy policy for the frontend-only AI Tools for Bharat website.",
    body: [
      "AI Tools for Bharat does not require login by default and does not collect account data in this static MVP.",
      "Favorites, recent tools, saved prompts, copy counts, feedback, and last selected language may be stored in your browser localStorage on your own device.",
      "Analytics, ads, or affiliate links may be added later. Do not enter passwords, financial data, customer data, confidential company data, or private personal information into public AI tools."
    ]
  },
  "/terms-and-conditions": {
    title: "Terms and Conditions",
    description: "Terms for using AI Tools for Bharat.",
    body: [
      "These tools are provided for general educational and productivity use.",
      "You are responsible for reviewing, editing, and verifying outputs before using them in school, business, hiring, finance, legal, public, or professional contexts.",
      "Do not misuse these tools for spam, fraud, harassment, plagiarism, illegal activity, or privacy violations."
    ]
  },
  "/disclaimer": {
    title: "Disclaimer",
    description: "Important disclaimer for AI prompt and template tools.",
    body: [
      "The website provides general templates and prompt drafts only. It is not legal, tax, financial, medical, academic, accounting, or professional advice.",
      "AI tools may produce inaccurate, incomplete, biased, or outdated content. Users must verify outputs independently.",
      "Do not share confidential company data, private personal information, passwords, financial data, customer records, or sensitive documents with public AI tools."
    ]
  },
  "/advertise": {
    title: "Advertise",
    description: "Advertise on AI Tools for Bharat.",
    body: [
      "Future advertising options can include sponsored prompt packs, sponsored tools, category placements, newsletter mentions, and useful product recommendations.",
      "Good fit categories include AI writing tools, resume builders, productivity software, design tools, courses, hosting, grammar tools, and small business software.",
      "Sponsored content should be clearly labeled and genuinely useful for Indian users."
    ]
  },
  "/submit-tool": {
    title: "Submit a Tool Idea",
    description: "Suggest new AI tools for Bharat-focused workflows.",
    body: [
      "Suggest a tool by describing the user, task, input fields, output format, safety concerns, and related tools.",
      "High-priority ideas include regional language tools, festival tools, teacher workflows, student workflows, WhatsApp business templates, and office communication helpers.",
      "The best tools solve one real task clearly and generate a useful prompt or template without needing a backend."
    ]
  }
};

function getPath() {
  const clean = window.location.pathname.replace(/\/+$/, "");
  return clean || "/";
}

function $(selector, root = document) {
  return root.querySelector(selector);
}

function $all(selector, root = document) {
  return [...root.querySelectorAll(selector)];
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function slugTitle(slug) {
  return slug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function storeGet(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function storeSet(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function uniquePush(key, value, limit = 20) {
  const next = [value, ...storeGet(key, []).filter((item) => item !== value)].slice(0, limit);
  storeSet(key, next);
  return next;
}

function isFavorite(slug) {
  return storeGet("favorites", []).includes(slug);
}

function toggleFavorite(slug) {
  const favorites = storeGet("favorites", []);
  const next = favorites.includes(slug) ? favorites.filter((item) => item !== slug) : [slug, ...favorites];
  storeSet("favorites", next);
  toast(next.includes(slug) ? "Saved to favorites" : "Removed from favorites");
}

function metaForPage({ title, description, schema }) {
  document.title = `${title} | ${SITE_NAME}`;
  $("meta[name='description']")?.setAttribute("content", description || POSITIONING);
  $("link[rel='canonical']")?.setAttribute("href", window.location.href);
  $("#schema-slot").textContent = JSON.stringify(schema || basicSchema(title, description));
}

function basicSchema(title, description) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    description: description || POSITIONING,
    url: window.location.origin || "http://localhost:4173"
  };
}

function pageShell(content) {
  return `
    <header class="site-header">
      <nav class="nav" aria-label="Main navigation">
        <a class="brand" href="/" data-link><span class="brand-mark">AI</span><span>AI Tools for Bharat</span></a>
        <div class="nav-links">
          <a href="/all-tools" data-link>All Tools</a>
          <a href="/categories" data-link>Categories</a>
          <a href="/prompts" data-link>Prompts</a>
          <a href="/languages" data-link>Languages</a>
          <a href="/favorites" data-link>Favorites</a>
        </div>
      </nav>
    </header>
    <div class="safety-strip">
      <div class="shell"><strong>Safety:</strong><span>Do not enter passwords, financial data, customer data, confidential company data, or private personal information into public AI tools.</span></div>
    </div>
    <main id="main">${content}</main>
    <footer class="footer">
      <div class="shell">
        <div>
          <strong>${SITE_NAME}</strong>
          <p>${POSITIONING}</p>
        </div>
        <div class="nav-links">
          <a href="/about" data-link>About</a>
          <a href="/contact" data-link>Contact</a>
          <a href="/privacy-policy" data-link>Privacy</a>
          <a href="/terms-and-conditions" data-link>Terms</a>
          <a href="/disclaimer" data-link>Disclaimer</a>
        </div>
      </div>
    </footer>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  `;
}

function render() {
  const path = getPath();
  let page;

  if (path === "/") page = renderHome();
  else if (path === "/all-tools") page = renderAllTools();
  else if (path === "/categories") page = renderCategoryIndex();
  else if (path === "/prompts") page = renderPromptIndex();
  else if (path === "/templates") page = renderTemplateIndex();
  else if (path === "/guides") page = renderGuideIndex();
  else if (path === "/languages") page = renderLanguageIndex();
  else if (path === "/favorites") page = renderSavedList("favorites", "Favorite Tools", "Tools you marked as favorites on this browser.");
  else if (path === "/recent-tools") page = renderSavedList("recentTools", "Recent Tools", "Tools opened recently on this browser.");
  else if (path === "/sitemap") page = renderHtmlSitemap();
  else if (staticPages[path]) page = renderStaticPage(path);
  else if (path.startsWith("/tools/")) page = renderToolPage(path.replace("/tools/", ""));
  else if (path.startsWith("/prompts/")) page = renderPromptPage(path.replace("/prompts/", ""));
  else if (path.startsWith("/templates/")) page = renderTemplatePage(path.replace("/templates/", ""));
  else if (path.startsWith("/guides/")) page = renderGuidePage(path.replace("/guides/", ""));
  else if (path.startsWith("/compare/")) page = renderComparePage(path.replace("/compare/", ""));
  else if (categories.some((cat) => `/${cat.slug}` === path)) page = renderCategoryPage(path.slice(1));
  else if (languagePages.some((lang) => `/${lang.slug}` === path)) page = renderLanguagePage(path.slice(1));
  else page = renderNotFound();

  $("#app").innerHTML = pageShell(page.html);
  metaForPage(page.meta);
  window.scrollTo({ top: 0, behavior: "instant" });
  afterRender();
}

function renderHome() {
  const popular = tools.slice(0, 12).map(toolCard).join("");
  const professionCards = ["Students", "Teachers", "Job Seekers", "Small Business Owners", "Office Employees", "HR Professionals", "Accountants", "Creators", "Freelancers", "Sales Teams"]
    .map((name) => `<a class="card category-card" href="/${findCategorySlug(name)}" data-link><h3>${name}</h3><p>Practical prompts, templates, and mini-tools built around ${name.toLowerCase()} in India.</p></a>`)
    .join("");
  const languageCards = languagePages.map((lang) => `<a class="chip" href="/${lang.slug}" data-link>${lang.name}</a>`).join("");
  const taskCards = ["Write", "Explain", "Summarize", "Translate", "Plan", "Create Captions", "Generate Emails", "Make Checklists", "Prepare Interviews", "Create Image Prompts", "Create WhatsApp Messages", "Create Study Plans"]
    .map((task) => `<span class="chip">${task}</span>`)
    .join("");
  const trending = ["Gemini prompts for students", "ChatGPT prompts for HR", "Perplexity research prompts", "AI prompts for Instagram reels", "AI prompts for kirana shops", "AI prompts for Telugu teachers", "AI prompts for freshers", "AI prompts for office emails"]
    .map((item) => `<span class="chip">${item}</span>`)
    .join("");

  return {
    meta: {
      title: "Free AI Tools for Indian Work, Study, Business & Content",
      description: "Use free AI prompt generators and templates for Indian students, teachers, job seekers, shop owners, HR teams, accountants, creators, and office employees.",
      schema: basicSchema("Free AI Tools for Indian Work, Study, Business & Content", POSITIONING)
    },
    html: `
      <section class="shell hero">
        <div class="hero-copy animate-in">
          <span class="eyebrow">Frontend-first utility library</span>
          <h1>Free AI Tools for Indian Work, Study, Business & Content</h1>
          <p class="lead">Generate prompts, WhatsApp messages, resumes, lesson plans, GST explanation prompts, captions, emails, and study plans in seconds.</p>
          ${searchPanel("Search resume, teacher, WhatsApp, GST...", "home-search")}
          <div class="hero-actions">
            <a class="btn primary" href="/all-tools" data-link>Explore Tools</a>
            <a class="btn saffron" href="/categories" data-link>Browse by Profession</a>
            <a class="btn green" href="/tools/whatsapp-offer-message-generator" data-link>Generate a Prompt</a>
            <a class="btn ghost" href="/templates" data-link>View Templates</a>
          </div>
        </div>
        <aside class="hero-visual animate-in" style="animation-delay:100ms">
          <img src="/assets/workbench-preview.svg" alt="Prompt generator workbench interface preview" />
          <div class="overlay-card">
            <strong>Copy, download, share, then open your AI tool.</strong>
            <p>No backend needed. Your favorites and recent tools stay on this device.</p>
          </div>
        </aside>
      </section>
      <section class="shell section" id="popular-tools">
        <div class="section-head"><div><span class="stamp">Popular tools</span><h2>Start with the highest-demand workflows</h2></div><a class="mini-link" href="/all-tools" data-link>See all tools</a></div>
        <div class="grid tools">${popular}</div>
      </section>
      <section class="shell section" id="professions">
        <div class="section-head"><div><span class="stamp">Professions</span><h2>Browse by profession</h2></div></div>
        <div class="grid tools">${professionCards}</div>
      </section>
      <section class="shell section">
        <div class="section-head"><div><span class="stamp">Languages</span><h2>Regional-language prompt hubs</h2></div></div>
        <div class="rail">${languageCards}</div>
      </section>
      <section class="shell section">
        <div class="section-head"><div><span class="stamp">Tasks</span><h2>Browse by task</h2></div></div>
        <div class="rail">${taskCards}</div>
      </section>
      <section class="content-band section">
        <div class="shell">
          <div class="section-head"><div><span class="stamp">Trending workflows</span><h2>Built for actual Indian search intent</h2></div></div>
          <div class="rail">${trending}</div>
        </div>
      </section>
      <section class="shell section">
        <div class="trust-row">
          ${["No login required", "Free to use", "Made for Indian users", "Works with ChatGPT", "Gemini ready", "Copy and download"].map((badge) => `<span class="chip">${badge}</span>`).join("")}
        </div>
      </section>
      ${seoContentBlock()}
      ${faqSection(homeFaqs())}
    `
  };
}

function searchPanel(placeholder, id) {
  return `
    <div class="search-panel">
      <form class="search-form" data-search-form="${id}">
        <label class="sr-only" for="${id}">Search tools</label>
        <input id="${id}" class="field" type="search" name="query" placeholder="${placeholder}" autocomplete="off" data-search-input />
        <button class="btn primary" type="submit">Search</button>
      </form>
      <div class="result-dropdown" data-search-results></div>
    </div>
  `;
}

function seoContentBlock() {
  return `
    <section class="content-band section">
      <div class="shell article">
        <span class="stamp">SEO guide</span>
        <h2>How Indian users can use AI prompts safely and practically</h2>
        <p>AI tools are useful when the user gives them a clear job. A prompt is simply the instruction that tells an AI tool what role to take, what task to complete, what context matters, what tone to use, and what format to return. For Indian users, that context is often the difference between a generic answer and a usable one. A student preparing for semester exams may need a revision plan around limited daily study hours. A teacher may need a lesson plan that fits a 40-minute class period, a state-board chapter, and mixed ability students. A shop owner may need a WhatsApp offer message that feels polite, local, and easy to forward.</p>
        <p>AI Tools for Bharat is designed as a utility platform rather than a blog. The goal is not to list random AI tools. The goal is to help people finish practical tasks: write a resume summary, draft a professional email, create a lesson plan, reply to a customer review, summarize meeting notes, prepare interview questions, make a study timetable, generate Instagram captions, or build a small business campaign. Each mini-tool turns simple inputs into a reusable prompt or template that can be copied into ChatGPT, Gemini, Perplexity, Copilot, Claude, or another AI assistant.</p>
        <p>Students can use these prompts for understanding concepts, making study plans, preparing viva questions, creating flashcards, and practicing interviews. The important rule is honesty. AI should support learning, not replace learning. Students should follow their school or college rules and should not submit AI-generated work as their own when that is not allowed. The best use is to ask for explanations, examples, revision structures, and feedback that help the student think more clearly.</p>
        <p>Teachers can use AI to save time on repetitive preparation. Lesson plans, worksheets, MCQs, report card remarks, parent messages, and classroom activity ideas can all begin as AI-generated drafts. A teacher still brings the professional judgement: checking age suitability, board alignment, local language needs, difficulty level, and classroom realities. When used carefully, prompts can reduce administrative load and leave more energy for teaching.</p>
        <p>Small business owners can use prompts for WhatsApp messages, festival sale copy, Google Business Profile descriptions, product descriptions, review replies, and Instagram captions. Local Indian businesses often need short, respectful, mobile-first writing. A good WhatsApp message should mention the offer clearly, avoid spammy wording, include the locality or validity date where useful, and make the next action easy. The tools here encourage practical copy that can be adapted for a kirana shop, boutique, salon, restaurant, gym, coaching center, real estate agent, or local service provider.</p>
        <p>Office employees, HR teams, accountants, freelancers, and sales teams can use AI for structured drafts: emails, meeting summaries, job descriptions, onboarding checklists, proposals, payment reminders, and status updates. These workflows have a serious privacy requirement. Users should never paste confidential company data, customer records, financial details, passwords, internal documents, or private personal information into public AI tools. Replace sensitive names and numbers with placeholders, then add verified details manually after the draft is created.</p>
        <p>Regional language support matters because India does not work in one language. Many users think, sell, teach, and communicate in Hindi, Telugu, Tamil, Kannada, Marathi, Bengali, Malayalam, Gujarati, or Hinglish. A useful prompt should let the user choose language, tone, audience, and output format. For example, a teacher may want an English explanation with Hindi support, while a boutique owner may need a Hinglish Instagram caption and a short WhatsApp version.</p>
        <p>The safest workflow is simple: enter only non-sensitive context, generate a prompt or template, copy it, open your preferred AI tool, paste the prompt, review the answer, and edit the final result yourself. Use AI as a drafting partner, not an authority. Verify facts, laws, tax matters, medical details, academic rules, prices, dates, and claims before publishing or sending anything important.</p>
      </div>
    </section>
  `;
}

function homeFaqs() {
  return [
    ["What is AI Tools for Bharat?", "It is a free frontend-first library of AI prompt generators, templates, and mini-tools for Indian users."],
    ["Are these tools free?", "Yes. The MVP is free to use and does not require a login."],
    ["Do I need to log in?", "No. Favorites and recent tools are stored locally in your browser."],
    ["Does this website generate AI answers?", "It generates prompts and templates on the frontend. You can paste them into ChatGPT, Gemini, Perplexity, Copilot, Claude, or another AI tool."],
    ["Can students use these tools?", "Yes, for learning, revision, brainstorming, and practice. Students should follow institution rules."],
    ["Can businesses use WhatsApp templates?", "Yes. Review the output, keep it truthful, and avoid spammy wording or private customer data."],
    ["Is my data stored?", "Generated favorites, recent tools, copy history, and saved prompts may be stored only in your browser localStorage."],
    ["Which languages are supported?", languages.join(", ") + "."],
    ["Can I download prompts?", "Yes. Tool outputs can be downloaded as TXT, Markdown, or JSON, and printed as PDF through your browser."],
    ["Can I open the prompt in an AI tool?", "Yes. Copy the prompt first, then use the buttons to open ChatGPT, Gemini, Perplexity, Copilot, or Claude."]
  ];
}

function toolCard(tool) {
  return `
    <article class="tool-card" style="--accent:${tool.accent || "#ff7a1a"}">
      <span class="chip">${tool.category}</span>
      <h3>${tool.title}</h3>
      <p>${tool.description}</p>
      <div class="tool-meta">${tool.tasks.slice(0, 3).map((task) => `<span class="chip">${task}</span>`).join("")}</div>
      <a class="btn small" href="/tools/${tool.slug}" data-link>Open tool</a>
    </article>
  `;
}

function renderAllTools() {
  return {
    meta: {
      title: "All Free AI Tools for Bharat",
      description: "Search and filter free AI prompt generators for Indian work, study, business, teaching, HR, office, and creator workflows.",
      schema: collectionSchema("All Free AI Tools for Bharat", tools.map((tool) => `/tools/${tool.slug}`))
    },
    html: `
      <section class="shell page">
        ${breadcrumbs([["Home", "/"], ["All Tools", "/all-tools"]])}
        <div class="page-title"><span class="stamp">Directory</span><h1>All free AI tools</h1><p class="lead">Search by tool title, category, profession, task, language, use case, or keyword.</p></div>
        ${directoryFilters()}
        <div class="grid tools" data-directory-results>${tools.map(toolCard).join("")}</div>
      </section>
    `
  };
}

function directoryFilters() {
  return `
    <div class="filters" data-directory>
      <input class="field" data-dir-query placeholder="Search resume, GST, WhatsApp, teacher..." />
      <select class="select" data-dir-category><option value="">All categories</option>${categories.map((cat) => `<option>${cat.category}</option>`).join("")}</select>
      <select class="select" data-dir-language><option value="">All languages</option>${languages.map((lang) => `<option>${lang}</option>`).join("")}</select>
      <select class="select" data-dir-task><option value="">All tasks</option>${[...new Set(tools.flatMap((tool) => tool.tasks))].map((task) => `<option>${task}</option>`).join("")}</select>
      <select class="select" data-dir-sort><option value="popular">Popular first</option><option value="new">New tools</option><option value="az">A to Z</option></select>
    </div>
  `;
}

function renderCategoryIndex() {
  return {
    meta: { title: "AI Tool Categories India", description: "Browse AI prompt generator categories for Indian students, teachers, businesses, HR, office employees, creators, freelancers, and sales teams." },
    html: `
      <section class="shell page">
        ${breadcrumbs([["Home", "/"], ["Categories", "/categories"]])}
        <div class="page-title"><span class="stamp">Categories</span><h1>Browse by profession</h1><p class="lead">Each cluster links to practical tools, examples, FAQs, safety notes, and related prompt pages.</p></div>
        <div class="grid three">${categories.map(categoryCard).join("")}</div>
      </section>
    `
  };
}

function categoryCard(cat) {
  const count = tools.filter((tool) => tool.categorySlug === cat.slug).length;
  return `<a class="card category-card" href="/${cat.slug}" data-link><span class="chip">${count} tools live</span><h3>${cat.title}</h3><p>${cat.description}</p></a>`;
}

function renderCategoryPage(slug) {
  const cat = categories.find((item) => item.slug === slug);
  const catTools = tools.filter((tool) => tool.categorySlug === slug);
  const faqs = [
    [`Who can use ${cat.title}?`, `This page is for ${cat.category.toLowerCase()} in India who want practical AI prompts and templates.`],
    ["Are the tools free?", "Yes. These tools generate frontend prompts and templates without login."],
    ["Can I use these prompts in ChatGPT or Gemini?", "Yes. Copy a prompt, open your preferred AI tool, and paste it."],
    ["Do I need to verify outputs?", "Yes. Always review generated drafts before sending, publishing, or submitting them."],
    ["Is private data safe?", "Do not enter sensitive or confidential information into public AI tools."]
  ];
  return {
    meta: {
      title: cat.title,
      description: cat.description,
      schema: faqSchema(cat.title, cat.description, faqs)
    },
    html: `
      <section class="shell page">
        ${breadcrumbs([["Home", "/"], ["Categories", "/categories"], [cat.title, `/${cat.slug}`]])}
        <div class="page-title"><span class="stamp">Category</span><h1>${cat.title}</h1><p class="lead">${cat.description}</p></div>
        <div class="grid three">${cat.sections.map((text) => `<div class="card plain-card"><p>${text}</p></div>`).join("")}</div>
      </section>
      <section class="shell section">
        <div class="section-head"><div><span class="stamp">Popular tools</span><h2>${cat.category} tools</h2></div></div>
        <div class="grid tools">${catTools.length ? catTools.map(toolCard).join("") : emptyToolCards(cat.category)}</div>
      </section>
      ${faqSection(faqs)}
    `
  };
}

function emptyToolCards(category) {
  return tools.slice(0, 4).map((tool) => ({ ...tool, category })).map(toolCard).join("");
}

function renderToolPage(slug) {
  const tool = tools.find((item) => item.slug === slug);
  if (!tool) return renderNotFound();
  uniquePush("recentTools", tool.slug);
  const values = defaultValues(tool);
  const output = buildPrompt(tool, values);
  const related = tool.relatedTools.map((relatedSlug) => tools.find((item) => item.slug === relatedSlug)).filter(Boolean);
  const faqs = toolFaqs(tool);
  return {
    meta: {
      title: tool.h1,
      description: tool.description,
      schema: toolSchema(tool, faqs)
    },
    html: `
      <section class="shell page">
        ${breadcrumbs([["Home", "/"], ["All Tools", "/all-tools"], [tool.category, `/${tool.categorySlug}`], [tool.title, `/tools/${tool.slug}`]])}
        <div class="page-title">
          <span class="stamp">${tool.category}</span>
          <h1>${tool.h1}</h1>
          <p class="lead">${tool.description}</p>
          <div class="action-row">
            <button class="btn small ${isFavorite(tool.slug) ? "saffron" : "ghost"}" data-favorite="${tool.slug}">${isFavorite(tool.slug) ? "Saved" : "Favorite"}</button>
            <span class="counter">Last updated: ${LAST_UPDATED}</span>
          </div>
        </div>
        ${safetyNotice(tool.disclaimerType)}
      </section>
      <section class="shell section tool-layout">
        <form class="panel tool-form" data-tool-form="${tool.slug}">
          <h2>Generate prompt</h2>
          <div class="form-grid">${tool.fields.map((field) => formField(field, values[field])).join("")}</div>
          <div class="button-row" style="margin-top:14px">
            <button class="btn primary" type="submit">Generate prompt</button>
            <button class="btn ghost" type="reset">Reset</button>
          </div>
        </form>
        <div class="panel output-box">
          <div class="section-head"><div><span class="stamp">Output</span><h2>Your prompt and template</h2></div></div>
          <pre class="output-text" id="prompt-output">${escapeHtml(output)}</pre>
          <div class="button-row" style="margin-top:12px">
            <button class="btn small primary" data-copy-target="prompt-output">Copy prompt</button>
            <button class="btn small" data-copy-md="prompt-output">Copy as markdown</button>
            <button class="btn small saffron" data-download="txt" data-target="prompt-output" data-filename="${tool.slug}">TXT</button>
            <button class="btn small green" data-download="md" data-target="prompt-output" data-filename="${tool.slug}">MD</button>
            <button class="btn small blue" data-download="json" data-target="prompt-output" data-filename="${tool.slug}">JSON</button>
            <button class="btn small ghost" data-print>Print</button>
          </div>
          <div class="button-row" style="margin-top:12px">
            ${aiLinks.map(([name, href]) => `<a class="btn small ghost" href="${href}" target="_blank" rel="noreferrer" data-ai-open="${name}">Open ${name}</a>`).join("")}
          </div>
          <div class="button-row" style="margin-top:12px">
            ${shareButtons(tool)}
          </div>
          <div class="button-row" style="margin-top:12px">
            <button class="mini-link" data-feedback="${tool.slug}" data-value="yes">Useful</button>
            <button class="mini-link" data-feedback="${tool.slug}" data-value="no">Needs work</button>
          </div>
        </div>
      </section>
      <section class="shell section">
        <div class="grid three">
          <div class="card plain-card"><h3>Who should use this tool?</h3><p>${tool.profession.join(", ")} can use it for ${tool.tasks.join(", ").toLowerCase()} workflows.</p></div>
          <div class="card plain-card"><h3>How to use with ChatGPT</h3><p>Generate the prompt, copy it, open ChatGPT, paste the prompt, and edit the result with your verified details.</p></div>
          <div class="card plain-card"><h3>How to use with Gemini</h3><p>Copy the generated prompt into Gemini and ask for a second version if you need a shorter, local-language, or table format output.</p></div>
        </div>
      </section>
      <section class="shell section">
        <div class="section-head"><div><span class="stamp">Examples</span><h2>Example outputs and best practices</h2></div></div>
        <div class="grid two">
          <div class="card plain-card"><h3>Example output</h3><p>${exampleFor(tool)}</p></div>
          <div class="card plain-card"><h3>Best practices</h3><p>Give clear context, choose the right audience, keep private data out, ask for multiple versions, and verify facts before using the output.</p></div>
          <div class="card plain-card"><h3>Common mistakes</h3><p>Avoid vague inputs, sensitive details, spammy wording, copied claims, missing dates, and sending AI drafts without review.</p></div>
          <div class="card plain-card"><h3>Internal links</h3><p><a class="mini-link" href="/${tool.categorySlug}" data-link>Parent category</a> <a class="mini-link" href="/prompts" data-link>Prompt library</a> <a class="mini-link" href="/guides/how-to-write-better-ai-prompts" data-link>Prompt guide</a> <a class="mini-link" href="/hinglish-ai-tools" data-link>Language hub</a></p></div>
        </div>
      </section>
      <section class="shell section">
        <div class="section-head"><div><span class="stamp">Related</span><h2>Related tools</h2></div></div>
        <div class="grid tools">${related.length ? related.map(toolCard).join("") : tools.slice(0, 4).map(toolCard).join("")}</div>
      </section>
      ${faqSection(faqs)}
    `
  };
}

function defaultValues(tool) {
  const savedLanguage = storeGet("lastLanguage", "English");
  const savedTone = storeGet("lastTone", "Professional");
  const values = {};
  tool.fields.forEach((field) => {
    if (field === "language") values[field] = savedLanguage;
    else if (field === "tone") values[field] = savedTone;
    else if (field === "format") values[field] = "Bullet points";
    else values[field] = sampleValue(field);
  });
  return values;
}

function sampleValue(field) {
  const sample = {
    role: "Fresher business analyst",
    experience: "Fresher with internship experience",
    skills: "Excel, communication, problem solving",
    targetRole: "Entry-level analyst role",
    company: "a growing Indian company",
    degree: "BCom final year",
    classLevel: "Class 8",
    subject: "Science",
    exam: "unit test",
    duration: "7 days",
    hoursPerDay: "2 hours",
    topic: "monthly project update",
    notesContext: "Key concepts and definitions from the chapter",
    chapter: "Photosynthesis",
    board: "CBSE",
    studentLevel: "Mixed ability",
    questionCount: "10",
    difficulty: "Mixed",
    businessType: "Kirana shop",
    productOrService: "monthly grocery combo",
    offer: "10% off till Sunday",
    city: "Pune",
    occasion: "Weekend sale",
    reviewType: "Positive",
    customerIssue: "friendly service and fast delivery",
    emailType: "Follow-up",
    recipient: "Client",
    context: "Need a polite update without confidential details",
    meetingType: "Project review",
    participants: "project team",
    location: "Bengaluru",
    studentStrength: "participates actively",
    improvementArea: "needs more written practice",
    audience: "Indian users",
    goal: "Create a practical, ready-to-use draft"
  };
  return sample[field] || "";
}

function formField(field, value) {
  const [label, help] = fieldDefs[field] || [slugTitle(field), ""];
  if (fieldOptions[field]) {
    return `
      <label>${label}
        <select class="select" name="${field}">
          ${fieldOptions[field].map((option) => `<option ${option === value ? "selected" : ""}>${option}</option>`).join("")}
        </select>
        <small>${help}</small>
      </label>
    `;
  }
  const long = ["context", "notesContext"].includes(field);
  return `
    <label>${label}
      ${long ? `<textarea class="textarea" name="${field}" placeholder="${help}">${escapeHtml(value)}</textarea>` : `<input class="field" name="${field}" value="${escapeHtml(value)}" placeholder="${help}" />`}
      <small>${help}</small>
    </label>
  `;
}

function buildPrompt(tool, values) {
  const fieldLines = Object.entries(values)
    .filter(([, value]) => String(value).trim())
    .map(([key, value]) => `- ${fieldDefs[key]?.[0] || slugTitle(key)}: ${value}`)
    .join("\n");
  const role = roleFor(tool);
  const audience = values.audience || tool.profession[0] || "Indian users";
  const language = values.language || "English";
  const tone = values.tone || "Professional";
  const format = values.format || "Bullet points";
  const goal = values.goal || tool.description;
  const practical = specificTemplate(tool, values);
  return `${practical}

AI PROMPT
Act as an expert ${role}.

I need help with ${tool.title}.

Context:
- Country: India
- Audience: ${audience}
- Language: ${language}
- Tone: ${tone}
- Goal: ${goal}
- Format: ${format}

User details:
${fieldLines}

Please create:
1. A clear version
2. A short version
3. A WhatsApp-friendly version, if relevant
4. A professional version
5. 3 improvement suggestions

Keep it practical, simple, and suitable for Indian users.

Safety:
Do not include confidential data, passwords, private personal details, customer data, financial data, or unverified claims.

Generated with AI Tools for Bharat
Create yours: ${window.location.href}`;
}

function roleFor(tool) {
  if (tool.category === "Teachers") return "Indian teacher and curriculum planner";
  if (tool.category === "Students") return "Indian study coach";
  if (tool.category === "Small Business") return "local Indian business copywriter";
  if (tool.category === "Office Employees") return "corporate communication specialist";
  if (tool.category === "HR") return "Indian HR and hiring specialist";
  if (tool.category === "Creators") return "Indian content strategist";
  return "Indian productivity assistant";
}

function v(values, key, fallback) {
  return values[key] || fallback || `[${fieldDefs[key]?.[0] || key}]`;
}

function specificTemplate(tool, values) {
  if (tool.slug.includes("whatsapp")) {
    return `READY WHATSAPP MESSAGE DRAFT
Namaste ${v(values, "city", "your locality")} customers,
${v(values, "businessType", "Our shop")} has a ${v(values, "occasion", "special offer")}: ${v(values, "offer", "a useful discount")} on ${v(values, "productOrService", "selected items")}.
Visit us or reply to this message to know more.
Tone: ${v(values, "tone", "Polite")}
Language: ${v(values, "language", "English")}`;
  }
  if (tool.slug.includes("instagram")) {
    return `INSTAGRAM CAPTION DRAFT
Hook: Fresh update for ${v(values, "city", "our local")} customers.
Caption: ${v(values, "businessType", "Our brand")} brings ${v(values, "productOrService", "a new offer")} for ${v(values, "occasion", "this week")}. Save this post and message us for details.
CTA: DM to order or visit today.
Hashtags: #IndiaBusiness #LocalBusiness #${v(values, "city", "India").replace(/\s+/g, "")}`;
  }
  if (tool.slug.includes("resume")) {
    return `RESUME SUMMARY DRAFT
${v(values, "experience", "Fresher")} candidate targeting ${v(values, "targetRole", "the target role")} with strengths in ${v(values, "skills", "relevant skills")}. Brings practical learning, communication ability, and a strong interest in contributing to Indian workplace goals.`;
  }
  if (tool.slug.includes("cover-letter")) {
    return `COVER LETTER STRUCTURE
Opening: Mention the role and company.
Fit: Connect ${v(values, "experience", "your experience")} and ${v(values, "skills", "your skills")} to the job.
Proof: Add one achievement or project.
Close: Ask politely for an interview opportunity.`;
  }
  if (tool.slug.includes("study-plan")) {
    return `STUDY PLAN DRAFT
Goal: Prepare for ${v(values, "exam", "the exam")} in ${v(values, "duration", "the available time")}.
Daily time: ${v(values, "hoursPerDay", "planned hours")}.
Subject focus: ${v(values, "subject", "subject")}.
Method: concept review, practice, revision, mock questions, and rest slots.`;
  }
  if (tool.slug.includes("lesson-plan")) {
    return `LESSON PLAN DRAFT
Class: ${v(values, "classLevel", "class")}
Subject: ${v(values, "subject", "subject")}
Chapter: ${v(values, "chapter", "chapter")}
Board: ${v(values, "board", "board")}
Flow: learning objectives, warm-up, explanation, activity, assessment, homework, and support for mixed ability students.`;
  }
  if (tool.slug.includes("worksheet") || tool.slug.includes("mcq")) {
    return `QUESTION SET DRAFT
Create ${v(values, "questionCount", "10")} questions for ${v(values, "classLevel", "class")} ${v(values, "subject", "subject")} on ${v(values, "chapter", "the topic")}.
Difficulty: ${v(values, "difficulty", "mixed")}.
Include answer key and short explanations.`;
  }
  if (tool.slug.includes("email")) {
    return `EMAIL DRAFT STRUCTURE
Subject: Clear ${v(values, "emailType", "professional")} email about ${v(values, "topic", "the topic")}
Greeting: Polite and direct
Body: Context, request/update, next step
Closing: Thanks and signature`;
  }
  if (tool.slug.includes("meeting-summary")) {
    return `MEETING SUMMARY DRAFT
Meeting: ${v(values, "meetingType", "meeting")} about ${v(values, "topic", "topic")}
Participants: ${v(values, "participants", "participants")}
Include: decisions, action items, owners, deadlines, blockers, and next meeting points.`;
  }
  if (tool.slug.includes("job-description")) {
    return `JOB DESCRIPTION DRAFT
Role: ${v(values, "role", "role")}
Location: ${v(values, "location", "India")}
Experience: ${v(values, "experience", "experience range")}
Include responsibilities, required skills, preferred skills, interview criteria, and inclusive language.`;
  }
  if (tool.slug.includes("report-card")) {
    return `REPORT CARD REMARK DRAFT
Student strength: ${v(values, "studentStrength", "strength")}
Improvement area: ${v(values, "improvementArea", "area to improve")}
Tone: encouraging, specific, respectful, and parent-friendly.`;
  }
  return `TEMPLATE DRAFT
Use the details below to create a practical Indian-context output for ${tool.title}.`;
}

function safetyNotice(type) {
  const text = {
    student: "Use AI for learning, revision, brainstorming, and understanding concepts. Do not submit AI-generated work as your own without following your school, college, or institution rules.",
    teacher: "Review every generated teaching output for accuracy, age suitability, school policy, and classroom context before use.",
    business: "Review business messages before sending. Avoid spammy wording, misleading claims, private customer data, and unverified offers.",
    corporate: "Do not enter confidential company data, customer data, passwords, financial data, internal documents, or personal information into public AI tools.",
    creator: "Generated captions, scripts, and ideas should be reviewed before posting. Avoid copyrighted content or misleading claims.",
    finance: "This tool provides general educational templates only. It is not tax, GST, accounting, legal, or financial advice. Verify with a qualified professional."
  }[type] || "Use AI outputs as drafts. Verify important details before publishing, submitting, or sending.";
  return `<div class="notice">${text}</div>`;
}

function shareButtons(tool) {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(`I found this free AI tool for Indian users: ${tool.title}. Try it here: ${window.location.href}`);
  return `
    <a class="btn small ghost" target="_blank" rel="noreferrer" href="https://wa.me/?text=${text}">WhatsApp</a>
    <a class="btn small ghost" target="_blank" rel="noreferrer" href="https://www.linkedin.com/sharing/share-offsite/?url=${url}">LinkedIn</a>
    <a class="btn small ghost" target="_blank" rel="noreferrer" href="https://twitter.com/intent/tweet?text=${text}">X</a>
    <a class="btn small ghost" target="_blank" rel="noreferrer" href="https://t.me/share/url?url=${url}&text=${text}">Telegram</a>
    <button class="btn small ghost" data-copy-link>Copy link</button>
  `;
}

function toolFaqs(tool) {
  return [
    [`What does ${tool.title} do?`, tool.description],
    ["Is this tool free?", "Yes. It runs on the frontend and does not require login."],
    ["Can I use the output in ChatGPT or Gemini?", "Yes. Copy the generated prompt and paste it into your preferred AI tool."],
    ["Can I download the prompt?", "Yes. You can download TXT, Markdown, or JSON, and use browser print for PDF."],
    ["Is my data stored?", "The website may store favorites, recent tools, feedback, and saved prompts in your browser localStorage only."],
    ["What should I avoid entering?", "Avoid passwords, financial data, confidential company data, customer records, private personal details, and sensitive documents."]
  ];
}

function exampleFor(tool) {
  if (tool.slug.includes("whatsapp")) return "Weekend grocery combo in Pune: short, polite, local, with offer validity and reply instruction.";
  if (tool.slug.includes("resume")) return "Fresher business analyst summary with Excel, communication, internship exposure, and entry-level role targeting.";
  if (tool.slug.includes("lesson")) return "Class 8 Science lesson plan with objectives, warm-up, activity, assessment, homework, and support ideas.";
  if (tool.slug.includes("email")) return "Polite follow-up email to a client with context, next step, and respectful closing.";
  return "A clear, short, Indian-context draft with one professional version and three improvement suggestions.";
}

function renderPromptIndex() {
  return {
    meta: { title: "AI Prompt Library India", description: "Copy free prompt collections for Indian students, teachers, small businesses, HR, creators, freelancers, and office employees." },
    html: `
      <section class="shell page">
        ${breadcrumbs([["Home", "/"], ["Prompts", "/prompts"]])}
        <div class="page-title"><span class="stamp">Prompt library</span><h1>Prompt collections</h1><p class="lead">Copy practical prompt packs grouped by Indian use case.</p></div>
        <div class="grid three">${promptPages.map((page) => `<a class="card plain-card" href="/prompts/${page.slug}" data-link><h3>${page.title}</h3><p>For ${page.audience}.</p></a>`).join("")}</div>
      </section>
    `
  };
}

function renderPromptPage(slug) {
  const page = promptPages.find((item) => item.slug === slug);
  if (!page) return genericCollectionPage("Prompt Pack", slug, "/prompts");
  const faqs = [
    ["How do I use these prompts?", "Copy one prompt, replace bracketed placeholders, and paste it into ChatGPT, Gemini, Perplexity, Copilot, or Claude."],
    ["Can I edit the prompts?", "Yes. Better prompts include your audience, language, tone, goal, and output format."],
    ["Are these prompts India-specific?", "Yes. They include Indian workflows, examples, and safety notes."]
  ];
  return {
    meta: { title: page.title, description: `Copy ${page.title} for ${page.audience}.`, schema: faqSchema(page.title, page.audience, faqs) },
    html: `
      <section class="shell page">
        ${breadcrumbs([["Home", "/"], ["Prompts", "/prompts"], [page.title, `/prompts/${page.slug}`]])}
        <div class="page-title"><span class="stamp">Prompt pack</span><h1>${page.title}</h1><p class="lead">For ${page.audience}. Replace bracketed placeholders before use.</p></div>
        <div class="grid two">${page.prompts.map((prompt, index) => `<div class="card plain-card"><span class="chip">Prompt ${index + 1}</span><p>${escapeHtml(prompt)}</p><button class="btn small" data-copy-text="${escapeHtml(prompt)}">Copy</button></div>`).join("")}</div>
      </section>
      <section class="shell section"><div class="grid two"><div class="card plain-card"><h3>Common mistakes</h3><p>Do not paste private notes, customer records, confidential files, or unverified claims. Replace placeholders carefully.</p></div><div class="card plain-card"><h3>Related tools</h3><p><a class="mini-link" href="/all-tools" data-link>Browse generators</a> <a class="mini-link" href="/templates" data-link>Templates</a></p></div></div></section>
      ${faqSection(faqs)}
    `
  };
}

function renderTemplateIndex() {
  return {
    meta: { title: "Download AI Prompt Templates India", description: "Download free TXT, Markdown, and JSON prompt template packs for Indian workflows." },
    html: `
      <section class="shell page">
        ${breadcrumbs([["Home", "/"], ["Templates", "/templates"]])}
        <div class="page-title"><span class="stamp">Templates</span><h1>Downloadable prompt packs</h1><p class="lead">Frontend-only template previews with copy and download options.</p></div>
        <div class="grid three">${templatePages.map((slug) => `<a class="card plain-card" href="/templates/${slug}" data-link><h3>${slugTitle(slug)}</h3><p>Preview templates, copy all, download TXT or JSON, and print.</p></a>`).join("")}</div>
      </section>
    `
  };
}

function renderTemplatePage(slug) {
  const title = slugTitle(slug);
  const prompts = [
    `Create a practical ${title} for Indian users with clear sections and examples.`,
    `Write a short version, detailed version, and WhatsApp-friendly version for ${title}.`,
    `List common mistakes to avoid when using ${title} in India.`,
    `Turn this context into a professional template: [add safe context].`,
    `Create a checklist for reviewing ${title} before sending or publishing.`
  ];
  const text = prompts.join("\n\n");
  return {
    meta: { title, description: `Preview and download ${title} for Indian AI workflows.` },
    html: `
      <section class="shell page">
        ${breadcrumbs([["Home", "/"], ["Templates", "/templates"], [title, `/templates/${slug}`]])}
        <div class="page-title"><span class="stamp">Template pack</span><h1>${title}</h1><p class="lead">Includes reusable prompt templates, review checklist, and download options.</p></div>
        <div class="panel output-box">
          <pre class="output-text" id="template-output">${escapeHtml(text)}</pre>
          <div class="button-row" style="margin-top:12px">
            <button class="btn small primary" data-copy-target="template-output">Copy all</button>
            <button class="btn small saffron" data-download="txt" data-target="template-output" data-filename="${slug}">TXT</button>
            <button class="btn small blue" data-download="json" data-target="template-output" data-filename="${slug}">JSON</button>
            <button class="btn small ghost" data-print>Print</button>
          </div>
        </div>
      </section>
    `
  };
}

function renderGuideIndex() {
  const guides = [
    "how-to-use-chatgpt-for-studying",
    "how-to-use-gemini-for-office-work",
    "how-to-write-better-ai-prompts",
    "how-teachers-can-use-ai-safely",
    "how-small-businesses-can-use-ai-for-whatsapp-marketing",
    "how-to-use-ai-without-sharing-private-data",
    "best-ai-workflows-for-indian-students",
    "ai-prompt-writing-examples-india",
    "how-to-use-ai-for-resume-writing",
    "how-to-use-ai-for-instagram-content",
    "how-to-use-ai-for-youtube-scripts",
    "how-to-use-ai-for-hr-work",
    "how-to-use-ai-for-accounting-admin-tasks",
    "how-to-use-ai-for-school-teachers",
    "how-to-use-ai-for-local-business-marketing"
  ];
  return {
    meta: { title: "AI Guides for Indian Users", description: "Practical guides for using AI tools safely for study, work, business, teaching, HR, accounting, and content." },
    html: `
      <section class="shell page">
        ${breadcrumbs([["Home", "/"], ["Guides", "/guides"]])}
        <div class="page-title"><span class="stamp">Guides</span><h1>AI workflow guides</h1><p class="lead">Short, practical guides that support the tools.</p></div>
        <div class="grid three">${guides.map((slug) => `<a class="card plain-card" href="/guides/${slug}" data-link><h3>${slugTitle(slug)}</h3><p>Steps, examples, mistakes to avoid, safety notes, and related tools.</p></a>`).join("")}</div>
      </section>
    `
  };
}

function renderGuidePage(slug) {
  const title = slugTitle(slug);
  const related = tools.slice(0, 8);
  const faqs = [["Should I verify AI output?", "Yes. Always verify facts, dates, claims, policy details, and sensitive context."], ["Can I use these guides with Gemini or ChatGPT?", "Yes. The workflow applies to most AI assistants."]];
  return {
    meta: { title, description: `${title} with Indian examples, safety notes, prompts, mistakes to avoid, and related tools.`, schema: faqSchema(title, title, faqs) },
    html: `
      <section class="shell page">
        ${breadcrumbs([["Home", "/"], ["Guides", "/guides"], [title, `/guides/${slug}`]])}
        <div class="page-title"><span class="stamp">Guide</span><h1>${title}</h1><p class="lead">A practical India-first workflow you can use with ChatGPT, Gemini, Perplexity, Copilot, or Claude.</p></div>
        <div class="grid two">
          <div class="card plain-card"><h3>Short answer</h3><p>Start with a clear role, task, Indian context, audience, language, tone, and output format. Then review the result yourself.</p></div>
          <div class="card plain-card"><h3>Step by step</h3><p>Choose a tool, enter safe context, generate a prompt, copy it, paste it into your AI assistant, ask for changes, and verify the final draft.</p></div>
          <div class="card plain-card"><h3>Example prompt</h3><p>Act as an Indian productivity coach. Help me with [task]. Audience: [audience]. Language: [language]. Tone: [tone]. Format: [format].</p></div>
          <div class="card plain-card"><h3>Mistakes to avoid</h3><p>Vague prompts, confidential data, unverified facts, copied claims, and final outputs that do not match your real situation.</p></div>
        </div>
      </section>
      <section class="shell section"><div class="section-head"><div><span class="stamp">Related tools</span><h2>Try these next</h2></div></div><div class="grid tools">${related.map(toolCard).join("")}</div></section>
      ${faqSection(faqs)}
    `
  };
}

function renderLanguageIndex() {
  return {
    meta: { title: "Regional Language AI Tools India", description: "Browse Hindi, Telugu, Tamil, Kannada, Marathi, Bengali, Malayalam, Gujarati, and Hinglish AI prompt hubs." },
    html: `
      <section class="shell page">
        ${breadcrumbs([["Home", "/"], ["Languages", "/languages"]])}
        <div class="page-title"><span class="stamp">Languages</span><h1>Regional-language AI tools</h1><p class="lead">Use prompts in the language your audience actually speaks.</p></div>
        <div class="grid three">${languagePages.map((lang) => `<a class="card plain-card" href="/${lang.slug}" data-link><h3>${lang.name} AI Tools</h3><p>${lang.description}</p></a>`).join("")}</div>
      </section>
    `
  };
}

function renderLanguagePage(slug) {
  const lang = languagePages.find((item) => item.slug === slug);
  const faqs = [
    [`Can I generate prompts in ${lang.name}?`, `Yes. Choose ${lang.name} in any tool that supports language selection.`],
    [`Who should use ${lang.name} AI tools?`, "Students, teachers, small businesses, creators, and office users who communicate with regional audiences."],
    ["Can I mix English and local language?", "Yes. Use Hinglish or specify bilingual output when that fits your audience."]
  ];
  return {
    meta: { title: `${lang.name} AI Tools for Indian Users`, description: lang.description, schema: faqSchema(`${lang.name} AI Tools`, lang.description, faqs) },
    html: `
      <section class="shell page">
        ${breadcrumbs([["Home", "/"], ["Languages", "/languages"], [`${lang.name} AI Tools`, `/${lang.slug}`]])}
        <div class="page-title"><span class="stamp">${lang.name}</span><h1>${lang.name} AI Tools for Indian Users</h1><p class="lead">${lang.description}</p></div>
        <div class="grid three">
          <div class="card plain-card"><h3>${lang.name} prompts for students</h3><p>Create study plans, summaries, and explanations in ${lang.name} or bilingual form.</p></div>
          <div class="card plain-card"><h3>${lang.name} prompts for teachers</h3><p>Draft lesson plans, parent messages, worksheets, and classroom explanations.</p></div>
          <div class="card plain-card"><h3>${lang.name} WhatsApp messages</h3><p>Generate local business offers, festival greetings, and customer replies.</p></div>
        </div>
      </section>
      <section class="shell section"><div class="section-head"><div><span class="stamp">Popular tools</span><h2>Use with ${lang.name}</h2></div></div><div class="grid tools">${tools.slice(0, 8).map(toolCard).join("")}</div></section>
      ${faqSection(faqs)}
    `
  };
}

function renderSavedList(key, title, description) {
  const saved = storeGet(key, []).map((slug) => tools.find((tool) => tool.slug === slug)).filter(Boolean);
  return {
    meta: { title, description },
    html: `
      <section class="shell page">
        ${breadcrumbs([["Home", "/"], [title, getPath()]])}
        <div class="page-title"><span class="stamp">LocalStorage</span><h1>${title}</h1><p class="lead">${description}</p></div>
        ${saved.length ? `<div class="grid tools">${saved.map(toolCard).join("")}</div>` : `<div class="empty"><h3>No tools here yet</h3><p>Open a tool and mark it as favorite, or visit tools to build recent history.</p><a class="btn primary" href="/all-tools" data-link>Browse tools</a></div>`}
      </section>
    `
  };
}

function renderStaticPage(path) {
  const page = staticPages[path];
  return {
    meta: { title: page.title, description: page.description },
    html: `
      <section class="shell page">
        ${breadcrumbs([["Home", "/"], [page.title, path]])}
        <div class="page-title"><span class="stamp">Info</span><h1>${page.title}</h1><p class="lead">${page.description}</p></div>
        <article class="article">${page.body.map((p) => `<p>${p}</p>`).join("")}</article>
      </section>
    `
  };
}

function renderHtmlSitemap() {
  const links = [
    ["/", "Home"],
    ["/all-tools", "All Tools"],
    ["/categories", "Categories"],
    ["/prompts", "Prompts"],
    ["/templates", "Templates"],
    ["/guides", "Guides"],
    ["/languages", "Languages"],
    ...Object.keys(staticPages).map((path) => [path, staticPages[path].title]),
    ...categories.map((cat) => [`/${cat.slug}`, cat.title]),
    ...tools.map((tool) => [`/tools/${tool.slug}`, tool.title]),
    ...promptPages.map((page) => [`/prompts/${page.slug}`, page.title]),
    ...templatePages.map((slug) => [`/templates/${slug}`, slugTitle(slug)]),
    ...languagePages.map((lang) => [`/${lang.slug}`, `${lang.name} AI Tools`])
  ];
  return {
    meta: { title: "Sitemap", description: "HTML sitemap for AI Tools for Bharat." },
    html: `
      <section class="shell page">
        ${breadcrumbs([["Home", "/"], ["Sitemap", "/sitemap"]])}
        <div class="page-title"><span class="stamp">Sitemap</span><h1>All pages</h1><p class="lead">Quick links to the static MVP pages.</p></div>
        <div class="grid three">${links.map(([href, label]) => `<a class="card plain-card" href="${href}" data-link><h3>${label}</h3><p>${href}</p></a>`).join("")}</div>
      </section>
    `
  };
}

function renderComparePage(slug) {
  const title = slugTitle(slug);
  return {
    meta: { title, description: `${title} with Indian use cases, language support, prompt examples, and practical verdict.` },
    html: `
      <section class="shell page">
        ${breadcrumbs([["Home", "/"], ["Compare", "/compare"], [title, `/compare/${slug}`]])}
        <div class="page-title"><span class="stamp">Comparison</span><h1>${title}</h1><p class="lead">Short verdict: choose the tool that fits your task, language needs, and verification workflow.</p></div>
        <div class="grid two">
          <div class="card plain-card"><h3>Best for whom</h3><p>Students and teachers need explanation and planning. Office users need privacy-aware drafting. Researchers need citations and source checking.</p></div>
          <div class="card plain-card"><h3>Indian examples</h3><p>Use the same prompt in both tools: audience, language, tone, format, and India context. Compare clarity, accuracy, and usefulness.</p></div>
          <div class="card plain-card"><h3>Prompt example</h3><p>Act as an Indian productivity assistant. Compare options for [task]. Include pros, cons, language support, and safety notes.</p></div>
          <div class="card plain-card"><h3>Related generators</h3><p><a class="mini-link" href="/all-tools" data-link>Browse all tools</a> <a class="mini-link" href="/prompts" data-link>Prompt library</a></p></div>
        </div>
      </section>
    `
  };
}

function genericCollectionPage(type, slug, parent) {
  const title = slugTitle(slug);
  return {
    meta: { title, description: `${title} for Indian AI workflows.` },
    html: `
      <section class="shell page">
        ${breadcrumbs([["Home", "/"], [type, parent], [title, `${parent}/${slug}`]])}
        <div class="page-title"><span class="stamp">${type}</span><h1>${title}</h1><p class="lead">This collection is ready for expansion. Start from the related tools below.</p></div>
        <div class="grid tools">${tools.slice(0, 6).map(toolCard).join("")}</div>
      </section>
    `
  };
}

function renderNotFound() {
  return {
    meta: { title: "Page Not Found", description: "The requested page was not found." },
    html: `<section class="shell page"><div class="empty"><h1>Page not found</h1><p>Try the tool directory or search from the homepage.</p><a class="btn primary" href="/all-tools" data-link>Browse all tools</a></div></section>`
  };
}

function breadcrumbs(items) {
  return `<nav class="breadcrumbs" aria-label="Breadcrumb">${items.map(([label, href], index) => index === items.length - 1 ? `<span>${label}</span>` : `<a href="${href}" data-link>${label}</a><span>/</span>`).join("")}</nav>`;
}

function faqSection(faqs) {
  return `
    <section class="shell section">
      <div class="section-head"><div><span class="stamp">FAQ</span><h2>Questions people ask</h2></div></div>
      <div class="faq-list">${faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>
    </section>
  `;
}

function collectionSchema(name, urls) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    hasPart: urls.map((url) => ({ "@type": "WebPage", url: `${window.location.origin}${url}` }))
  };
}

function faqSchema(name, description, faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name,
    description,
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer }
    }))
  };
}

function toolSchema(tool, faqs) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: tool.title,
        applicationCategory: "ProductivityApplication",
        operatingSystem: "Web",
        description: tool.description,
        offers: { "@type": "Offer", price: "0", priceCurrency: "INR" }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: window.location.origin },
          { "@type": "ListItem", position: 2, name: "All Tools", item: `${window.location.origin}/all-tools` },
          { "@type": "ListItem", position: 3, name: tool.title, item: window.location.href }
        ]
      },
      faqSchema(tool.title, tool.description, faqs)
    ]
  };
}

function findCategorySlug(name) {
  const lower = name.toLowerCase();
  if (lower.includes("student")) return "ai-tools-for-students-india";
  if (lower.includes("teacher")) return "ai-tools-for-teachers-india";
  if (lower.includes("job")) return "ai-tools-for-job-seekers-india";
  if (lower.includes("business")) return "ai-tools-for-small-business-india";
  if (lower.includes("office")) return "ai-tools-for-office-employees-india";
  if (lower.includes("hr")) return "ai-tools-for-hr-india";
  if (lower.includes("account")) return "ai-tools-for-accountants-india";
  if (lower.includes("creator")) return "ai-tools-for-creators-india";
  if (lower.includes("freelance")) return "ai-tools-for-freelancers-india";
  return "ai-tools-for-sales-marketing-india";
}

function afterRender() {
  bindLocalLinks();

  $all("[data-search-input]").forEach((input) => {
    input.addEventListener("input", () => renderSearchResults(input));
  });

  $all("[data-search-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = form.querySelector("[data-search-input]").value.trim();
      const first = searchTools(query)[0];
      if (first) navigate(`/tools/${first.slug}`);
    });
  });

  const directory = $("[data-directory]");
  if (directory) {
    directory.addEventListener("input", updateDirectory);
  }

  $all("[data-tool-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const tool = tools.find((item) => item.slug === form.dataset.toolForm);
      const values = Object.fromEntries(new FormData(form).entries());
      storeSet("lastLanguage", values.language || "English");
      storeSet("lastTone", values.tone || "Professional");
      $("#prompt-output").textContent = buildPrompt(tool, values);
      uniquePush("savedPrompts", $("#prompt-output").textContent, 10);
      toast("Prompt generated");
    });
  });

  $all("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", () => copyText($(`#${button.dataset.copyTarget}`).textContent));
  });

  $all("[data-copy-md]").forEach((button) => {
    button.addEventListener("click", () => copyText("```text\n" + $(`#${button.dataset.copyMd}`).textContent + "\n```"));
  });

  $all("[data-copy-text]").forEach((button) => {
    button.addEventListener("click", () => copyText(button.dataset.copyText));
  });

  $all("[data-copy-link]").forEach((button) => {
    button.addEventListener("click", () => copyText(window.location.href, "Link copied"));
  });

  $all("[data-download]").forEach((button) => {
    button.addEventListener("click", () => downloadOutput(button));
  });

  $all("[data-print]").forEach((button) => {
    button.addEventListener("click", () => window.print());
  });

  $all("[data-favorite]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleFavorite(button.dataset.favorite);
      render();
    });
  });

  $all("[data-feedback]").forEach((button) => {
    button.addEventListener("click", () => {
      storeSet(`feedback:${button.dataset.feedback}`, button.dataset.value);
      toast("Feedback saved locally");
    });
  });

  $all("[data-ai-open]").forEach((link) => {
    link.addEventListener("click", () => uniquePush("openedAiTools", link.dataset.aiOpen, 10));
  });
}

function bindLocalLinks(root = document) {
  $all("[data-link]", root).forEach((link) => {
    link.addEventListener("click", (event) => {
      const url = new URL(link.href);
      if (url.origin !== window.location.origin) return;
      event.preventDefault();
      navigate(url.pathname);
    });
  });
}

function navigate(path) {
  history.pushState({}, "", path);
  render();
}

function renderSearchResults(input) {
  const root = input.closest(".search-panel");
  const results = root.querySelector("[data-search-results]");
  const query = input.value.trim();
  if (!query) {
    results.innerHTML = "";
    return;
  }
  const matches = searchTools(query).slice(0, 6);
  results.innerHTML = matches.length
    ? matches.map((tool) => `<a class="result-item" href="/tools/${tool.slug}" data-link><span><strong>${tool.title}</strong><br><small>${tool.description}</small></span><span class="chip">${tool.category}</span></a>`).join("")
    : `<div class="empty">No direct match yet. Try resume, teacher, WhatsApp, email, GST, study plan, or Instagram.</div>`;
  bindLocalLinks(results);
}

function searchTools(query) {
  const q = query.toLowerCase();
  return tools
    .map((tool, index) => {
      const haystack = [tool.title, tool.category, tool.description, ...tool.profession, ...tool.tasks, ...tool.languages, ...tool.keywords].join(" ").toLowerCase();
      const score = haystack.includes(q) ? 10 : q.split(/\s+/).filter((part) => haystack.includes(part)).length;
      return { tool, score, index };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map((item) => item.tool);
}

function updateDirectory() {
  const query = $("[data-dir-query]").value.toLowerCase();
  const category = $("[data-dir-category]").value;
  const language = $("[data-dir-language]").value;
  const task = $("[data-dir-task]").value;
  const sort = $("[data-dir-sort]").value;
  let filtered = tools.filter((tool) => {
    const haystack = [tool.title, tool.category, tool.description, ...tool.profession, ...tool.tasks, ...tool.languages, ...tool.keywords].join(" ").toLowerCase();
    return (!query || haystack.includes(query)) && (!category || tool.category === category) && (!language || tool.languages.includes(language)) && (!task || tool.tasks.includes(task));
  });
  if (sort === "az") filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "new") filtered = [...filtered].reverse();
  $("[data-directory-results]").innerHTML = filtered.length ? filtered.map(toolCard).join("") : `<div class="empty">No tools matched these filters.</div>`;
  bindLocalLinks($("[data-directory-results]"));
}

async function copyText(text, message = "Copied") {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
  uniquePush("copyHistory", text.slice(0, 280), 20);
  toast(message);
}

function downloadOutput(button) {
  const text = $(`#${button.dataset.target}`).textContent;
  const type = button.dataset.download;
  const filename = button.dataset.filename || "ai-tools-for-bharat";
  const payload = type === "json" ? JSON.stringify({ source: SITE_NAME, url: window.location.href, createdAt: new Date().toISOString(), output: text }, null, 2) : text;
  const blob = new Blob([payload], { type: type === "json" ? "application/json" : "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${filename}.${type === "md" ? "md" : type}`;
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(a.href);
  a.remove();
  toast("Download ready");
}

function toast(message) {
  const toastEl = $("#toast");
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2200);
}

window.addEventListener("popstate", render);
render();
