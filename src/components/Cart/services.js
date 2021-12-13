import DB from '../../assets/db.json';

const getAllServices = () => {
  return DB?.onCart || [];
};
export default getAllServices;
