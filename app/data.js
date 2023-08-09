import { uid } from 'uid';

export const products = [
    {
        id: uid(),
        seasonal: true,
        name: 'product 1',
        price: 90,
        sex: 'male',
        sale: false,
        new_arrival: true,
        collection: 'winter',
        category: 'outerwear',
        best_seller: true,
        image: 'https://images.pexels.com/photos/6310924/pexels-photo-6310924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: uid(),
        seasonal: false,
        name: 'product 2',
        price: 90,
        sex: 'female',
        sale: false,
        new_arrival: false,
        collection: null,
        category: 'outerwear',
        best_seller: false,
        image: 'https://images.pexels.com/photos/11049240/pexels-photo-11049240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: uid(),
        seasonal: false,
        name: 'product 3',
        price: 72,
        sex: 'male',
        sale: false,
        new_arrival: false,
        collection: null,
        category: 'outerwear',
        best_seller: false,
        image: 'https://images.pexels.com/photos/7389036/pexels-photo-7389036.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
        id: uid(),
        seasonal: true,
        name: 'product 4',
        price: 38,
        sex: 'male',
        sale: true,
        new_arrival: false,
        collection: 'summer',
        category: 'shirt',
        best_seller: true,
        image: 'https://images.pexels.com/photos/5325885/pexels-photo-5325885.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
        id: uid(),
        seasonal: true,
        name: 'product 5',
        price: 90,
        sex: 'male',
        sale: false,
        new_arrival: true,
        collection: 'summer',
        category: 'outerwear',
        best_seller: false,
        image: 'https://images.pexels.com/photos/5556208/pexels-photo-5556208.png?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
        id: uid(),
        seasonal: true,
        name: 'product 6',
        price: 109,
        sex: 'female',
        sale: false,
        new_arrival: true,
        collection: 'winter',
        category: 'outerwear',
        best_seller: false,
        image: 'https://images.pexels.com/photos/15909155/pexels-photo-15909155/free-photo-of-woman-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
        id: uid(),
        seasonal: true,
        name: 'product 7',
        price: 62,
        sex: 'female',
        sale: false,
        new_arrival: false,
        collection: 'summer',
        category: 'accessories',
        best_seller: true,
        image: 'https://images.pexels.com/photos/6902992/pexels-photo-6902992.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
        id: uid(),
        seasonal: false,
        name: 'product 8',
        price: 90,
        sex: 'female',
        sale: false,
        new_arrival: true,
        collection: null,
        category: 'outerwear',
        best_seller: false,
        image: 'https://images.pexels.com/photos/4860306/pexels-photo-4860306.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
        id: uid(),
        seasonal: false,
        name: 'product 9',
        price: 90,
        sex: 'male',
        sale: true,
        new_arrival: false,
        collection: null,
        category: 'shirt',
        best_seller: true,
        image: 'https://images.pexels.com/photos/4993102/pexels-photo-4993102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
];

export const filters = [
    {
        type: null,
        name: 'all'
    },
    {
        type: 'seasonal',
        name: 'Seasonal'
    },
    {
        type: 'new_arrival',
        name: 'New arrivals'
    },
    {
        type: 'best_seller',
        name: 'Best Sellerr'
    },
    {
        type: 'sale',
        name: 'sale'
    },
]