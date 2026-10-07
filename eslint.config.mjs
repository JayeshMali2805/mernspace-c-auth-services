import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,

  {
    ignores: ['dist', 'node_modules', 'eslint.config.mjs'],
  },

  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['jest.config.js'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      'no-console': ['error', { allow: ['error'] }],
      'dot-notation': 'error',
    },
  },

  {
    files: ['**/*.spec.ts'],
    languageOptions: {
      parserOptions: {
        projectService: false,
        project: './tsconfig.test.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
)
