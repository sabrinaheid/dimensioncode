# dimensioncode

## Firebase Setup

### Prerequisites
Install the latest nodejs: https://nodejs.org/en/

Check if npm is installed:
```
npm -v
```

Install firebase
```
npm install -g firebase-tools
```

### Firebase Login
Make sure you're in the web directory, which contains the firebase.json file.
Use the credentials from: https://trello.com/c/HE6Nr5TC/11-google-account-aufsetzen-f%C3%BCr-firebase
```
firebase login
```

### Firebase Deploy
```
firebase deploy
```

### Git
Repository clonen 
```
git clone https://github.com/sabrinaheid/dimensioncode.git
```

Um lokal entwickeln zu können
```
npm install
```

lokale Entwicklungsungebung starten (localhost etc.)
```
gulp
```

Neuer Branch erstellen
```
git checkout -b <branchname> z.B. feauture1
```

Branch wechseln
```
git checkout <branchname> z.B. feauture1
```


Änderungen ansehen, die ich gemacht habe
```
git status
```

Fügt alle Änderungen hinzu
```
git add *
oder
git add <pfadname>
```

Commit mit Message
```
git commit -m 'Hier kommt ein Satz hin was geändert hat'
```

Änderungen in das Repository pushen
```
git push origin <branchname> -> develop
```


### Gulp
Gulp installieren
```
npm install --global gulp
```
Gulp Adminrechte erteilen
```
sudo npm install --global gulp
```
Gulp-Version im Ordner installieren
```
npm install --save-dev gulp
```
