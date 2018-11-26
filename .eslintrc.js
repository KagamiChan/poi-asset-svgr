module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['import', 'react', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': 'off',
    'global-require': 'off',
  },
}
