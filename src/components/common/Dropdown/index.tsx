'use client';

import { ReactNode, useState } from 'react';
import React from 'react';
import useClickOutside from '@/hooks/useClickOutside';
import DropDownItem from '@/components/common/Dropdown/DropDownItem';
import DropDownMenu from '@/components/common/Dropdown/DropDownMenu';
import DropDownTrigger from '@/components/common/Dropdown/DropDownTrigger';

interface DropDownChildProps {
  isOpen?: boolean;
  onClick?: (event: MouseEvent) => void;
  selectedValue?: string | null;
  children?: ReactNode;
}

interface DropDownProps {
  children: ReactNode;
  handleClose?: () => void;
  onSelect?: (value: string) => void;
}

const DropDown = ({ children, handleClose, onSelect }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  const handleItemClick = (value: string) => {
    setSelectedValue(value);
    if (onSelect) onSelect(value);
    close();
  };

  const dropDownRef = useClickOutside(() => {
    close();
    if (handleClose) handleClose();
  });

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement<DropDownChildProps>(child)) {
      if (child.type === DropDownItem) {
        const childValue = child.props.children;
        if (typeof childValue === 'string') {
          return React.cloneElement(child, {
            onClick: () => handleItemClick(childValue),
          });
        }

        return React.cloneElement(child, {});
      }
      return React.cloneElement(child, {
        isOpen,
        onClick: toggle,
        selectedValue,
      });
    }
    return child;
  });

  return (
    <div ref={dropDownRef} className="relative">
      {childrenWithProps}
    </div>
  );
};

DropDown.Item = DropDownItem;
DropDown.Menu = DropDownMenu;
DropDown.Trigger = DropDownTrigger;

export default DropDown;
