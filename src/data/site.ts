export const site = {
  name: "Guillaume Imary",
  email: "[VOTRE-EMAIL]",
  links: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Malt", href: "#" },
  ],
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Méthode", href: "#methode" },
  { label: "Projets", href: "#projets" },
  { label: "À propos", href: "#perso" },
];

export const stack = ["Ruby on Rails", "Hotwire", "Astro", "PostgreSQL", "Tailwind", "Kamal", "GitHub Actions"];

export const services = [
  { num: "01", color: "var(--terracotta)", title: "Applications web sur mesure", text: "Outils métier, plateformes, espaces clients, SaaS. Des apps solides, maintenables, qui grandissent avec votre activité.", stack: "Rails · Hotwire · PostgreSQL" },
  { num: "02", color: "var(--sea)", title: "Sites vitrines rapides", text: "Pour un commerce, un club, un artisan. Des sites légers qui s’affichent en un éclair, bien référencés et presque gratuits à héberger.", stack: "Astro · SEO · Statique" },
  { num: "03", color: "var(--olive-dark)", title: "Reprise et maintenance", text: "Un site ou une app qui a pris la poussière ? Montées de version, déploiement, CI, remise en état : je reprends la partie.", stack: "Upgrades · CI/CD · Kamal" },
];

export const method = [
  { k: "Qualité", v: "Du code testé et relu à chaque livraison." },
  { k: "Rythme", v: "Des itérations courtes et des démos régulières." },
  { k: "Transparence", v: "Vous savez toujours où en est le projet, et pourquoi." },
  { k: "Client first", v: "Un seul objectif : que l’outil serve vraiment votre activité." },
];

export const projects = [
  { title: "[Projet 1]", tag: "App Rails", bg: "#F0D9C4", href: "#" },
  { title: "[Projet 2]", tag: "Site Astro", bg: "#D6E4EE", href: "#" },
  { title: "[Projet 3]", tag: "App Rails", bg: "#E3EAD3", href: "#" },
  { title: "[Projet 4]", tag: "Reprise", bg: "#F6E7B4", href: "#" },
];

export const about = [
  { icon: "🏐", color: "#D6E4EE", title: "Beach-volley", text: "Joueur et coach. Le sable, c’est mon open space du week-end." },
  { icon: "🍋", color: "#F6E7B4", title: "Mentonnais", text: "Ville du citron, donc forcément un peu acidulé. Mais toujours mûr." },
  { icon: "👨‍👧", color: "#F0D9C4", title: "Papa", text: "Expert certifié en négociation d’heure du coucher." },
  { icon: "🎮", color: "#E3EAD3", title: "Gamer rétro", text: "Élevé aux cartouches. Le code Konami marche aussi ici." },
];
