
import { useState, useEffect } from "react";
import { Wallet, TrendingUp, Shield, Users, MessageSquare, ArrowUpDown, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WalletValidationModal from "@/components/dapp/WalletValidationModal";
import SwapInterface from "@/components/dapp/SwapInterface";
import TopWallets from "@/components/dapp/TopWallets";
import LiveStats from "@/components/dapp/LiveStats";
import AuthModal from "@/components/dapp/AuthModal";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { User } from "@supabase/supabase-js";

const DApp = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isSwapOpen, setIsSwapOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (event === 'SIGNED_IN') {
        toast({
          title: "Welcome!",
          description: "Successfully signed in to RevShield DApp",
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [toast]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setConnectedWallet(null);
    toast({
      title: "Signed Out",
      description: "You have been successfully signed out",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

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
              {user && (
                <Button
                  onClick={() => setIsSwapOpen(true)}
                  variant="outline"
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
                >
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  Swap
                </Button>
              )}
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-300">
                    {user.email}
                  </span>
                  <Button
                    onClick={handleSignOut}
                    variant="outline"
                    className="border-red-400/50 text-red-400 hover:bg-red-400/10"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              )}
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
          {!user && (
            <div className="mt-8">
              <Button
                onClick={() => setIsAuthModalOpen(true)}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
              >
                Get Started - Sign Up Free
              </Button>
            </div>
          )}
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
                onClick={() => user ? setIsWalletModalOpen(true) : setIsAuthModalOpen(true)}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                {user ? "Validate Wallet" : "Sign In to Validate"}
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
                onClick={() => user ? setIsSwapOpen(true) : setIsAuthModalOpen(true)}
                className="w-full bg-gradient-to-r from-green-500 to-teal-500"
              >
                {user ? "Start Swap" : "Sign In to Swap"}
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
                disabled={!user}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 disabled:opacity-50"
              >
                {user ? "View Analytics" : "Sign In Required"}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Top Wallets Section */}
        <TopWallets />
      </div>

      {/* Modals */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
      
      {user && (
        <>
          <WalletValidationModal 
            isOpen={isWalletModalOpen}
            onClose={() => setIsWalletModalOpen(false)}
            onWalletConnected={setConnectedWallet}
          />
          
          <SwapInterface 
            isOpen={isSwapOpen}
            onClose={() => setIsSwapOpen(false)}
          />
        </>
      )}
    </div>
  );
};

export default DApp;
