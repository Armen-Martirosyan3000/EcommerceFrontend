import axios from "axios";

const BASE_URL = "http://localhost:9000/api/";
//այս տոկենը՝eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzFmOGJmNjk2NWI4Y2Y1N2Y3OTE2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDI2OTYyMCwiZXhwIjoxNjcwNTI4ODIwfQ.vtELS-gS7itgPlh1d31MV8Z-MOOGi_em4vvVn60xxN8 ես մտա պոստմենով ադմինին լօգին արեցի ու այնտեղից վերցրեցի այս տոկենը ու այս տոկենը մեն կօգտագործենք ներքևում՝ ${TOKEN}
// իհարկե մենք սա արեցինք ձեռքով(token-ի պահը), բայց մուտք գործելուց հետո redux-ն օգտագործելուց հետո մենք դա կվերցնենք localStorage-ից ու կտեղադրենք այստեղ


const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTVlZmE1YmU3ZWNlOTA4MGY4ZjZjNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzA3NzA2NjIsImV4cCI6MTY3MTAyOTg2Mn0.Q0Z4Be37dnuQFDPPQS8PZOwbGD0n0zjdSEqto_xeLOI";


//սա մեր հրապարակային հարցումն է
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

//սա մեր յուզերի հարցումն է, այստեղ մեզ անհրաժեշտ կլինի header, որը կպահի մեր token-ը,մենք հիշում ենք որ եմքն ստեղծել ենք JWT տոկեն և այդ տոկենը մենք գրում ենք այստեղ որը դեռ մենք չունենք քանի որ մենք չենք արել login, բայց մենք կարող ենք ստեղծել այստեղ վերևում՝const TOKEN
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});