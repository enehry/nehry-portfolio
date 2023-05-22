import type { Document } from "@contentful/rich-text-types";
import { Asset } from "contentful";

export interface Navdata {
  title: string;
  link: string;
  // vue component
  icon: any;
}

export interface Project {
  title: string;
  description: Document;
  image: Asset;
  link: string;
  tags: string[];
  github?: string;
  order: number;
}