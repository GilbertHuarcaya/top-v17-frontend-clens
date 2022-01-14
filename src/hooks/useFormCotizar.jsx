import { useState, useCallback } from 'react';

const useForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState);

  const search = (val) => {
    const valor = [0];
    form.service.forEach((e, index) => {
      if (e.name === val) {
        valor[0] = index + 1;
      }
      valor[0] += 0;
    });
    return valor;
  };
  const handleChange = useCallback((evt) => {
    const { name, value: inputValue, type, checked } = evt.target;

    const value = type === 'checkbox' ? checked : inputValue;

    switch (name) {
      case 'cocina': {
        const find = search('Cocina');
        if (find[0] >= 1) {
          form.service[find - 1] = {
            _id: '61b77b3cd185384f4cdb1557',
            name: 'Cocina',
            precio: 20,
            cantidad: value,
          };
        } else {
          form.service.push({
            _id: '61b77b3cd185384f4cdb1557',
            name: 'Cocina',
            precio: 20,
            cantidad: value,
          });
        }
        return setForm({
          ...form,
        });
      }
      case 'habitacion': {
        const find = search('Habitacion');
        if (find[0] >= 1) {
          form.service[find - 1] = {
            _id: '61b77b77d185384f4cdb155e',
            name: 'Habitacion',
            precio: 20,
            cantidad: value,
          };
        } else {
          form.service.push({
            _id: '61b77b77d185384f4cdb155e',
            name: 'Habitacion',
            precio: 20,
            cantidad: value,
          });
        }
        return setForm({
          ...form,
        });
      }
      case 'bano': {
        const find = search('Bano');
        if (find[0] >= 1) {
          form.service[find - 1] = {
            _id: '61b77bedd185384f4cdb1561',
            name: 'Bano',
            precio: 30,
            cantidad: value,
          };
        } else {
          form.service.push({
            _id: '61b77bedd185384f4cdb1561',
            name: 'Bano',
            precio: 30,
            cantidad: value,
          });
        }
        return setForm({
          ...form,
        });
      }
      case 'sala': {
        const find = search('Sala');
        if (find[0] >= 1) {
          form.service[find - 1] = {
            _id: '61b79232c619a3a5063365b5',
            name: 'Sala',
            precio: 30,
            cantidad: value,
          };
        } else {
          form.service.push({
            _id: '61b79232c619a3a5063365b5',
            name: 'Sala',
            precio: 30,
            cantidad: value,
          });
        }
        return setForm({
          ...form,
        });
      }
      default:
        return setForm({
          ...form,
          [name]: value,
        });
    }
  });
  return {
    form,
    handleChange,
  };
};

export default useForm;
