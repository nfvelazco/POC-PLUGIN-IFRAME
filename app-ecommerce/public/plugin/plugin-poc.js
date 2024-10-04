async function loadScript(url) {
return new Promise((resolve, reject) => {
   const script = document.createElement('script');
   script.src = url;
   script.onload = resolve;
   script.onerror = reject;
   document.head.appendChild(script);
});
}

(async () => {
try {
   const URLs = [
      { 
         url: "https://muyestetica.egoforum.us/shoponline/protectores-solares/faciales/crema-clarificante-de-manchas-c-acido-mandelico-kojico-piel-normal",
         parametro: 'crema-clarificante-de-manchas-c-acido-mandelico-kojico-piel-normal'
      },
      { 
         url: 'https://muyestetica.egoforum.us/shoponline/facial/cuidado-facial/serum-geles-y-cremas-faciales/crema-hidratante-facial-prevencion-de-arrugas-hydra10',
         parametro: 'crema-hidratante-facial-prevencion-de-arrugas-hydra10'
      },
      { 
         url: 'https://muyestetica.egoforum.us/shoponline/facial/cuidado-facial/serum-geles-y-cremas-faciales/crema-nutritiva-con-colageno-elastina-y-vitamina-e',
         parametro: 'crema-nutritiva-con-colageno-elastina-y-vitamina-e'
      },
      { 
         url: 'https://muyestetica.egoforum.us/shoponline/facial/cuidado-facial/ojos-y-parpados/promoter-liposomas-spray-crecimiento-cejas-pestanas',
         parametro: 'promoter-liposomas-spray-crecimiento-cejas-pestanas'
      },
      { 
         url: 'https://muyestetica.egoforum.us/shoponline/capilar/accesorios-para-el-cabello/redecilla-de-pelo',
         parametro: 'redecilla-de-pelo'
      },
      {
         url: 'http://127.0.0.1:5501/app-ecommerce/public/ejemplo.html',
         parametro: 'redecilla-de-pelo'
      }
   ];
     
   await loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
   console.log('El script se ha cargado correctamente.');
   const urlConBarra = (url) => `${url}/`
   
   $(document).ready(function() {
      setInterval(function() {
         const currentUrl = window.location.href;
         //console.log(currentUrl)
         const find_url = URLs.filter(x => x.url == currentUrl || urlConBarra(x.url) == currentUrl);
            
         if(find_url.length>0){
            // Codifica la URL para usarla como parámetro de consulta
            //const encodedUrl = encodeURIComponent(currentUrl);
            const hostIframe = 'https://ia.snooparg.online/';
            // Ahora puedes usar 'encodedUrl' en tu lógica, por ejemplo:
            const queryParam = `product_id=${find_url[0].parametro}`;
               
            if($("#iawindow").length === 0) {

               $(document).on('click', '#iabotBtn', function() {
                  $('#iawindow').toggleClass('open');
                  $('#iawindowLoader').toggleClass('open');
                  $('#iabot').toggleClass('opened');
               });

               console.log('append Iframe')
               const style = `
                  <style id="iframe-style">
                  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap');

                  :root {
                     --body-color: #2e2e2e;
                     --body-font-family: "Noto Sans", sans-serif;
                     --body-font-family-title: "Noto Serif", serif;
                     --primary: #d9261c;
                     --primary-rgb: 217, 38, 28;
                     --primary-light: #ffccce;
                     --primary-lighter: #ffeaed;
                     --secondary: #42B5AE;
                     --secondary-rgb: 66, 181, 174;
                     --secondary: #42b5ae;
                     --secondary-light: #b0dfdc;
                     --secondary-lighter: #dff2f1;
                     --secondary-dark: #01a59b;
                     --gray-light: #9e9e9e; 
                     --gray-lighter: #f0f0f0; 
                     --font-size-base: 1rem; 
                     --font-size-lg: 1.125rem; 
                     --font-size-sm: .875rem; 
                     --font-size-xs: .75rem; 
                     --line-height-base: 1.5;
                     --border-radius-xxl: 1.5rem;
                     --blue: #4E90CB;
                     --blue-light: #E6F3F9;
                     --blue-light-rgb: 230, 243, 249;
                     --yellow: #FEFBF7;
                     --white: #FFF;
                  }

                  /* Solo para Muy Estética  */
                  .joinchat__button {
                     display: none;
                  }

                  .iawindow,
                  .iawindow-loader {
                     position: fixed;
                     right: 16px;
                     z-index: 999999;
                     height: 560px;
                     width: 400px;
                     border-radius: 24px;
                  }

                  .iawindow {
                     bottom: -560px;
                     z-index: 999999;
                     cursor: default;
                     background-color: rgba(255, 255, 255, 0.7);
                     backdrop-filter: blur(4px);
                     border: 1px solid #ddd;
                     box-shadow: 0 0 16px -4px rgba(0, 0, 0, .2);
                     opacity: 0;
                     transition: bottom .7s ease, opacity .7s ease;
                     overflow: hidden;
                  }

                  .iawindow iframe {
                     width: 100%;
                     height: calc(100% - 61px - 24px);
                     border: 0;
                     display: block;
                  }

                  .iawindow .iawindow-header {
                     display: flex;
                     align-items: center;
                     height: 44px;
                     gap: 1rem;
                     padding: .5rem 1rem;
                     border-bottom: 1px solid var(--gray-lighter);
                  }

                  .iawindow .iawindow-header .iawindow-icon {
                     filter: drop-shadow(0 .125rem .125rem rgba(var(--secondary-rgb), .7));
                  }

                  .iawindow .iawindow-header .iawindow-icon svg {
                     height: 42px;
                     width: auto;
                     display: block;
                  }

                  .iawindow .iawindow-header h3 {
                     color: var(--body-color);
                     font-family: var(--body-font-family-title);
                     font-size: var(--font-size-lg);
                     font-weight: 700;
                  }

                  .iawindow .iawindow-copy {
                     display: flex;
                     align-items: center;
                     justify-content: center;
                     height: 24px;
                     background-color: var(--white);
                  }

                  .iawindow .iawindow-copy > div {
                     color: var(--gray-light);
                     font-size: var(--font-size-xs);
                     text-align: center;
                  }
                  .iawindow.open {
                     bottom: 80px;
                     opacity: 1;
                  }

                  .iawindow-loader {
                     bottom: 80px;
                     z-index: 9999999;
                     display: none;
                     align-items: center;
                     justify-content: center;
                     color: var(--primary);
                     font-size: 14px;
                     font-weight: 600;
                     letter-spacing: 2px;
                     text-transform: uppercase;
                  }

                  .iawindow-loader.open {
                     display: flex;
                  }

                  .iabot {
                     position: fixed;
                     bottom: 16px;
                     right: 16px;
                     z-index: 9999999;
                     display: flex;
                     flex-wrap: wrap;
                     align-items: center;
                  }

                  .iabot .iabot-btn {
                     padding: 0;
                     background: transparent;
                     border: none;
                     cursor: pointer;
                  }

                  .iabot .iabot-btn > div {
                     display: flex;
                     align-items: center;
                     justify-content: center;
                  }

                  .iabot .iabot-btn .iabot-icon {
                     width: 60px;
                     height: 60px;
                     filter: drop-shadow(0 .125rem .125rem rgba(var(--secondary-rgb), .7));
                  }

                  .iabot .iabot-btn .iabot-close {
                     width: 46px;
                     height: 46px;
                     display: none;
                     background-color: var(--white);
                     border: 1px solid var(--secondary-light);
                     border-radius: 50%;
                     box-shadow: 0 0 .4rem rgba(var(--secondary-rgb), .4);
                  }

                  .iabot.opened .iabot-btn .iabot-icon {
                     display: none;
                  }

                  .iabot.opened .iabot-btn .iabot-close {
                     display: flex;
                  }

                  .iabot .iabot-bubble {
                     background-color: var(--primary-lighter);
                     border: 1px solid var(--primary-light);
                     border-radius: var(--border-radius-xxl) 0 var(--border-radius-xxl) var(--border-radius-xxl);
                     padding: .5rem 1rem;
                     margin: .5rem 1rem .5rem 0;
                     box-shadow: 0 .25rem .25rem -.2rem rgba(var(--primary-rgb), .4);
                     color: var(--body-color);
                     font-family: var(--body-font-family);
                     font-size: var(--font-size-sm);
                     font-weight: 500;
                     transform: translateY(76px);
                  }

                  .iabot:not(.opened) .iabot-bubble {
                     animation: bubbleFadeInOut 14s infinite;
                  }

                  @keyframes bubbleFadeInOut {
                     0%, 50% {
                        transform: translateY(76px);
                     }
                     55% {
                        transform: translateY(0);
                     }
                     90% {
                        transform: translateY(0);
                     }
                     95%, 100% {
                        transform: translateY(76px);
                     }
                  }

                  @media screen and (max-width: 767px) {
                     .iawindow,
                     .iawindow-loader {
                        width: calc(100% - 2rem);
                        height: calc(100vh - 160px);
                     }

                     .iawindow {
                        bottom: -100%;
                     }
                  }

                 

                 

                  </style>
               `;

               const linkStyle = '<link rel="stylesheet" href="./plugin/styles.css" />';

               $('head').append(style);

               $(document.body).append(`<div id="iabot" class="iabot">
                                          <div class="iabot-bubble">¡Hola! ¿en qué puedo ayudarte?</div> 
                                          <button type="button" id="iabotBtn" class="iabot-btn">
                                                <div class="iabot-icon">
                                                   <svg width="54" height="60" viewBox="0 0 54 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M4 44H50V52C50 55.3137 47.3137 58 44 58H10C6.68629 58 4 55.3137 4 52V44Z" fill="#FEFBF7"/>
                                                   <rect x="2" y="11" width="49" height="26" rx="6" fill="#FEFBF7"/>
                                                   <path d="M2.85848 36.6795C3.76045 37.585 4.83224 38.3037 6.01244 38.7943C7.19263 39.2849 8.45804 39.5378 9.73615 39.5385H44.1763C46.7565 39.5321 49.2292 38.5043 51.0537 36.6798C52.8782 34.8553 53.906 32.3826 53.9124 29.8023V21.9675V1.375C53.9051 1.00782 53.754 0.658155 53.4918 0.401077C53.2295 0.143999 52.8769 0 52.5096 0C52.1423 0 51.7897 0.143999 51.5274 0.401077C51.2652 0.658155 51.1141 1.00782 51.1068 1.375V12.1723C51.0888 12.1538 51.0719 12.1347 51.0539 12.1161C50.152 11.2106 49.0802 10.4921 47.8999 10.0017C46.7197 9.51123 45.4543 9.25858 44.1763 9.25818H9.73615C8.45806 9.25865 7.19263 9.5114 6.01241 10.0019C4.83219 10.4924 3.7604 11.2111 2.85848 12.1167C2.84049 12.1352 2.82361 12.1543 2.80562 12.1729V1.375C2.79827 1.00782 2.64724 0.658155 2.38496 0.401077C2.12269 0.143999 1.77007 0 1.40281 0C1.03555 0 0.682932 0.143999 0.420655 0.401077C0.158378 0.658155 0.00735215 1.00782 0 1.375V29.8023C0.000549075 31.0803 0.253327 32.3457 0.743844 33.5258C1.23436 34.7059 1.95297 35.7776 2.85848 36.6795ZM9.73615 12.061H44.1763C46.0124 12.0674 47.7715 12.7996 49.0698 14.0979C50.3682 15.3963 51.1004 17.1554 51.1068 18.9915V29.8023C51.1003 31.6384 50.368 33.3974 49.0697 34.6958C47.7714 35.9941 46.0123 36.7264 44.1763 36.7329H9.73615C7.90007 36.7264 6.14105 35.9941 4.84273 34.6958C3.54441 33.3974 2.81214 31.6384 2.80562 29.8023V21.9675V18.987C2.81318 17.1517 3.54593 15.3937 4.84415 14.0963C6.14237 12.799 7.9008 12.0674 9.73615 12.061Z" fill="#D9261C"/>
                                                   <path d="M3.5 55V44H13V51L8.5 59L3.5 55Z" fill="#F54E41"/>
                                                   <path d="M51 55V44H41.5V51L46 59L51 55Z" fill="#F54E41"/>
                                                   <path d="M12.2937 19.6512V24.6275C12.2834 24.7812 12.3048 24.9354 12.3565 25.0805C12.4082 25.2257 12.4892 25.3586 12.5944 25.4711C12.6996 25.5836 12.8268 25.6734 12.9681 25.7347C13.1095 25.796 13.2619 25.8277 13.4159 25.8277C13.57 25.8277 13.7224 25.796 13.8637 25.7347C14.005 25.6734 14.1322 25.5836 14.2375 25.4711C14.3427 25.3586 14.4236 25.2257 14.4754 25.0805C14.5271 24.9354 14.5484 24.7812 14.5381 24.6275V19.6512C14.5381 19.3223 14.6688 19.0069 14.9013 18.7744C15.1338 18.5418 15.4493 18.4112 15.7781 18.4112C16.107 18.4112 16.4224 18.5418 16.6549 18.7744C16.8875 19.0069 17.0181 19.3223 17.0181 19.6512V24.6275C17.0078 24.7812 17.0292 24.9354 17.0809 25.0805C17.1326 25.2257 17.2136 25.3586 17.3188 25.4711C17.424 25.5836 17.5512 25.6734 17.6925 25.7347C17.8339 25.796 17.9863 25.8277 18.1403 25.8277C18.2944 25.8277 18.4468 25.796 18.5881 25.7347C18.7294 25.6734 18.8566 25.5836 18.9618 25.4711C19.0671 25.3586 19.148 25.2257 19.1998 25.0805C19.2515 24.9354 19.2728 24.7812 19.2625 24.6275V19.6512C19.2301 18.7488 18.8488 17.8941 18.1989 17.2671C17.549 16.6402 16.6812 16.2898 15.7781 16.2898C14.8751 16.2898 14.0073 16.6402 13.3574 17.2671C12.7075 17.8941 12.3262 18.7488 12.2937 19.6512Z" fill="#00887C"/>
                                                   <path d="M35.7077 25.75C36.006 25.75 36.292 25.6315 36.503 25.4206C36.7139 25.2096 36.8324 24.9236 36.8324 24.6253V19.6489C36.8324 19.3201 36.963 19.0048 37.1955 18.7723C37.428 18.5398 37.7433 18.4092 38.0721 18.4092C38.4009 18.4092 38.7162 18.5398 38.9487 18.7723C39.1812 19.0048 39.3118 19.3201 39.3118 19.6489V24.6253C39.3015 24.779 39.3229 24.9332 39.3746 25.0783C39.4263 25.2234 39.5073 25.3563 39.6125 25.4688C39.7177 25.5814 39.8449 25.6711 39.9863 25.7324C40.1276 25.7937 40.28 25.8254 40.434 25.8254C40.5881 25.8254 40.7405 25.7937 40.8818 25.7324C41.0231 25.6711 41.1503 25.5814 41.2556 25.4688C41.3608 25.3563 41.4418 25.2234 41.4935 25.0783C41.5452 24.9332 41.5665 24.779 41.5562 24.6253V19.6489C41.5219 18.7479 41.1398 17.8951 40.4901 17.2698C39.8405 16.6444 38.9738 16.2951 38.0721 16.2951C37.1704 16.2951 36.3038 16.6444 35.6541 17.2698C35.0045 17.8951 34.6224 18.7479 34.588 19.6489V24.6253C34.588 24.9227 34.7058 25.208 34.9156 25.4188C35.1255 25.6295 35.4103 25.7486 35.7077 25.75Z" fill="#00887C"/>
                                                   <path d="M9.5438 60H44.8201C46.8291 59.9997 48.7556 59.2015 50.1761 57.781C51.5967 56.3605 52.3948 54.4339 52.3951 52.425V44.1127C52.3951 43.9283 52.3587 43.7456 52.2881 43.5752C52.2174 43.4049 52.1137 43.2501 51.9832 43.1198C51.8526 42.9895 51.6975 42.8863 51.527 42.816C51.3564 42.7457 51.1737 42.7098 50.9892 42.7102H3.37189C3.18766 42.7101 3.00522 42.7462 2.83499 42.8167C2.66476 42.8871 2.51009 42.9904 2.37982 43.1207C2.24956 43.2509 2.14625 43.4056 2.07582 43.5758C2.00539 43.7461 1.96921 43.9285 1.96936 44.1127V52.425C1.96951 54.4339 2.76756 56.3604 4.18799 57.781C5.60843 59.2015 7.53493 59.9997 9.5438 60ZM4.77385 45.5158H12.012V49.7836L8.54448 55.7092C8.4229 55.9175 8.35734 56.1537 8.35418 56.3949C8.35103 56.636 8.41039 56.8739 8.52649 57.0853C7.46278 56.8539 6.51034 56.2654 5.82761 55.4175C5.14488 54.5696 4.77301 53.5136 4.77385 52.425V45.5158ZM49.5884 52.425C49.5888 53.6122 49.146 54.7569 48.3467 55.6348C47.5475 56.5127 46.4493 57.0606 45.2672 57.1713C45.4077 56.9547 45.4853 56.7034 45.4916 56.4453C45.4978 56.1872 45.4324 55.9324 45.3026 55.7092L41.8334 49.7836V45.5158H49.5884V52.425ZM39.2213 50.8729L42.8828 57.1241C42.8974 57.1494 42.9171 57.1696 42.9334 57.1938H10.9148C10.9306 57.1696 10.9503 57.1494 10.9654 57.1241L14.6264 50.8729C14.7531 50.6581 14.8196 50.4131 14.8187 50.1637V45.5153H39.0289V50.1637C39.0281 50.4131 39.0945 50.6581 39.2213 50.8729Z" fill="#D9261C"/>
                                                   <path d="M21.3073 32.9898H32.6107C32.8962 32.9717 33.164 32.8456 33.3597 32.6371C33.5554 32.4286 33.6644 32.1533 33.6644 31.8673C33.6644 31.5814 33.5554 31.3061 33.3597 31.0976C33.164 30.8891 32.8962 30.763 32.6107 30.7449H21.3073C21.0219 30.763 20.7541 30.8891 20.5583 31.0976C20.3626 31.3061 20.2537 31.5814 20.2537 31.8673C20.2537 32.1533 20.3626 32.4286 20.5583 32.6371C20.7541 32.8456 21.0219 32.9717 21.3073 32.9898Z" fill="#42B5AE"/>
                                                   </svg>
                                                </div>
                                                <div class="iabot-close">
                                                   <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M18.4491 24.44H16.2306L9.23897 13.3476L2.18015 24.44H0.0625L8.12973 11.9694L0.768382 0.440002H2.95326L9.3062 10.5913L15.7264 0.440002H17.844L10.4491 11.9358L18.4491 24.44Z" fill="#9E9E9E"/>
                                                   </svg>
                                                </div>
                                          </button>
                                       </div>`);
               
               $(document.body).append('<div id="iawindowLoader" class="iaframe-stream-loader">Iniciando...</div>');

               $(document.body).append(`
                  <div id="iawindow" class="iawindow">
                     <div class="iawindow-header">
                        <div class="iawindow-icon">
                           <svg width="54" height="60" viewBox="0 0 54 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4 44H50V52C50 55.3137 47.3137 58 44 58H10C6.68629 58 4 55.3137 4 52V44Z" fill="#FEFBF7"/>
                           <rect x="2" y="11" width="49" height="26" rx="6" fill="#FEFBF7"/>
                           <path d="M2.85848 36.6795C3.76045 37.585 4.83224 38.3037 6.01244 38.7943C7.19263 39.2849 8.45804 39.5378 9.73615 39.5385H44.1763C46.7565 39.5321 49.2292 38.5043 51.0537 36.6798C52.8782 34.8553 53.906 32.3826 53.9124 29.8023V21.9675V1.375C53.9051 1.00782 53.754 0.658155 53.4918 0.401077C53.2295 0.143999 52.8769 0 52.5096 0C52.1423 0 51.7897 0.143999 51.5274 0.401077C51.2652 0.658155 51.1141 1.00782 51.1068 1.375V12.1723C51.0888 12.1538 51.0719 12.1347 51.0539 12.1161C50.152 11.2106 49.0802 10.4921 47.8999 10.0017C46.7197 9.51123 45.4543 9.25858 44.1763 9.25818H9.73615C8.45806 9.25865 7.19263 9.5114 6.01241 10.0019C4.83219 10.4924 3.7604 11.2111 2.85848 12.1167C2.84049 12.1352 2.82361 12.1543 2.80562 12.1729V1.375C2.79827 1.00782 2.64724 0.658155 2.38496 0.401077C2.12269 0.143999 1.77007 0 1.40281 0C1.03555 0 0.682932 0.143999 0.420655 0.401077C0.158378 0.658155 0.00735215 1.00782 0 1.375V29.8023C0.000549075 31.0803 0.253327 32.3457 0.743844 33.5258C1.23436 34.7059 1.95297 35.7776 2.85848 36.6795ZM9.73615 12.061H44.1763C46.0124 12.0674 47.7715 12.7996 49.0698 14.0979C50.3682 15.3963 51.1004 17.1554 51.1068 18.9915V29.8023C51.1003 31.6384 50.368 33.3974 49.0697 34.6958C47.7714 35.9941 46.0123 36.7264 44.1763 36.7329H9.73615C7.90007 36.7264 6.14105 35.9941 4.84273 34.6958C3.54441 33.3974 2.81214 31.6384 2.80562 29.8023V21.9675V18.987C2.81318 17.1517 3.54593 15.3937 4.84415 14.0963C6.14237 12.799 7.9008 12.0674 9.73615 12.061Z" fill="#D9261C"/>
                           <path d="M3.5 55V44H13V51L8.5 59L3.5 55Z" fill="#F54E41"/>
                           <path d="M51 55V44H41.5V51L46 59L51 55Z" fill="#F54E41"/>
                           <path d="M12.2937 19.6512V24.6275C12.2834 24.7812 12.3048 24.9354 12.3565 25.0805C12.4082 25.2257 12.4892 25.3586 12.5944 25.4711C12.6996 25.5836 12.8268 25.6734 12.9681 25.7347C13.1095 25.796 13.2619 25.8277 13.4159 25.8277C13.57 25.8277 13.7224 25.796 13.8637 25.7347C14.005 25.6734 14.1322 25.5836 14.2375 25.4711C14.3427 25.3586 14.4236 25.2257 14.4754 25.0805C14.5271 24.9354 14.5484 24.7812 14.5381 24.6275V19.6512C14.5381 19.3223 14.6688 19.0069 14.9013 18.7744C15.1338 18.5418 15.4493 18.4112 15.7781 18.4112C16.107 18.4112 16.4224 18.5418 16.6549 18.7744C16.8875 19.0069 17.0181 19.3223 17.0181 19.6512V24.6275C17.0078 24.7812 17.0292 24.9354 17.0809 25.0805C17.1326 25.2257 17.2136 25.3586 17.3188 25.4711C17.424 25.5836 17.5512 25.6734 17.6925 25.7347C17.8339 25.796 17.9863 25.8277 18.1403 25.8277C18.2944 25.8277 18.4468 25.796 18.5881 25.7347C18.7294 25.6734 18.8566 25.5836 18.9618 25.4711C19.0671 25.3586 19.148 25.2257 19.1998 25.0805C19.2515 24.9354 19.2728 24.7812 19.2625 24.6275V19.6512C19.2301 18.7488 18.8488 17.8941 18.1989 17.2671C17.549 16.6402 16.6812 16.2898 15.7781 16.2898C14.8751 16.2898 14.0073 16.6402 13.3574 17.2671C12.7075 17.8941 12.3262 18.7488 12.2937 19.6512Z" fill="#00887C"/>
                           <path d="M35.7077 25.75C36.006 25.75 36.292 25.6315 36.503 25.4206C36.7139 25.2096 36.8324 24.9236 36.8324 24.6253V19.6489C36.8324 19.3201 36.963 19.0048 37.1955 18.7723C37.428 18.5398 37.7433 18.4092 38.0721 18.4092C38.4009 18.4092 38.7162 18.5398 38.9487 18.7723C39.1812 19.0048 39.3118 19.3201 39.3118 19.6489V24.6253C39.3015 24.779 39.3229 24.9332 39.3746 25.0783C39.4263 25.2234 39.5073 25.3563 39.6125 25.4688C39.7177 25.5814 39.8449 25.6711 39.9863 25.7324C40.1276 25.7937 40.28 25.8254 40.434 25.8254C40.5881 25.8254 40.7405 25.7937 40.8818 25.7324C41.0231 25.6711 41.1503 25.5814 41.2556 25.4688C41.3608 25.3563 41.4418 25.2234 41.4935 25.0783C41.5452 24.9332 41.5665 24.779 41.5562 24.6253V19.6489C41.5219 18.7479 41.1398 17.8951 40.4901 17.2698C39.8405 16.6444 38.9738 16.2951 38.0721 16.2951C37.1704 16.2951 36.3038 16.6444 35.6541 17.2698C35.0045 17.8951 34.6224 18.7479 34.588 19.6489V24.6253C34.588 24.9227 34.7058 25.208 34.9156 25.4188C35.1255 25.6295 35.4103 25.7486 35.7077 25.75Z" fill="#00887C"/>
                           <path d="M9.5438 60H44.8201C46.8291 59.9997 48.7556 59.2015 50.1761 57.781C51.5967 56.3605 52.3948 54.4339 52.3951 52.425V44.1127C52.3951 43.9283 52.3587 43.7456 52.2881 43.5752C52.2174 43.4049 52.1137 43.2501 51.9832 43.1198C51.8526 42.9895 51.6975 42.8863 51.527 42.816C51.3564 42.7457 51.1737 42.7098 50.9892 42.7102H3.37189C3.18766 42.7101 3.00522 42.7462 2.83499 42.8167C2.66476 42.8871 2.51009 42.9904 2.37982 43.1207C2.24956 43.2509 2.14625 43.4056 2.07582 43.5758C2.00539 43.7461 1.96921 43.9285 1.96936 44.1127V52.425C1.96951 54.4339 2.76756 56.3604 4.18799 57.781C5.60843 59.2015 7.53493 59.9997 9.5438 60ZM4.77385 45.5158H12.012V49.7836L8.54448 55.7092C8.4229 55.9175 8.35734 56.1537 8.35418 56.3949C8.35103 56.636 8.41039 56.8739 8.52649 57.0853C7.46278 56.8539 6.51034 56.2654 5.82761 55.4175C5.14488 54.5696 4.77301 53.5136 4.77385 52.425V45.5158ZM49.5884 52.425C49.5888 53.6122 49.146 54.7569 48.3467 55.6348C47.5475 56.5127 46.4493 57.0606 45.2672 57.1713C45.4077 56.9547 45.4853 56.7034 45.4916 56.4453C45.4978 56.1872 45.4324 55.9324 45.3026 55.7092L41.8334 49.7836V45.5158H49.5884V52.425ZM39.2213 50.8729L42.8828 57.1241C42.8974 57.1494 42.9171 57.1696 42.9334 57.1938H10.9148C10.9306 57.1696 10.9503 57.1494 10.9654 57.1241L14.6264 50.8729C14.7531 50.6581 14.8196 50.4131 14.8187 50.1637V45.5153H39.0289V50.1637C39.0281 50.4131 39.0945 50.6581 39.2213 50.8729Z" fill="#D9261C"/>
                           <path d="M21.3073 32.9898H32.6107C32.8962 32.9717 33.164 32.8456 33.3597 32.6371C33.5554 32.4286 33.6644 32.1533 33.6644 31.8673C33.6644 31.5814 33.5554 31.3061 33.3597 31.0976C33.164 30.8891 32.8962 30.763 32.6107 30.7449H21.3073C21.0219 30.763 20.7541 30.8891 20.5583 31.0976C20.3626 31.3061 20.2537 31.5814 20.2537 31.8673C20.2537 32.1533 20.3626 32.4286 20.5583 32.6371C20.7541 32.8456 21.0219 32.9717 21.3073 32.9898Z" fill="#42B5AE"/>
                           </svg>
                        </div>
                        <h3>
                           Conversando con el producto
                        </h3> 
                     </div>
                     <iframe src="${hostIframe}?${queryParam}"/>
                     <div class="iawindow-copy"><div>powered by Snoop</div></div>
                  </div>
               `);

               $("#iawindow iframe").on('load', function() {
                  $("#iawindowLoader").remove();
               });

               $(window).on('resize', function() {
                  if ($(window).width() <= 767) {
                     var viewportHeight = window.visualViewport ? window.visualViewport.height : $(window).height();
                     $('#iawindow').css('height', (viewportHeight - 104)  + 'px');
                  }
               });
            }
         }
         else{
            if($("#iawindow").length > 0)
               console.log(`La url: "${currentUrl}" no se encuentra en la lista permitida`)
            $("#iawindow").remove()
         }
      }, 500); // Verifica cada segundo
   });
   console.log('Ready cargado')
   // Aquí puedes realizar otras acciones después de que el script se haya cargado.
} catch (error) {
   console.error('Error al cargar el script:', error);
}
})();


