module.exports = {
  root: true,
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'string-quotes': 'double',
    'length-zero-no-unit': true,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'block-opening-brace-space-before': 'always',
    'block-opening-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'declaration-block-trailing-semicolon': 'always',
    // stylelint-order
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'at-variables',
      'at-rules',
      'declarations',
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
