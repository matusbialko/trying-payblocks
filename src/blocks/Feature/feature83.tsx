import { HandHelping, Users } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

const Feature83 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 grid gap-4 sm:grid-cols-2 lg:order-none">
            <div className="bg-background flex flex-col rounded-md border p-4">
              <div className="mb-6 flex size-12 items-center justify-center rounded-md border">
                <HandHelping className="h-auto w-5" />
              </div>
              <h3 className="mb-2 font-semibold">Flexible Support</h3>
              <p className="text-muted-foreground text-sm">
                Benefit from around-the-clock assistance to keep your business running smoothly.
              </p>
            </div>
            <div className="bg-background flex flex-col rounded-md border p-4">
              <div className="mb-6 flex size-12 items-center justify-center rounded-md border">
                <Users className="h-auto w-5" />
              </div>
              <h3 className="mb-2 font-semibold">Collaborative Tools</h3>
              <p className="text-muted-foreground text-sm">
                Enhance teamwork with tools designed to simplify project management and
                communication.
              </p>
            </div>
            <div className="absolute -bottom-28 -z-10 size-full mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] bg-size-[12px_12px] opacity-25 sm:bg-[radial-gradient(hsl(from_var(--muted-foreground)_h_s_l)_1px,transparent_1px)]"></div>
          </div>
          <div className="order-1 mx-auto flex max-w-screen-md flex-col items-center gap-5 text-center lg:order-none lg:items-start lg:text-left">
            <Badge variant="outline" className="w-fit">
              Key Advantages
            </Badge>
            <h2 className="text-4xl font-bold">Simplified Solutions</h2>
            <p className="text-muted-foreground text-lg">
              Access comprehensive solutions for managing payments, collaboration, and support—all
              in one unified platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature83
