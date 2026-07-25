export const pageContainer = {
  home: 'w-full max-w-[90%] md:w-[43%] mx-auto',
  wide: 'w-full max-w-[95%] md:w-[55%] mx-auto',
  medium: 'w-full max-w-[90%] md:w-[50%] mx-auto',
};

/** Page background + default text (keep in sync with src/index.css @theme) */
export const appShell =
  'bg-surface text-ink transition-colors duration-300';

export const mutedText = 'text-ink-muted';

export const homeLeadClass = 'text-lg leading-relaxed';

export const sectionHeadingClass = 'font-serif text-2xl font-normal tracking-tight text-ink';

export const metaLabelClass =
  'text-sm font-semibold uppercase tracking-wide text-ink-muted';

export const divider = 'border-ink/25 dark:border-ink/15';

export const subtleBorder = 'border-ink/20 dark:border-ink/12';

export const navLinkClass = (isActive = false) =>
  [
    "relative after:content-[''] after:absolute after:h-[2px] after:bg-ink after:bottom-[-4px] after:left-0 after:transition-all after:duration-300 hover:after:w-full",
    isActive ? 'after:w-full' : 'after:w-0',
  ].join(' ');

export const underlineLinkClass =
  "relative font-semibold after:content-[''] after:pointer-events-none after:absolute after:w-0 after:h-[2px] after:bg-ink after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300";

export const inputClassName =
  'w-full px-3 py-2.5 border border-ink/25 bg-white/50 dark:bg-stone-900/60 font-serif text-base text-ink focus:outline-none focus:border-ink focus:bg-white/70 dark:focus:bg-stone-900/80';

export const submitButtonClassName =
  'px-6 py-2.5 border-2 border-ink font-semibold bg-transparent hover:bg-ink hover:text-surface transition-colors';

export const proseContentClassName =
  'mt-4 font-serif text-lg prose prose-stone dark:prose-invert max-w-none prose-p:mt-2 prose-headings:font-serif prose-headings:font-normal';
