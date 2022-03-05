import React, { FC } from 'react';
import { ButtonProps } from '../../interfaces/Button.interface';
import styles from './Button.scss';

export const Button: FC<ButtonProps> = ({ text }) => {
  return <button className={styles.xuButton}>{text}</button>;
};
