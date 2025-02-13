import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        try {
            const response = await axios.post('https://localhost:3001/login', { email, password });
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({message: 'Echec de la connexion.',error});
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Methode ${req.method} non autorisee`);
    }
}
