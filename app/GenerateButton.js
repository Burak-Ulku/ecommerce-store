'use client';
// This help us to reload the page. mesela click buttona bastiginda onu her defasinda yeniliyor.
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import style from './GenerateButton.module.scss';

export default function GenerateButton() {
  const [color, setColor] = useState();
  const router = useRouter();
  const allCookies = document.cookie;
  const cookieValue = document.cookie

    .split('; ')
    .find((row) => row.startsWith('cookieValue='))
    ?.split('=')[1];
  console.log(allCookies);
  console.log(cookieValue);
  useEffect(() => {
    const buttonColor = document.cookie

      .split('; ')
      .find((row) => row.startsWith('cookieValue='))
      ?.split('=')[1];
    setColor(buttonColor);
  }, []);

  return (
    <div>
      <button
        className={style.generateButton}
        style={{ backgroundColor: color }}
        onClick={() => {
          const newColor = `#${Math.floor(Math.random() * 16777215).toString(
            16,
          )}`;
          document.cookie = `buttonColor=${newColor}`;
          setColor(newColor);

          router.refresh();
        }}
      >
        Generate
      </button>
    </div>
  );
}
