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
         url: 'http://127.0.0.1:5501/app-ecommerce/public/ejemplo-video.html',
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
                        --gray-lighter: #dedede; 
                        --font-size-base: 1rem; 
                        --font-size-lg: 1.25rem; 
                        --font-size-sm: .875rem; 
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

                     .iaframe-stream,
                     .iaframe-stream-loader {
                        position: fixed;
                        right: 16px;
                        z-index: 999999;
                        height: 560px;
                        width: 400px;
                        border-radius: 24px;
                     }

                     .iaframe-stream {
                        bottom: -560px;
                        z-index: 999999;
                        cursor: default;
                        background-color: rgba(255, 255, 255, 0.7);
                        backdrop-filter: blur(4px);
                        border: 1px solid #ddd;
                        box-shadow: 0 0 16px -4px rgba(0, 0, 0, .2);
                        opacity: 0;
                        transition: bottom .7s ease, opacity .7s ease;
                     }

                     .iaframe-stream.open {
                        bottom: 80px;
                        opacity: 1;
                     }

                     .iaframe-stream-loader {
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

                     .iaframe-stream-loader.open {
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
                        .iaframe-stream,
                        .iaframe-stream-loader {
                           width: calc(100% - 2rem);
                           height: calc(100vh - 160px);
                        }

                        .iaframe-stream {
                           bottom: -100%;
                        }
                     }
                  </style>
               `;


               const linkStyle = `<link rel="stylesheet" href="./plugin/styles-video.css" />`;

               $('head').append(linkStyle);

               $(document.body).append(`<div id="iabot" class="iabot">
                                          <div class="iabot-bubble">¡Hola! ¿en qué puedo ayudarte?</div> 
                                          <button type="button" id="iabotBtn" class="iabot-btn">
                                             <div class="iabot-video">
                                                <video id="avatar" autoplay muted>
                                                   <source src="https://res.cloudinary.com/dbfsnew4w/video/upload/v1727451790/avatar-2_kzyvpz.mp4" type="video/mp4">
                                                   Your browser does not support the video tag.
                                                </video>
                                             </div>
                                             <div class="iabot-close">
                                                <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M18.4491 24.44H16.2306L9.23897 13.3476L2.18015 24.44H0.0625L8.12973 11.9694L0.768382 0.440002H2.95326L9.3062 10.5913L15.7264 0.440002H17.844L10.4491 11.9358L18.4491 24.44Z" fill="#9E9E9E"/>
                                                </svg>
                                             </div>
                                          </button>
                                       </div>`);
               
               $(document.body).append('<div id="iawindowLoader" class="iawindow-loader">Iniciando...</div>');

               $(document.body).append(`
                  <div id="iawindow"  class="iawindow">
                     <div class="iawindow-header">
                        <div class="iawindow-avatar">
                           <video muted>
                              <source src="https://res.cloudinary.com/dbfsnew4w/video/upload/v1727451790/avatar-2_kzyvpz.mp4" type="video/mp4">
                              Your browser does not support the video tag.
                           </video>
                        </div>
                        <h3>
                           Conversando con el producto
                        </h3> 
                     </div>
                     <iframe src="${hostIframe}?${queryParam}"/>
                  </div>
               `);

               $("#iawindow iframe").on('load', function() {
                  $("#iawindowLoader").remove();
               });

               const video = $('#avatar')[0];
               const bubble = $('#iabot').find('.iabot-bubble');

               bubble.addClass('show');
          
               video.addEventListener('ended', () => {
                  bubble.removeClass('show');
                  setTimeout(() => {
                     video.play();
                     bubble.addClass('show');
                  }, 10000);
               });

               $(window).on('resize', function() {
                  if ($(window).width() <= 767) {
                     var viewportHeight = window.visualViewport ? window.visualViewport.height : $(window).height();
                     $('#iaframeStream').css('height', (viewportHeight - 104)  + 'px');
                  }
               });
            }
         }
         else{
            if($("#iaframeStream").length > 0)
               console.log(`La url: "${currentUrl}" no se encuentra en la lista permitida`)
            $("#iaframeStream").remove()
         }
      }, 500); // Verifica cada segundo
   });
   console.log('Ready cargado')
   // Aquí puedes realizar otras acciones después de que el script se haya cargado.
} catch (error) {
   console.error('Error al cargar el script:', error);
}
})();


