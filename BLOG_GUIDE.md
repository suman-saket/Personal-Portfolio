# Blog Management Guide

## Recommended Approach: Static Data + Dynamic Routing

For a simple portfolio, I recommend using **static blog data** with **dynamic routing**. This is:
- ✅ Easy to maintain
- ✅ No database needed
- ✅ Fast loading
- ✅ Perfect for personal blogs

## File Structure

```
src/
├── data/
│   └── blogs.js          # All blog posts data
├── pages/
│   ├── Blogs.jsx         # Blog listing page
│   └── BlogPost.jsx      # Individual blog post page
└── components/
    └── BlogCard.jsx      # Blog card component
```

## How to Add New Blogs

### Option 1: Simple JavaScript Array (Recommended)
Store all blogs in `src/data/blogs.js`:

```javascript
export const blogs = [
  {
    id: 1,
    slug: 'my-first-blog-post',
    title: 'My First Blog Post',
    date: '2024-01-15',
    excerpt: 'This is a short description of my blog post...',
    content: 'Full blog content here...',
    tags: ['React', 'Web Development']
  },
  {
    id: 2,
    slug: 'learning-react-hooks',
    title: 'Learning React Hooks',
    date: '2024-02-20',
    excerpt: 'My journey learning React Hooks...',
    content: 'Full blog content here...',
    tags: ['React', 'JavaScript']
  }
];
```

### Option 2: Markdown Files (Advanced)
If you want to write in Markdown:
1. Store `.md` files in `src/content/blogs/`
2. Use a library like `react-markdown` to parse them
3. Requires more setup but better for long articles

### Option 3: Headless CMS (For Many Blogs)
If you plan to write many blogs:
- Use services like Contentful, Sanity, or Strapi
- More complex but scalable

## Implementation Steps

1. **Create blog data file** (`src/data/blogs.js`)
2. **Create BlogCard component** for listing
3. **Create BlogPost page** for individual posts
4. **Update routing** in `App.jsx`
5. **Update Blogs page** to show blog list

## Example Usage

After setup, to add a new blog:
1. Open `src/data/blogs.js`
2. Add a new object to the array
3. Done! It will appear automatically
