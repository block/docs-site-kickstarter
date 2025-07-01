import { CopyButton } from '@/components/ui/copy-button';

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
      className="m-0 border-t p-0 even:bg-slate-50 dark:even:bg-slate-800/50"
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
  pre: (props) => {
    // Extract text content for copying
    const getTextContent = (children: any): string => {
      if (typeof children === 'string') return children;
      if (Array.isArray(children)) return children.map(getTextContent).join('');
      if (children?.props?.children) return getTextContent(children.props.children);
      return '';
    };

    const textContent = getTextContent(props.children);

    return (
      <div className="relative group my-6">
        <pre
          {...props}
        />
        <CopyButton text={textContent} />
      </div>
    );
  },
  code: (props) => {
    // Simple approach: always apply inline code styling
    // CSS will override this for code elements inside pre blocks
    return (
      <code
        className="relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium border bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
        {...props}
      />
    );
  },
  a: (props) => (
    <a
      className="font-medium text-primary underline underline-offset-4 hover:no-underline"
      {...props}
    />
  ),
}

export default components
