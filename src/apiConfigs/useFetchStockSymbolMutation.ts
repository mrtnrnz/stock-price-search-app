import { useMutation } from "@tanstack/react-query";
import axios from "axios";

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

export default function useFetchStockSymbolMutation() {
  return useMutation({
    mutationFn: async (stockSymbol: string): Promise<ResponseDTO> => {
      const response = await axios.request({
        method: "POST",
        url: `/api/stock`,
        data: { symbol: stockSymbol },
      });

      return response?.data;
    },
  });
}
