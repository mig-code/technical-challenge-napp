export const allMobilesMock = [
    {
        id: 'ZmGrkLRPXOTpxsU4jjAcv',
        brand: 'Acer',
        model: 'Iconia Talk S',
        price: '170',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg',
    },
    {
        id: 'cGjFJlmqNPIwU59AOcY8H',
        brand: 'Acer',
        model: 'Liquid Z6 Plus',
        price: '250',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/cGjFJlmqNPIwU59AOcY8H.jpg',
    },
    {
        id: '8hKbH2UHPM_944nRHYN1n',
        brand: 'Acer',
        model: 'Liquid Z6',
        price: '120',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/8hKbH2UHPM_944nRHYN1n.jpg',
    },
    {
        id: 'xyPoqGJxYR4Nn3yVGQcfI',
        brand: 'Acer',
        model: 'Iconia Tab 10 A3-A40',
        price: '230',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/xyPoqGJxYR4Nn3yVGQcfI.jpg',
    },
    {
        id: 'ND1elEt4nqZrCeFflDUZ2',
        brand: 'Acer',
        model: 'Liquid X2',
        price: '230',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/ND1elEt4nqZrCeFflDUZ2.jpg',
    },
    {
        id: 'pMZMhe_ZaAPZoaCCtlDrg',
        brand: 'Acer',
        model: 'Liquid Jade 2',
        price: '',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/pMZMhe_ZaAPZoaCCtlDrg.jpg',
    },
    {
        id: 'ke-gsQbO8qH9PQ-zcdiAJ',
        brand: 'Acer',
        model: 'Liquid Zest Plus',
        price: '200',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/ke-gsQbO8qH9PQ-zcdiAJ.jpg',
    },
    {
        id: 'meQvyTcXACAwWn3wCKSw6',
        brand: 'Acer',
        model: 'Liquid Zest',
        price: '110',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/meQvyTcXACAwWn3wCKSw6.jpg',
    },
    {
        id: 'qSyO-2wbNUssUhBb2waew',
        brand: 'Acer',
        model: 'Predator 8',
        price: '350',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/qSyO-2wbNUssUhBb2waew.jpg',
    },
    {
        id: 'P2oqviM96_ozwsgZkj9Xf',
        brand: 'Acer',
        model: 'Liquid Jade Primo',
        price: '220',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/P2oqviM96_ozwsgZkj9Xf.jpg',
    },
    {
        id: 'ypkE9xhckmUbS1UJRm5dS',
        brand: 'Acer',
        model: 'Liquid Z330',
        price: '110',
        imgUrl: 'https://itx-frontend-test.onrender.com/images/ypkE9xhckmUbS1UJRm5dS.jpg',
    },
];

export const mobileDetailsMock = {
    id: 'ZmGrkLRPXOTpxsU4jjAcv',
    brand: 'Acer',
    model: 'Iconia Talk S',
    price: '170',
    imgUrl: 'https://itx-frontend-test.onrender.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg',
    networkTechnology: 'GSM / HSPA / LTE',
    networkSpeed: 'HSPA 42.2/11.5 Mbps  LTE Cat4 150/50 Mbps',
    gprs: 'Yes',
    edge: 'Yes',
    announced: '2016  August',
    status: 'Available. Released 2016  October',
    dimentions: '191.7 x 101 x 9.4 mm (7.55 x 3.98 x 0.37 in)',
    weight: '260',
    sim: 'Dual SIM (Micro-SIM/Nano-SIM)',
    displayType: 'IPS LCD capacitive touchscreen  16M colors',
    displayResolution: '7.0 inches (~69.8% screen-to-body ratio)',
    displaySize: '720 x 1280 pixels (~210 ppi pixel density)',
    os: 'Android 6.0 (Marshmallow)',
    cpu: 'Quad-core 1.3 GHz Cortex-A53',
    chipset: 'Mediatek MT8735',
    gpu: 'Mali-T720MP2',
    externalMemory: 'microSD  up to 128 GB (dedicated slot)',
    internalMemory: ['16 GB', '32 GB'],
    ram: '2 GB RAM',
    primaryCamera: ['13 MP', 'autofocus'],
    secondaryCmera: ['2 MP', '720p'],
    speaker: 'Yes',
    audioJack: 'Yes',
    wlan: ['Wi-Fi 802.11 a/b/g/n', 'Wi-Fi Direct', 'hotspot'],
    bluetooth: ['4.0', 'A2DP'],
    gps: 'Yes with A-GPS GLONASS',
    nfc: '',
    radio: 'FM radio',
    usb: 'microUSB 2.0',
    sensors: ['Accelerometer', 'proximity'],
    battery: 'Non-removable Li-Ion 3400 mAh battery (12.92 Wh)',
    colors: ['Black'],
    options: {
        colors: [{ code: 1000, name: 'Black' }],
        storages: [
            { code: 2000, name: '16 GB' },
            { code: 2001, name: '32 GB' },
        ],
    },
};

export const getAllMobilesMock = () => {
    return allMobilesMock;
};

export const getMobileDetailsMock = () => {
    return mobileDetailsMock;
};
