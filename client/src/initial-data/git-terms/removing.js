import CodeChunk from "../../components/CodeChunk";

export default function FixTerm () {
 return (
    <>
        <h1>Исправление репозитория</h1>
        <h2></h2>
        <ol className="terms">
            <li>Удаляем существующий репозиторий
                <CodeChunk chunk={`/d/user/project\nrm -rf .git`} lang={"shell"} />
            </li>

            <ul>
                <li>При наличии субмодулей (репозиторий внутри основного) удаляем их
                <CodeChunk chunk={`/d/user/project\nrm -f <<каталог с субмодулем>>/.git`} lang={"shell"} />
            </li>
            <li>удаляем список субмодулей
                <CodeChunk chunk={`/d/user/project\nrm -f .gitmodules`} lang={"shell"} />
            </li>
            </ul>
            
            <li>Для работы с Git необходимо инициализировать (создать) его в папке с проектом:
                <CodeChunk chunk={`/d/user/project\ngit init`} lang={"shell"} />
            </li>
            <li>Добавление ссылки на удаленный репозиторий в наш проект
                <CodeChunk chunk={`/d/user/project\ngit remote add origin https://github.com/1793067/curriculum2023.git`} lang={"shell"} />
            </li>
            <li>Добавление всех файлов в список отслеживаемых 
                <CodeChunk chunk={`/d/user/project\ngit add .`} lang={"shell"} />
            </li>
            <li>Зафиксируем изменения в памяти Git 
                <CodeChunk chunk={`/d/user/project\ngit commit -m "Создание проекта"`} lang={"shell"} />
            </li>
            <li>Заливаем файлы проекта в удаленный репозиторий. (после ввода следующей команды необходимо ввести логин и пароль.)
                <CodeChunk chunk={`/d/user/project\ngit push -uf origin master`} lang={"shell"} />
            </li>
        </ol>
    </>
 )
}