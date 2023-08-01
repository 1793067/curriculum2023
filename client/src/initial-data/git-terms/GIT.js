import BranchesTerm from "./branches";
import InitialisationTerm from "./initialisation";
import InstallationTerm from "./installation";
import FixTerm from "./removing";
import SubmodulesTerm from "./submodules";

    export default function GitTerm () {
        return (
            <div className='Content'>
                <div className='content-main'>
                    <InstallationTerm />
                    <InitialisationTerm />
                    <FixTerm />
                    <SubmodulesTerm />
                    <BranchesTerm />
                </div>
                <div className='content-nav'>
                    <ol>
                        <li><a href="#install">Git: установка</a></li>
                        <li><a href="#initialisation">Создание репозитория</a></li>
                        <li><a href="#fixing">Удаление/исправление репозитория</a></li>
                        <li><a href="#submodules">Добавление субмодулей в репозиторий</a></li>
                        <li><a href="#fixing">Ветвление в репозитории</a></li>   
                    </ol>
                </div>
            </div>
        )};