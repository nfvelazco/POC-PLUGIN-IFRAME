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
         url: "https://muyestetica.com/shoponline/protectores-solares/faciales/crema-clarificante-de-manchas-c-acido-mandelico-kojico-piel-normal",
         parametro: 'crema-clarificante-de-manchas-c-acido-mandelico-kojico-piel-normal'
        },
        { 
         url: 'https://muyestetica.com/shoponline/facial/cuidado-facial/serum-geles-y-cremas-faciales/crema-hidratante-facial-prevencion-de-arrugas-hydra10',
         parametro: 'crema-hidratante-facial-prevencion-de-arrugas-hydra10'
        },
        { 
         url: 'https://muyestetica.com/shoponline/facial/cuidado-facial/serum-geles-y-cremas-faciales/crema-nutritiva-con-colageno-elastina-y-vitamina-e',
         parametro: 'crema-nutritiva-con-colageno-elastina-y-vitamina-e'
        },
        { 
         url: 'https://muyestetica.com/shoponline/facial/cuidado-facial/ojos-y-parpados/promoter-liposomas-spray-crecimiento-cejas-pestanas',
         parametro: 'promoter-liposomas-spray-crecimiento-cejas-pestanas'
        },
        { 
         url: 'https://muyestetica.com/shoponline/capilar/accesorios-para-el-cabello/redecilla-de-pelo',
         parametro: 'redecilla-de-pelo'
        },
        { 
         url: 'http://localhost:3001',
         parametro: 'React App Ecommerce'
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
                const hostIframe = 'http://localhost:3000/'
                // Ahora puedes usar 'encodedUrl' en tu lógica, por ejemplo:
                const queryParam = `product_id=${find_url[0].parametro}`;
                if(currentUrl.indexOf('text')==-1){
                    //console.log(queryParam)
                    if($("#ifame-stream").length === 0) {
                        $(document.body).append(`<iframe id="ifame-stream" style="height: 500px !important; width: 500px !important; position: rigth" src="${hostIframe}?${queryParam}"/>`)
                    }
                }
            }
            else{
                if($("#ifame-stream").length > 0)
                    console.log(`La url: "${currentUrl}" no se encuentra en la lista permitida`)
                $("#ifame-stream").remove()
            }
        }, 500); // Verifica cada segundo
    });
    // Aquí puedes realizar otras acciones después de que el script se haya cargado.
} catch (error) {
    console.error('Error al cargar el script:', error);
}
})();


