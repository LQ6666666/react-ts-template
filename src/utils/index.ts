export const delay = (second: number) =>
  new Promise<boolean>((resolve) => {
    setTimeout(resolve, second * 1000, true);
  });
