/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import bathroom from '../../img/services/bathroom.jpg';
import kitchen from '../../img/services/cocinas.jpg';
import bedroom from '../../img/services/habitaciones.jpg';
import livingroom from '../../img/services/salas.jpg';
import { getAllOrders } from './Orders';

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
  background-color: white;
  height: 100%;
  width: 90vw;
  margin: auto;
  margin-top: -45px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
`;

const View = styled.div`
  width: 100%;
  margin-top: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Services = styled.div`
  display: flex;
  height: 20vh;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
`;

const Service = styled.div`
  display: flex;
  padding: 30px;
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
`;

const Img = styled.img`
  border-radius: "50px";
  width: 120px;
  height: 120px;
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
`;

const Dots = styled.div`
  top: 260px;
  position: absolute;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const X = styled.div``;

const Dot = styled.span`
  background-color: #9faab7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 23vh;
  border: 1px solid green;
`;

const Number = styled.h2`
  margin-top: 10px;
  color: black;
`;

const Info = styled.p`
  margin-top: 8px;
  color: black;
  font-size: 1.25em;
  line-height: 1.6em;
`;

const Button = styled.button`
  margin-top: 10px;
  border: ${(props) => props.border || '2px solid #4CAF50'};
  background-color: ${(props) => props.bgColor || 'none'};
  padding: 8px;
  border-radius: 0.6rem;
  width: 45vw;
  color: ${(props) => props.color || '#4CAF50'};
`;

const Historial = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getMyOrders = async () => {
      try {
        const data = await getAllOrders();
        setTimeout(() => {
          setOrders(data);
        }, 1000);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    getMyOrders();
  }, []);


  const totalServices = orders.map(item => item.services)

  return (
    <>
      <TitleContainer>
        <Title>Historial de ordenes</Title>
      </TitleContainer>
      <OrdersContainer>
        {orders.length > 0 ? (
          orders.map(order => {
            return (
              <View key={order.id} order={order}>
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
                      <X key={total.id} total={total}>
                      <Dot>a</Dot>
                      </X>
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
                  <Button color="white" border="none" bgColor="#4CAF50">
                    Ver resumen
                  </Button>
                  <Button>Descargar Comprobante</Button>
                </Detail>
              </View>
            );
          })
        ) : (
          <h1>Loading ...</h1>
        )}
      </OrdersContainer>
    </>
  );
};

export default Historial;
