

#kütüphaneler
- json-server
json-server son sürümünde db dosyasında id string türünde olmalıdır.

package.json dosyasında scripts altına ben json server i 4000 portundan çalışyıracağım için api fetch isteklerindede 4000 portunu vermeliyim.
.env adında bir dosya oluşturup içerisine
REACT_APP_API_URL=http://localhost:4000 yazılarak port no dinamik hale getirildi.

Örnek:
const res = await fetch("http://localhost:4000/orders");

"server": "json-server --watch db.json --port 4000" ekleyip npm start server yapılmalı
buradaki port no env içerisine kaç yazılmışsa o yazılmalı 


- react-icons

- react-toastify 
Aşağıdaki importları layout içerisine eklemeyi unutmayalım.
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

- npm install chart.js
- npm i react-chartjs-2
# Dashboard-with-NextJs
