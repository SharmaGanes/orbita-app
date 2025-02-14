import React from "react";
import { docs } from "../source.config";
import { loader } from "fumadocs-core/source";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <ImageZoom {...props} />
  ),
});
