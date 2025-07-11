import { CopyButton } from '@/components/ui/copy-button';

const components = {
  // Most elements now inherit styling from global.css
  // Only need to handle special component-specific logic here
  
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
      <div className="relative group">
        <pre {...props} />
        <CopyButton text={textContent} />
      </div>
    );
  },
}

export default components
