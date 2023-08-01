import InstallationTerm from './installation';
import StructureTerm from './structure';

    export default function ReactTerm () {
        return (
            <div className='Content'>
                <div className='content-main'>
                    <InstallationTerm id="install"/>
                    <StructureTerm id="structure"/>
                </div>
                <div className='content-nav'>
                    <ol className="terms">
                        <li>
                            <a href="#install">React: установка</a>
                        </li>
                        <li>
                            <a href="#structure">Структура проекта</a>
                        </li>
                    </ol>
                </div>
            </div>
        )};