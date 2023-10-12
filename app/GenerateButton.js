'use client';
// This help us to reload the page. mesela click buttona bastiginda onu her defasinda yeniliyor.
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import style from './GenerateButton.module.scss';

export default function GenerateButton() {
  const [color, setColor] = useState();
  const router = useRouter();
  console.log('hello client');
  return (
    <div>
      <button
        className={style.generateButton}
        style={{ backgroundColor: color }}
        onClick={() => {
          setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
          router.refresh();
        }}
      >
        Generate
      </button>
    </div>
  );
}
