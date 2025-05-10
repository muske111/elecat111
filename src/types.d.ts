// Type definitions for the project

// Extend Window interface for potential global objects
interface Window {
  ethereum?: any;
}

// Define any shared interfaces or types here
interface TokenData {
  price: number;
  change: number;
  marketCap: number;
  volume: number;
}