export const Cookies = {
  set: (
    cookieName: string,
    cookieValue: string,
    cookieExpires: string,
    cookieHttpOnly: boolean
  ) => {
    const date = new Date(parseInt(cookieExpires));
    document.cookie = `${cookieName}=${cookieValue}; expires=${date.toUTCString()}; Secure; ${
      cookieHttpOnly ? "HttpOnly" : ""
    }`;
  },
  get: (cookieName: string) => {
    const cookies = document.cookie;
    console.log(cookies);
    if (cookies === undefined) {
      return "Cookie undefined";
    } else {
      const [, cookie] = cookies.split(`${cookieName}=`);
      if (cookie === undefined) {
        return "Cookie undefined";
      } else {
        return cookie;
      }
    }
  },
  delete: (cookieName: string) => {
    const cookies = document.cookie;
    if (cookies === undefined) {
      return "Cookie undefined";
    } else {
      const [, cookie] = cookies.split(`${cookieName}=`);
      if (cookie === undefined) {
        return "Cookie undefined";
      } else {
        console.log(cookie);
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      }
    }
  },
};
