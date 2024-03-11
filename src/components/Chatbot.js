import React, { useEffect } from 'react'
 
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
        window.botpressWebChat.init({
            "composerPlaceholder": "Ask us anything!",
            // "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
            "botId": "bd1cc78e-36ea-48bc-9397-00b525074155",
            "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
            "messagingUrl": "https://messaging.botpress.cloud",
            "clientId": "bd1cc78e-36ea-48bc-9397-00b525074155",
            "webhookId": "e9cb8cff-8290-4039-8556-eda7ddd0e047",
            "lazySocket": true,
            "themeName": "prism",
            "botName": "Goa Destination Weddiings",
            "avatarUrl": "https://i.ibb.co/ryxHKKM/Happy-Women-s-Day-Instagram-Post-2.png",
            "stylesheet": "https://webchat-styler-css.botpress.app/prod/6e72f92d-51bf-4e80-9753-d964a044a755/v67634/style.css",
            "frontendVersion": "v1",
            "useSessionStorage": true,
            "theme": "prism",
            "themeColor": "#2563eb"
        });
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot