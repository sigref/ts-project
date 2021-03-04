declare module '*.txt' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const kv: any;
  export default kv;
}
