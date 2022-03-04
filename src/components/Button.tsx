import React, { FC } from 'react';
import { ButtonProps } from 'src/interfaces/ButtonProps';
import './Button.scss';

export const Button: FC<ButtonProps> = ({ text }) => {
  return <button className="xu-button">{text}</button>;
};
