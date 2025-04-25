import { create } from 'zustand';
import { ReactNode } from 'react';

interface ModalOptions {
  variant?: 'oneButton' | 'twoButton' | 'danger';
  title?: string;
  description?: string;
  onSubmit?: () => void;
}

interface ModalState {
  options: ModalOptions;
  content?: ReactNode | null;
  openModal: (options: ModalOptions, content?: ReactNode) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  options: {},
  content: null,
  openModal: (options, content) => set({ options, content }),
  closeModal: () => set({ options: {}, content: null }),
}));
