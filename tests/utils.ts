import path from 'path'
import postcss from 'postcss'
import tailwindcss from '@tailwindcss/postcss'

export function run(input: string, content: string) {
  const candidates = [...content.matchAll(/class="([^"]*)"/g)].flatMap((m) => m[1].split(/\s+/))
  const pluginPath = path.resolve(__dirname, '../src/index.ts')

  return postcss(tailwindcss({ optimize: false })).process(
    `@import 'tailwindcss/utilities' source(none);
@theme { --spacing: 0.25rem; }
@plugin '${pluginPath}';
@source inline(${JSON.stringify(candidates.join(' '))});
${input}`,
    { from: path.resolve(__dirname, 'input.css') }
  )
}

export function strip(str: string) {
  return str.replace(/\/\*![\s\S]*?\*\//, '').replace(/\s/g, '').replace(/;/g, '')
}
