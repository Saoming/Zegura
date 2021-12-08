import React from "react";
import NextApp from "next/app";
import Script from "next/script";
import "../styles/globals.css";

export default class MyApp extends NextApp {
  render() {
    const { Component, pageProps, props } = this.props;
    return (
      <>
        {/* Prismic Preview */}

        {/* Analytics */}
        {/* <Script strategy="lazyOnload">
          Analytics tag goes here
        </Script> */}

        <Component {...pageProps} {...props} />
      </>
    );
  }
}