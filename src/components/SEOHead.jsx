import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEOHead({
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogUrl,
    ogImage = 'https://ieltsptepro.com/og-image.svg',
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
        const pathname = location.pathname || '/';
        const canonicalUrl = canonical || `${window.location.origin}${pathname}`;
        const finalOgTitle = ogTitle || pageTitle;
        const finalOgDescription = ogDescription || pageDescription;
        const finalOgUrl = ogUrl || canonicalUrl;

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
        setMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
        setMeta('author', 'IELTSPTEPRO');
        setMeta('og:title', finalOgTitle, true);
        setMeta('og:description', finalOgDescription, true);
        setMeta('og:type', 'website', true);
        setMeta('og:url', finalOgUrl, true);
        setMeta('og:image', ogImage, true);
        setMeta('twitter:card', 'summary_large_image', true);
        setMeta('twitter:title', finalOgTitle, true);
        setMeta('twitter:description', finalOgDescription, true);
        setMeta('twitter:image', ogImage, true);

        setLink('canonical', canonicalUrl);

        if (schema)
        {
            setJsonLd(schema);
        }
        else
        {
            const existingScript = document.querySelector('script[data-seo-jsonld="true"]');
            if (existingScript)
            {
                existingScript.remove();
            }
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [canonical, description, keywords, location.pathname, ogDescription, ogImage, ogTitle, ogUrl, schema, title]);

    return null;
}
