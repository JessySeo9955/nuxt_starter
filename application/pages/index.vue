<i18n src="@package/locales/pages/main.json" lang="json"></i18n>
<script setup lang="ts">
const { t } = useI18n(); // local scope then global scope

definePageMeta({
    layout: 'default',
    scrollToTop: true,
});

useHead(() => ({
    title: t('pages.main.title'),
    meta: [
        { name: 'description', content: t('meta.description') }, // i18n description
        { property: 'og:title', content: t('pages.main.title') },
        { property: 'og:description', content: t('meta.description') },
        { property: 'og:image', content: 'https://example.com/image.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
    ],
}));
</script>

<template>
    <div>
        <h1>{{ t('title') }}</h1>
        <p>Current locale: {{ $i18n.locale }}</p>
        <!--        <client-only>-->
        <!--            <ScrollSmoother></ScrollSmoother>-->
        <!--        </client-only>-->
    </div>
</template>
