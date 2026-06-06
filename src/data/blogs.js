// Blog posts data
// To add a new blog, just add a new object to this array

export const blogs = [
  {
    id: 1,
    slug: 'getting-started-with-react',
    title: 'Getting Started with React',
    date: '2024-01-15',
    excerpt: 'A beginner-friendly guide to React. Learn the fundamentals and build your first component.',
    content: `
      <h2>Introduction</h2>
      <p>React is a powerful JavaScript library for building user interfaces. In this blog post, we'll explore the basics of React and how to get started.</p>
      
      <h2>What is React?</h2>
      <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".</p>
      
      <h2>Getting Started</h2>
      <p>To get started with React, you can use Create React App or Vite. Both are great tools for setting up a new React project.</p>
      
      <h2>Conclusion</h2>
      <p>React is a great choice for building modern web applications. Start with the basics and gradually learn more advanced concepts.</p>
    `,
    tags: ['React', 'JavaScript', 'Web Development']
  },
  {
    id: 2,
    slug: 'understanding-react-hooks',
    title: 'Understanding React Hooks',
    date: '2024-02-20',
    excerpt: 'Deep dive into React Hooks. Learn useState, useEffect, and custom hooks with practical examples.',
    content: `
      <h2>What are Hooks?</h2>
      <p>Hooks are functions that let you "hook into" React state and lifecycle features from function components.</p>
      
      <h2>useState Hook</h2>
      <p>The useState hook allows you to add state to functional components. It returns a stateful value and a function to update it.</p>
      
      <h2>useEffect Hook</h2>
      <p>The useEffect hook lets you perform side effects in function components. It's similar to componentDidMount and componentDidUpdate.</p>
      
      <h2>Custom Hooks</h2>
      <p>You can create custom hooks to extract component logic into reusable functions.</p>
    `,
    tags: ['React', 'Hooks', 'JavaScript']
  },
  {
    id: 3,
    slug: 'css-tips-and-tricks',
    title: 'CSS Tips and Tricks',
    date: '2024-03-10',
    excerpt: 'Useful CSS techniques that will make your styling life easier. From flexbox to grid, learn the modern CSS approaches.',
    content: `
      <h2>Modern CSS Layouts</h2>
      <p>CSS Grid and Flexbox have revolutionized how we create layouts. Learn when to use each.</p>
      
      <h2>CSS Variables</h2>
      <p>CSS custom properties (variables) allow you to store values that can be reused throughout your stylesheet.</p>
      
      <h2>Responsive Design</h2>
      <p>Media queries are essential for creating responsive designs that work on all devices.</p>
    `,
    tags: ['CSS', 'Web Design', 'Frontend']
  }
];

// Helper function to get blog by slug
export const getBlogBySlug = (slug) => {
  return blogs.find(blog => blog.slug === slug);
};

// Helper function to get all blogs
export const getAllBlogs = () => {
  return blogs.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first
};
