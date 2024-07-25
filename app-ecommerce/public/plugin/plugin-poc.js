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
    await loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
    console.log('El script se ha cargado correctamente.');
    $(document).ready(function() {
        // Obtiene la URL actual
        const currentUrl = window.location;

        // Codifica la URL para usarla como parámetro de consulta
        const encodedUrl = encodeURIComponent(currentUrl);
        const hostIframe = 'http://localhost:3000/'
        // Ahora puedes usar 'encodedUrl' en tu lógica, por ejemplo:
        const queryParam = `product_id=${encodedUrl}`;
        if(encodedUrl.indexOf('text')==-1){
            console.log(encodedUrl)
            $(document.body).append(`<iframe id="ifame-stream" style="height: 500px !important; width: 500px !important; position: rigth" src="${hostIframe}?${queryParam}"/>`)
        }
        
    });
    // Aquí puedes realizar otras acciones después de que el script se haya cargado.
} catch (error) {
    console.error('Error al cargar el script:', error);
}
})();


