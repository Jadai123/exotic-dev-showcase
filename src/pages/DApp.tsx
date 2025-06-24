
import { useState } from "react";
import { Wallet, TrendingUp, Shield, ArrowUpDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import WalletValidationModal from "@/components/dapp/WalletValidationModal";
import SwapInterface from "@/components/dapp/SwapInterface";
import TopWallets from "@/components/dapp/TopWallets";
import LiveStats from "@/components/dapp/LiveStats";
import { useToast } from "@/hooks/use-toast";

const DApp = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isSwapOpen, setIsSwapOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSignup = () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    // Simulate newsletter signup
    toast({
      title: "Submitted!",
      description: "Thank you for subscribing to our newsletter",
    });
    setEmail("");
    setIsNewsletterOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-700/50 backdrop-blur-md bg-black/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                RevShield DApp
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setIsSwapOpen(true)}
                variant="outline"
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
              >
                <ArrowUpDown className="w-4 h-4 mr-2" />
                Swap
              </Button>
              <Button
                onClick={() => setIsNewsletterOpen(true)}
                variant="outline"
                className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10"
              >
                <Mail className="w-4 h-4 mr-2" />
                Newsletter
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Next-Gen Crypto Security
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Validate wallets, perform secure swaps, and protect yourself from crypto scams with our advanced dApp platform
          </p>
        </div>

        {/* Live Stats */}
        <LiveStats />

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-cyan-400">
                <Shield className="w-5 h-5 mr-2" />
                Wallet Validation
              </CardTitle>
              <CardDescription className="text-gray-400">
                Verify wallet authenticity and security status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => setIsWalletModalOpen(true)}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                Validate Wallet
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-green-400">
                <ArrowUpDown className="w-5 h-5 mr-2" />
                Secure Swapping
              </CardTitle>
              <CardDescription className="text-gray-400">
                Swap tokens with advanced security checks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => setIsSwapOpen(true)}
                className="w-full bg-gradient-to-r from-green-500 to-teal-500"
              >
                Start Swap
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-400">
                <TrendingUp className="w-5 h-5 mr-2" />
                Analytics
              </CardTitle>
              <CardDescription className="text-gray-400">
                Real-time market data and insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500"
              >
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Top Wallets Section */}
        <TopWallets />
      </div>

      {/* Newsletter Modal */}
      <Dialog open={isNewsletterOpen} onOpenChange={setIsNewsletterOpen}>
        <DialogContent className="sm:max-w-md bg-gray-900 border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center text-purple-400">
              <Mail className="w-5 h-5 mr-2" />
              Newsletter Signup
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Stay updated with the latest crypto security news
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newsletter-email">Email Address</Label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="your.email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
              />
            </div>

            <Button 
              onClick={handleNewsletterSignup}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Wallet Validation Modal */}
      <WalletValidationModal 
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
        onWalletConnected={setConnectedWallet}
      />
      
      {/* Swap Interface */}
      <SwapInterface 
        isOpen={isSwapOpen}
        onClose={() => setIsSwapOpen(false)}
      />
    </div>
  );
};

export default DApp;
