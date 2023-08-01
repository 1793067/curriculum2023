import CodeChunk from "../../components/CodeChunk";

export default function DefaultMarking () {
 return (
    <>
        <h1>HTML!</h1>
                <h2>Разметка</h2>
                <ol>
                    <li>Основная разметка<br/>
                    <CodeChunk chunk={
                    `<!DOCTYPE html>
                    <html lang="ru">
                    <head>
                        <meta charset="UTF-8">
                        <title>Базовая разметка HTML</title>
                    </head>
                    <body>
                        <!--html-->
                    </body>
                    </html>`
                    } lang={"html"} />
                    </li>
                </ol>
    </>
 )
}

