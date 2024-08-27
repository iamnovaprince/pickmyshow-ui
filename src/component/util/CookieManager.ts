import Cookies from 'js-cookie';

export default class CookieManager {
    constructor(){}
    public  setCookie = (key: any, value: any) => {
        Cookies.set(key, value, { expires: 7 });
    }
    
    public  getCookie = (key: any) : any =>{
        return Cookies.get(key);
    }
    public  deleteCookie = (key: any) : void =>{
        Cookies.remove(key);
    }
}

