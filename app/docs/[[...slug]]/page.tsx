import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            ImageZoom,
            img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
              const { width, height, ...rest } = props;

              // Convert string-based width/height to numbers, or `undefined` if invalid
              const numericWidth =
                typeof width === "string"
                  ? parseInt(width, 10) || undefined
                  : width;
              const numericHeight =
                typeof height === "string"
                  ? parseInt(height, 10) || undefined
                  : height;

              return (
                <ImageZoom
                  // Spread other image props (e.g. className, style, etc.)
                  {...rest}
                  // Cast src to string to silence the "string | undefined" type error
                  src={props.src as string}
                  // Provide a fallback alt
                  alt={props.alt || "Documentation image"}
                  // Ensure width/height are numbers (or undefined)
                  width={numericWidth}
                  height={numericHeight}
                />
              );
            },
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
