import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  TrendingDown, 
  ChevronRight, 
  Star,
  Menu,
  X,
  Play,
  ArrowRight,
  BarChart3,
  DollarSign,
  Target,
  Shield,
  Smartphone,
  Eye,
  EyeOff
} from 'lucide-react';

// Mock Data
const mockStocks = [
  { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2847.50, change: 24.30, changePercent: 0.86, high: 2865.00, low: 2820.00 },
  { symbol: 'TCS', name: 'Tata Consultancy Services', price: 4234.75, change: -12.25, changePercent: -0.29, high: 4255.00, low: 4210.00 },
  { symbol: 'INFY', name: 'Infosys', price: 1876.40, change: 18.90, changePercent: 1.02, high: 1885.00, low: 1845.00 },
  { symbol: 'HINDUNILVR', name: 'Hindustan Unilever', price: 2567.30, change: -8.70, changePercent: -0.34, high: 2580.00, low: 2555.00 },
  { symbol: 'ICICIBANK', name: 'ICICI Bank', price: 1234.60, change: 15.40, changePercent: 1.26, high: 1245.00, low: 1215.00 },
  { symbol: 'HDFCBANK', name: 'HDFC Bank', price: 1687.25, change: -5.75, changePercent: -0.34, high: 1695.00, low: 1675.00 },
];

const mockMutualFunds = [
  { name: 'SBI Blue Chip Fund', nav: 89.45, returns1y: 18.5, returns3y: 14.2, risk: 'High', category: 'Large Cap' },
  { name: 'HDFC Top 100 Fund', nav: 156.78, returns1y: 16.8, returns3y: 13.9, risk: 'High', category: 'Large Cap' },
  { name: 'Axis Long Term Equity', nav: 78.23, returns1y: 22.1, returns3y: 15.6, risk: 'High', category: 'ELSS' },
  { name: 'ICICI Prudential Value Discovery', nav: 234.56, returns1y: 19.4, returns3y: 12.8, risk: 'Very High', category: 'Mid Cap' },
  { name: 'Mirae Asset Large Cap', nav: 98.76, returns1y: 17.2, returns3y: 14.5, risk: 'High', category: 'Large Cap' },
];

const mockPortfolio = {
  totalValue: 2567890.50,
  totalInvested: 2245000.00,
  totalGains: 322890.50,
  gainsPercent: 14.38,
  holdings: [
    { type: 'Stocks', symbol: 'RELIANCE', quantity: 50, avgPrice: 2650.00, currentPrice: 2847.50, value: 142375.00 },
    { type: 'Stocks', symbol: 'TCS', quantity: 25, avgPrice: 4100.00, currentPrice: 4234.75, value: 105868.75 },
    { type: 'Mutual Fund', name: 'SBI Blue Chip Fund', units: 1000, nav: 89.45, value: 89450.00 },
    { type: 'Mutual Fund', name: 'HDFC Top 100 Fund', units: 500, nav: 156.78, value: 78390.00 },
  ]
};

