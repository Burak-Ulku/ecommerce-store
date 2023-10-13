import { getCookie } from '../../util/cookies';
import SetCookieForm from './SetCookieForm';

export default function SetCookiePage() {
  const getCookieValue = getCookie('testCookie');
  console.log(getCookieValue);
  // const parsedCookie=JSON.parse(getCookieValue)
  return (
    <>
      <div>Cookie value:{getCookieValue}</div>
      <SetCookieForm />
    </>
  );
}
