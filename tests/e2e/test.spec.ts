import { expect, test } from '@nuxt/test-utils/playwright';

test('test', async ({ page, goto }) => {
    await goto('/', { waitUntil: 'hydration' });
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toHaveText('Welcome to Gallery');
});
