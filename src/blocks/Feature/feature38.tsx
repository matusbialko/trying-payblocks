import { Globe, Hash, NotebookText } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const Feature38 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
          <div className="lg:max-w-md">
            <span className="bg-accent flex size-14 items-center justify-center rounded-full">
              <NotebookText className="text-primary size-6" />
            </span>
            <h1 className="mt-8 mb-2 text-2xl font-bold text-pretty lg:text-4xl">
              Build your perfect website in a minute
            </h1>
            <p className="text-muted-foreground mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quam autem quo nam,
              eligendi commodi, atque at animi consectetur deserunt quis aperiam hic aliquam
              officia. Nam modi quo ipsa vitae!
            </p>
            <Button>Start for free</Button>
            <Separator className="my-7" />
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <NotebookText className="size-5" />
                <p className="font-bold">Lorem ipsum dolor sit.</p>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="size-5" />
                <p className="font-bold">Lorem ipsum dolor sit amet.</p>
              </li>
              <li className="flex items-center gap-3">
                <Hash className="size-5" />
                <p className="font-bold">Lorem ipsum dolor sit.</p>
              </li>
            </ul>
          </div>
          <img
            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder"
            className="max-h-96 w-full rounded-md object-cover lg:max-h-none lg:w-1/2"
          />
        </div>
      </div>
    </section>
  )
}

export default Feature38
