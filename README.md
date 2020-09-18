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

### Progress i migrationen
* Nu kan man gå från förstasidan, till våra försäkringar, till väghjälp bil, till Beställ nu! _Formuläret fungerar inte ännu._

### Lite guider för att bygga i keystone (inte nödvändigt att sätta sig in i):

#### Ex: Att skapa en ny vy med en egen URL:
_Jag ska skapa route och vy /checkout/44771_

1. I routes/index.js lägger jag till:
app.get('/checkout/44771', routes.views['44771']);

2. I routes/middleware.js lägger jag till:
{ label: 'Väghjälp bil beställning', key: '44771', href: '/checkout/44771' },

3. I templates/views skapar jag ett nytt dokument för HTML:
44771.hbs

4. I routes/views skapar jag ett nytt dokument för javascript direktiv:
44771.js

5. Jag kopierar js ifrån ett annat dokument i routes/views och ändrar så det passar min nya view

6. Slutligen startar jag om keystone

