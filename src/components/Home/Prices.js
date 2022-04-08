import { Ticker } from "react-ts-tradingview-widgets";
import "./Prices.css";

    const TickerSymbol = [
      {
        "proName": "NASDAQ:MELI",
        "title": "Mercadolibre"
      },
      {
        "proName": "NYSE:GLOB",
        "title": "Globant"
      },
      {
        "proName": "NASDAQ:TSLA",
        "title": "Tesla"
      },
      {
        "proName": "BITSTAMP:BTCUSD",
        "title": "BTC/USD"
      },
      {
        "proName": "BITSTAMP:ETHUSD",
        "title": "ETH/USD"
      }
      ]

function Prices() {
  return (
      <>
    <Ticker id="prices" colorTheme="light" symbols={TickerSymbol}></Ticker>
    </>
   
  )
}

export default Prices