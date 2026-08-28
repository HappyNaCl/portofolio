/** Contact points and document links, kept in one place so the page copy, the
 *  mailto/social buttons, and the JSON-LD in BaseLayout cannot drift apart. */
export const site = {
  email: 'yuyudhistira0@gmail.com',

  // Canonical profile URLs -- no `www.` on github.com, which only redirects.
  github: 'https://github.com/HappyNaCl',
  linkedin: 'https://www.linkedin.com/in/yudhistira-yudhistira-bb6003412/',

  /** Files live in public/cv/. They carry no content hash, so bump `cvVersion`
   *  whenever a PDF is replaced -- otherwise returning visitors can be served
   *  the previous copy out of cache. */
  cvVersion: '2026-08',
  cv: {
    devops: '/cv/Yudhistira-DevOps-Engineer-CV.pdf',
    fullStack: '/cv/Yudhistira-Full-Stack-Developer-CV.pdf',
  },
} as const;

/** A CV path with the cache-busting version appended. */
export const cvHref = (which: keyof typeof site.cv) =>
  `${site.cv[which]}?v=${site.cvVersion}`;
