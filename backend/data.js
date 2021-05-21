import bcrypt from 'bcryptjs';


const data = {
    users: [
        {
          name: 'gamerited',
          email: 'admin@test.com',
          password: bcrypt.hashSync('test', 8),
          isAdmin: true,
        },
        {
          name: 'ram',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],

    products: [
        {
            _id: '1',
            name: 'Red Long Sleeves',
            category: 'Female',
            image:'/images/p1.jpg',
            price:120,
            countInStock: 10,
            brand:'Boutique',
            rating:4.5,
            numReviews:10,
            description: 'high quality product',
        },
        {
            _id: '2',
            name: 'Adidas Fit shirt',
            category: 'Shirts',
            image:'/images/p2.jpg',
            price:220,
            countInStock: 20,
            brand:'Adidas',
            rating:3.0,
            numReviews:7,
            description: 'high quality product',
        },
        {
            _id: '3',
            name: 'Nike Shoes',
            category: 'Shoes',
            image:'/images/p3.jpg',
            price:80,
            countInStock: 30,
            brand:'Nike',
            rating:4.0,
            numReviews:20,
            description: 'high quality product',
        },
        {
            _id: '4',
            name: 'Nike Hoodies',
            category: 'Hoodies',
            image:'/images/p4.jpg',
            price:69,
            countInStock: 0,
            brand:'Nike',
            rating:5.0,
            numReviews:20,
            description: 'high quality product',
        },
        {
            _id: '5',
            name: 'Puma pants',
            category: 'Pants',
            image:'/images/p5.jpg',
            price:200,
            countInStock: 90,
            brand:'Puma',
            rating:4.0,
            numReviews:14,
            description: 'high quality product',
        },
        {
            _id: '6',
            name: 'Adidas Pants',
            category: 'Pant',
            image:'/images/p6.jpg',
            price:300,
            countInStock: 0,
            brand:'Adidas',
            rating:5.0,
            numReviews:100,
            description: 'high quality product',
        }
    ]
}

export default data;