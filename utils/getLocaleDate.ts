export default function getLocaleDate(date: string) {
  const appConfig = useAppConfig();

  return new Date(date).toLocaleDateString(appConfig.site.dateTime.locale);
}
