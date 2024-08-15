import { GridBeam } from "./components/ui/GridBeam" 

export const GridBeamExample = () => (
  <div className="w-full h-[800px] dark:bg-grid-white/[0.05] bg-grid-black/[0.07]">
    <GridBeam className="flex items-start justify-start pl-4 sm:pl-16 pt-28">
      <div className="grid gap-2">
        <h1 className="max-w-sm text-4xl font-bold sm:text-5xl">Hero Section That Converts.</h1>
        <p className="max-w-lg text-neutral-500">
          Beautiful beam which I btw reverse engineered from Aceternity
        </p>
      </div>
    </GridBeam>
  </div>
)
