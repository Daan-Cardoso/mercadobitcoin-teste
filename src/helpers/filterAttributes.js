export const filteredAttrs = (attrs, nonAcceptedAttrs = ['class']) => {
  return Object.fromEntries(
    Object.entries(attrs).filter(([key]) => !nonAcceptedAttrs.includes(key))
  )
}