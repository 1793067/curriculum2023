import CodeChunk from "../../components/CodeChunk";

export default function InstallationTerm () {
 return (
    <>
        <h1>Установка Git</h1>
        <h2></h2>
        <ol className="terms">
            <li>Для установки Git в Windows в командной строке или в терминале PowerShell (для Linux) вводим команду:
                <CodeChunk chunk={`/d/user/\nchoco install git`} lang={"shell"} />
            </li>
            <li>Для установки Git в Linux:
                <CodeChunk chunk={`/d/user/\nsudo apt install git`} lang={"shell"} />
            </li>
        </ol>
    </>
 )
}

