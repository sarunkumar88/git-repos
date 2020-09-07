export const toggleFavorite = (favorites, itemToAdd) => {
  const existing = favorites.includes(itemToAdd);

  if(existing) {
    return favorites.filter(item => item !== itemToAdd);
  }

  return [...favorites, itemToAdd];
}
