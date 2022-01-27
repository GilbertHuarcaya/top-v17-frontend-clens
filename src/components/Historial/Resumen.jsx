/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import easyinvoice from 'easyinvoice';
import { getOrderById } from '../../store/actions';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Pdf = styled.div`
  border: 1px solid black;
  font-size: 30px;
`;

const Button = styled.button`
  border: 1px solid green;
  height: 60px;
  width: 120px;
  font-size: 20px;
  margin: auto;
`;

const Resumen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderById = useSelector((state) => state.orderById);
  const [download, setDownload] = useState({});

  useEffect(() => {
    const script1 = document.createElement('script');
    const script2 = document.createElement('script');

    script1.src = 'https://unpkg.com/pdfjs-dist/build/pdf.min.js';
    script2.src = 'https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js';

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    getOrderById(dispatch, id);
  }, [id]);

  useEffect(() => {
    const getSampleData = () => {
      const services = orderById.service;
      const date = new Date(orderById.createdAt);
      const year = date.getFullYear();
      const fecha = date.toLocaleDateString('es-PE');

      const data = [];
      const total = orderById.precio;
      let totalPorHora;

      // Insert, al comienzo, todos los servicios de la orden
      services.map((service) => {
        data.push({
          quantity: service.cantidad,
          description: `${service.name}`,
          'tax-rate': 0,
          price: service.precio,
        });
      });
      // Array de los precios totales de los servicios (precio individual * cantidad)
      const totalServicioIndividual = services.map((service) => {
        return service.precio * service.cantidad;
      });
      // Reduce el array para hallar el total
      const totalServicios = totalServicioIndividual.reduce(
        (sum, current) => sum + current,
        0,
      );

      if (orderById.incluirProductos === 'si') {
        // Push de la inclusion de materiales y costo
        data.push({
          quantity: 1,
          description: 'Materiales',
          'tax-rate': 0,
          price: 10,
        });
        // Hallar el costo total por cada hora brindada
        totalPorHora =
          (total - totalServicios - 10) / orderById.horasPorServicio;
      } else {
        totalPorHora = (total - totalServicios) / orderById.horasPorServicio;
      }

      // Push horas brindadas en la orden
      data.push({
        quantity: orderById.horasPorServicio,
        description: 'Horas',
        'tax-rate': 0,
        price: totalPorHora,
      });

      // Data para la impresion del pdf
      return {
        images: {
          logo: 'https://clens.netlify.app/static/media/logo-clens.8126eea5.jpg',
        },
        sender: {
          company: 'Clens',
          address: '4565 N Stelling Rd',
          zip: 'Lima',
          city: 'Lima',
          country: 'Peru',
        },
        client: {
          company: `${orderById.nombre}`,
          address: `${orderById.direccion}`,
          zip: `${orderById.distrito}`,
          city: `${orderById.ciudad}`,
          country: 'Peru',
        },
        information: {
          number: `${year}.000${orderById.orderNumber}`,
          date: `${fecha}`,
          'due-date': `${orderById.fecha.date}`,
        },
        products: data,
        'bottom-notice': 'Muchas gracias por confiar en nuestro servicio.',
        settings: {
          currency: 'USD',
          'tax-notation': 'IGV',
          'margin-top': 70,
          'margin-right': 40,
          'margin-left': 40,
          'margin-bottom': 1,
        },
        translate: {
          invoice: 'Recibo',
          invoiceNumber: 'Numero de Recibo',
          invoiceDate: 'Fecha de Recibo',
          products: 'Servicios',
          quantity: 'Cantidad',
          price: 'Precio',
          date: 'Fecha Compra',
          'due-date': 'Fecha Servicio',
        },
      };
    };

    const renderInvoice = async () => {
      document.getElementById('pdf').innerHTML = 'Cargando datos';
      const data = getSampleData();
      const result = await easyinvoice.createInvoice(data);
      setDownload(data);
      easyinvoice.render('pdf', result.pdf);
    };

    renderInvoice();
  }, [orderById]);

  const DownloadInvoice = async () => {
    const result = await easyinvoice.createInvoice(download);
    easyinvoice.download('myInvoice.pdf', result.pdf);
  };

  return (
    <Container>
      <Button onClick={() => navigate(-1)}>Regresar</Button>
      <Pdf id="pdf" />
      <Button onClick={() => DownloadInvoice()}>Descargar</Button>
    </Container>
  );
};

export default Resumen;
