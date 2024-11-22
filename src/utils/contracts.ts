import { TonClient, WalletContractV4 } from "ton";
import { getHttpEndpoint } from "@orbs-network/ton-access";

export class WalletService {
  private client: TonClient | undefined;
  private wallet: WalletContractV4 | null = null;

  constructor() {
    this.initializeClient();
  }

  private async initializeClient() {
    const endpoint = await getHttpEndpoint();
    this.client = new TonClient({ endpoint });
  }

  async connect(address: string) {
    // Initialize wallet contract
    this.wallet = new WalletContractV4(this.client, address);
    return this.wallet;
  }

  async getBalance(): Promise<string> {
    if (!this.wallet) throw new Error("Wallet not connected");
    const balance = await this.client.getBalance(this.wallet.address);
    return balance.toString();
  }

  async sendTransaction(to: string, amount: bigint) {
    if (!this.wallet) throw new Error("Wallet not connected");
    // Implement transaction logic
  }
}

export const walletService = new WalletService();
