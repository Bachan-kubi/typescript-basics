{
    // generic interface

interface Developer<T> {
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number;
    }
    smartWatch: T;
}
type Watch={
    brand: string;
    model: string;
    display: string;
}
const poorDeveloper: Developer<Watch> = {
    name: 'kubi',
    computer: {
        brand: 'asus',
        model: '14lk',
        releaseYear: 2025
    },
    smartWatch:{
        brand: 'apple',
        model: 'uu58',
        display: 'EMOLED'
    }
}

interface Casio{
    brand: string;
    model: string;
    display: string;
    heartTrack: boolean;
    sleepTrack: boolean;
}

const richDeveloper: Developer<Casio> = {
    name: 'smrity',
    computer: {
        brand: 'dell',
        model: '17lk',
        releaseYear: 2024
    },
    smartWatch:{
        brand: 'casio',
        model: 'uu98',
        display: 'EMOLED',
        heartTrack: true,
        sleepTrack: true
    }
}

















}