function env(key: string) {
  return process.env[key]
}

export function getRegistryBaseUrl() {
  console.log(Object.keys(process.env).sort().map(k => ` [${k}] ${process.env[k as keyof typeof process.env]}`))
  const registryUrl = env('REGISTRY_URL')
  const vercelUrl = env('VERCEL_URL')

  return vercelUrl ? `https://${vercelUrl}` : registryUrl ?? `http://localhost:3000`
}