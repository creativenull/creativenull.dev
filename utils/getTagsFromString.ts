export default function getTagsFromString(tags: string | null): string[] {
  if (!tags) return [];

  return tags.split(",").map((tag) => tag.trim());
}
