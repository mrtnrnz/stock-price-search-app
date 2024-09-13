"use client";
import type { FC, JSX } from "react";
import { useState, useEffect } from "react";

import Input from "@/components/Input";

import useFetchStockSymbolMutation from "@/apiConfigs/useFetchStockSymbolMutation";
import useDebounce from "@/hooks/useDebounce";

const Home: FC<{}> = (): JSX.Element => {
  const [value, setValue] = useState("");
  const inputDebouncedValue = useDebounce(value);

  const { mutate, data } = useFetchStockSymbolMutation();

  useEffect(() => {
    if (inputDebouncedValue) {
      mutate(inputDebouncedValue);
    }
  }, [inputDebouncedValue, mutate]);

  return (
    <Input
      label="Enter stock symbol:"
      value={value}
      placeholder="Ex. AAPL"
      onChange={(evt) => setValue(evt?.target?.value)}
      result={data && data?.c > 0 ? data?.c : undefined}
      error={
        data?.c != undefined && data?.c != 0
          ? undefined
          : data && "Invalid stock symbol."
      }
    />
  );
};

export default Home;
