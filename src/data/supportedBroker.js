const dataSupportedBroker = [
  {
    id: 'agena-trader',
    name: 'AgenaTrader',
    isStock: true,
    isFutures: false,
    isForex: true,
    isOptions: false
  },
  {
    id: 'ally',
    name: 'Ally',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: true
  },
  {
    id: 'apex-trader',
    name: 'ApexTrader',
    isStock: false,
    isFutures: true,
    isForex: false,
    isOptions: false
  },
  {
    id: 'blackwood-pro',
    name: 'Blackwood Pro',
    isStock: true,
    isFutures: true,
    isForex: false,
    isOptions: false
  },
  {
    id: 'bookmap',
    name: 'Bookmap',
    isStock: false,
    isFutures: true,
    isForex: false,
    isOptions: false
  },
  {
    id: 'capital-one',
    name: 'Capital One',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'cloud-quant',
    name: 'CloudQuant',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'cmeg',
    name: 'CMEG',
    isStock: true,
    isFutures: true,
    isForex: false,
    isOptions: true
  },
  {
    id: 'colmex-pro',
    name: 'Colmex Pro',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'cqg-desktop',
    name: 'CQG Desktop',
    isStock: false,
    isFutures: true,
    isForex: false,
    isOptions: false
  },
  {
    id: 'cqg-integrated-client',
    name: 'CQG Integrated Client',
    isStock: false,
    isFutures: true,
    isForex: false,
    isOptions: false
  },
  {
    id: 'cqg-trader',
    name: 'CQG Trader',
    isStock: false,
    isFutures: true,
    isForex: false,
    isOptions: false
  },
  {
    id: 'c-trader',
    name: 'cTrader',
    isStock: false,
    isFutures: false,
    isForex: true,
    isOptions: false
  },
  {
    id: 'currenex',
    name: 'Currenex',
    isStock: false,
    isFutures: false,
    isForex: true,
    isOptions: false
  },
  {
    id: 'das-trader-pro',
    name: 'DAS Trader Pro',
    isStock: true,
    isFutures: true,
    isForex: false,
    isOptions: true
  },
  {
    id: 'dukascopy-jforex',
    name: 'Dukascopy JForex',
    isStock: false,
    isFutures: false,
    isForex: true,
    isOptions: false
  },
  {
    id: 'e-trade',
    name: 'E-Trade',
    isStock: true,
    isFutures: true,
    isForex: false,
    isOptions: false
  },
  {
    id: 'etx-capital',
    name: 'ETX Capital',
    isStock: false,
    isFutures: false,
    isForex: true,
    isOptions: false
  },
  {
    id: 'fantasy-stock-traders',
    name: 'Fantasy Stock Traders',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'fidelity',
    name: 'Fidelity',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: true
  },

  {
    id: 'forex-com',
    name: 'Forex.com',
    isStock: false,
    isFutures: false,
    isForex: true,
    isOptions: false
  },
  {
    id: 'fxcm',
    name: 'fxcm',
    isStock: false,
    isFutures: false,
    isForex: true,
    isOptions: false
  },
  {
    id: 'hold-brothers',
    name: 'Hold Brothers',
    isStock: true,
    isFutures: true,
    isForex: false,
    isOptions: true
  },
  {
    id: 'infinity-futures',
    name: 'Infinity Futures',
    isStock: false,
    isFutures: true,
    isForex: false,
    isOptions: true
  },
  {
    id: 'interactive-brokers',
    name: 'Interactive Brokers',
    isStock: true,
    isFutures: true,
    isForex: true,
    isOptions: true
  },
  {
    id: 'investor-rt',
    name: 'Investor/RT',
    isStock: false,
    isFutures: true,
    isForex: false,
    isOptions: true
  },
  {
    id: 'lightspeed',
    name: 'Lightspeed',
    isStock: true,
    isFutures: true,
    isForex: false
  },
  {
    id: 'mb-trading',
    name: 'MB Trading',
    isStock: true,
    isFutures: true,
    isForex: true,
    isOptions: true
  },
  {
    id: 'merrill-edge',
    name: 'Merrill Edge',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: true
  },
  {
    id: 'meta-trader4',
    name: 'MetaTrader4 (MT4)',
    isStock: false,
    isFutures: false,
    isForex: true
  },
  {
    id: 'meta-trader5',
    name: 'MetaTrader5 (MT5)',
    isStock: true,
    isFutures: true,
    isForex: true
  },
  {
    id: 'motive-wave',
    name: 'MotiveWave',
    isStock: false,
    isFutures: true,
    isForex: true,
    isOptions: true
  },
  {
    id: 'multi-charts',
    name: 'MultiCharts',
    isStock: true,
    isFutures: true,
    isForex: true,
    isOptions: true
  },
  {
    id: 'ninja-trader',
    name: 'NinjaTrader',
    isStock: true,
    isFutures: true,
    isForex: true,
    isOptions: true
  },
  {
    id: 'oanda',
    name: 'Oanda',
    isStock: false,
    isFutures: false,
    isForex: true,
    isOptions: true
  },
  {
    id: 'open-e-cry',
    name: 'Open E Cry',
    isStock: true,
    isFutures: true,
    isForex: false
  },
  {
    id: 'options-house',
    name: 'OptionsHouse',
    isStock: true,
    isFutures: true,
    isForex: false,
    isOptions: true
  },
  {
    id: 'options-xpress',
    name: 'OptionsXpress',
    isStock: true,
    isFutures: true,
    isForex: false,
    isOptions: true
  },
  {
    id: 'photon-trader',
    name: 'PhotonTrader',
    isStock: false,
    isFutures: true,
    isForex: false,
    isOptions: true
  },
  {
    id: 'plus500',
    name: 'Plus500',
    isStock: false,
    isFutures: false,
    isForex: true,
    isOptions: true
  },

  {
    id: 'prodigio-rts',
    name: 'Prodigio RTS',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'prop-reports',
    name: 'PropReports',
    isStock: true,
    isFutures: true,
    isForex: false,
    isOptions: true
  },
  {
    id: 'questrade',
    name: 'Questrade',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: true
  },
  {
    id: 'redi-plus',
    name: 'REDIPlus',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: true
  },
  {
    id: 'rithmic-trader',
    name: 'Rithmic R | Trader',
    isStock: false,
    isFutures: true,
    isForex: false,
    isOptions: false
  },
  {
    id: 'robinhood',
    name: 'Robinhood',
    isStock: true,
    isFutures: true,
    isForex: false,
    isOptions: true
  },
  {
    id: 'schwab',
    name: 'Schwab',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: true
  },
  {
    id: 'scotia-itrade',
    name: 'Scotia iTRADE',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'scottrade',
    name: 'Scottrade',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: true
  },
  {
    id: 'sierra-chart',
    name: 'Sierra Chart',
    isStock: true,
    isFutures: true,
    isForex: true,
    isOptions: false
  },
  {
    id: 'sogo-trade',
    name: 'SogoTrade',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: true
  },
  {
    id: 'speed-trader',
    name: 'SpeedTrader',
    isStock: true,
    isFutures: true,
    isForex: false,
    isOptions: true
  },
  {
    id: 'sterling-trader-pro',
    name: 'Sterling Trader Pro',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: true
  },
  {
    id: 'sure-trader',
    name: 'SureTrader',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: true
  },
  {
    id: 't4',
    name: 'T4',
    isStock: false,
    isFutures: true,
    isForex: false,
    isOptions: false
  },
  {
    id: 'takion',
    name: 'Takion',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'tastyworks',
    name: 'Tastyworks',
    isStock: true,
    isFutures: true,
    isForex: false,
    isOptions: true
  },
  {
    id: 'td-ameritrade',
    name: 'TD Ameritrade',
    isStock: true,
    isFutures: true,
    isForex: false,
    isOptions: true
  },
  {
    id: 'thinkorswim',
    name: 'Thinkorswim',
    isStock: true,
    isFutures: true,
    isForex: true,
    isOptions: true
  },
  {
    id: 'etc-clearing',
    name: 'ETC Clearing',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },

  {
    id: 'thinkorswim-2',
    name: 'Thinkorswim',
    isStock: true,
    isFutures: true,
    isForex: true,
    isOptions: true
  },
  {
    id: 'trade-monster',
    name: 'TradeMonster',
    isStock: true,
    isFutures: true,
    isForex: false,
    isOptions: true
  },
  {
    id: 'cor-clearing',
    name: 'COR Clearing',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'trade-station',
    name: 'TradeStation',
    isStock: true,
    isFutures: true,
    isForex: true,
    isOptions: true
  },
  {
    id: 'trade-zero',
    name: 'TradeZero',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: true
  },
  {
    id: 'trading-sim-com',
    name: 'TradingSim.com',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'tradovate',
    name: 'Tradovate',
    isStock: false,
    isFutures: true,
    isForex: false,
    isOptions: false
  },
  {
    id: 'transact-futures',
    name: 'TransAct Futures',
    isStock: false,
    isFutures: true,
    isForex: false,
    isOptions: false
  },
  {
    id: 'tt',
    name: 'TT',
    isStock: false,
    isFutures: true,
    isForex: false,
    isOptions: false
  },
  {
    id: 'united-traders',
    name: 'United Traders',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'velocity-futures',
    name: 'Velocity Futures',
    isStock: false,
    isFutures: true,
    isForex: false,
    isOptions: false
  },
  {
    id: 'warrior-trading-simulator',
    name: 'Warrior Trading Simulator',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: true
  },
  {
    id: 'webull',
    name: 'Webull',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'assent-llc',
    name: 'Assent, LLC',
    isStock: false,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'other-apex-cleared-brokers',
    name: 'Other Apex-cleared brokers',
    isStock: true,
    isFutures: true,
    isForex: false,
    isOptions: true
  },
  {
    id: 'bank-of-america-merrill-edge-merrill-lynch',
    name: 'Bank of America Merrill Edge Merrill Lynch',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'zecco',
    name: 'Zecco',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'cobra-trading',
    name: 'Cobra Trading',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'vanguard',
    name: 'Vanguard',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'e-option',
    name: 'eOption',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },

  {
    id: 'rowe-price',
    name: 'T. Rowe Price',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'southwest-securities',
    name: 'Southwest Securities',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'morgan-stanley',
    name: 'Morgan Stanley',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'master-trader',
    name: 'MasterTrader',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'jpr-capital',
    name: 'JPR Capital',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'jp-morgan-chase',
    name: 'JP Morgan Chase',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'investrade',
    name: 'Investrade',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'gx-trader',
    name: 'GX Trader',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'goldman-sachs',
    name: 'Goldman Sachs',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  },
  {
    id: 'folio-fn',
    name: 'FolioFN',
    isStock: true,
    isFutures: false,
    isForex: false,
    isOptions: false
  }
]

export default dataSupportedBroker
