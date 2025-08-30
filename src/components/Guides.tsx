import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/core-concepts/modules-and-extensions#core-module',
    name: 'Core module',
    description: 'Learn how to core module foundations of Ergosfare infrastructure.',
  },
  {
    href: '/building-with-ergosfare/commands-and-command-handlers',
    name: 'Command module',
    description: 'Understand how to work with Ergosfares command module.',
  },
  {
    href: '/building-with-ergosfare/queries-and-query-handlers',
    name: 'Query module',
    description:
      'Discover how to leverage the query module for data retrieval.',
  },
  {
    href: '/building-with-ergosfare/events-and-event-handlers',
    name: 'Event module',
    description:
      'Explore the event module for event-driven architectures.',
  },
]





const characteristics = [
  {
    name: 'No external dependencies',
    description: 'Ergosfare is self-contained and lightweight. It doesn’t rely on third-party libraries, ensuring minimal footprint, fewer update concerns, and maximum compatibility.',
  },
  {
    name: 'Reduced Reflection Usage',
    description: 'Optimized to use reflection only where absolutely necessary, improving runtime performance and reducing overhead compared to typical mediator frameworks.',
  },
  {
    name: 'Polymorphic Message Dispatch',
    description:
      'Supports covariance and contravariance, enabling flexible dispatch of messages and handlers across polymorphic hierarchies without extra boilerplate.',
  },
  {
    name: 'Modular Architecture ',
    description:
      'Clean separation of abstractions and implementations makes Ergosfare highly extensible. You can plug in new modules or replace components without affecting the rest of your application.',
  },
]



export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Guides
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}


export function KeyCharacteristics() {
    return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="Key Characteristics">
        Key Characteristics
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {characteristics.map((characteristics) => (
          <div key={characteristics.name}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {characteristics.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {characteristics.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}