const CarImgImport = (img) => {
    return img.keys().map((key) => ({
        key,
        src: img(key)
    }));
};

const images = CarImgImport(require.context('../assets/images/CarsForSale/', false, /\.(png|jpe?g|svg)$/));

const carTitles = [
    'Volkswagen Tiguan 4Motion DSG 140 kW',
    'Volvo XC60 B4 145 kW',
    'Ford Puma 1.0 EcoBoost Titanium 92 kW',
    'Volkswagen T-Roc 1.0 TSI 81 kW',
    'Mercedes-Benz GLE 400 d 243 kW',
    'Seat Ibiza 1.0 MPI 59 kW',
    'Volkswagen T6 Transporter 66 kW',
    'MINI Cooper 100 kW',
    'Ford Kuga 88 kW',
    'Audi A6 40 TDI Avant 150 kW',
    'Subaru Outback 129 kW',
    'Citroen Berlingo 1.5 BlueHDi 130 M EAT8 Driver 96 kW',
    'Mercedes-Benz V 300d Avantgarde 176 kW',
    'Kia Rio 1.0 T-GDi 100 74 kW',
    'Renault Kadjar TCe 140 EDC LIMITED 103 kW',
    'Peugeot Partner 1.5 BlueHDi 130 S&S Premium 96 kW',
    'Skoda Kamiq 1.0 TSI DSG Ambition 81 kW',
    'Renault Twingo SCe 65 48 kW',
    'Renault Kangoo 1.6 16V 105 Happy Family 78 kW',
    'Skoda Kodiaq Style 147 kW'
];

const carMileages = [
    '50',
    '23 839',
    '33 621',
    '55 700',
    '90 000',
    '9 136',
    '85 472',
    '8 967',
    '140 530',
    '95 916',
    '166,716',
    '88 312',
    '150,000',
    '32 708',
    '55 758',
    '28 828',
    '10',
    '8 331',
    '90 000',
    '110 000'
];

const carPrices = [
    '45 549',
    '43 049',
    '15 649',
    '17 399',
    '75 249',
    '15 249',
    '19 949',
    '22 549',
    '18 149',
    '27 099',
    '18 099',
    '15 299',
    '40 199',
    '11 899',
    '19 049',
    '17 149',
    '22 349',
    '12 549',
    '8 449',
    '26 249'
];

const carData = images.map((image, index) => ({
    src: image.src,
    title: carTitles[index] || 'NaN',
    mileage: carMileages[index] || 'NaN',
    price: carPrices[index] || 'NaN'
}));

export default carData;
