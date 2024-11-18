import { TonClient } from "ton-client-js";

const client = new TonClient({
  network: {
    server_address: "https://main.ton.dev",
  },
});

export const getBalance = async (address: string) => {
  const { result } = await client.net.query_collection({
    collection: "accounts",
    filter: { id: { eq: address } },
    result: "balance",
  });
  return result[0]?.balance || 0;
};

export const sendTransaction = async (from: string, to: string, amount: number) => {
  // ...transaction logic...
};
