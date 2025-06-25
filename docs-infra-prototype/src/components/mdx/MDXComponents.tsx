const components = {
  h1: (props) => (
    <h1
      className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-10"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="scroll-m-20 text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="leading-7 [&:not(:first-child)]:mt-6"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="my-6 ml-6 list-disc [&>li]:mt-2"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="my-6 ml-6 list-decimal [&>li]:mt-2"
      {...props}
    />
  ),
  li: (props) => (
    <li className="mt-2" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200"
      {...props}
    />
  ),
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img className="rounded-md border" {...props} />
  ),
  hr: (props) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: (props) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full" {...props} />
    </div>
  ),
  tr: (props) => (
    <tr
      className="m-0 border-t p-0 even:bg-muted"
      {...props}
    />
  ),
  th: (props) => (
    <th
      className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mb-4 mt-6 overflow-x-auto rounded-lg bg-slate-900 py-4"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="font-medium text-primary underline underline-offset-4 hover:no-underline"
      {...props}
    />
  ),
}

export default components
