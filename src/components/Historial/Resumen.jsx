/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import easyinvoice from 'easyinvoice';
import { getOrderById } from '../../store/actions';
import Loader from '../Loader';

const Container = styled.div`
  display: flex;
  margin: auto;
`;

const Pdf = styled.div`
  border: 1px solid black;
`;

const Resumen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const orderById = useSelector((state) => state.orderById);
  const isLoading = useSelector((state) => state.isLoading);

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
        documentTitle: 'Recibo',
        locale: 'es-PE',
        currency: 'USD',
        taxNotation: 'vat',
        marginTop: 50,
        marginRight: 50,
        marginLeft: 50,
        marginBottom: 25,
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
          'tax-notation': 'IGV',
        },
        translate: {
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
      const data = getSampleData();
      const result = await easyinvoice.createInvoice(data);
      easyinvoice.render('pdf', result.pdf);
    };
    renderInvoice();
  }, [orderById]);

  return <Container>{!isLoading ? <Pdf id="pdf" /> : <Loader />}</Container>;
};

export default Resumen;
