
import { useState, useEffect } from "react";
import { Users, Wallet, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LiveStats = () => {
  const [walletCount, setWalletCount] = useState(17000);
  const [userCount, setUserCount] = useState(20000);
  const [messageCount, setMessageCount] = useState(10000);

  useEffect(() => {
    const interval = setInterval(() => {
      setWalletCount(prev => {
        if (prev >= 30000) return 30000;
        return prev + Math.floor(Math.random() * 5) + 1;
      });
      
      setUserCount(prev => {
        if (prev >= 30000) return 30000;
        return prev + Math.floor(Math.random() * 3) + 1;
      });
      
      setMessageCount(prev => {
        if (prev >= 30000) return 30000;
        return prev + Math.floor(Math.random() * 7) + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      <Card className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-400/30 backdrop-blur-sm">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center mb-2">
            <Wallet className="w-8 h-8 text-cyan-400 mr-2" />
            <span className="text-sm text-cyan-400 font-medium">VALIDATED WALLETS</span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            {formatNumber(walletCount)}
          </div>
          <div className="flex items-center justify-center">
            <div className="w-2 h-2 rounded-full mr-2 bg-green-400 animate-pulse"></div>
            <span className="text-xs text-gray-400">Live</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border-green-400/30 backdrop-blur-sm">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center mb-2">
            <Users className="w-8 h-8 text-green-400 mr-2" />
            <span className="text-sm text-green-400 font-medium">ACTIVE USERS</span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            {formatNumber(userCount)}
          </div>
          <div className="flex items-center justify-center">
            <div className="w-2 h-2 rounded-full mr-2 bg-green-400 animate-pulse"></div>
            <span className="text-xs text-gray-400">Live</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400/30 backdrop-blur-sm">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center mb-2">
            <MessageSquare className="w-8 h-8 text-purple-400 mr-2" />
            <span className="text-sm text-purple-400 font-medium">MESSAGES</span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            {formatNumber(messageCount)}
          </div>
          <div className="flex items-center justify-center">
            <div className="w-2 h-2 rounded-full mr-2 bg-green-400 animate-pulse"></div>
            <span className="text-xs text-gray-400">Live</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveStats;
