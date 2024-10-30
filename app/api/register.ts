import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {prenom, nom, genre, dateNaiss, email, password} = req.body;

        try {
            const response = await axios.post('https://localhost:3000/signup', { prenom, nom, genre, dateNaiss, email, password });
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({message: 'Echec de l\'inscription.'});
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Methode ${req.method} nom autorisee`);
    }


}