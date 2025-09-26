/* components/SocialBar.tsx */
import React from "react";

const linkCls =
  "inline-flex h-8 w-8 items-center justify-center rounded-full " +
  "bg-neutral-800/70 hover:bg-neutral-700 text-neutral-200 " +
  "transition";

export default function SocialBar() {
  return (
    <div className="flex items-center gap-3">
      {/* Instagram */}
      <a
        href="https://instagram.com/your-handle"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={linkCls}
        title="Instagram"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
        </svg>
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com/your-handle"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={linkCls}
        title="Facebook"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M13 3h4a1 1 0 0 1 1 1v3h-3a2 2 0 0 0-2 2v3h5l-1 4h-4v7h-4v-7H6v-4h3V9a5 5 0 0 1 5-5z" />
        </svg>
      </a>

      {/* TikTok */}
      <a
        href="https://tiktok.com/@your-handle"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className={linkCls}
        title="TikTok"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M21 8.5a6.5 6.5 0 0 1-4.7-1.95V15A6 6 0 1 1 10 9h3a3 3 0 1 0 3 3V2h3a6.5 6.5 0 0 0 2 4.7V8.5z" />
        </svg>
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com/@your-handle"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className={linkCls}
        title="YouTube"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19.3 4.5 12 4.5 12 4.5s-7.3 0-8.9.6A3 3 0 0 0 1 7.2 31.2 31.2 0 0 0 .5 12 31.2 31.2 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.6.6 8.9.6 8.9.6s7.3 0 8.9-.6A3 3 0 0 0 23 16.8 31.2 31.2 0 0 0 23.5 12 31.2 31.2 0 0 0 23 7.2zM10 15.5v-7l6 3.5-6 3.5z"/>
        </svg>
      </a>

      {/* LinkedIn (optional) */}
      <a
        href="https://linkedin.com/in/your-handle"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={linkCls}
        title="LinkedIn"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48s.88 1.98 1.98 1.98S6.96 6.58 6.96 5.48 6.08 3.5 4.98 3.5zM3.5 8H6.5V21H3.5zM9 8h3v1.8h.04c.42-.8 1.46-1.64 3.01-1.64C18.5 8.16 19 10.1 19 12.83V21h-3v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.7-2.53 3.48V21H9z"/>
        </svg>
      </a>
    </div>
  );
}
