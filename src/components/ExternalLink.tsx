import * as React from "react";

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel"> & {
  href: string;
};

/**
 * Forces external navigation out of the preview iframe.
 * Keeps href for accessibility + long-press while programmatically opening in a new tab.
 */
export function ExternalLink({ href, onClick, ...props }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;

        // Ensure we don't try to load external sites inside the iframe.
        e.preventDefault();

        const win = window.open(href, "_blank", "noopener,noreferrer");
        if (!win) {
          // Fallback (popup blockers) — at least navigate this tab.
          window.location.assign(href);
        }
      }}
      {...props}
    />
  );
}
