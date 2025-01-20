import React from 'react';
import {Button, ButtonProps} from 'react-native-paper';

type BtnProps = {
  type?: 'default' | 'cancel' | 'delete' | 'text';
} & ButtonProps;
const MyButton = ({type = 'default', ...props}: BtnProps) => {
  const getClass = () => {
    switch (type) {
      case 'default':
        return '!bg-green-300';

      case 'cancel':
        return '!bg-red-400';

      case 'delete':
        return '!bg-orange-200';
    }
  };
  return <Button  {...props} className={`${getClass()} ${props?.className}`} />;
};

export default MyButton;
