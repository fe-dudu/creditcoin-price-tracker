import { storage as wxtStorage } from '#imports';

export const storage = {
  async getItem(key: string) {
    const val = await wxtStorage.getItem<string>(`local:${key}`);
    return val;
  },
  async setItem(key: string, value: string) {
    await wxtStorage.setItem(`local:${key}`, value);
  },
  async removeItem(key: string) {
    await wxtStorage.removeItem(`local:${key}`);
  },
};
