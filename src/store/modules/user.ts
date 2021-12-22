import { defineStore } from 'pinia';

export interface IUserStoreState {
  isLogin: boolean;
  permission: Permission;
}

export const useUserStore = defineStore('user', {
  state: (): IUserStoreState => {
    return {
      isLogin: false,
      permission: [],
    };
  },
  actions: {
    async getUserInfo() {
      try {
        // mock
        const res = await Promise.resolve({});
        this.isLogin = true;
        this.permission = ['admin', 'common'];
      } catch (e) {
        console.warn(e);
      }
    },
  },
});

export const setupUser = async () => {
  const store = useUserStore();
  await store.getUserInfo();
};
