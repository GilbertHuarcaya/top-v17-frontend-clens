import easyinvoice from 'easyinvoice';
import getAllOrders from './Orders';

function getSampleData() {
  const data1 = getAllOrders();
  console.log(data1[0].precio);
  return {
    documentTitle: 'Recibo',
    locale: 'es-PE',
    currency: 'USD',
    taxNotation: 'vat',
    marginTop: 50,
    marginRight: 50,
    marginLeft: 50,
    marginBottom: 25,
    logo: 'https://public.easyinvoice.cloud/img/logo_en_original.png',
    sender: {
      company: 'Clens',
      address: '4565 N Stelling Rd',
      zip: '1234',
      city: 'Lima',
      country: 'Peru',
    },
    client: {
      company: 'Thomas Robertson',
      address: '8109 Wycliff Ave',
      zip: '4567',
      city: 'Lima',
      country: 'Peru',
    },
    invoiceNumber: '2021.0001',
    invoiceDate: '1.1.2021',
    products: [
      {
        quantity: '2',
        description: 'Test1',
        tax: 18,
        price: 33.87,
      },
      {
        quantity: '4',
        description: 'Test2',
        tax: 18,
        price: 10.45,
      },
    ],
    bottomNotice: 'Muchas gracias por confiar en nuestro servicio.',
    // Used for translating the headers to your preferred language
    // Defaults to English. Below example is translated to Dutch
    translate: {
      invoiceNumber: 'Numero de Recibo',
      invoiceDate: 'Fecha de Recibo',
      products: 'Servicios',
      quantity: 'Cantidad',
      price: 'Precio',
      //     "subtotal": "Subtotaal",
      //     "total": "Totaal"
    },
  };
}

// function createInvoice() {
//   // See documentation for all data properties
//   const data = getSampleData();
//   const result = easyinvoice.createInvoice(data);
//   return result;
// }

const DownloadInvoice = async () => {
  // See documentation for all data properties
  const data = getSampleData();
  const result = await easyinvoice.createInvoice(data);
  easyinvoice.download('myInvoice.pdf', result.pdf);
  //	you can download like this as well:
  //	easyinvoice.download();
  //	easyinvoice.download('myInvoice.pdf');
};

export default DownloadInvoice;
