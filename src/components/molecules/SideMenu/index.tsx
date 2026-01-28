'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

type SideMenuItem = {
  id: string;
  title: string;
  tagName: string;
};

type Props = {
  selector: string;
  className?: string;
};

const SideMenu = ({ selector, className }: Props) => {
  const [items, setItems] = useState<SideMenuItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const container = document.querySelector(selector);
    if (!container) return;

    const headings = Array.from(container.querySelectorAll('h2, h3')) as HTMLHeadingElement[];

    const menuItems = headings.map(el => {
      if (!el.id) {
        el.id = `heading-${Math.random().toString(36).substring(2, 9)}`;
      }
      return {
        id: el.id,
        title: el.innerText,
        tagName: el.tagName.toLowerCase(),
      };
    });

    setItems(menuItems);
  }, [selector]);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let currentId: string | null = null;

      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          currentId = item.id;
        }
      }

      setSelectedId(currentId);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${className ?? ''} ${styles.sideMenu}`}>
      <p className={styles.title}>目次</p>
      <ul>
        {items.map(({ id, title, tagName }) => (
          <li
            key={id}
            className={`${selectedId === id ? styles.active : ''} ${
              tagName === 'h3' ? styles.sub : ''
            }`}
          >
            <button onClick={() => handleClick(id)}>{title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
