export const createMorningToday = () => {
  const Array = [];
  for (let i = 7; i < 12; i += 1) {
    const hora = {
      hora: `${i < 10 ? 0 : ''}${i}:00`,
      horaLlegada: `${i < 10 ? 0 : ''}${i}:00 - ${i}:30`,
      disabled: i < new Date().getHours() + 1,
    };
    const nextHora = {
      hora: `${i < 10 ? 0 : ''}${i}:30`,
      horaLlegada: `${i < 10 ? 0 : ''}${i}:30 - ${i + 1}:00`,
      disabled: i < new Date().getHours() + 1,
    };
    Array.push(hora);
    Array.push(nextHora);
  }
  return Array;
};
export const createAfternoonToday = () => {
  const Array = [];
  for (let i = 13; i < 18; i += 1) {
    const hora = {
      hora: `${i}:00`,
      horaLlegada: `${i}:00 - ${i}:30`,
      disabled: i < new Date().getHours() + 1,
    };
    const nextHora = {
      hora: `${i}:30`,
      horaLlegada: `${i}:30 - ${i + 1}:00`,
      disabled: i < new Date().getHours() + 1,
    };
    Array.push(hora);
    Array.push(nextHora);
  }
  return Array;
};
export const createMorning = () => {
  const Array = [];
  for (let i = 7; i < 12; i += 1) {
    const hora = {
      hora: `${i < 10 ? 0 : ''}${i}:00`,
      horaLlegada: `${i < 10 ? 0 : ''}${i}:00 - ${i}:30`,
      disabled: false,
    };
    const nextHora = {
      hora: `${i < 10 ? 0 : ''}${i}:30`,
      horaLlegada: `${i < 10 ? 0 : ''}${i}:30 - ${i + 1}:00`,
      disabled: false,
    };
    Array.push(hora);
    Array.push(nextHora);
  }
  return Array;
};
export const createAfternoon = () => {
  const Array = [];
  for (let i = 13; i < 18; i += 1) {
    const hora = {
      hora: `${i}:00`,
      horaLlegada: `${i}:00 - ${i}:30`,
      disabled: false,
    };
    const nextHora = {
      hora: `${i}:30`,
      horaLlegada: `${i}:30 - ${i + 1}:00`,
      disabled: false,
    };
    Array.push(hora);
    Array.push(nextHora);
  }
  return Array;
};
