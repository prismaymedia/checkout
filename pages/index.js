import { useMount } from "react-use";

export default function Index() {
  var data = {
    //Parametros compra (obligatorio)
    name: "Vestido Mujer Primavera",
    description: "Vestido Mujer Primavera",
    currency: "cop",
    amount: "12000",
    tax_base: "0",
    tax: "0",
    country: "co",
    lang: "en",

    //Onpage="false" - Standard="true"
    external: "false",

    //Atributos opcionales
    extra1: "extra1",
    extra2: "extra2",
    extra3: "extra3",
    confirmation: "http://secure2.payco.co/prueba_curl.php",
    response: "http://secure2.payco.co/prueba_curl.php",

    //Atributos cliente
    name_billing: "Andres Perez",
    address_billing: "Carrera 19 numero 14 91",
    type_doc_billing: "cc",
    mobilephone_billing: "3050000000",
    number_doc_billing: "100000000",

    //atributo deshabilitación metodo de pago
    methodsDisable: ["TDC", "PSE", "SP", "CASH", "DP"]
  };

  useMount(() => {
    var handler = window.ePayco.checkout.configure({
      key: "45b960805ced5c27ce34b1600b4b9f54",
      test: true
    });

    handler.open(data);
  });

  return <div></div>;
}
