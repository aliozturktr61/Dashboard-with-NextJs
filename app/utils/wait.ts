/* bekletme veya geciktirmek için oluşturuyoruz 2sn gecikecek */
export const wait = async (ms: number = 2000) =>
  new Promise((resolve) => setTimeout(resolve, ms));
