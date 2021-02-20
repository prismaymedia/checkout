import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <h1>Checkout</h1>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            src="https://checkout.epayco.co/checkout.js"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
