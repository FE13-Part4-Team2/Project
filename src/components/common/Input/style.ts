// Input component style

export const InputBaseStyle = (isInvalid?: boolean) =>
  `flex items-center px-4 py-2 rounded-[12px] border
${isInvalid ? 'border-danger' : 'border-slate-50/10'} focus-within:border-green-800`;
