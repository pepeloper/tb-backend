import globals from 'globals';

export default [
  {
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2024,
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    rules: {
      // Indentación
      'indent': ['error', 2, { 'SwitchCase': 1, },],

      // Reglas básicas
      'semi': ['error', 'always',],
      'quotes': ['error', 'single',],
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-var': 'error',
      'prefer-const': 'error',

      // Espaciado
      'array-bracket-spacing': 'error',
      'object-curly-spacing': ['error', 'always',],
      'comma-spacing': ['error', { 'before': false, 'after': true, },],

      // Otras reglas útiles
      'camelcase': 'error',
      'eqeqeq': ['error', 'always',],
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0, },],
      'no-trailing-spaces': 'error',
      'space-in-parens': 'error',
      'spaced-comment': 'error',
      'comma-dangle': [
        'error', {
          'arrays': 'always',
          'objects': 'always',
        },
      ],
      'no-underscore-dangle': 0,
      'linebreak-style': 0,

      // Reglas específicas para aprendizaje
      'no-console': 'warn', // Advertencia para uso de console.log
      'max-len': ['error', { 'code': 80, },], // Limita la longitud de línea
      'curly': ['error', 'all',], // Requiere llaves en todos los bloques
    },
  },
];
