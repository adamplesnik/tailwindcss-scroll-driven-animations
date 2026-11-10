import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('views/HowToView.tsx'),
  route('docs', 'views/DocsView.tsx'),
] satisfies RouteConfig
