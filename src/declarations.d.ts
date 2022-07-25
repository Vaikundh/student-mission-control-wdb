declare module '*.glb' {
  const value: string; // Add better type definitions here if desired.
  export default value;
}

declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
  export const frontMatter: any;
}
