import { create } from 'zustand';
import { ReactNode } from 'react';

interface ModalOptions {
  variant?: 'default' | 'danger' | 'taskForm';
  title?: string;
  description?: string;
  button?: {
    number: 1 | 2;
    text: string;
    onRequest: () => void;
  };
}

interface ModalState {
  options: ModalOptions;
  content?: ReactNode | null;
  isValid?: boolean;
  setIsValid?: (isValid: boolean) => void;
  openModal: (options: ModalOptions, content?: ReactNode) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  options: {},
  content: null,
  isValid: false,
  setIsValid: (isValid) => set({ isValid }),
  openModal: (options, content) => set({ options, content }),
  closeModal: () => set({ options: {}, content: null, isValid: false }),
}));
