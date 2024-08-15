export const Skeleton = () => (
    <div className={'flex w-full h-12 items-center gap-4 max-w-sm animate-pulse'}>
      <div className={'rounded-full h-full aspect-square dark:bg-neutral-800 bg-neutral-300'} />
      <div className={'w-full h-full flex flex-col items-start justify-start gap-3'}>
        <div className={'w-full dark:bg-neutral-800 bg-neutral-300 h-full rounded-lg'} />
        <div className={'w-2/3 dark:bg-neutral-800 bg-neutral-300 h-full rounded-lg'} />
      </div>
    </div>
  )
  