import axiosInstance from "@/apiConfigs/axiosInstance";
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
