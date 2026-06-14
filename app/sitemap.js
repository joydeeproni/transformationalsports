const BASE_URL = 'https://www.transformationalsports.org';

const routes = [
  '',
  '/about',
  '/programs',
  '/contact',
  '/social-action-lab',
  '/fellowship-school-outreach',
  '/rural-sports-outreach',
  '/virtual-coach-training',
  '/virtual-coach-training-choices',
  '/volunteer-for-india',
  '/volunteer-for-india-2',
  '/puberty-teen-relationships',
  '/bridging-the-gaps',
  '/covid19-relief',
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
