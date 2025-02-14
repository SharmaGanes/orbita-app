import { docs } from "../source.config";
import { loader } from "fumadocs-core/source";

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <ImageZoom {...props} />
  ),
});
