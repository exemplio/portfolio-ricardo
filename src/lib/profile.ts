export const profile = {
  name: "Ricardo Molina",
  initials: "RM",
  email: "ricardojosemolin@gmail.com",
  phone: "+58 414 174 5498",
  phoneRaw: "+584141745498",
  location: "Venezuela",
  linkedin: "https://www.linkedin.com/in/ricardo-molina",
  github: "https://github.com/exemplio",
  website: "exemplio.dev",
  photo: "/ricardo.jpg",
  cvPath: "/cv_ricardo_molina.pdf",
} as const;

export type SkillCategoryKey =
  | "mobile"
  | "web"
  | "database"
  | "devops"
  | "agile";

export const skillCategories: {
  key: SkillCategoryKey;
  items: string[];
}[] = [
  { key: "mobile", items: ["Flutter", "Dart", "Kotlin", "SQLite"] },
  { key: "web", items: ["React", "Angular", "Node.js", "TypeScript", "REST APIs", "WebSockets"] },
  { key: "database", items: ["MongoDB", "MySQL", "Firebase"] },
  { key: "devops", items: ["Git", "GitHub", "GitLab", "CI/CD", "Docker"] },
  { key: "agile", items: ["Scrum", "JIRA", "Code Reviews"] },
];
