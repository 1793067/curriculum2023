import CodeChunk from "../../components/CodeChunk";

export default function BranchesTerm () {
 return (
    <>
        <h1>Инициализация каталога с проектом (создание репозитория на локальной машине)</h1>
        <h2></h2>
        <ol className="terms">
            <li>Для работы с Git необходимо инициализировать (создать) его в папке с проектом:
                <CodeChunk chunk={`/d/user/project\ngit init`} lang={"shell"} />
            </li>
            <li >Проходим по ссылке <a href="https://github.com/"><span className="codeSpan">https://github.com/</span></a> под своей учетную запись. И создаем новый  репозиторий               
                <div className="double-img">
                    <img src={logo1} alt="logo1"/>
                    <img src={logo2} alt="logo2"/>
                </div>         
                <div className="double-img">
                    <img src={logo3} alt="logo3"/>
                </div>
            </li>
            <li>Добавление ссылки на удаленнй репозиторий в наш проект
                <CodeChunk chunk={`/d/user/project\ngit remote add origin https://github.com/1793067/curriculum2023.git`} lang={"shell"} />
            </li>
            <li>Добавление всех файлов в список отслеживаемых 
                <CodeChunk chunk={`/d/user/project\ngit add .`} lang={"shell"} />
            </li>
            <li>Зафиксируем изменения в памяти Git 
                <CodeChunk chunk={`/d/user/project\ngit commit -m "Создание проекта"`} lang={"shell"} />
            </li>
            <li>Заливаем файлы проекта в удаленный репозиторий. (после ввода следующей команды необходимо ввести логин и пароль.)
                <CodeChunk chunk={`/d/user/project\ngit push -u origin master`} lang={"shell"} />
            </li>
        </ol>
    </>
 )
}

