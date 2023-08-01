
const welcome = (req, res) => {
    res.status(200).send("Welcome to Men & Women Dummy Data!")
}
const PDofMen = (req, res) => {
    res.status(200).json([{
        id: "1",
        name: "Men's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }, {
        id: "2",
        name: "Men's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }, {
        id: "3",
        name: "Men's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }, {
        id: "4",
        name: "Men's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }, {
        id: "5",
        name: "Men's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }, {
        id: "6",
        name: "Men's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }, {
        id: "7",
        name: "Men's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }, {
        id: "8",
        name: "Men's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }, {
        id: "9",
        name: "Men's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }, {
        id: "10",
        name: "Men's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }]);
}
const PDofWomen = (req, res) => {
    res.status(200).json([{
        id: "1",
        name: "Women's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }, {
        id: "2",
        name: "Women's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }, {
        id: "3",
        name: "Women's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }, {
        id: "4",
        name: "Women's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }, {
        id: "5",
        name: "Women's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }, {
        id: "6",
        name: "Women's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }, {
        id: "7",
        name: "Women's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }, {
        id: "8",
        name: "Women's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }, {
        id: "9",
        name: "Women's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }, {
        id: "10",
        name: "Women's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }]);
}
const PNF = (req, res) => {
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Page Not Found!</title>
    </head>
    <body>
        <h1>Page Not Found!</h1>
    </body>
    </html>
`;
res.setHeader("content-type","text/html")
    res.status(400).send(htmlContent);
}
module.exports = {
    welcome,
    PDofMen,
    PDofWomen,
    PNF
}