import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { chapterPath } from '../data/series';
import { metaLabelClass, mutedText } from '../utils/styles';

function SeriesContents({ series, currentSlug }) {
  return (
    <nav aria-label="Contents">
      <p className={`${metaLabelClass} mb-4`}>Contents</p>
      <ol className="list-none p-0 m-0">
        {series.chapters.map((chapter) => {
          const isCurrent = chapter.slug === currentSlug;
          return (
            <li key={chapter.slug}>
              <Link
                to={chapterPath(series.slug, chapter.slug)}
                aria-current={isCurrent ? 'page' : undefined}
                className={`flex gap-2 py-1 text-sm leading-snug ${
                  isCurrent ? 'text-ink font-semibold' : mutedText
                }`}
              >
                <span className="font-mono shrink-0">{chapter.number}</span>
                <span>{chapter.title}</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Tracks which section sits in the upper part of the viewport so the
 * on-this-page list can mark the one the reader is in.
 */
function useActiveSection(sections) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '');

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    if (nodes.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sections]);

  return activeId;
}

function OnThisPage({ sections }) {
  const activeId = useActiveSection(sections);

  return (
    <nav aria-label="On this page">
      <p className={`${metaLabelClass} mb-3`}>On this page</p>
      <ol className="list-none p-0 m-0">
        {sections.map((section, index) => {
          const number = String(index + 1).padStart(2, '0');
          const isCurrent = section.id === activeId;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`flex gap-2 py-1 text-sm leading-snug ${
                  isCurrent ? 'text-ink font-semibold' : mutedText
                }`}
              >
                <span className="font-mono shrink-0">{number}</span>
                <span>{section.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export { OnThisPage, SeriesContents };
