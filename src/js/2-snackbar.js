import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleClick);

function handleClick(event) {
  event.preventDefault();

  const { delay, state } = event.target.elements;

  const delayValue = +delay.value;
  const stateValue = state.value;

  setTimeout(() => {
    new Promise((resolve, reject) => {
      if (stateValue === 'fulfilled') {
        resolve('fulfilled');
      } else {
        reject('rejected');
      }
    })
      .then(data => {
        iziToast.success({
          message: `✅ Fulfilled promise in ${delayValue}ms`,
          position: 'topRight',
          color: 'green',
        });
      })
      .catch(error => {
        iziToast.error({
          message: `❌ Rejected promise in ${delayValue}ms`,
          position: 'topRight',
          color: 'red',
        });
      });
  }, delayValue);
}
