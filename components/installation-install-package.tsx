'use client'
import { useState } from "react";
import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger
} from "@/components/ui/shadcn-io/snippet";

function getCommands(packageName: string) {
  return [
    {
      label: 'pnpm',
      code: `pnpx shadcn@latest add ${packageName}`,
    },
    {
      label: 'bun',
      code: `bunx shadcn@latest add ${packageName}`,
    },
    {
      label: 'npm',
      code: `npx shadcn@latest add ${packageName}`,
    },
    {
      label: 'yarn',
      code: `yarn dlx shadcn@latest add ${packageName}`,
    },
  ]
}

export function InstallationInstallPackage({ packageName }: { packageName: string }) {
  const commands = getCommands(packageName)
  const [value, setValue] = useState(commands[0].label);
  const activeCommand = commands.find((command) => command.label === value);
  return (
    <Snippet onValueChange={setValue} value={value}>
      <SnippetHeader>
        <SnippetTabsList>
          {commands.map((command) => (
            <SnippetTabsTrigger key={command.label} value={command.label}>
              {command.label}
            </SnippetTabsTrigger>
          ))}
        </SnippetTabsList>
        {activeCommand && (
          <SnippetCopyButton
            onCopy={() =>
              console.log(`Copied "${activeCommand.code}" to clipboard`)
            }
            onError={() =>
              console.error(
                `Failed to copy "${activeCommand.code}" to clipboard`
              )
            }
            value={activeCommand.code}
          />
        )}
      </SnippetHeader>
      {commands.map((command) => (
        <SnippetTabsContent key={command.label} value={command.label}>
          {command.code}
        </SnippetTabsContent>
      ))}
    </Snippet>
  );
}