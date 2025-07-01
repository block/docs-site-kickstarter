import { useState } from 'react';
import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline';

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`
        absolute top-2 right-2 p-2 rounded-md
        bg-slate-200 dark:bg-slate-700 
        hover:bg-slate-300 dark:hover:bg-slate-600
        text-slate-600 dark:text-slate-300 
        hover:text-slate-800 dark:hover:text-slate-100
        opacity-0 group-hover:opacity-100
        transition-all duration-200
        focus:opacity-100 focus:outline-none focus:ring-2 
        focus:ring-slate-400 dark:focus:ring-slate-500
        border border-slate-300 dark:border-slate-600
        ${className}
      `}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      {copied ? (
        <CheckIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
      ) : (
        <ClipboardIcon className="h-4 w-4" />
      )}
    </button>
  );
}
