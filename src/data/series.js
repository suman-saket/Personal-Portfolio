import { microservices } from './microservices';
import { abc } from './abc';
// Every topic article. To add one: create src/data/<topic>.js in the same
// shape as microservices.js, import it here, and append it to this array.
export const seriesList = [microservices, abc];

/** The topic whose slug is in the URL, or null. */
export function getSeries(slug) {
  return seriesList.find((series) => series.slug === slug) ?? null;
}

/** Chapters in the order they are written in the topic file. */
export function getChapters(series) {
  return series.chapters;
}

/** One chapter inside a topic, or null. */
export function getChapter(series, slug) {
  return getChapters(series).find((chapter) => chapter.slug === slug) ?? null;
}

/** Previous and next chapter inside the same topic. */
export function getNeighbors(series, slug) {
  const chapters = getChapters(series);
  const index = chapters.findIndex((chapter) => chapter.slug === slug);

  return {
    prev: index > 0 ? chapters[index - 1] : null,
    next: index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : null,
  };
}

export function chapterPath(seriesSlug, chapterSlug) {
  return `/blogs/${seriesSlug}/${chapterSlug}`;
}

/** One row per topic for the blogs list, newest first. */
export function getSeriesListings() {
  return seriesList
    .map((series) => ({
      id: `series-${series.slug}`,
      slug: series.slug,
      title: series.title,
      date: series.date,
      excerpt: series.excerpt,
      tags: series.tags,
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
