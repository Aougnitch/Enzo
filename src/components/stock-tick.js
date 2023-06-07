import React from "react";
import TradingViewWidget, {
  BarStyles,
  IntervalTypes
} from "react-tradingview-widget";
import { Container, Row, Col } from 'react-bootstrap';
import  { useEffect, useRef } from 'react';


const configChart = {
  autosize: true,
  calendar: false,
  details: false,
  locale: "en",
  timezone: "Europe/Berlin",
  hide_top_toolbar: true,
  style: BarStyles.LINE,
  interval: 15
};





export default function stocktick() {




  return (


    <Container fluid className="full-viewport-section">
    <Row className="h-100 fourthsec-col">

    <Col xs={12} md={12} lg={12} className="d-flex align-items-center justify-content-center">
    
     <h2 className="stock-header text-3D">  Market watchers </h2>

    </Col>


    <Col xs={12} md={12} lg={12} className="d-flex align-items-center justify-content-center">

    <div className="stocktick">
      <div className="serv">
        <ul>
          <li>
            <TradingViewWidget symbol="NASDAQ:AAPL" {...configChart} />
          </li>
          <li>
            <TradingViewWidget symbol="NASDAQ:NFLX" {...configChart} />
          </li>
          <li>
            <TradingViewWidget symbol="XETR:TL0" {...configChart} />
          </li>
          <li>
            <TradingViewWidget symbol="NASDAQ:SP" {...configChart} />
          </li>
          <li>
            <TradingViewWidget symbol="NYSE:XOM" {...configChart} />
          </li>
          <li>
            <TradingViewWidget symbol="BTC" {...configChart} />
          </li>
          <li>
            <TradingViewWidget symbol="ETH" {...configChart} />
          </li>
          <li>
            <TradingViewWidget symbol="SOL" {...configChart} />
          </li>
          <li>
            <TradingViewWidget symbol="ADA" {...configChart} />
          </li>
        </ul>
      </div>
    </div>
    </Col>
    </Row>
  </Container>
  );
}






