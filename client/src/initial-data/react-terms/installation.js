import CodeChunk from "../../components/CodeChunk";

export default function InstallationTerm () {
 return (
    <>
        <h1>React!</h1>
        <h2>Установка React</h2>
        <ol className="terms">
            <li>Создаем директорию проекта: "project"
                <CodeChunk chunk={`/d/user/\nmkdir project; cd project`} lang={"bash"} />
            </li>
                        
            <li>внутри создаем еще две папки 'client' и 'server'
                <CodeChunk chunk={`/d/user/project\n mkdir client server`} lang={"bash"} />
            </li>
                        
            <li>Устанавливаем React в папку проекта client
                <ul>
                    <li>Первый способ: 
                        <CodeChunk chunk={`/d/user/project/client\ncd client; npx create-react-app .`} lang={"bash"} />
                    </li>
                        
                    <li>Второй способ: 
                        <CodeChunk chunk={`/d/user/project/\nnpx create-react-app client`} lang={"bash"} />
                    </li>
                </ul>     
            </li>
                        
            <li>Для запуска приложения вводим команду:
                <CodeChunk chunk={`/d/user/project/client\n npm start`} lang={"bash"} />
            </li>
        </ol>
    </>
 )
}

