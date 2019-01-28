export function detectPathFormat(pathString: string) {
  if (pathString.startsWith('\\\\')) return 'unc'
}
