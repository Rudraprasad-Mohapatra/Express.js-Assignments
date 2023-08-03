const homePage = (req, res) => {
    res.status(200).json({
        msg:`I am homepage`
    });
}

const aboutPage = (req, res) => {
    res.status(200).json({
        msg:`I am about page`
    });
}

const contactPage = (req, res) => {
    res.status(200).json({
        email:`support@pwskills.com`
    });
}

module.exports = {
    homePage,
    aboutPage,
    contactPage
}