import BranchesTerm from "./branches";
import InitialisationTerm from "./initialisation";
import InstallationTerm from "./installation";

    export default function GitTerm () {
        return (
            <div className='Content'>
                <div className='content-main'>
                    <InstallationTerm />
                    <InitialisationTerm />
                    <BranchesTerm />
                </div>
                <div className='content-nav'>
                    <ol>
                        <li>mobx: installation</li>
                    </ol>
                </div>
            </div>
        )};