'use client';

import { CheckIcon, CopyIcon } from 'lucide-react';
import {
  type ComponentProps,
  cloneElement,
  type HTMLAttributes,
  type ReactElement,
  useState,
} from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

export type SnippetProps = ComponentProps<typeof Tabs>;

export const Snippet = ({ className, ...props }: SnippetProps) => (
  <Tabs
    className={cn(
      'group w-full gap-0 overflow-hidden rounded-md border',
      className
    )}
    {...props}
  />
);

export type SnippetHeaderProps = HTMLAttributes<HTMLDivElement>;

export const SnippetHeader = ({ className, ...props }: SnippetHeaderProps) => (
  <div
    className={cn(
      'flex flex-row items-center justify-between border-b bg-secondary p-1',
      className
    )}
    {...props}
  />
);

export type SnippetCopyButtonProps = ComponentProps<typeof Button> & {
  value: string;
  onCopy?: () => void;
  onError?: (error: Error) => void;
  timeout?: number;
};

export const SnippetCopyButton = ({
  asChild,
  value,
  onCopy,
  onError,
  timeout = 2000,
  children,
  ...props
}: SnippetCopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    if (
      typeof window === 'undefined' ||
      !navigator.clipboard.writeText ||
      !value
    ) {
      return;
    }

    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);
      onCopy?.();

      setTimeout(() => setIsCopied(false), timeout);
    }, onError);
  };

  if (asChild) {
    return cloneElement(children as ReactElement, {
      // @ts-expect-error - we know this is a button
      onClick: copyToClipboard,
    });
  }

  const icon = isCopied ? <CheckIcon size={14} /> : <CopyIcon size={14} />;

  return (
    <Button
      className="opacity-0 transition-opacity group-hover:opacity-100"
      onClick={copyToClipboard}
      size="icon"
      variant="ghost"
      {...props}
    >
      {children ?? icon}
    </Button>
  );
};

export type SnippetTabsListProps = ComponentProps<typeof TabsList>;

export const SnippetTabsList = TabsList;

export type SnippetTabsTriggerProps = ComponentProps<typeof TabsTrigger>;

export const SnippetTabsTrigger = ({
  className,
  ...props
}: SnippetTabsTriggerProps) => (
  <TabsTrigger className={cn('gap-1.5', className)} {...props} />
);

export type SnippetTabsContentProps = ComponentProps<typeof TabsContent>;

export const SnippetTabsContent = ({
  className,
  children,
  ...props
}: SnippetTabsContentProps) => (
  <TabsContent
    asChild
    className={cn('mt-0 bg-background p-4 text-sm', className)}
    {...props}
  >
    <pre className="truncate">{children}</pre>
  </TabsContent>
);
