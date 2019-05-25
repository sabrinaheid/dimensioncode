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

### NPM

Um lokal entwickeln zu können
```
npm install
```

lokale Entwicklungsungebung starten (localhost etc.), sofern gulp installiert (siehe unten) ist
```
gulp
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
Gulp-Version im Website-Ordner installieren
```
npm install --save-dev gulp
```
Gulp-Version überprüfen, CLI version und Local version erforderlich
```
gulp --version
```

### GIT Lokaler Branch aktualisieren

wechsle branch develop
```
git checkout develop
```

aktuellster develop branch herunterladen
```
git pull
```

zu lokalem branch wechseln
```
git checkout lokalerbranch
```

update lokaler branch mit local develop aktualisieren
```
git rebase develop
```

—> lokaler branch aktuell

### GIT Online Branch aktualisieren

alles hinzufügen
```
git add .
```

commiten mit kommentar
```
git commit -m ’kommentar’
```

upload branch
```
git push origin branchname
```

—> nun könnte gemerged werden auf github.com

### GIT weitere wichtige Commands

Repository clonen 
```
git clone https://github.com/sabrinaheid/dimensioncode.git
```

Änderungen ansehen, die ich gemacht habe
```
git status
```

Neuer Branch erstellen
```
git checkout -b <branchname> z.B. feauture1
```

alle änderung löschen 
```
git checkout — .
```

wechsle zu neuem branch
```
git checkout -b neuerbranchname
```

jede änderung
```
git add -p 
```


files in git löschen (mit vorsicht behandeln!)
```
git rm filename filename filename 
```

