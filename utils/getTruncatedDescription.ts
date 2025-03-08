export default function getTruncatedDescription(description: string): string {
  return description.length > 80 ? description.slice(0, 80) + "..." : description + "...";
}
