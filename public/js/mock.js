let people = [
  {
    "firstName": "Görgen",
    "lastName": "Welin",
    "street": "Hjalmar strååts väg",
    "zip": "731 30",
    "muncipality": "KÖPING",
    "ssn": "580817-5250"
  },
  {
    "firstName": "Esbjörn",
    "lastName": "Svanberg",
    "street": "Holmgård",
    "zip": "856 51",
    "muncipality": "SUNDSVALL",
    "ssn": "990921-8175"
  }
]

let cars = {
  "JOA 112": {
    owner: people[0],
    info: {
      make: "Ford"
    }
  },
  "XXS 007": {
    owner: people[1],
    info: {
      make: "Vauxhall"
    }
  }
}

$('body').on('submit', '#mysafety-store-checkout-ssn-form', checkSsnAndRegnr)

function checkSsnAndRegnr(e) {
  e.preventDefault();
  $('.form_wrapper.checkout-page__form').show();
  let $ssn = $('.checkout-page__form__user-info>div:first-child>h3')
  let $info = $('.checkout-page__form__user-info>div:last-child>h3')
  let ssn = $('#edit-ssn-field').val();
  let reg = $('#edit-regnr').val();
  let person;
  for (p of people) {
    if (p.ssn === ssn) {
      person = p;
      break;
    }
  }
  let car = cars[reg]
  console.log('car', car);
  $ssn.after(`<p>${person.ssn}</p>`)
  $info.after(`
    <p>${person.firstName} ${person.lastName}</p>
    <p>${person.street}</p>
    <p>${person.zip} ${person.muncipality}</p>
  `)
}