// Header Component
export const Header = ({ onNavigation, onLoginClick, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { name: 'Stocks', key: 'stocks' },
    { name: 'FD', key: 'fd' },
    { name: 'Mutual Funds', key: 'mutual-funds' },
    { name: 'Portfolio', key: 'portfolio' },
    { name: 'More', key: 'more' }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Groww</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigation(item.key)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.key
                    ? 'text-emerald-600 border-b-2 border-emerald-600'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search Groww..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onLoginClick}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Login/Sign up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => {
                      onNavigation(item.key);
                      setIsMenuOpen(false);
                    }}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 w-full text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => {
                    onLoginClick();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium bg-emerald-500 text-white rounded-md mt-2"
                >
                  Login/Sign up
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Groww your{' '}
              <span className="text-emerald-500">wealth</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Built for a Growing India
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg"
            >
              Get started
            </motion.button>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>India's #1</span>
              </div>
              <div className="mx-4 w-px h-4 bg-gray-300"></div>
              <div className="text-sm text-gray-500">
                Trusted by 3.5+ crore investors
              </div>
            </div>
          </motion.div>

          {/* Right Content - Isometric Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1537879328743-bdb57714de3a"
              alt="Financial Growth Illustration"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-100/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Stocks & Intraday',
      description: 'Long-term or short-term, high risk or low risk. Be the kind of investor you want to be.',
      image: 'https://images.pexels.com/photos/28682345/pexels-photo-28682345.jpeg'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Mutual funds & SIPs',
      description: 'Invest in hand-picked mutual funds recommended by experts.',
      image: 'https://images.pexels.com/photos/7887860/pexels-photo-7887860.jpeg'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Futures & Options',
      description: 'Trade in futures and options with advanced tools and real-time data.',
      image: 'https://images.unsplash.com/photo-1634117622592-114e3024ff27'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/20587183/pexels-photo-20587183.jpeg"
              alt="Financial Building"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Indian markets at your fingertips.
            </h2>
            <p className="text-gray-600 mb-8">
              Long-term or short-term, high risk or low risk. Be the kind of investor you want to be.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-emerald-50 transition-colors duration-200 cursor-pointer group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 group-hover:bg-emerald-200 transition-colors duration-200">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 transition-colors duration-200" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Mobile App Section
const MobileAppSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Credit, when you need it.
            </h2>
            <p className="text-gray-600 mb-8">
              Apply for a loan, get it within minutes.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-700">Instant approval process</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-700">Competitive interest rates</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-700">Flexible repayment options</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Know more
            </motion.button>
          </motion.div>

          {/* Right Side - Mobile App Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/28682353/pexels-photo-28682353.jpeg"
                alt="Groww Mobile App"
                className="w-80 h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// HomePage Component
export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <MobileAppSection />
      <CreditSection />
    </div>
  );
};

// StocksPage Component
export const StocksPage = () => {
  const [watchlist, setWatchlist] = useState(['RELIANCE', 'TCS']);
  const [filter, setFilter] = useState('all');

  const toggleWatchlist = (symbol) => {
    setWatchlist(prev => 
      prev.includes(symbol) 
        ? prev.filter(s => s !== symbol)
        : [...prev, symbol]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Stocks</h1>
          
          {/* Filters */}
          <div className="flex space-x-4 mb-6">
            {['all', 'gainers', 'losers', 'watchlist'].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors duration-200 ${
                  filter === filterType
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-emerald-50'
                }`}
              >
                {filterType}
              </button>
            ))}
          </div>

          {/* Market Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nifty 50</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-emerald-600">19,674.25</span>
                <span className="text-emerald-600 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +124.30 (0.63%)
                </span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sensex</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-emerald-600">66,112.44</span>
                <span className="text-emerald-600 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +445.87 (0.68%)
                </span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bank Nifty</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-red-600">45,234.75</span>
                <span className="text-red-600 flex items-center">
                  <TrendingDown className="w-4 h-4 mr-1" />
                  -234.12 (-0.51%)
                </span>
              </div>
            </div>
          </div>

          {/* Stock List */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Stock Prices</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">High/Low</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockStocks.map((stock) => (
                    <motion.tr
                      key={stock.symbol}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <button
                            onClick={() => toggleWatchlist(stock.symbol)}
                            className="mr-3"
                          >
                            <Star
                              className={`w-5 h-5 ${
                                watchlist.includes(stock.symbol)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          </button>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{stock.symbol}</div>
                            <div className="text-sm text-gray-500">{stock.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">₹{stock.price}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm font-medium ${
                          stock.change >= 0 ? 'text-emerald-600' : 'text-red-600'
                        }`}>
                          {stock.change >= 0 ? '+' : ''}₹{stock.change} ({stock.changePercent}%)
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ₹{stock.high} / ₹{stock.low}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded text-sm transition-colors duration-200">
                          Buy
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// MutualFundsPage Component
export const MutualFundsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Large Cap', 'Mid Cap', 'Small Cap', 'ELSS', 'Debt'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Mutual Funds</h1>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-emerald-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Top Performing Funds */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mockMutualFunds.map((fund, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{fund.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    fund.risk === 'High' ? 'bg-yellow-100 text-yellow-800' :
                    fund.risk === 'Very High' ? 'bg-red-100 text-red-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {fund.risk} Risk
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">NAV</span>
                    <span className="font-semibold">₹{fund.nav}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">1Y Returns</span>
                    <span className="text-emerald-600 font-semibold">{fund.returns1y}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">3Y Returns</span>
                    <span className="text-emerald-600 font-semibold">{fund.returns3y}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category</span>
                    <span className="text-gray-900">{fund.category}</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded text-sm transition-colors duration-200">
                    Invest
                  </button>
                  <button className="border border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded text-sm transition-colors duration-200">
                    SIP
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// PortfolioPage Component
export const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Portfolio</h1>
          
          {/* Portfolio Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Total Value</h3>
              <p className="text-2xl font-bold text-gray-900">₹{mockPortfolio.totalValue.toLocaleString()}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Invested</h3>
              <p className="text-2xl font-bold text-gray-900">₹{mockPortfolio.totalInvested.toLocaleString()}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Total Gains</h3>
              <p className="text-2xl font-bold text-emerald-600">₹{mockPortfolio.totalGains.toLocaleString()}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Returns</h3>
              <p className="text-2xl font-bold text-emerald-600">{mockPortfolio.gainsPercent}%</p>
            </div>
          </div>

          {/* Holdings */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Your Holdings</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Investment</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">P&L</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockPortfolio.holdings.map((holding, index) => {
                    const pnl = holding.type === 'Stocks' 
                      ? (holding.currentPrice - holding.avgPrice) * holding.quantity
                      : holding.value - (holding.units * 75); // Mock calculation for MF
                    const pnlPercent = holding.type === 'Stocks'
                      ? ((holding.currentPrice - holding.avgPrice) / holding.avgPrice * 100)
                      : (pnl / (holding.units * 75) * 100);

                    return (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="hover:bg-gray-50 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {holding.symbol || holding.name}
                            </div>
                            <div className="text-sm text-gray-500">{holding.type}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {holding.quantity || holding.units}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₹{holding.avgPrice || (holding.nav - 15).toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₹{holding.currentPrice || holding.nav}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          ₹{holding.value.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`text-sm font-medium ${pnl >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                            {pnl >= 0 ? '+' : ''}₹{pnl.toFixed(2)}
                            <div className="text-xs">({pnlPercent.toFixed(2)}%)</div>
                          </div>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// LoginModal Component
export const LoginModal = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {isSignUp ? 'Sign Up' : 'Login'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
              </>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200"
            >
              {isSignUp ? 'Create Account' : 'Login'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
            >
              {isSignUp 
                ? 'Already have an account? Login' 
                : "Don't have an account? Sign Up"
              }
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};