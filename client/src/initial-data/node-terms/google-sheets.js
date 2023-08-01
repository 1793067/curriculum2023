import CodeChunk from "../../components/CodeChunk";
import { googlecode } from 'react-code-blocks';
import {logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14,logo15, logo16, logo17, logo18} from "./static/"

export default function GoogleSheetsTerm () {
 return (
    <>
        <h1>Node.js!</h1>
        <h2>Связь приложения с API Google Sheets</h2>
        <ol className="terms">
            <li >Проходим по ссылке <a href="https://console.cloud.google.com"><span className="codeSpan">console.cloud.google.com</span></a> и создаем учетную запись. Указываем название и заходим в сам проект.               
                <div className="double-img">
                    <img src={logo1} alt="logo1"/>
                    <img src={logo2} alt="logo2"/>
                </div>         
                <div className="double-img">
                    <img src={logo3} alt="logo3"/>
                    <img src={logo4} alt="logo4"/>
                </div>
            </li>    
            <li >Включаем API Google Sheets: через меню в верхнем левом углу заходим в раздел APIs & Services где и включаем сервисы API. Среди имеющихся сервисов или
                в строке поиска находим Google Sheets и подключаем их               
                <div className="double-img">
                    <img src={logo5} alt="logo5"/>
                    <img src={logo6} alt="logo6"/>
                </div>
            </li>
            
            <div className="double-img">
                    <img src={logo7} alt="logo7"/>
                    <img src={logo8} alt="logo8"/>
            </div>
            
            <li >Получим учетные данные Google API. Для этого нужно создать учетную запись <span className="codeSpan">сервиса</span> Укажем то же имя, что и в названии проекта curriculum2023                
                <div className="double-img">
                    <img src={logo9} alt="logo7"/>
                    <img src={logo10} alt="logo8"/>
                </div>                
                <div className="double-img">
                    <img src={logo11} alt="logo11"/>
                    <img src={logo12} alt="logo12"/>
                </div>
            </li>
            
            <li >Проходим по ссылке Email учетной записи <span className="codeSpan">curriculum2023@....</span> перед этим скопировав ее в отдельный файл. Она нам понадобится позже                
                <div className="double-img">
                    <img src={logo13} alt="logo13"/>
                    <img src={logo14} alt="logo14"/>
                </div>
            </li>
            
            <li >В разделе <span className="codeSpan">KEYS</span> создаем новый  ключ формата <span className="codeSpan">.json</span> Скачиваем файл и сохраняем его под названием <span className="codeSpan">credentials.json</span> в папке, где будет располагаться проект: <span className="codeSpan">.../project/server</span>                
                <div className="double-img">
                    <img src={logo15} alt="logo15"/>
                    <CodeChunk
        chunk={`



/d/user/project
            ├───/client
            └───/server
                         credentials.json




`} 
        lang={"text"}
        theme={googlecode} />
                </div>
            </li>
            
            <li >Расшариваем целевую таблицу Google Sheets, указав разрешение для пользователя с Email созданной ранее учетной записи <span className="codeSpan">curriculum2023@....</span> Убеждаемся, что Среди разрешений есть редактирование.                
                <div className="double-img">
                    <img src={logo16} alt="logo16"/>
                    <img src={logo17} alt="logo17"/>
                </div>
            </li>
            
            <li>Внутри папки <span className="codeSpan">server</span> создаем проект                
                <CodeChunk chunk={`/d/user/project/server\nnpm init`} lang={"bash"} />
            </li>
                     
            <li>Устанавливаем <span className="codeSpan">Express</span> и <span className="codeSpan">goofleapis</span> в папку проекта               
                <CodeChunk chunk={`/d/user/project/server\nnpm install express googleapis`} lang={"bash"} />
            </li>
                        
             <li>Устанавливаем <span className="codeSpan">nodemon</span> в папку проекта          
                <CodeChunk chunk={`/d/user/project/server\nnpm install nodemon -D`} lang={"bash"} />
            </li>
            
            <li>В файле <span className="codeSpan">server/package.json</span> пишем скрипт, который будет запускать приложение в режиме разработки
                <div className='filename'>server/package.json</div>
                <CodeChunk chunk={
                    `
 "scripts": {
    "dev": "nodemon index.js'
},
                    `} lang={"json"} />
            </li>
            
            <li>Команда для запуска приложения в режиме разработки:      
            <CodeChunk chunk={`/d/user/project/server\nnpm run dev`} lang={"bash"} />
            </li>
            
            <li>Создаем файл <span className="codeSpan">index.js</span>            
                <CodeChunk chunk={`/d/user/project/server/\ntouch index.js`} lang={"bash"} />
            </li>
             
             <li>Импортируем модули и создаем первый маршрут с методом <span className="codeSpan">get</span>возвращающим форму для ввода данных
             <div className='filename'>server/index.js</div>
                <CodeChunk 
                chunk={
`const express = require("express");
const { google } = require("googleapis");

const app = express();

//Для обработки форм
app.use(express.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    let result = '<form action="" method="post">
        <div>
            <label for="product">Product</label>
            <textarea name="product" id="product" cols="30" rows="10"></textarea>
        </div>
        <div>
            <label for="cost">Cost</label>
            <input type="text" id="cost" name="cost">
        </div>
        <button type="submit">Submit</button>
    </form>';

    res.type('text/html')
    res.send(result)
})

app.listen(1337, (req, res) => console.log("running app on 1337"));
`}
                lang={"javascript"} />
            </li>
            
            Получившаяся форма:
            
            <div className="double-img">
                    <img src={logo18} alt="logo1" style={{ clipPath: "inset(0% 40% 45% 0% round 1vh)", marginBottom: "-20vh" }}/>
                </div>

                <li>При необходимости вывода данных таблицы <span className="codeSpan">Google Sheet</span> в окно  браузера создадим второй маршрут      
                <CodeChunk chunk={
`app.get("/", async (req, res) => {

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    })

    //Создание экземпляра клиента для авторизации
    const client = await auth.getClient();

    //Создание экземпляра Google Sheets API
    const googleSheets = google.sheets({
        version: "v4", 
        auth: client
    });

    /*Таблица находится по адресу: 
    https://docs.google.com/spreadsheets/d/1WkzDVX-PN...
    Её идентификатор это набор символов после d/ и до /edit:
    1WkzDVX-PNvjJXmqBAoozuVTPBpphS7zRoCUJuuxE8Sc*/

    const spreadsheetId = "1WkzDVX-PNvjJXmqBAoozuVTPBpphS7zRoCUJuuxE8Sc";

    //Чтение строк электронной таблицы
    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Shopping-list" //Название листа 
    })

    res.send(getRows.data)
})
`} 
                lang={"javascript"} />
            </li>

            <li>Запись в таблицу <span className="codeSpan">Google Sheet</span> с помощью метода <span className="codeSpan">post</span>
                <CodeChunk chunk={
`app.post("/", async (req, res) => {

    const { product, cost } = req.body;

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    })

    const client = await auth.getClient();

    const googleSheets = google.sheets({
        version: "v4", 
        auth: client
    });

    const spreadsheetId = "1WkzDVX-PNvjJXmqBAoozuVTPBpphS7zRoCUJuuxE8Sc";

    //Запись строк электронной таблицы
    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Shopping-list!C:D", //диапазон записи
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [product, cost] //массив это строка  с двумя столбцами
            ]
        }
    })
    
    res.send("Succsessfully submitted")
})`} 
                lang={"javascript"} />
            </li>
        </ol>
    </>
 )
}

