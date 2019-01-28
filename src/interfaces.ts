
export type PathEntry = {
  /**
   * Name of the server. Empty string if not provided.
   */
  servername: string,
  /**
   * The root of the path such as '/', 'c:', or '/Volumes/mydrive'.
   */
  root: string,
  /**
   * The full directory path such as '/home/user/dir' or 'c:\path\dir'
   */
  dir: string,
  /**
   * The file name including extension (if any) such as 'index.html'
   */
  base: string,
  /**
   * The file name without extension (if any) such as 'index'
   */
  name: string,
  /**
   * The file extension (if any) such as '.html'
   */
  ext: string
}
