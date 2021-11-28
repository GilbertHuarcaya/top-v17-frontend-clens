import SectionInfo from '../SectionInfo';

import Cocinas from '../../img/services/cocinas.jpg';
import Baños from '../../img/services/bathroom.jpg';
import Habitaciones from '../../img/services/habitaciones.jpg';
import Salas from '../../img/services/salas.jpg';
import LiCheck from '../ListWithCheck/index';

import './styles.scss';

const Cards = () => (
  <div className="cards">
    <div className="card">
      <SectionInfo
        title="Cocinas"
        info="Suministramos productos Biodegradables para la implementación de Programas de Limpieza y Desinfección."
        imgn={Cocinas}
      />
      <div className="card__description">
        <ul>
          <LiCheck item="Pisos" />
          <LiCheck item="Hornillas y lavaderos" />
          <LiCheck item="Brillado en cromos" />
          <LiCheck item="Lunas" />
          <LiCheck item="Campana" />
          <LiCheck item="Desempolvar superficies" />
        </ul>
      </div>
    </div>
    <div className="card">
      <SectionInfo
        title="Baños"
        info="Suministramos productos Biodegradables para la implementación de Programas de Limpieza y Desinfección y  productos para el cuidado de pisos, Higiene de Manos, limpieza y Desinfección de Baños."
        imgn={Baños}
      />
      <div className="card__description">
        <ul>
          <LiCheck item="Pisos" />
          <LiCheck item="Espejos" />
          <LiCheck item="Brillado en cromos" />
          <LiCheck item="Lunas de duchas" />
          <LiCheck item="Mayolicas" />
          <LiCheck item="Desempolvar gabinetes" />
        </ul>
      </div>
    </div>
    <div className="card">
      <SectionInfo
        title="Salones"
        info="Suministramos productos Biodegradables para la implementación de Programas de Limpieza y Desinfección y productos para el cuidado de pisos, Higiene de Manos, limpieza y Desinfección de Baños."
        imgn={Salas}
      />
      <div className="card__description">
        <ul>
          <LiCheck item="Pisos" />
          <LiCheck item="Espejos" />
          <LiCheck item="Brillado en cromos" />
          <LiCheck item="Limpieza muebles y tapiz" />
          <LiCheck item="Desempolvar muebles" />
          <LiCheck item="Desempolvar cortinas" />
        </ul>
      </div>
    </div>
    <div className="card">
      <SectionInfo
        title="Habitaciones"
        info="Suministramos productos Biodegradables para la implementación de Programas de Limpieza y Desinfección y productos para el cuidado de pisos, Higiene de Manos, limpieza y Desinfección de Baños."
        imgn={Habitaciones}
      />
      <div className="card__description">
        <ul>
          <LiCheck item="Pisos" />
          <LiCheck item="Cama" />
          <LiCheck item="Alfombras" />
          <LiCheck item="Cajones" />
          <LiCheck item="Limpieza muebles y tapiz" />
          <LiCheck item="Desempolvar cortinas" />
        </ul>
      </div>
    </div>
  </div>
);

export default Cards;
