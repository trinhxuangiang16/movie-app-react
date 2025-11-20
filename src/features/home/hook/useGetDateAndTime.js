export const getDateAndTime = (time) => {
  const dateObject = new Date(time);

  const ngay = String(dateObject.getDate()).padStart(2, "0");
  const thang = String(dateObject.getMonth() + 1).padStart(2, "0");
  const bienLuuNgayThang = `${ngay}/${thang}`;

  const gio = String(dateObject.getHours()).padStart(2, "0");
  const phut = String(dateObject.getMinutes()).padStart(2, "0");
  const bienLuuGio = `${gio}:${phut}`;

  return { date: bienLuuNgayThang, time: bienLuuGio };
};
