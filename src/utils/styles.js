export const pageContainer = {
  home: 'w-full max-w-[90%] md:w-[43%] mx-auto',
  wide: 'w-full max-w-[95%] md:w-[55%] mx-auto',
  medium: 'w-full max-w-[90%] md:w-[50%] mx-auto',
};

export const appShell =
  'bg-orange-100 text-black dark:bg-neutral-950 dark:text-orange-50 transition-colors duration-300';

export const mutedText = 'text-gray-500 dark:text-neutral-400';

export const divider = 'border-black/30 dark:border-orange-100/20';

export const subtleBorder = 'border-black/20 dark:border-orange-100/15';

export const navLinkClass = (isActive = false) =>
  [
    "relative after:content-[''] after:absolute after:h-[2px] after:bg-black dark:after:bg-orange-100 after:bottom-[-4px] after:left-0 after:transition-all after:duration-300 hover:after:w-full",
    isActive ? 'after:w-full' : 'after:w-0',
  ].join(' ');

export const underlineLinkClass =
  "relative font-semibold after:content-[''] after:pointer-events-none after:absolute after:w-0 after:h-[2px] after:bg-black dark:after:bg-orange-100 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300";

export const inputClassName =
  'w-full px-3 py-2.5 border border-black/25 dark:border-orange-100/25 bg-white/35 dark:bg-neutral-900/50 font-serif text-base text-black dark:text-orange-50 focus:outline-none focus:border-black dark:focus:border-orange-100 focus:bg-white/50 dark:focus:bg-neutral-900/70';

export const submitButtonClassName =
  'px-6 py-2.5 border-2 border-black dark:border-orange-100 font-semibold bg-transparent hover:bg-black dark:hover:bg-orange-100 hover:text-orange-100 dark:hover:text-neutral-950 transition-colors';

export const proseContentClassName =
  'mt-4 font-serif text-lg prose prose-neutral dark:prose-invert max-w-none prose-p:mt-2 prose-headings:font-serif prose-headings:font-normal';
