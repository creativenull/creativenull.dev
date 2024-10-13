export default function getHumanReadableDate(date: string): string {
  const appConfig = useAppConfig();

  return new Date(date).toLocaleDateString(appConfig.site.dateTime.locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
