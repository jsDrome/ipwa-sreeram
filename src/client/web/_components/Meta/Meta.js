import React from 'react';
import { Helmet } from "react-helmet";

const time = new Date().getTime();

const MetaTags = () => <Helmet>
  {/* <title>Sreeram Padmanabhan | Web Engineer | Web of thoughts</title> */}
  <meta charset="UTF-8" />
  <meta name="theme-color" content="#ffffff" />
  <meta name="author" content="Sreeram Padmanabhan" />
  <meta name="keywords" content="sreeram, sreeram padmanabhan, jsdrome, siri, london, berlin, india, trivandrum, web, web developer, web engineer, creativity, web of thoughts" />
  <meta property="og:image:alt" content="sreeram padmanabhan" />
  <meta name="description" content="An artist of the web, perfectionist engineering the web using JavaScript. I emphasise on creativity, time management and efficiency." />
  <meta property="og:description" content="An artist of the web, perfectionist engineering the web using JavaScript. I emphasise on creativity, time management and efficiency." />
  {/* <meta property="og:title" content="Sreeram Padmanabhan - Web Engineer | Web of thoughts" /> */}
  <meta property="og:image" content="/img/og_image.jpg" />
  <meta property="og:type" content="website" />
  <meta property="fb:app_id" content="297023651089707" />
  <meta name="viewport" content="minimum-scale=1, initial-scale=1, maximum-scale=5, width=device-width, shrink-to-fit=no" />
  <meta name="robots" content="index,follow" />
  <script>{`window.dataLayer = [{ event: "gtm.js", "gtm.start": ${time} }]`}</script>
  <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-NBLT7MF"></script>
  <link rel="stylesheet" type="text/css" href="/css/app.css" />
  <link rel="icon" href="/img/favicon.ico" />
  <link rel="apple-touch-icon" href="/img/logo-192.png" />
  <link rel="manifest" href="/manifest.json" />
  {process.env.NODE_ENV === 'production' && <script>
    {`if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then(registration => { console.log('SW registered: ', registration); })
          .catch(registrationError => { console.log('SW registration failed: ', registrationError); });
      });
    }`}</script>}
  <script data-ad-client="ca-pub-6831276331714408" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <style>{`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500&display=swap');
  body {
    font-family: 'Ubuntu', sans-serif, Verdana, 'Trebuchet MS', 'Tahoma';
    margin: 0;
    background-blend-mode: multiply, multiply, normal, normal;
    background-image: linear-gradient(to bottom left, rgba(119,41,83,0.16) 0, rgba(119,41,83,0.16) 49.9%, transparent 50%),linear-gradient(to bottom right, rgba(228,228,228,0.5) 0, rgba(228,228,228,0.5) 49.9%, transparent 50%),linear-gradient(to top left, #fff 0%, #fff 49.3%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%),linear-gradient(-89deg, #e95420 0%, #772953 42%, #2c001e 94%);
    background-position: top right, top left, right bottom -1px, left top;
    background-repeat: no-repeat;
    background-size: 74% 99.83%, 68% 91%, 103.8% 20.26%, 100% 99.8%;
    margin: 0;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  pre {
    font-family: "Courier 10 Pitch", Courier, monospace;
    font-size: 80%;
    line-height: 140%;
    white-space: pre;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -o-pre-wrap;
    background: #f3f5f6;
    padding: 10px;
    border: dashed 1px #ccc;
    text-align: left
  }
  code {
    font-family: Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
    line-height: 140%;
    white-space: pre;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -o-pre-wrap;
    background: #f3f5f6;
    text-align: left
  }
  .clearfix {
    clear: both;
  }
  #iframe {
    display: block;
    margin: -15px 0 0 -15px;
    width: calc(100% + 30px);
  }
  @media (max-width: 600px) {
    #iframe {
      margin-top: -65px;
    }
  }
  `}
  </style>
</Helmet>;

export default MetaTags;
