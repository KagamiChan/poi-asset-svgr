/**
 * builds svgr components in src folder
 * usage
 * yarn ts-node build.ts
 */

import glob from 'glob'
import path from 'path'
import Promise from 'bluebird'
import svgr from '@svgr/core'
import fs from 'fs-extra'
import _ from 'lodash'
import prettier from 'prettier'

const iconTemplate = ({ template }, opts, { imports, props, jsx }) =>
  template.ast`
    ${imports}

    const Icon = React.memo((${props}) => ${jsx})

    export default Icon
  `

const main = async () => {
  const files = glob.sync(path.resolve(__dirname, './svg/**/*.svg'))

  await Promise.map(files, async file => {
    const dest = path
      .resolve(__dirname, './src', path.relative(path.resolve(__dirname, './svg'), file))
      .replace(/svg$/, 'jsx')
    const input = await fs.readFile(file, 'utf-8')

    const output = await svgr(
      input,
      {
        icon: true,
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
        template: iconTemplate,
      },
      { componentName: 'Icon' },
    )

    await fs.outputFile(dest, output)
  })

  const icons = _(files)
    .groupBy(f => /svg\/(.*)\/.*.svg$/.exec(f)[1])
    .mapValues(g =>
      _.fromPairs(
        _.map(g, f => [
          /\/([-\d]+).svg$/.exec(f)[1],
          `require('./${path.relative(path.resolve(__dirname, './svg'), f).replace(/.svg$/, '')}')`,
        ]),
      ),
    )
    .value()

  const index = `
  module.exports = {
    ${_.map(
      icons,
      (items, group) =>
        `"${group}": {${_.map(items, (value, key) => `"${key}": ${value}`).join(',\n')}}`,
    ).join(',\n')}
  }
  `

  await fs.outputFile(
    path.resolve(__dirname, './src/index.js'),
    prettier.format(index, { ...require('./prettier.config'), parser: 'babylon' }),
  )
}

main()
