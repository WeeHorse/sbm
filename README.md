# SBM site med Keystone CMS

## För lokal utveckling och testning

### Installera
```bash
npm install
```

### Importera databasen

Importera databasen till mongodb med:
```bash
mongorestore -d sbm ./dump/sbm
```

_För att exportera databasen, om ni skulle behöva det, så är kommandot:_
```bash
mongodump -d sbm
```

### starta
```bash
node keystone
```

Öppna i webbläsaren :
[http://0.0.0.0:3000](http://0.0.0.0:3000) för webbsidan
[http://0.0.0.0:3000/keystone](http://0.0.0.0:3000/keystone) för admin

### Inloggning till admin (back office)
_Testare kan logga in som admin med fullständiga rättigheter med:_
testsson@testare.se
abcd1234

