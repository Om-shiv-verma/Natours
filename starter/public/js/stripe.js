import axios from 'axios';
import { showAlert } from './alerts';
// import { loadStripe } from '@stripe/stripe-js/pure';

const stripe = Stripe(
  'sk_test_51OUl83SBR9rIQTFLmp7WSZ4DXyybjEiT8xFhDt3yrvnlIKusl2JKfqZXkQeSemCxDb2BbRub33kO5zB8DyVvSxQl00jQwiowTO'
);

export const bookTour = async (tourId) => {
  try {
    //1) Get Checkout Session from the API and
    // console.log(tourId);
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    showAlert('success', 'Redirecting to Payment Gateway...');

    // console.log(session);
    // console.log(stripe);
    //2) Create checkout form + charge Credit card
    // console.log(Date.now());
    // const id = session.data.session.id;
    // console.log(id);
    // await stripe.redirectToCheckout({
    //   sessionId:
    //     'cs_test_a1ds4vMpmrqumHw8U82l6gVDvtoRrrgI8AURlieSHVXGbhYxSoA4ZyAQ1p',
    // });
    // console.log(Date.now());
    // console.log(session.data.session.url);

    window.location.replace(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
