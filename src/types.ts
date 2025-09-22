export type EmblaSlide = {
  title: string;
  subheader: string;
  paragraph: string;
  buttonText: string;
  link: string;
  image: string;
  background: string;
  image_background: string;
};
// Tell TypeScript about react-simple-maps
declare module "react-simple-maps";

// Define our own type for geographies
export interface GeographyType {
  rsmKey: string;
  properties: {
    name?: string;
    [key: string]: any;
  };
}
