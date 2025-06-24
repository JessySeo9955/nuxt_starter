import withNuxt from './.nuxt/eslint.config.mjs';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default withNuxt(
    // Prettier configuration
    prettierConfig,
    {
        plugins: {
            prettier,
        },
        rules: {
            'prettier/prettier': 'error',
            // Optional: customize other rules
            '@typescript-eslint/no-unused-vars': 'warn',
            'vue/multi-word-component-names': 'off',
        },
    }
);

