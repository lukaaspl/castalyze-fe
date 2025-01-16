import rehypeMermaid from "rehype-mermaid";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import parse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export const markdownProcessor = unified()
  .use(parse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeMermaid, { colorScheme: "dark" })
  .use(rehypeStringify);
