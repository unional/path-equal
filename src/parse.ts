// import { detectPathFormat } from './detectPathFormat';
// import { PathEntry } from './interfaces';

// export function parse(pathString: string): PathEntry {
//   const format = detectPathFormat(pathString)

//   return new PathEntryImpl(pathString)
// }

// class PathEntryImpl implements PathEntry {
//   servername: string
//   root: string
//   dir: string
//   base: string
//   name: string
//   ext: string
//   constructor(pathString: string) {
//     const { servername, serverlessPath } = extractServername(pathString)
//     this.servername = servername
//     this.root = extractRoot(serverlessPath)
//     this.dir = ''
//     this.base = ''
//     this.name = ''
//     this.ext = ''
//   }
// }


// function extractServername(pathString: string) {
//   if (!pathString.startsWith('\\\\')) return { servername: '', serverlessPath: pathString }

//   const matches = /^\\\\(\w*)\\(.*)/.exec(pathString)
//   return { servername: matches![0], serverlessPath: matches![1] }
// }

// function extractRoot(pathString: string) {

// }
