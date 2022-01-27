/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import easyinvoice from 'easyinvoice';
import { Link } from 'react-router-dom';
import { getUserOrdersFromDB } from '../../store/actions';
import Loader from '../Loader';
import bathroom from '../../img/services/bathroom.jpg';
import kitchen from '../../img/services/cocinas.jpg';
import bedroom from '../../img/services/habitaciones.jpg';
import livingroom from '../../img/services/salas.jpg';

const TitleContainer = styled.div`
  background-color: #77c6ca;
  height: 12vh;
  margin: 0;
`;

const Title = styled.h1`
  color: white;
  padding: 20px 0 0 25px;
`;

const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  background-color: white;
  min-height: 20rem;
  width: 90vw;
  max-width: 1300px;
  margin: auto auto 20px auto;
  padding: 0 0 15px 0;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (min-height: 767px) {
    margin: -45px auto 20px auto;
  }
`;

const View = styled.div`
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  width: 96%;
  height: 96%;
  margin: auto;
  margin-top: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

const Services = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* border: 1px solid red; */
  justify-content: center;
  @media screen and (min-width: 769px) {
    width: 50%;
  }
  @media screen and (min-width: 1025px) {
    width: 61%;
  }
`;

const Service = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  width: 100%;
  align-items: center;
  @media screen and (min-width: 1025px) {
    width: 70%;
    padding: 10px 10px;
  }
`;

const Img = styled.img`
  border-radius: '50px';
  width: 110px;
  height: 110px;
`;

const Nombre = styled.p`
  margin: auto;
  margin-top: 5px;
  color: black;
  font-size: 1.28em;
`;

const imgs = {
  Bano: bathroom,
  Cocina: kitchen,
  Sala: livingroom,
  Habitacion: bedroom,
};

const Scroll = styled.div`
  display: flex;
  overflow-x: scroll;
  margin: 5px 0;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0;
`;

const Dot = styled.span`
  background-color: #9faab7;
  border-radius: 50%;
  display: flex;
  font-size: 0;
  height: 8px;
  width: 8px;
  margin-left: 8px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* border: 1px solid green; */
  @media screen and (min-width: 769px) {
    min-width: 50%;
    margin-left: 10px;
  }
  @media screen and (min-width: 1025px) {
    min-width: 39%;
  }
`;

const Number = styled.h2`
  margin-top: 10px;
  color: black;
`;

const Info = styled.p`
  margin: 10px 0;
  color: black;
  font-size: 1.25em;
  line-height: 1.6em;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 10px 0;
`;

const Button = styled.button`
  margin: ${(props) => props.margin || '5px 0'};
  border: ${(props) => props.border || '2px solid #4CAF50'};
  background-color: ${(props) => props.bgColor || 'none'};
  padding: 8px;
  border-radius: 0.6rem;
  width: ${(props) => props.width || '100%'};
  color: ${(props) => props.color || '#4CAF50'};
`;

