const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function GithubIcon(props) {
  return (
    <svg
      {...base}
      {...props}
      fill="currentColor"
      stroke="none"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg
      {...base}
      {...props}
      fill="currentColor"
      stroke="none"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.15C0 .51.53 0 1.18 0h13.64C15.47 0 16 .51 16 1.15v13.7c0 .64-.53 1.15-1.18 1.15H1.18C.53 16 0 15.49 0 14.85V1.15Zm4.94 12.22V6.17H2.54v7.2h2.4Zm-1.2-8.18c.84 0 1.36-.55 1.36-1.24-.02-.7-.52-1.24-1.34-1.24-.82 0-1.36.54-1.36 1.24 0 .69.52 1.24 1.32 1.24h.02Zm4.42 8.18V9.35c0-.22.02-.43.08-.59.17-.43.56-.87 1.21-.87.86 0 1.2.65 1.2 1.6v3.88h2.4V9.21c0-2.22-1.18-3.25-2.76-3.25-1.28 0-1.85.71-2.17 1.2v.03h-.02l.02-.03V6.17h-2.4c.03.68 0 7.2 0 7.2h2.4Z" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function PinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ArrowIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function PlayStoreIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 2.2v19.6a1 1 0 0 0 1.5.87l16-9.8a1 1 0 0 0 0-1.74l-16-9.8a1 1 0 0 0-1.5.87Z" />
      <path d="m3.9 2.6 11.4 11.3M3.9 21.4 15.3 10.1" />
    </svg>
  );
}
