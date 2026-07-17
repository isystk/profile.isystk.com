'use client';

import { useEffect, useRef, useState } from 'react';
import { animate } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

type Props = {
  value: number;
  duration?: number;
  className?: string;
};

const CountUp = ({ value, duration = 1.6, className = '' }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);
  const hasAnimated = useRef(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: latest => setDisplay(Math.floor(latest)),
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
    </span>
  );
};

export default CountUp;
