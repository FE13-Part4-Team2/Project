import { create } from 'zustand';
import { ReactNode } from 'react';

type ModalState = {
  content: ReactNode | null;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  content: null,
  openModal: (content) => set({ content }),
  closeModal: () => set({ content: null }),
}));
