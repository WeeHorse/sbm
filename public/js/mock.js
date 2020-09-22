let people = [
  {
    "firstName": "Görgen",
    "lastName": "Welin",
    "street": "Hjalmar strååts väg 28",
    "zip": "73130",
    "muncipality": "KÖPING",
    "ssn": "195808175250"
  },
  {
    "firstName": "Esbjörn",
    "lastName": "Svanberg",
    "street": "Storgatan 7B",
    "zip": "85651",
    "muncipality": "SUNDSVALL",
    "ssn": "199909218175"
  },
  {
    "firstName": "Karin",
    "lastName": "Bäck",
    "street": "Gruvstugevägen 14",
    "zip": "97595",
    "muncipality": "LULEÅ",
    "ssn": "195705047263"
  }
]

let cars = {
  "JOA112": {
    owner: people[0],
    info: {
      make: "Ford"
    }
  },
  "XXS007": {
    owner: people[1],
    info: {
      make: "Vauxhall"
    }
  },
  "ABC123": {
    owner: people[2],
    info: {
      make: "Mercedes"
    }
  }
}

let testData = {}
for (let regnr in cars) {
  testData[regnr] = parseInt(cars[regnr].owner.ssn);
}
setTimeout(function () {
  console.table(testData);
}, 500)


$('body').on('submit', '#mysafety-store-checkout-ssn-form', checkSsnAndRegnr)

function checkSsnAndRegnr(e) {
  e.preventDefault();
  $('.form_wrapper.checkout-page__form').show();
  let $ssn = $('.checkout-page__form__user-info>div:first-child>h3')
  let $info = $('.checkout-page__form__user-info>div:last-child>h3')
  $ssn.siblings().html('');
  $info.siblings().html('');
  let $ssnInput = $('#edit-ssn-field')
  let $regInput = $('#edit-regnr')
  $ssnInput.removeClass('error')
  $regInput.removeClass('error')
  $('.mock-error-message').remove()
  let ssn = $ssnInput.val().replace(/[\s\D]?/gi, '')
  let reg = $regInput.val().replace(/[\s\W]?/gi, '')
  let person;
  for (p of people) {
    if (p.ssn === ssn) {
      person = p;
      break;
    }
  }
  let car = cars[reg]
  if (!car || !person) {
    if (!car) {
      $regInput.after('<div class="mock-error-message messages error messages-inline">Ange ett giltigt registreringsnummer.</div>')
      $regInput.addClass('error')
    }
    if (!person) {
      $ssnInput.after('<div class="mock-error-message messages error messages-inline">Ogiltigt personnummer, vänligen kontrollera att du fyllt i rätt</div>')
      $ssnInput.addClass('error')
    }
  } else if (cars[reg] && cars[reg].owner === person) {
    $ssn.after(`<p>${person.ssn}</p>`)
    $info.after(`
      <p>${person.firstName} ${person.lastName}</p>
      <p>${person.street}</p>
      <p>${person.zip} ${person.muncipality}</p>
    `)
  } else {
    $ssnInput.after('<div class="mock-error-message messages error messages-inline">Detta personnummer står ej som registrerad ägare av bilen. Vänligen kontrollera uppgifterna och försök igen.</div>')
  }
}

$('body').on('keyup', '#bankid-ssn', handleBankIdSsnValidity)

function handleBankIdSsnValidity() {
  $('#bankid-send').prop('disabled', function (i, v) {
    return !$('#bankid-ssn')[0].checkValidity();
  });
}