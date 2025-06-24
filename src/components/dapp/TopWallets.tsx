
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Wallet, TrendingUp } from "lucide-react";

const TopWallets = () => {
  const [wallets] = useState([
    { address: "0x742d35Cc4Bf6c2C18F03B8F3C4EE6D82eE5Bd8aA", balance: "1,247.83 ETH", rank: 1, verified: true },
    { address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045", balance: "892.45 ETH", rank: 2, verified: true },
    { address: "0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed", balance: "654.21 ETH", rank: 3, verified: true },
    { address: "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E", balance: "543.67 ETH", rank: 4, verified: false },
    { address: "0xdD2FD4581271e230360230F9337D5c0430Bf44C0", balance: "487.92 ETH", rank: 5, verified: true },
    { address: "0x8ba1f109551bD432803012645Hac136c80A6fF96", balance: "423.18 ETH", rank: 6, verified: true },
    { address: "0x6B175474E89094C44Da98b954EedeAC495271d0F", balance: "389.76 ETH", rank: 7, verified: false },
    { address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE", balance: "356.44 ETH", rank: 8, verified: true },
    { address: "0x4Fabb145d64652a948d72533023f6E7A623C7C53", balance: "334.89 ETH", rank: 9, verified: true },
    { address: "0x514910771AF9Ca656af840dff83E8264EcF986CA", balance: "312.55 ETH", rank: 10, verified: false },
    { address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", balance: "298.33 ETH", rank: 11, verified: true },
    { address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", balance: "276.89 ETH", rank: 12, verified: true },
    { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", balance: "254.67 ETH", rank: 13, verified: true },
    { address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", balance: "234.12 ETH", rank: 14, verified: false },
    { address: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e", balance: "218.45 ETH", rank: 15, verified: true },
    { address: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51", balance: "203.78 ETH", rank: 16, verified: true },
    { address: "0x4d224452801ACEd8B2F0aebE155379bb5D594381", balance: "189.23 ETH", rank: 17, verified: false },
    { address: "0x8E870D67F660D95d5be530380D0eC0bd388289E1", balance: "176.92 ETH", rank: 18, verified: true },
    { address: "0x3472A5A71965499acd81997a54BBA8D852C6E53d", balance: "165.44 ETH", rank: 19, verified: true },
    { address: "0x1BAAd9BFa20Eb279d2E3f3e859e3ae9ddcc73e51", balance: "154.87 ETH", rank: 20, verified: false }
  ]);

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm mb-12">
      <CardHeader>
        <CardTitle className="flex items-center text-yellow-400">
          <Trophy className="w-6 h-6 mr-2" />
          Top 20 Validated Wallets
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {wallets.map((wallet) => (
            <div
              key={wallet.address}
              className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg border border-gray-600/30 hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    wallet.rank <= 3 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black' 
                      : 'bg-gray-600 text-white'
                  }`}>
                    {wallet.rank}
                  </div>
                  <Wallet className="w-4 h-4 text-gray-400" />
                </div>
                
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-mono text-sm">
                      {truncateAddress(wallet.address)}
                    </span>
                    {wallet.verified && (
                      <Badge variant="outline" className="border-green-400 text-green-400 text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Balance: {wallet.balance}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">
                  +{(Math.random() * 10 + 1).toFixed(1)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopWallets;
