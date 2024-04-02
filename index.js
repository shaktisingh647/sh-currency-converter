import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_sB0ZZZRxZyoA6zWBhwUkokBKT4mgCq0GfIX320c1');
convertCurrency("USD","INR",4);
export async function convertCurrency(fromCurrency,toCurrency,units)
{
  const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    
    const multiplier = res.data[toCurrency];
    return multiplier*units;
   return console.log(multiplier);
}