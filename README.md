SERVIDOR
1.- Corregir para que se conecte a la Api del servidor desde un terminal simulador en Android Studio

CLIENTE
1.- El la parte cliente instalar las dependiencias
# Install the Capacitor CLI locally
2.- npm install -D @capacitor/cli
# Initialize Capacitor in your React project
3.- npx cap init
# Install the required packages, para android, lo quiero en ios añadir @capacitor/ios
4.- npm install @capacitor/core @capacitor/android
# Add the native platforms
5.- npx cap add android

Revisar fichero capacitor.config.json
{
  "appId": "com.example.app",
  "appName": "my-app",
  "webDir": "build",
  "bundledWebRuntime": false
}

#Construirá tu proyecto de React
6.- npm run build

#Alineará el código web en los lugares precisos de las plataformas nativas para que puedan ser ejecutados en una aplicación.
7.- npx cap sync

8.- npx cap open android

9.- Abrir Android Studio y abrir la carpeta creada en la parte servidor android y ejecutarla, tarda un poco.
