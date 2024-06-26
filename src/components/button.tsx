import React, { forwardRef, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type onClickHandler = (event: React.MouseEvent<HTMLElement>) => any;
type Props = {
  children: string | React.ReactNode;
  onClick?: onClickHandler;
  onMouseEnter?: onClickHandler;
  onMouseLeave?: onClickHandler;
  color?: keyof typeof btnColor;
  size?: keyof typeof btnSize;
  style?: object;
  disabled?: boolean;
  className?: string;
};

const Button = forwardRef((props: Props, ref: any) => {
  const { children, onClick, onMouseEnter, onMouseLeave, color = 'primary', size, style, disabled, className } = props;
  const [isLoading, setIsLoading] = useState(false);
  const _isMounted = useRef(true);
  useEffect(() => {
    _isMounted.current = true;
    return () => {
      _isMounted.current = false;
    };
  }, []);

  const handleClick = async (e: any) => {
    e.preventDefault();
    if (!_isMounted.current) {
      return;
    }
    setIsLoading(true);
    try {
      typeof onClick === 'function' && (await onClick(e));
    } catch (err) {
      throw e;
    } finally {
      if (_isMounted.current) {
        setIsLoading(false);
      }
    }
  };

  const handleMouseEnter = (e: any) => {
    typeof onMouseEnter === 'function' && onMouseEnter(e);
  };

  const handleMouseLeave = (e: any) => {
    typeof onMouseLeave === 'function' && onMouseLeave(e);
  };

  return (
    <button
      className={twMerge(
        'border-transparent border rounded-md px-4 transition duration-500 ease select-none',
        _getBtnSizeClassName(size),
        disabled ? 'bg-gray-300 hover:bg-gray-300 text-gray-600 border-transparent' : _getBtnColorClassName(color),
        isLoading && '_loading',
        className,
      )}
      style={style}
      ref={ref}
      color={color}
      disabled={disabled || isLoading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
    </button>
  );
});

const btnColor = {
  primary: 'border-primary-500 bg-primary-500 hover:bg-primary-600 text-black',
  secondary: 'border border-1 border-indigo-600 hover:border-indigo-700 text-indigo-600',
  third: 'rounded-full border border-1 border-black text-black font-bold',
};

const btnSize = {
  lg: 'py-3 px-6 text-lg',
  md: 'py-2 px-5',
  sm: 'py-2 px-4 text-sm',
};

const _getBtnColorClassName = (color: string | undefined) => {
  return btnColor[color as keyof typeof btnColor] || color;
};

const _getBtnSizeClassName = (size = 'md') => {
  return btnSize[size as keyof typeof btnSize] || size;
};

export default Button;
