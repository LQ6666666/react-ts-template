/** 推迟 n 秒 */
export const delay = (second: number) =>
  new Promise<boolean>(resolve => {
    setTimeout(resolve, second * 1000, true);
  });

/** 当前是否开发环境 */
export const isDevelopment = process.env.NODE_ENV === "development";

/** 当前是否生产环境 */
export const isProduction = process.env.NODE_ENV === "production";
