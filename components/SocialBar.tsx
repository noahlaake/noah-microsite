/* components/SocialBar.tsx */
import React from "react";

type Props = { className?: string };

const links = [
  { href: "https://youtube.com/", label: "YouTube", icon: YouTubeIcon },
  { href: "https://instagram.com/", label: "Instagram", icon: InstagramIcon },
  { href: "https://facebook.com/", label: "Facebook", icon: FacebookIcon },
  { href: "https://www.tiktok.com/", label: "TikTok", icon: TikTokIcon },
      { href: "https://linkedin.com/", label: "LinkedIn", icon: LinkedInIcon },
];

export default function SocialBar({ className = "" }: Props) {
  const btn =
    "h-8 w-8 grid place-items-center rounded-full border border-neutral-700/70 text-neutral-300 hover:text-emerald-400 hover:border-emerald-400 transition";

  return (
    <div className={`items-center gap-2 ${className}`}>
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={btn}
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

/* --- tiny inline SVG icons --- */
function FacebookIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9V12h2.54V9.8c0-2.5 1.5-3.9 3.79-3.9 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.64.78-1.64 1.57V12h2.79l-.45 2.97h-2.34v7.03C18.34 21.2 22 17.06 22 12.06z" />
    </svg>
  );
}
function InstagramIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM17.75 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
    </svg>
  );
}
function TikTokIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M16 2h3a6 6 0 0 0 3 5v3a9 9 0 0 1-6-3v7.5a6.5 6.5 0 1 1-6-6.46V11a3.5 3.5 0 1 0 3 3.5V2z" />
    </svg>
  );
}
function YouTubeIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M23.5 7.5a4 4 0 0 0-2.8-2.8C18.8 4 12 4 12 4s-6.8 0-8.7.7A4 4 0 0 0 .5 7.5 41 41 0 0 0 0 12a41 41 0 0 0 .5 4.5 4 4 0 0 0 2.8 2.8C5.2 20 12 20 12 20s6.8 0 8.7-.7a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-4.5zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}
function LinkedInIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.6c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.69H9.34V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.26 2.38 4.26 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}
