
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpDown, Shield, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SwapInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

const SwapInterface = ({ isOpen, onClose }: SwapInterfaceProps) => {
  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [isSwapping, setIsSwapping] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const { toast } = useToast();

  const tokens = [
    { symbol: "ETH", name: "Ethereum", price: 2340.50 },
    { symbol: "BTC", name: "Bitcoin", price: 43250.00 },
    { symbol: "USDT", name: "Tether", price: 1.00 },
    { symbol: "USDC", name: "USD Coin", price: 1.00 },
    { symbol: "BNB", name: "Binance Coin", price: 245.80 },
    { symbol: "ADA", name: "Cardano", price: 0.45 },
    { symbol: "SOL", name: "Solana", price: 98.75 },
    { symbol: "DOT", name: "Polkadot", price: 7.25 }
  ];

  const handleWalletValidation = () => {
    // Simulate wallet validation
    setTimeout(() => {
      setWalletConnected(true);
      toast({
        title: "Wallet Connected!",
        description: "Your wallet has been validated and connected successfully",
      });
    }, 2000);
  };

  const handleSwap = async () => {
    if (!fromToken || !toToken || !fromAmount) {
      toast({
        title: "Missing Information",
        description: "Please fill in all swap details",
        variant: "destructive"
      });
      return;
    }

    setIsSwapping(true);
    
    // Simulate swap process with gas fees and liquidity calculation
    setTimeout(() => {
      setIsSwapping(false);
      const success = Math.random() > 0.1; // 90% success rate
      
      if (success) {
        toast({
          title: "Swap Successful!",
          description: `Successfully swapped ${fromAmount} ${fromToken} for ${toAmount} ${toToken}`,
        });
      } else {
        toast({
          title: "Swap Failed",
          description: "Transaction failed due to insufficient liquidity or gas fees",
          variant: "destructive"
        });
      }
    }, 4000);
  };

  const calculateToAmount = (amount: string) => {
    if (!amount || !fromToken || !toToken) return "";
    
    const fromPrice = tokens.find(t => t.symbol === fromToken)?.price || 0;
    const toPrice = tokens.find(t => t.symbol === toToken)?.price || 0;
    
    if (fromPrice && toPrice) {
      const result = (parseFloat(amount) * fromPrice) / toPrice;
      setToAmount(result.toFixed(6));
    }
  };

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value);
    calculateToAmount(value);
  };

  const swapTokens = () => {
    const tempToken = fromToken;
    const tempAmount = fromAmount;
    setFromToken(toToken);
    setToToken(tempToken);
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  };

  const gasFee = fromAmount ? (parseFloat(fromAmount) * 0.003).toFixed(4) : "0.0000";
  const liquidityPool = fromToken && toToken ? "Available" : "N/A";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center text-green-400">
            <ArrowUpDown className="w-5 h-5 mr-2" />
            Token Swap
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Swap tokens with the best rates and security
          </DialogDescription>
        </DialogHeader>

        {!walletConnected ? (
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
              <AlertCircle className="w-6 h-6 text-orange-400 mr-2" />
              <span className="text-sm text-orange-400">Wallet Validation Required</span>
            </div>
            <p className="text-gray-400">You need to validate your wallet before you can perform swaps.</p>
            <Button 
              onClick={handleWalletValidation}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              <Shield className="w-4 h-4 mr-2" />
              Validate Wallet to Continue
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* From Token */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">From</label>
              <div className="flex space-x-2">
                <Select value={fromToken} onValueChange={setFromToken}>
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white w-32">
                    <SelectValue placeholder="Token" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    {tokens.map((token) => (
                      <SelectItem key={token.symbol} value={token.symbol} className="text-white hover:bg-gray-700">
                        {token.symbol}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  placeholder="0.00"
                  value={fromAmount}
                  onChange={(e) => handleFromAmountChange(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white flex-1"
                />
              </div>
              {fromToken && (
                <div className="text-xs text-gray-400">
                  ${tokens.find(t => t.symbol === fromToken)?.price.toLocaleString()}
                </div>
              )}
            </div>

            {/* Swap Button */}
            <div className="flex justify-center">
              <Button
                onClick={swapTokens}
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-400 hover:bg-gray-700"
              >
                <ArrowUpDown className="w-4 h-4" />
              </Button>
            </div>

            {/* To Token */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">To</label>
              <div className="flex space-x-2">
                <Select value={toToken} onValueChange={setToToken}>
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white w-32">
                    <SelectValue placeholder="Token" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    {tokens.map((token) => (
                      <SelectItem key={token.symbol} value={token.symbol} className="text-white hover:bg-gray-700">
                        {token.symbol}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  placeholder="0.00"
                  value={toAmount}
                  readOnly
                  className="bg-gray-800 border-gray-600 text-white flex-1"
                />
              </div>
              {toToken && (
                <div className="text-xs text-gray-400">
                  ${tokens.find(t => t.symbol === toToken)?.price.toLocaleString()}
                </div>
              )}
            </div>

            {/* Swap Info */}
            {fromToken && toToken && fromAmount && (
              <div className="bg-gray-800/50 p-3 rounded-lg space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Exchange Rate</span>
                  <span className="text-white">
                    1 {fromToken} = {toAmount && fromAmount ? (parseFloat(toAmount) / parseFloat(fromAmount)).toFixed(4) : "0"} {toToken}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Gas Fee</span>
                  <span className="text-white">{gasFee} {fromToken}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Liquidity</span>
                  <span className="text-green-400">{liquidityPool}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Network Fee</span>
                  <span className="text-white">~$2.50</span>
                </div>
              </div>
            )}

            <Button 
              onClick={handleSwap}
              disabled={isSwapping || !fromToken || !toToken || !fromAmount}
              className="w-full bg-gradient-to-r from-green-500 to-teal-500"
            >
              {isSwapping ? "Processing Swap..." : "Swap Tokens"}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SwapInterface;
