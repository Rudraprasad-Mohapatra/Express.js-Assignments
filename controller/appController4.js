const randomNum = (req, res) => {
    const randomNumber = Math.floor((Math.random() * 100) + 1);
    res.status(200).json({
        random:randomNumber
    })
}

module.exports = randomNum;