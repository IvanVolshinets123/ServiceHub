const TOKEN = '7734137300:AAHc_JvuYi9OzwLbmXnXCdXqgz4N2sPYrqA';
const CHAT_ID = '-1002553663204';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const succes = document.querySelector('.succes');
const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.name;
  const phone = this.phone;
  const car = this.car;
  const problem = this.problem;

  let hasError = false;
  [name, phone, car, problem].forEach(input => {
    if (input.value.trim() === '') {
      input.style.border = '1px solid red';
      hasError = true;
    } else {
      input.style.border = '';
    }
  });

  if (hasError) {
    succes.textContent = 'Заполните все поля!';
    succes.classList.remove('disp');
    succes.classList.add('error');
    return;
  }

  succes.classList.remove('error');
  succes.textContent = 'Сообщение доставлено!';

  const message = 'Заявка с сайта \n' +
    'Имя: ' + name.value.trim() + '\n' +
    'Номер телефона: ' + phone.value.trim() + '\n' +
    'Марка машины: ' + car.value.trim() + '\n' +
    'Описание проблемы: ' + problem.value.trim();

  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })
  .then((res) => {
    succes.classList.remove('disp');
    form.reset();
  })
  .catch((err) => {
    console.warn(err);
    succes.textContent = 'Ошибка при отправке!';
    succes.classList.remove('disp');
    succes.classList.add('error');
  })
  .finally(() => {
    console.log('Скрипт выполнен');
  });
});
