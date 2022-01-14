/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import easyinvoice from 'easyinvoice';
import { getOrdersFromDB } from '../../store/actions';
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
  height: auto;
  min-height: 20rem;
  width: 90vw;
  max-width: 1300px;
  margin: -45px auto 20px auto;
  padding: 0 0 15px 0;
  border-radius: 20px;
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
  Baño: bathroom,
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
  const orders = useSelector((state) => state.orders);
  const isLoading = useSelector((state) => state.isLoading);
  const [userOrders, setUserOrders] = useState([]);
  const [userOrdersToShow, setUserOrdersToShow] = useState([]);

  const onHandleMore = () => {
    count += 2;
    setUserOrdersToShow(userOrders.slice(0, count));
  };

  useEffect(() => {
    const getUserOrders = async () => {
      try {
        if (orders.length < 1) {
          getOrdersFromDB(dispatch);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserOrders();
    const filteredOrders = orders.filter((order) => order.email === user.email);
    setUserOrders(filteredOrders);
  }, [orders]);

  useEffect(() => {
    setUserOrdersToShow(userOrders.slice(0, count));
  }, [userOrders]);

  // const prueba = (id) => {
  //   const a = userOrders.filter((userOrder) => userOrder._id === id);
  //   const b = a[0].service.forEach((s) => console.log(s));
  //   console.log(b);
  // };

  const getSampleData = (id) => {
    const order = orders.filter((userOrder) => userOrder._id === id);
    const services = order[0].service;
    const orderDate = order[0].createdAt;
    console.log(orderDate.slice(0, 10));
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
      invoiceNumber: '2021.0001',
      invoiceDate: `${order[0].createdAt.slice(0, 10)}`,
      products: services.map((service) => {
        return {
          quantity: `${service.cantidad}`,
          description: `${service.name}`,
          tax: 18,
          price: `${service.precio}`,
        };
      }),
      bottomNotice: 'Muchas gracias por confiar en nuestro servicio.',
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
  };
  const DownloadInvoice = async (id) => {
    // See documentation for all data properties
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
          userOrdersToShow.map((order) => {
            const cantidadTotal = order.service.reduce(
              (sum, current) => sum + current.cantidad,
              0,
            );
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
                  <Number>#{order.number}</Number>
                  <Info>
                    Fecha: {order.createdAt.slice(0, 10)} <br />
                    Cantidad: {cantidadTotal} <br />
                    Total: {order.precio}
                  </Info>
                  <Buttons>
                    <Button color="white" border="none" bgColor="#4CAF50">
                      Ver resumen
                    </Button>
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
      </OrdersContainer>
    </>
  );
};

export default Historial;
