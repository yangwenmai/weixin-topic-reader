declare module '*.mdx' {
    import type { ComponentProps, ComponentType } from 'react'
    const component: ComponentType<ComponentProps<'div'>>
    export default component
  }
  
  declare module '*.md' {
    import type { ComponentProps, ComponentType } from 'react'
    const component: ComponentType<ComponentProps<'div'>>
    export default component
  }