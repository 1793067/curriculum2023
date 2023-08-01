const express = require("express");
const { google } = require("googleapis");

const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    let result = `<form action="" method="post">
        <div>
            <label for="product">_Product_</label>
            <textarea name="product" id="product" cols="18" rows="1"></textarea>
        </div>
        <div>
            <label for="cost">.__Cost__</label>
            <input type="text" id="cost" name="cost">
        </div>
        <button type="submit">Submit</button>
    </form>`;

    res.type('text/html')
    res.send(result)
})


app.post("/", async (req, res) => {

    const { product, cost } = req.body;

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

    /*Получим метаданные нашей таблицы
    Таблица находится по адресу: 
    https://docs.google.com/spreadsheets/d/1WkzDVX-PNvjJXmqBAoozuVTPBpphS7zRoCUJuuxE8Sc/edit#gid=1071060051
    Её идентификатор это набор символов после d/ и до /edit:
    1WkzDVX-PNvjJXmqBAoozuVTPBpphS7zRoCUJuuxE8Sc*/

    const spreadsheetId = "1WkzDVX-PNvjJXmqBAoozuVTPBpphS7zRoCUJuuxE8Sc";

    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId
    })

    //Чтение строк электронной таблицы
    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Shopping-list" //Название листа 
    })

    //Запись строк электронной таблицы
    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Shopping-list!C:D", //диапазон записи
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [product, cost]
            ]
        }
    })
    //res.send(getRows.data)
    res.send("Succsessfully submitted")
})

app.listen(1337, (req, res) => console.log("running app on 1337"));