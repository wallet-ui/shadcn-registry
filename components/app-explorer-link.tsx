import { getExplorerLink, GetExplorerLinkArgs } from 'gill'
import { ArrowUpRightFromSquare } from 'lucide-react'
import { useSolana } from "@/registry/wallet-ui/blocks/solana-provider/use-solana";
import { getSolanaClusterMoniker } from "@wallet-ui/react-gill";

export function AppExplorerLink({
  className,
  label = '',
  ...link
}: GetExplorerLinkArgs & {
  className?: string
  label: string
}) {
  const { cluster } = useSolana()
  return (
    <a
      href={getExplorerLink({ ...link, cluster: getSolanaClusterMoniker(cluster.id) })}
      target="_blank"
      rel="noopener noreferrer"
      className={className ? className : `link font-mono inline-flex gap-1`}
    >
      {label}
      <ArrowUpRightFromSquare size={12} />
    </a>
  )
}
