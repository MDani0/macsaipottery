module.exports = function(eleventyConfig) {
  // Copy static assets to output
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/images");

  // Filter to get only available items
  eleventyConfig.addFilter("available", function(items) {
    return items.filter(item => item.data.status === "available");
  });

  // Filter to get only sold items
  eleventyConfig.addFilter("sold", function(items) {
    return items.filter(item => item.data.status === "sold");
  });

  // Filter to format price in Hungarian (Ft)
  eleventyConfig.addFilter("currency", function(value) {
    return new Intl.NumberFormat('hu-HU', {
      style: 'decimal',
      minimumFractionDigits: 0
    }).format(value) + ' Ft';
  });

  // Filter to format price in English (HUF)
  eleventyConfig.addFilter("currencyEn", function(value) {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 0
    }).format(value) + ' HUF';
  });

  // Filter to format Euro price (optional)
  eleventyConfig.addFilter("currencyEur", function(value) {
    if (!value) return null;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    }).format(value);
  });

  // Filter to get featured items (limit to 6)
  eleventyConfig.addFilter("featured", function(items) {
    return items.filter(item => item.data.status === "available").slice(0, 6);
  });

  // Add global data for current year
  eleventyConfig.addGlobalData("currentYear", new Date().getFullYear());

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
