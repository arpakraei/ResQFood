const normalizeText = (text = "") => {
  return text.toLowerCase().trim();
};

export const searchProducts = (products = [], searchTerm = "") => {
  const normalizedSearch = normalizeText(searchTerm);
  if (!normalizedSearch) {
    return products;
  }
  return products.filter((item) => {
    const description = normalizeText(item.product?.description);
    const categoryEn = normalizeText(item.product?.categories?.en);
    const categoryDa = normalizeText(item.product?.categories?.da);
    return (
      description.includes(normalizedSearch) ||
      categoryEn.includes(normalizedSearch) ||
      categoryDa.includes(normalizedSearch)
    );
  });
};
