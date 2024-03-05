const axios = require('axios');
const dotenv = require('dotenv');

const marvelController = require('../controllers/marvelController.js')

jest.mock('axios');

dotenv.config();

describe('getCharacters', () => {
    it('should fetch characters successfully', async () => {
        const mockResponse = {
            data: {
                data: {
                    results: ['Abyss'] 
                }
            }
        };

        axios.get.mockResolvedValue(mockResponse);

        const req = { params: { nameStartsWith: 'A' } };
        const res = {
            json: jest.fn()
        };

        await marvelController.getCharacters(req, res);

        expect(res.json).toHaveBeenCalledWith(['Abyss']);
    });

    it('should handle errors when fetching characters', async () => {
        const errorMessage = 'Error fetching characters';

        axios.get.mockRejectedValue(new Error(errorMessage));

        const req = { params: { nameStartsWith: 'Abyss' } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await marvelController.getCharacters(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: new Error(errorMessage), message: 'Unable to fetch characters' });
    });
});

describe('getComics', () => {
    it('should fetch comics successfully', async () => {
        const mockResponse = {
            data: {
                data: {
                    results: ['Comic1', 'Comic2']
                }
            }
        };

        axios.get.mockResolvedValue(mockResponse);

        const req = { params: { id: 123 } };
        const res = {
            json: jest.fn()
        };

        await marvelController.getComics(req, res);

        expect(res.json).toHaveBeenCalledWith(['Comic1', 'Comic2']);
    });

    it('should handle errors when fetching comics', async () => {
        const errorMessage = 'Error fetching comics';

        axios.get.mockRejectedValue(new Error(errorMessage));

        const req = { params: { id: 123 } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await marvelController.getComics(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: new Error(errorMessage), message: 'Unable to fetch comics' });
    });
});