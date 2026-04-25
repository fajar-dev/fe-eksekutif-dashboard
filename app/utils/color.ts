export function colorFromName(name: string): string {
  let hash = 5381
  for (let i = 0; i < name.length; i++) {
    hash = ((hash << 5) + hash) ^ name.charCodeAt(i)
    hash |= 0
  }
  const h = Math.abs(hash) % 360
  const s = 72 + (Math.abs(hash >> 8) % 20)
  const l = 52 + (Math.abs(hash >> 16) % 10)
  return `hsl(${h}, ${s}%, ${l}%)`
}
