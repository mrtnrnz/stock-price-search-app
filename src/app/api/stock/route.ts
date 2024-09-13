import axiosInstance from "@/apiConfigs/axiosInstance";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type ResponseDTO = {
  c: number;
  d: number;
  dp: number;
  h: number;
  l: number;
  o: number;
  pc: number;
  t: number;
};

// export default async function POST(req: NextApiRequest, res: NextApiResponse) {
//   const { symbol } = req.query;

//   if (!symbol || typeof symbol !== "string") {
//     return res.status(400).json({ error: "Stock symbol is required." });
//   }

//   try {
//     const apiKey = process.env.FINNHUB_API_KEY;
// const response = await axiosInstance.request<ResponseDTO>({
//   method: "GET",
//   url: `/quote?symbol=${symbol}`,
//   headers: {
//     "X-Finnhub-Token": apiKey || "",
//   },
// });

//     res.status(200).json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch stock data" });
//   }
// }

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { symbol } = body;

  if (!symbol) {
    return NextResponse.json(
      { error: "Stock symbol is required" },
      { status: 400 }
    );
  }

  try {
    const apiKey = process.env.FINNHUB_API_KEY;
    const response = await axiosInstance.request<ResponseDTO>({
      method: "GET",
      url: `/quote?symbol=${symbol}`,
      headers: {
        "X-Finnhub-Token": apiKey || "",
      },
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch stock data" },
      { status: 500 }
    );
  }
}
