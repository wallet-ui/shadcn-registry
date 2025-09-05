'use client';
import type { BundledLanguage } from '@/components/ui/shadcn-io/code-block';
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
  CodeBlockSelect,
  CodeBlockSelectContent,
  CodeBlockSelectItem,
} from '@/components/ui/shadcn-io/code-block';

export const codeUpdateShadcn = [
  {
    language: 'json',
    filename: 'components.json',
    code: `{
  "$schema": "https://ui.shadcn.com/schema.json",
  //... shadcn config
  "registries": {
    "@wallet-ui": "https://registry.wallet-ui.dev/r/{name}.json"
  }
}`,
  },
]
export const codeUpdateLayout = [
  {
    language: 'tsx',
    filename: 'app/layout.tsx',
    code: `// Other imports...
import { SolanaProvider } from "@/components/solana-provider";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  //...
    <body >
      <SolanaProvider>{children}</SolanaProvider>
    </body>
  //...
}
`,
  },
]

export const codeUpdatePage = [
  {
    language: 'tsx',
    filename: 'app/page.tsx',
    code: `'use client'
import { ClusterDropdown } from "@/components/cluster-dropdown";
import { WalletDropdown } from "@/components/wallet-dropdown";
import { useSolana } from "@/hooks/use-solana";

export default function Home() {
  const { account } = useSolana()
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 ">
        <div className='flex gap-[32px] justify-center'>
          <WalletDropdown />
          <ClusterDropdown />
        </div>
          {account ? \`Connected to $\{account.address}\` : null}
      </main>
    </div>
  );
}
`,
  },
]


export function InstallationCodeBlock({ code }: {
  code: { language: string; filename: string; code: string }[];
}) {
  return <CodeBlock data={code} defaultValue={code[0].language}>
    <CodeBlockHeader>
      <CodeBlockFiles>
        {(item) => (
          <CodeBlockFilename key={item.language} value={item.language}>
            {item.filename}
          </CodeBlockFilename>
        )}
      </CodeBlockFiles>
      <CodeBlockSelect>
        <CodeBlockSelectContent>
          {(item) => (
            <CodeBlockSelectItem key={item.language} value={item.language}>
              {item.language}
            </CodeBlockSelectItem>
          )}
        </CodeBlockSelectContent>
      </CodeBlockSelect>
      <CodeBlockCopyButton
        onCopy={() => console.log('Copied code to clipboard')}
        onError={() => console.error('Failed to copy code to clipboard')}
      />
    </CodeBlockHeader>
    <CodeBlockBody>
      {(item) => (
        <CodeBlockItem key={item.language} value={item.language}>
          <CodeBlockContent language={item.language as BundledLanguage} themes={{
            dark: 'github-dark',
            light: 'github-light',
          }}>
            {item.code}
          </CodeBlockContent>
        </CodeBlockItem>
      )}
    </CodeBlockBody>
  </CodeBlock>;
}

