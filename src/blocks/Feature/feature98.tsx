import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const Feature98 = () => {
  return (
    <section className="py-32">
      <div>
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-20">
            <div className="lg:col-span-3">
              <p className="text-muted-foreground text-lg">Comprehensive Investment Solutions</p>
              <h2 className="mt-6 text-4xl lg:text-7xl">Your all-in-one VC partner</h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-muted-foreground text-lg">
                Every step covered—simplify your investments. We manage fund setup, compliance,
                taxes, and everything in between.
              </p>
              <div className="mt-10 flex gap-2">
                <Button size="lg">Contact an Advisor</Button>
                <Button size="lg" variant="secondary">
                  Explore Plans
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Separator className="mt-24 mb-6" />
        <div className="container grid gap-8 lg:grid-cols-3">
          <a href="#" className="group relative grid overflow-hidden sm:grid-cols-2 lg:grid-cols-1">
            <div className="text-background absolute top-0 left-0 z-20 flex w-full justify-between gap-2 p-6 sm:bottom-0 sm:left-1/2 sm:w-1/2 sm:flex-col lg:bottom-auto lg:left-0 lg:w-full lg:flex-row lg:items-center">
              <div>
                <h3 className="text-lg font-medium">Startup Funds</h3>
                <p>Effortlessly manage early-stage capital</p>
              </div>
              <span className="bg-background text-primary flex size-12 shrink-0 items-center justify-center rounded-full sm:self-end lg:size-14 lg:self-auto">
                <ArrowRight />
              </span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1698516923132-b0236bc8f3ef?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="scale-105 transition-all duration-500 group-hover:scale-110"
            />
            <div className="bg-primary z-10"></div>
          </a>
          <a href="#" className="group relative grid overflow-hidden sm:grid-cols-2 lg:grid-cols-1">
            <div className="text-background absolute top-0 left-0 z-20 flex w-full justify-between gap-2 p-6 sm:bottom-0 sm:left-1/2 sm:w-1/2 sm:flex-col lg:bottom-auto lg:left-0 lg:w-full lg:flex-row lg:items-center">
              <div>
                <h3 className="text-lg font-medium">Flexible Funds</h3>
                <p>Adapt your funding strategy</p>
              </div>
              <span className="bg-background text-primary flex size-12 shrink-0 items-center justify-center rounded-full sm:self-end lg:size-14 lg:self-auto">
                <ArrowRight />
              </span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1698402167275-7fbceb30989b?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="scale-105 transition-all duration-500 group-hover:scale-110"
            />
            <div className="bg-primary z-10"></div>
          </a>
          <a href="#" className="group relative grid overflow-hidden sm:grid-cols-2 lg:grid-cols-1">
            <div className="text-background absolute top-0 left-0 z-20 flex w-full justify-between gap-2 p-6 sm:bottom-0 sm:left-1/2 sm:w-1/2 sm:flex-col lg:bottom-auto lg:left-0 lg:w-full lg:flex-row lg:items-center">
              <div>
                <h3 className="text-lg font-medium">Capital Syndication</h3>
                <p>Raise investment with ease</p>
              </div>
              <span className="bg-background text-primary flex size-12 shrink-0 items-center justify-center rounded-full sm:self-end lg:size-14 lg:self-auto">
                <ArrowRight />
              </span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1698402178229-863420a8ecf6?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="scale-105 transition-all duration-500 group-hover:scale-110"
            />
            <div className="bg-primary z-10"></div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Feature98
