import React, { useState } from 'react';

import { IOptions } from '../../types/types';

import { MdKeyboardArrowDown } from 'react-icons/md';

import {
  SelectContainer,
  SelectedLabel,
  Dropdown,
  DropdownItem,
} from './SelectComponent.ts';

interface ISelectProps {
  options: IOptions[];
  onChange: (value: IOptions['value']) => void;
  placeholder: string;
}

export const SelectComponent: React.FC<ISelectProps> = ({
  options,
  onChange,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<IOptions['value']>('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (value: IOptions['value']) => {
    setSelectedValue(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <SelectedLabel onClick={toggleDropdown} isOpen={isOpen}>
        {selectedValue ? (
          <p>
            {options.find((option) => option.value === selectedValue)?.label}
          </p>
        ) : (
          <p>{placeholder}</p>
        )}
        <div className="icon">
          <MdKeyboardArrowDown />
        </div>
      </SelectedLabel>
      {isOpen && (
        <Dropdown>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => onSelect(option.value)}>
              {option.label}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </SelectContainer>
  );
};
