// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import type { AnimeCardType } from "../../interfaces";

// Fake users data
const animeCard: AnimeCardType[] = [];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(404).json(animeCard);
}
