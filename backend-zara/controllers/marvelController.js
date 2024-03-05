const axios = require('axios');
const md5 = require('md5');
const dotenv = require('dotenv');
dotenv.config();

exports.getCharacters = async (req, res) => {
    try {
        const result = await axios.get(`${process.env.MARVEL_API_URL}/characters`, {
            params: {
                apikey: process.env.MARVEL_API_PUBLIC_KEY,
                limit: 50,
                ts: '1',
                hash:  md5('1' + process.env.MARVEL_API_PRIVATE_KEY + process.env.MARVEL_API_PUBLIC_KEY),
                nameStartsWith: req.params.nameStartsWith,
            }
        });
        res.json(result.data.data.results);
    } catch (error) {
        res.status(500)
        res.json({ error, message: `Unable to fetch characters on ${req.route.path}` })
    }
}

exports.getComics = async (req, res) => {
    try {
        const result = await axios.get(`${process.env.MARVEL_API_URL}/characters/${req.params.id}/comics`, {
            params: {
                apikey: process.env.MARVEL_API_PUBLIC_KEY,
                limit: 20,
                ts: '1',
                hash:  md5('1' + process.env.MARVEL_API_PRIVATE_KEY + process.env.MARVEL_API_PUBLIC_KEY),
                orderBy: 'onsaleDate'
            }
        });
        res.json(result.data.data.results);
    } catch (error) {
        res.status(500)
        res.json({ error, message: `Unable to fetch comics on ${req.route.path}` })
    }
}