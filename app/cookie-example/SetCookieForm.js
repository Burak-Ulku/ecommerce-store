'use client';
import { useState } from 'react';
import { createCookie } from './actions';

export default function SetCookiePage() {
  const [cookieValue, setCookieValue] = useState('');
  return (
    <form>
      <input
        value={cookieValue}
        onChange={(event) => setCookieValue(event.currentTarget.value)}
      />
      <button formAction={async () => await createCookie(cookieValue)}>
        Set Cookie
      </button>
    </form>
  );
}