let count = 2;
const Historial = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userOrders = useSelector((state) => state.userOrders);
  const isLoading = useSelector((state) => state.isLoading);
  const [userOrdersToShow, setUserOrdersToShow] = useState([]);

  useEffect(() => {
    const getUserOrders = async () => {
      try {
        if (userOrders.length < 1) {
          getUserOrdersFromDB(dispatch, user.id);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserOrders();
  }, [user]);

  useEffect(() => {
    const setUserOders = async () => {
      try {
        if (userOrders.length > 0) {
          setUserOrdersToShow(userOrders.slice(0, count));
        }
      } catch (error) {
        console.log(error);
      }
    };
    setUserOders();
  }, [userOrders]);

  const onHandleMore = () => {
    count += 2;
    setUserOrdersToShow(userOrders.slice(0, count));
  };

  const getSampleData = (id) => {
    const order = userOrders.filter((userOrder) => userOrder._id === id);
    const services = order[0].service;

    const date = new Date(order[0].createdAt);
    const year = date.getFullYear();
    const fecha = date.toLocaleDateString('es-PE');

    const data = [];
    const total = order[0].precio;
    let totalPorHora;
    // Insert, al comienzo, todos los servicios de la orden
    order[0].service.map((service) => {
      for (let i = 0; i < order.length; i += 1) {
        data.push({
          quantity: service.cantidad,
          description: `${service.name}`,
          'tax-rate': 0,
          price: service.precio,
        });
      }
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

    if (order[0].incluirProductos === 'si') {
      // Push de la inclusion de materiales y costo
      data.push({
        quantity: 1,
        description: 'Materiales',
        'tax-rate': 0,
        price: 10,
      });
      // Hallar el costo total por cada hora brindada
      totalPorHora = (total - totalServicios - 10) / order[0].horasPorServicio;
    } else {
      totalPorHora = (total - totalServicios) / order[0].horasPorServicio;
    }

    // Push horas brindadas en la orden
    for (let i = 0; i < order.length; i += 1) {
      data.push({
        quantity: order[0].horasPorServicio,
        description: 'Horas',
        'tax-rate': 0,
        price: totalPorHora,
      });
    }

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
      logo: 'https://public.easyinvoice.cloud/img/logo_en_original.png',
      sender: {
        company: 'Clens',
        address: '4565 N Stelling Rd',
        zip: 'Lima',
        city: 'Lima',
        country: 'Peru',
      },
      client: {
        company: `${order[0].nombre}`,
        address: `${order[0].direccion}`,
        zip: `${order[0].distrito}`,
        city: `${order[0].ciudad}`,
        country: 'Peru',
      },
      information: {
        number: `${year}.000${order[0].orderNumber}`,
        date: `${fecha}`,
        'due-date': `${order[0].fecha.date}`,
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

  const DownloadInvoice = async (id) => {
    const data = getSampleData(id);
    const result = await easyinvoice.createInvoice(data);
    easyinvoice.download('myInvoice.pdf', result.pdf);
  };

  return (
    <>
      <TitleContainer>
        <Title>Historial de ordenes</Title>
      </TitleContainer>
      <OrdersContainer>
        {!isLoading ? (
          userOrdersToShow.map((order, i) => {
            const cantidadTotal = order.service.reduce(
              (sum, current) => sum + current.cantidad,
              0,
            );
            const date = new Date(order.createdAt);
            const fecha = date.toLocaleDateString('es-PE');
            return (
              <View key={order._id} order={order}>
                <Services>
                  <Scroll>
                    {order.service.map((services) => {
                      return (
                        <Service key={services._id} services={services}>
                          <Img src={imgs[services.name]} />
                          <Nombre>
                            {services.name} - {services.cantidad}
                          </Nombre>
                        </Service>
                      );
                    })}
                  </Scroll>
                  <Dots>
                    {order.service.map((total) => {
                      return <Dot key={total._id} total={total} />;
                    })}
                  </Dots>
                </Services>
                <Detail>
                  <Number>#{i + 1}</Number>
                  <Info>
                    Fecha: {fecha} <br />
                    Cantidad: {cantidadTotal} <br />
                    Total: {order.precio}
                  </Info>
                  <Buttons>
                    <Link className="btn" to={`/mi-historial/${order._id}`}>
                      <Button
                        color="white"
                        border="none"
                        bgColor="#4CAF50"
                        id={order._id}
                      >
                        Ver resumen
                      </Button>
                    </Link>
                    <Button
                      id={order._id}
                      onClick={(e) => DownloadInvoice(e.target.id)}
                    >
                      Descargar Comprobante
                    </Button>
                  </Buttons>
                </Detail>
              </View>
            );
          })
        ) : (
          <Loader />
        )}
        {userOrdersToShow.length === userOrders.length
          ? null
          : userOrdersToShow.length > 0 && (
              <Button
                margin="20px"
                type="button"
                width="150px"
                onClick={onHandleMore}
              >
                VER MAS
              </Button>
            )}
        <div id="pdf" />
      </OrdersContainer>
    </>
  );
};

export default Historial;
