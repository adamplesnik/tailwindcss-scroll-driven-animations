import path from 'path'
import postcss from 'postcss'
import tailwind, { Config } from 'tailwindcss'
import { expect } from 'vitest'
import scrollDrivenAnimations from '../src/index'

export function run(input: string, config: Config, plugin = tailwind) {
  let { currentTestName } = expect.getState()

  config.plugins ??= []
  if (!config.plugins.includes(scrollDrivenAnimations)) {
    config.plugins.push(scrollDrivenAnimations)
  }

  return postcss(plugin(config)).process(input, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  })
}

export function strip(str: string) {
  return str.replace(/\s/g, '').replace(/;/g, '')
}
