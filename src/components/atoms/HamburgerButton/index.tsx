import styles from './styles.module.scss';
import { useState } from 'react';

export type Props = {
  isOpen: boolean;
  onClick: (isOpen: boolean) => void;
  className?: string;
};

const HamburgerButton = (props: Props) => {
  const [isOpen, setOpen] = useState(props.isOpen);
  // レンダー中に前回のprops.isOpen値と比較して状態を調整する（Reactが推奨するパターン）
  // https://react.dev/reference/react/useState#storing-information-from-previous-renders
  const [prevPropsIsOpen, setPrevPropsIsOpen] = useState(props.isOpen);
  if (props.isOpen !== prevPropsIsOpen) {
    setPrevPropsIsOpen(props.isOpen);
    setOpen(props.isOpen);
  }

  const handleClick = () => {
    const open = !isOpen;
    setOpen(open);
    props.onClick(open);
  };

  return (
    <div
      className={`${styles.menuBtn} ${isOpen ? styles.open : ''} ${isOpen ? 'open' : ''} ${props.className}`}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerButton;
