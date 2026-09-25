import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const buildCanonicalUrl = (pathname = '/', overridePath = null) =>
{
    const normalizedPath = (overridePath || pathname || '/').split('?')[0].split('#')[0];
    const safePath = normalizedPath === '' ? '/' : normalizedPath;
    const withoutTrailingSlash = safePath === '/' ? '/' : safePath.replace(/\/+$/, '');
    return `https://ieltsptepro.com${withoutTrailingSlash}`;
};

export default function SEOHead({
    title,
    description,
    keywords,
    canonical,
    robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    ogTitle,
    ogDescription,
    ogUrl,
    ogImage = 'https://ieltsptepro.com/og-image.svg',
    ogType = 'website',
    schema,
})
{
    const location = useLocation();

    useEffect(() =>
    {
        const siteTitle = 'IELTSPTEPRO';
        const pageTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | IELTS & PTE Services`;
        const pageDescription = description || 'Professional IELTS and PTE services, preparation guidance, and useful information for students planning their next academic or migration step.';
        const pageKeywords = keywords || 'IELTS services, PTE services, IELTS preparation, PTE preparation, IELTS vs PTE';
        const canonicalUrl = canonical || buildCanonicalUrl(location.pathname);
        const finalOgTitle = ogTitle || pageTitle;
        const finalOgDescription = ogDescription || pageDescription;
        const finalOgUrl = ogUrl || canonicalUrl;
        const pageSchema = schema || {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: pageTitle,
            description: pageDescription,
            url: canonicalUrl,
            isPartOf: {
                '@type': 'WebSite',
                name: 'IELTSPTEPRO',
                url: 'https://ieltsptepro.com/'
            }
        };

        document.title = pageTitle;
        document.documentElement.lang = 'en';

        const setMeta = (name, content, property = false) =>
        {
            const attribute = property ? 'property' : 'name';
            let tag = document.querySelector(`meta[${attribute}="${name}"]`);
            if (!tag)
            {
                tag = document.createElement('meta');
                tag.setAttribute(attribute, name);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        };

        const setLink = (rel, href) =>
        {
            let tag = document.querySelector(`link[rel="${rel}"]`);
            if (!tag)
            {
                tag = document.createElement('link');
                tag.setAttribute('rel', rel);
                document.head.appendChild(tag);
            }
            tag.setAttribute('href', href);
        };

        const setJsonLd = (jsonObject) =>
        {
            let tag = document.querySelector('script[data-seo-jsonld="true"]');
            if (!tag)
            {
                tag = document.createElement('script');
                tag.setAttribute('type', 'application/ld+json');
                tag.setAttribute('data-seo-jsonld', 'true');
                document.head.appendChild(tag);
            }
            tag.textContent = JSON.stringify(jsonObject);
        };

        setMeta('description', pageDescription);
        setMeta('keywords', pageKeywords);
        setMeta('robots', robots);
        setMeta('author', 'IELTSPTEPRO');
        setMeta('og:title', finalOgTitle, true);
        setMeta('og:description', finalOgDescription, true);
        setMeta('og:type', ogType, true);
        setMeta('og:url', finalOgUrl, true);
        setMeta('og:image', ogImage, true);
        setMeta('og:site_name', 'IELTSPTEPRO', true);
        setMeta('twitter:card', 'summary_large_image');
        setMeta('twitter:title', finalOgTitle);
        setMeta('twitter:description', finalOgDescription);
        setMeta('twitter:image', ogImage);

        setLink('canonical', canonicalUrl);
        setJsonLd(pageSchema);

        const currentScroll = window.scrollY;
        if (currentScroll > 0)
        {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [canonical, description, keywords, location.pathname, ogDescription, ogImage, ogTitle, ogType, ogUrl, robots, schema, title]);

    return null;
}
