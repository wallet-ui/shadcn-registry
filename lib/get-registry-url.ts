function env(key: string) {
  return process.env[key]
}

export function getRegistryBaseUrl() {
  const registryUrl = env('REGISTRY_URL')
  const vercelUrl = env('VERCEL_URL')

  return registryUrl ? registryUrl : vercelUrl ? `https://${vercelUrl}` : `http://localhost:3000`
}