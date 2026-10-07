import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { OnThisPage, SeriesContents } from '../components/SeriesIndex';
import {
  chapterPath,
  getChapter,
  getChapters,
  getNeighbors,
  getSeries,
} from '../data/series';
import {
  mutedText,
  navLinkClass,
  pageContainer,
  proseContentClassName,
  subtleBorder,
} from '../utils/styles';

function SeriesChapter() {
  const { seriesSlug, chapterSlug } = useParams();
  const series = getSeries(seriesSlug);
  const chapters = series ? getChapters(series) : [];
  const chapter = series && chapterSlug ? getChapter(series, chapterSlug) : chapters[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [seriesSlug, chapter?.slug]);

  if (!series) {
    return (
      <div className={`mt-2 pb-12 ${pageContainer.medium}`}>
        <h1 className="text-4xl mt-14 mb-3 font-serif">Article Not Found</h1>
        <p className={`mb-6 ${mutedText}`}>That topic is not on the blog.</p>
        <Link to="/blogs" className={navLinkClass(false)}>
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  if (!chapterSlug && chapters[0]) {
    return <Navigate to={chapterPath(series.slug, chapters[0].slug)} replace />;
  }

  if (!chapter) {
    return (
      <div className={`mt-2 pb-12 ${pageContainer.medium}`}>
        <h1 className="text-4xl mt-14 mb-3 font-serif">Chapter Not Found</h1>
        <p className={`mb-6 ${mutedText}`}>That chapter is not in {series.title}.</p>
        <Link to={`/blogs/${series.slug}`} className={navLinkClass(false)}>
          ← Back to {series.title}
        </Link>
      </div>
    );
  }

  const { prev, next } = getNeighbors(series, chapter.slug);

  return (
    <div className={`mt-8 pb-16 ${pageContainer.series}`}>
      <div className="lg:grid lg:grid-cols-[210px_minmax(0,1fr)] xl:grid-cols-[210px_minmax(0,1fr)_200px] lg:gap-10 xl:gap-12 lg:items-start">
        <aside className="hidden lg:block sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto pr-2">
          <SeriesContents series={series} currentSlug={chapter.slug} />
        </aside>

        <article className="min-w-0">
          <details className={`lg:hidden mb-8 border-b pb-4 ${subtleBorder}`}>
            <summary className={`cursor-pointer ${mutedText}`}>Contents</summary>
            <div className="mt-4">
              <SeriesContents series={series} currentSlug={chapter.slug} />
            </div>
          </details>

          <p className={`text-sm font-mono ${mutedText}`}>Chapter {chapter.number}</p>
          <h1 className="text-4xl mt-2 mb-8 font-serif">{chapter.title}</h1>

          <div className={`xl:hidden mb-10 border-b pb-6 ${subtleBorder}`}>
            <OnThisPage key={chapter.slug} sections={chapter.sections} />
          </div>

          {chapter.sections.map((section, index) => {
            const number = String(index + 1).padStart(2, '0');
            return (
              <section key={section.id} id={section.id} className={`scroll-mt-8 ${index === 0 ? '' : 'mt-12'}`}>
                <p className={`font-mono text-sm ${mutedText}`}>{number}</p>
                <h2 className="font-serif text-2xl font-normal mt-1">{section.title}</h2>
                {section.content ? (
                  <div
                    className={proseContentClassName}
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                ) : null}
              </section>
            );
          })}

          {(prev || next) && (
            <div className={`flex justify-between gap-8 mt-16 pt-6 border-t ${subtleBorder} flex-wrap max-md:flex-col`}>
              {prev ? (
                <Link
                  to={chapterPath(series.slug, prev.slug)}
                  className={`${navLinkClass(false)} max-w-[45%] font-mono text-sm max-md:max-w-full`}
                >
                  ← {prev.number} {prev.title}
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  to={chapterPath(series.slug, next.slug)}
                  className={`${navLinkClass(false)} max-w-[45%] font-mono text-sm ml-auto text-right max-md:max-w-full max-md:ml-0 max-md:text-left`}
                >
                  {next.number} {next.title} →
                </Link>
              )}
            </div>
          )}
        </article>

        <aside className="hidden xl:block sticky top-6">
          <OnThisPage key={chapter.slug} sections={chapter.sections} />
        </aside>
      </div>
    </div>
  );
}

export default SeriesChapter;
