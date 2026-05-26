# 🎵 Cupid Player — Para Ti

## 1. Abre Símbolo del Sistema (cmd)
Tecla Windows → escribe **cmd** → Enter

## 2. Instala Node.js (un solo comando)

```
winget install OpenJS.NodeJS.LTS
```

Espera a que termine. Si te pregunta "¿Está de acuerdo con los términos?", escribe **S** y Enter.

## 3. Cierra y vuelve a abrir cmd
Esto es importante para que Node.js funcione.

## 4. Descarga Cupid Player (3 comandos)

```
cd Desktop
curl -L -o cupid.zip https://github.com/Rojas-09/cupid-music-player/archive/refs/heads/main.zip
tar -xf cupid.zip
cd cupid-music-player-main
```

## 5. Instálalo

```
npm install
```

Aparecerán letras blancas, espera a que termine.

## 6. A configurar (solo si usas Spotify)

Abre el Bloc de Notas, arrastra el archivo **.env.example** adentro.
Cambia `your_client_id_here` por tu Client ID de Spotify.
Guarda como: tipo "Todos los archivos", nombre **.env**, en la misma carpeta.

## 7. Prende la música

```
npm run dev
```

Se abrirá una ventanita rosa. ¡Listo!

---

## Preguntas frecuentes

| Pregunta | Respuesta |
|---|---|
| ¿Se cierra sesión si apago la PC? | No, queda guardada |
| ¿Muestra anuncios? | No |
| ¿Necesito internet? | Solo para Spotify/YouTube |
| ¿Spotify sin Premium funciona? | No, necesitas Premium |
| ¿YouTube necesita cuenta? | No, pegas la URL y ya |
| ¿Cómo agrego mis MP3? | Pon los .mp3 en la carpeta **audio** |
| ¿Esto es seguro? | Sí, lo revisé antes de dártelo |
