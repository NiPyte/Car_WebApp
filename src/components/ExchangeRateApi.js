import {useEffect, useState} from "react";


const ExchangeRateApi = () => {
    const [exchangeRates, setExchangeRates] = useState([]);

    useEffect(() => {
        const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const currencies = ['USD', 'EUR', 'GBP'];
                const rates = data.reduce((acc, currency) => {
                    if (currencies.includes(currency.cc)) {
                        acc[currency.cc] = currency.rate;
                    }
                    return acc;
                }, {});
                setExchangeRates(rates);
            })
            .catch(error => console.error('Error fetching exchange rate:', error));
    }, []);
    return (
        <div>
            <div>USD: {exchangeRates.USD} $</div>
            <div>EUR: {exchangeRates.EUR} €</div>
        </div>
    );
};

export default ExchangeRateApi;
