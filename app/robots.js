const BASE_URL = 'https://www.transformationalsports.org';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Old WordPress paths that no longer exist (blocked by the firewall with 403).
      // Stop crawlers from requesting them so they drop out of the index.
      disallow: ['/wp-admin/', '/wp-login.php', '/wp-content/', '/wp-includes/', '/xmlrpc.php'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
