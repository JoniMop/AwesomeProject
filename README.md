Once all set done, compile and generate APK
npm install -g eas-cli
eas login
eas build:configure
eas build --platform android
east build -p android --profile preview

