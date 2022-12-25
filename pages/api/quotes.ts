import type { NextApiRequest, NextApiResponse } from "next";
import quotes from "../../data/quotes.json";

type Data = {
  name: string;
};

export interface Quote {
  text: string;
  source?: string;
  note?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Quote[]>
) {
  res.status(200).json(quotes);
}
