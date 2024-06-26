const products = [
    {
        id: 1,
        name: "Nike Air Force 1", 
        category: ["LifeStyle"],
        genre: "Unisex",
        description: "Las Nike Air Force 1 son unas zapatillas icónicas que han trascendido el mundo del baloncesto para convertirse en un elemento básico de la moda urbana. Ofrecen una excelente amortiguación y comodidad.",
        price: 100000,
        stock: 10,
        brand: "Nike",
        sizes: [ 5, 6, 7, 8, 9, 10 ],
        image: '/assets/image/products/product1.jpg'
    },
    {
        id: 2,
        name: "Adidas Stan Smith", 
        category: ["LifeStyle"],
        genre: "Unisex",
        description: "Las Adidas Stan Smith son conocidas por su diseño limpio y clásico con detalles verdes en el talón. Son versátiles y se adaptan bien a cualquier estilo.",
        price: 200000,
        stock: 10,
        brand: "Adidas",
        sizes: [ 5, 6, 7, 8, 9, 10 ],
        image: '/assets/image/products/product2.jpg'
    },
    {
        id: 3,
        name: "Chuck Taylor All Star", 
        category: ["LifeStyle"],
        genre: "Unisex",
        description: "Estas zapatillas han sido un elemento básico de la moda durante décadas. Con su diseño atemporal y su suela de caucho, son perfectas para un look casual.",
        price: 230000,
        stock: 10,
        brand: "Converse",
        sizes: [ 3, 5, 10, 12, 14, 15 ],
        image: '/assets/image/products/product3.jpg'
    },
    {
        id: 4,
        name: "Vans Old Skool", 
        category: ["SkateBoarding"],
        genre: "Unisex",
        description: "Las Vans Old Skool son unas zapatillas de skate clásicas con la icónica banda lateral. Son duraderas, cómodas y ofrecen un excelente agarre en la tabla.",
        price: 220000,
        stock: 4,
        brand: "Vans",
        sizes: [ 3.2, 3.3, 3.4, 4, 5, 6 ],
        image: '/assets/image/products/product4.jpg'
    },
    {
        id: 5,
        name: "Reebok Classic Leather", 
        category: ["LifeStyle"],
        genre: "Unisex",
        description: "Las Reebok Classic Leather son unas zapatillas que combinan estilo y confort. Su diseño atemporal las convierte en una opción popular para el uso diario.",
        price: 250000,
        stock: 14,
        brand: "Reebok",
        sizes: [ 5, 6, 7, 9, 10, 12 ],
        image: '/assets/image/products/product5.jpg'
    },
    {
        id: 6,
        name: "Nike Air Max 270", 
        category: ["Running", "LifeStyle"],
        genre: "Female",
        description: "Las Nike Air Max 270 son conocidas por su unidad Air Max de gran tamaño en el talón, que proporciona una amortiguación excepcional y un estilo llamativo. Son ideales tanto para correr como para el uso diario.",
        price: 150000,
        stock: 11,
        brand: "Nike",
        sizes: [ 5, 6, 7, 9, 10, 12 ],
        image: '/assets/image/products/product6.jpg'
    },
    {
        id: 7,
        name: "Adidas Superstar", 
        category: ["LifeStyle"],
        genre: "Female",
        description: "Las Adidas Superstar son unas zapatillas clásicas con la emblemática puntera de goma. Son versátiles y se pueden combinar fácilmente con diferentes conjuntos para lograr un look casual y moderno.",
        price: 160000,
        stock: 3,
        brand: "Adidas",
        sizes: [ 5, 6, 7, 9, 10, 12 ],
        image: '/assets/image/products/product7.jpg'
    },
    {
        id: 8,
        name: "Puma Cali", 
        category: ["LifeStyle"],
        genre: "Female",
        description: "Las Puma Cali son unas zapatillas inspiradas en el estilo de vida de California. Tienen un diseño retro con una suela gruesa y detalles de colores llamativos que las hacen destacar.",
        price: 180000,
        stock: 3,
        brand: "Puma",
        sizes: [ 5, 6, 7, 9, 10, 12 ],
        image: '/assets/image/products/product8.jpg'
    },
    {
        id: 9,
        name: "Reebok Classic Nylon", 
        category: ["LifeStyle"],
        genre: "Female",
        description: "Las Reebok Classic Nylon son unas zapatillas elegantes y cómodas con una parte superior de nylon y detalles de cuero. Son ideales para el uso diario y ofrecen un ajuste perfecto.",
        price: 190000,
        stock: 3,
        brand: "Reebok",
        sizes: [ 5, 6, 7, 9, 10, 12 ],
        image: '/assets/image/products/product9.jpg'
    },
    {
        id: 10,
        name: "New Balance 574", 
        category: ["LifeStyle"],
        genre: "Female",
        description: "Las New Balance 574 son unas zapatillas clásicas y duraderas con una excelente amortiguación. Tienen un diseño retro que nunca pasa de moda y están disponibles en una amplia gama de colores.",
        price: 290000,
        stock: 10,
        brand: "New Balance",
        sizes: [ 5, 6, 7, 9, 10, 12 ],
        image: '/assets/image/products/product10.jpg'
    },
    {
        id: 11,
        name: "Jordan 1 Retro High", 
        category: ["Basketball", "LifeStyle"],
        genre: "Male",
        description: "Las Jordan 1 Retro High son unas zapatillas icónicas que han trascendido el mundo del baloncesto para convertirse en un símbolo de la cultura urbana. Su diseño clásico y su calidad las hacen muy populares entre los hombres.",
        price: 200000,
        stock: 15,
        brand: "Nike",
        sizes: [ 7, 8, 9, 10, 11, 12 ],
        image: '/assets/image/products/product11.jpg'
    },
    {
        id: 12,
        name: "Adidas Ultra Boost", 
        category: ["Running", "LifeStyle"],
        genre: "Male",
        description: "Las Adidas Ultra Boost son conocidas por su increíble comodidad y su excelente retorno de energía gracias a su tecnología de amortiguación Boost. Son ideales para correr o para un uso casual.",
        price: 260000,
        stock: 10,
        brand: "Adidas",
        sizes: [ 7, 8, 9, 10, 11, 12 ],
        image: '/assets/image/products/product12.jpg'
    },
    {
        id: 13,
        name: "Nike Air Max 97", 
        category: ["Running", "LifeStyle"],
        genre: "Male",
        description: "Las Nike Air Max 97 son unas zapatillas de estilo futurista que destacan por su unidad Air Max de longitud completa y su diseño ondulado en la parte superior. Son muy populares entre los hombres que buscan un estilo único.",
        price: 280000,
        stock: 15,
        brand: "Nike",
        sizes: [ 7, 8, 9, 10, 11, 12 ],
        image: '/assets/image/products/product13.jpg'
    },
    {
        id: 14,
        name: "Vans Sk8-Hi", 
        category: ["SkateBoarding", "LifeStyle"],
        genre: "Male",
        description: "Las Vans Sk8-Hi son unas zapatillas de caña alta que ofrecen un excelente soporte y protección para el tobillo. Son duraderas, versátiles y se pueden usar tanto para andar en patineta como para un estilo casual.",
        price: 320000,
        stock: 20,
        brand: "Vans",
        sizes: [ 9, 10, 11, 12, 13, 14 ],
        image: '/assets/image/products/product14.jpg'
    },
    {
        id: 15,
        name: "New Balance 990v5", 
        category: ["Running", "LifeStyle"],
        genre: "Male",
        description: "Las New Balance 990v5 son unas zapatillas de alto rendimiento que destacan por su comodidad y estabilidad. Son ideales para correr largas distancias o para un uso diario gracias a su excelente amortiguación.",
        price: 320000,
        stock: 20,
        brand: "Vans",
        sizes: [ 9, 10, 11, 12, 13, 14 ],
        image: '/assets/image/products/product15.jpg'
    },
    {
        id: 16,
        name: "Nike React Element 87",
        category: ["Running", "LifeStyle"],
        genre: "Unisex",
        description: "Las Nike React Element 87 son unas zapatillas que combinan estilo y rendimiento. Con su amortiguación React y su diseño moderno, son ideales para correr o para un uso casual.",
        price: 270000,
        stock: 8,
        brand: "Nike",
        sizes: [ 6, 7, 8, 9, 10 ],
        image: '/assets/image/products/product16.jpg'
    },
    {
        id: 17,
        name: "Adidas NMD R1",
        category: ["Running", "LifeStyle"],
        genre: "Unisex",
        description: "Las Adidas NMD R1 son conocidas por su comodidad y estilo vanguardista. Con su parte superior de tejido elástico y su amortiguación Boost, son ideales para el día a día.",
        price: 240000,
        stock: 6,
        brand: "Adidas",
        sizes: [ 7, 8, 9, 10, 11 ],
        image: '/assets/image/products/product17.jpg'
    },
    {
        id: 18,
        name: "Converse Chuck 70",
        category: ["LifeStyle"],
        genre: "Unisex",
        description: "Las Converse Chuck 70 son una versión actualizada de las clásicas Chuck Taylor All Star. Con su construcción de lona resistente y suela de goma, ofrecen durabilidad y estilo.",
        price: 210000,
        stock: 10,
        brand: "Converse",
        sizes: [ 5, 6, 7, 8, 9, 10 ],
        image: '/assets/image/products/product18.jpg'
    },
    {
        id: 19,
        name: "Vans Authentic",
        category: ["SkateBoarding", "LifeStyle"],
        genre: "Unisex",
        description: "Las Vans Authentic son unas zapatillas clásicas y versátiles que se adaptan a cualquier ocasión. Con su suela de waffle y su parte superior de lona, ofrecen un excelente agarre y estilo.",
        price: 180000,
        stock: 12,
        brand: "Vans",
        sizes: [ 6, 7, 8, 9, 10 ],
        image: '/assets/image/products/product19.jpg'
    },
    {
        id: 20,
        name: "Reebok Club C 85",
        category: ["LifeStyle"],
        genre: "Unisex",
        description: "Las Reebok Club C 85 son unas zapatillas clásicas con un toque retro. Con su parte superior de cuero suave y su suela de goma resistente, son ideales para un look casual y cómodo.",
        price: 170000,
        stock: 9,
        brand: "Reebok",
        sizes: [ 6, 7, 8, 9, 10 ],
        image: '/assets/image/products/product20.jpg'
    },
    {
        id: 21,
        name: "New Balance 997H",
        category: ["LifeStyle"],
        genre: "Unisex",
        description: "Las New Balance 997H son unas zapatillas inspiradas en el estilo de los años 90. Con su amortiguación cómoda y su diseño retro, son perfectas para el uso diario.",
        price: 220000,
        stock: 7,
        brand: "New Balance",
        sizes: [ 6, 7, 8, 9, 10 ],
        image: '/assets/image/products/product21.jpg'
    },
    {
        id: 22,
        name: "Nike SB Dunk Low",
        category: ["SkateBoarding", "LifeStyle"],
        genre: "Unisex",
        description: "Las Nike SB Dunk Low son unas zapatillas diseñadas para el skate, pero también son muy populares en la moda urbana. Con su suela gruesa y amortiguación Zoom Air, ofrecen rendimiento y estilo.",
        price: 230000,
        stock: 8,
        brand: "Nike",
        sizes: [ 7, 8, 9, 10, 11 ],
        image: '/assets/image/products/product22.jpg'
    },
    {
        id: 23,
        name: "Adidas Gazelle",
        category: ["LifeStyle"],
        genre: "Unisex",
        description: "Las Adidas Gazelle son unas zapatillas clásicas con un toque vintage. Con su parte superior de ante y su suela de goma texturizada, son ideales para un look retro y casual.",
        price: 190000,
        stock: 10,
        brand: "Adidas",
        sizes: [ 6, 7, 8, 9, 10 ],
        image: '/assets/image/products/product23.jpg'
    },
    {
        id: 24,
        name: "Puma Suede Classic",
        category: ["LifeStyle"],
        genre: "Unisex",
        description: "Las Puma Suede Classic son unas zapatillas icónicas que han estado en la escena de la moda desde los años 80. Con su parte superior de ante y su suela de goma, ofrecen estilo y comodidad.",
        price: 200000,
        stock: 11,
        brand: "Puma",
        sizes: [ 6, 7, 8, 9, 10 ],
        image: '/assets/image/products/product24.jpg'
    },
    {
        id: 25,
        name: "Reebok Nano X",
        category: ["Training"],
        genre: "Unisex",
        description: "Las Reebok Nano X son unas zapatillas diseñadas para entrenamiento de alta intensidad. Con su suela estable y su parte superior transpirable, ofrecen soporte y rendimiento en cada sesión de entrenamiento.",
        price: 270000,
        stock: 6,
        brand: "Reebok",
        sizes: [ 6, 7, 8, 9, 10 ],
        image: '/assets/image/products/product25.jpg'
    }    
]
module.exports = {
    products
}