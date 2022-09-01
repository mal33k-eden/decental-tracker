import { createContext, useEffect, useState } from "react";

const TrackerContext = createContext()

export const TrackerProvider = ({children})=>{
    const [lang, setLang] = useState('')
    const [device, setDevice]= useState('')
    const [browser, setBrowser]= useState('')
    const [dimensions, setDimensions]= useState('')
    const [IP, setIP] = useState()

    useEffect(()=>{
        getLang()

        let dev = getDevice()
        setDevice(dev)

        let browser = getBrowser()
        setBrowser(browser)
        
        var dimx = getDimensions()
        setDimensions(`${dimx.width} x ${dimx.height} pixels`)

        getIP()
    },[lang,device,browser,dimensions,IP])

    const getLang= ()=>{
        let lang = window.navigator.languages ? window.navigator.languages[0] : null;
        lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;

        let shortLang = lang;
        if (shortLang.indexOf('-') !== -1)
            shortLang = shortLang.split('-')[0];

        if (shortLang.indexOf('_') !== -1)
            shortLang = shortLang.split('_')[0];

        setLang(`${lang} + (${shortLang})`)
    }

    const getDevice = ()=>{
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return "Tablet";
        }
        if (
            /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
            )
        ) {
            return "Mobile";
        }
        return "Desktop";
    }
    const getBrowser = ()=>{
        let userAgent = navigator.userAgent;
         let browserName;
         
        if(userAgent.match(/chrome|chromium|crios/i)){
            browserName = "Chrome";
        }else if(userAgent.match(/firefox|fxios/i)){
            browserName = "Firefox";
        }  else if(userAgent.match(/safari/i)){
            browserName = "Safari";
        }else if(userAgent.match(/opr\//i)){
            browserName = "Opera";
        } else if(userAgent.match(/edg/i)){
            browserName = "Edge";
        }else{
            browserName="No browser detection";
        }
        return browserName
    }

    const getDimensions = ()=>{
        return {
            width: (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
            height: (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)
          };
    }

    const getIP = async()=>{
        const ip = await fetch('http://localhost:3001/get-ip').then((value)=>value.json())
        setIP(ip)
    }


    return (
        <TrackerContext.Provider value={{lang,device,browser,dimensions,IP}}>
            {children}
        </TrackerContext.Provider>
    )

}

export default TrackerContext