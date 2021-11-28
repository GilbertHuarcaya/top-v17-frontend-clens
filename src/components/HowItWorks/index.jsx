import './styles.scss';
import MinititleTitle from '../MinititleTitle.jsx';
import SectionInfo from '../SectionInfo';
import PlansImg from '../../img/icons/HowItWorks/plans.svg';
import RateImg from '../../img/icons/HowItWorks/rate.svg';
import SchudleImg from '../../img/icons/HowItWorks/schudle.svg';

const HowItWorks = () => (
  <section className="how-it-works">
    <MinititleTitle
      title="Agil servicio de limpieza"
      minititle="Como funciona"
    />
    <SectionInfo
      title="1. Nuestros planes"
      info="Revisa nuestros planes de servicios, todos están cuidadosamente diseñados para que se ajuste a sus necesidades."
      imgn={PlansImg}
    />
    <SectionInfo
      title="2. Agenda"
      info="Despues de elegir el plan que mas se ajuste a sus requerimientos, agende la fecha y hora en que necesita el servicio."
      imgn={SchudleImg}
    />
    <SectionInfo
      title="3. Califique"
      info="Una vez haya finalizado el servicio lo invitamos a que nos deje una calificación por el servicio recibido, podrá recibir beneficios para su próxima contratación"
      imgn={RateImg}
    />
  </section>
);

export default HowItWorks;
