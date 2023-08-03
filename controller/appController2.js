let counter = 0;
const showCount = (req, res) => {
    res.status(200).json({ counter });
};

const increment = (req, res) => {
    counter++;
    res.status(200).json({ counter });
}

const decrement = (req, res) => {
    counter--;
    res.status(200).json({ counter });
}

module.exports = {
    showCount,
    increment,
    decrement
}