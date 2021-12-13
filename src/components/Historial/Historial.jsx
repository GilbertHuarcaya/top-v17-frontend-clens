/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import bathroom from '../../img/services/bathroom.jpg';
import kitchen from '../../img/services/cocinas.jpg';
import bedroom from '../../img/services/habitaciones.jpg';
import livingroom from '../../img/services/salas.jpg';
import getAllOrders from './Orders';
import DownloadInvoice from './Descarga'

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
  height: 100%;
  width: 90vw;
  max-width: 1300px;
  margin: -45px auto 20px auto;
  padding: 0 0 15px 0;
  border-radius: 20px;
`;

const View = styled.div`
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
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
  border-radius: "50px";
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
  'bathroom': bathroom,
  'kitchen': kitchen,
  'livingroom': livingroom,
  'bedroom': bedroom,
};

const serviceName = {
  'bathroom': 'Baño',
  'kitchen': 'Cocina',
  'livingroom': 'Sala',
  'bedroom': 'Cuarto',
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
    margin-left: 10px
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
  const [orders, setOrders] = useState([]);
  const [ordersToShow, setOrdersToShow] = useState([]);

  const getOrders = () => {
    try {
      const data = getAllOrders();
      setTimeout(() => {
        setOrders(data);
        setOrdersToShow(data.slice(0, count))
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleMore = () => {
    count += 2;
    setOrdersToShow(orders.slice(0, count))
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <TitleContainer>
        <Title>Historial de ordenes</Title>
      </TitleContainer>
      <OrdersContainer>
        {ordersToShow.length > 0 ? (
          ordersToShow.map(order => {
            return (
              <View key={order.id} order={order} >
              <Services>
                <Scroll>
                  {order.services.map(services => {
                    return (
                      <Service key={services.id} services={services}>
                        <Img src={imgs[services]} />
                        <Nombre>{serviceName[services]}</Nombre>
                      </Service>
                    )
                  })}
                </Scroll>
                <Dots>
                  {order.services.map(total => {
                    return (
                      <Dot key={total.id} total={total}/>
                    )
                  })}
                </Dots>
                </Services>
                <Detail>
                  <Number>#{order.number}</Number>
                  <Info>
                    Fecha: {order.date} <br />
                    Cantidad: {order.services.length} <br />
                    Total: {order.precio}
                  </Info>
                  <Buttons>
                    <Button color="white" border="none" bgColor="#4CAF50">
                      Ver resumen
                    </Button>
                    <Button onClick={DownloadInvoice} >
                      Descargar Comprobante
                    </Button>
                  </Buttons>
                </Detail>
              </View>
            );
          })
        ): (
          <h1>Loading ...</h1>
        )}
        {ordersToShow.length === orders.length ?
         null : ordersToShow.length > 0 &&
         <Button margin="20px" type="button" width="150px" onClick={onHandleMore}>
          VER MAS
         </Button>
      }

      </OrdersContainer>
    </>
  );
};

export default Historial;
