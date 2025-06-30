import { create } from 'zustand';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  department: string;
  rating: number;
};

type Store = {
  users: User[];
  bookmarks: User[];
  setUsers: (u: User[]) => void;
  addBookmark: (u: User) => void;
  removeBookmark: (id: number) => void;
};

export const useUserStore = create<Store>((set) => ({
  users: [],
  bookmarks: [],
  setUsers: (users) => set({ users }),
  addBookmark: (user) =>
    set((s) =>
      s.bookmarks.some((u) => u.id === user.id)
        ? s
        : { bookmarks: [...s.bookmarks, user] }
    ),
  removeBookmark: (id) =>
    set((s) => ({ bookmarks: s.bookmarks.filter((u) => u.id !== id) })),
}));
