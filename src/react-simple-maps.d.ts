declare module "react-simple-maps" {
  import * as React from "react";

  export interface GeographyType {
    rsmKey: string;
    properties: {
      name?: string;
      [key: string]: any;
    };
  }

  export const ComposableMap: React.FC<any>;
  export const Geographies: React.FC<any>;
  export const Geography: React.FC<any>;
}
