# POC-PLUGIN-IFRAME

1 - Correr la applicacion dentro de la carpeta ```.\app-iframe``` Si el puerto es el 3000 no requiere paso extra
2 - Correr la applicacion dentro de la carpeta ```.\app-ecommerce```

* Si el puerto de la app-iframe no es el 3000 
1 - Abrir el archivo ```.\app-ecommerce\public\plugin\plugin-poc.js``` 
2 - Reemplazando el puerto en la linea ```const hostIframe = 'http://localhost:3000/'```


## Para utilizarlo
* Incluir en la solucion, el archivo ```.\app-ecommerce\public\plugin\plugin-poc.js``` y referenciar desde al menos algun html en el ejemplo se incluye en el siguiente archivo por ser una solucion react:  ```.\app-ecommerce\public\index.html``` donde existe la siguiente linea: ```<script src="./plugin/plugin-poc.js"></script>```