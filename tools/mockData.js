const courses = [
  {
    id: 1,
    title: "Create Visual Sitemap",
    slug: "https://flowmapp.com/visual-sitemap-tools-comparison/",
    authorId: 5,
    category: "Help with team planning"
  },
  {
    id: 2,
    title: "Create XML Sitemap",
    slug: "https://www.pixpa.com/blog/sitemap-benefits",
    authorId: 4,
    category: "Helps Google crawl site, improves SEO"
  },
  {
    id: 3,
    title: "Add Sitemap Link to Footer",
    slug: "https://uxmovement.com/navigation/why-the-footer-is-the-new-site-map/",
    authorId: 5,
    category: "Helps users navigate the site"
  }
];

const authors = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
  { id: 5, name: "5" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors
};
