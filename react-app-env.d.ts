/// <reference types="react-scripts" />

declare module "*.module.less" {
    const classes: Record<string, string>;
    export default classes;
  }
  declare module "*.less" {
    const classes: Record<string, string>;
    export default classes;
  }
  