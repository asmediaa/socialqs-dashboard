
import { useState } from 'react';

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = () => {
    const fakeAddress = 'rEXAMPLE123...XYZ';
    setWalletConnected(true);
    setWalletAddress(fakeAddress);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-6">Social Qs Dashboard</h1>
      {!walletConnected ? (
        <button
          onClick={connectWallet}
          className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="text-center">
          <p className="mb-2">Wallet Connected:</p>
          <code className="bg-gray-800 p-2 rounded">{walletAddress}</code>
        </div>
      )}
    </div>
  );
}
