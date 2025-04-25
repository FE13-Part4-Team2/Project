import { create } from 'zustand';
import { ReactNode } from 'react';

interface ModalProps {
  variant?: 'oneButton' | 'twoButton' | 'danger';
  title?: string;
  description?: string;
  onSubmit?: () => void;
}

interface ModalState {
  props: ModalProps;
  content?: ReactNode | null;
  openModal: (props: ModalProps, content?: ReactNode) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  props: {},
  content: null,
  openModal: (props, content) => set({ props, content }),
  closeModal: () => set({ props: {}, content: null }),
}));
