export function detectPathFormat(pathString: string) {
  if (pathString.startsWith('\\\\')) return 'unc'

  if (/^\w\:/.test(pathString)) return 'windows'
}
