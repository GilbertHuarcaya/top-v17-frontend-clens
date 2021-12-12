import DB from '../../assets/db.json';

const getAllServices = () => {
  return DB?.services || [];
};
export default getAllServices;
