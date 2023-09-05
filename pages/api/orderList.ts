// pages/api/todos.ts

import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../env/env'; // Import your MySQL connection
import Order from './order'; // Import your TypeScript interface

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const [rows] = await db.execute<Order[]>('SELECT * FROM ordertb');
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
