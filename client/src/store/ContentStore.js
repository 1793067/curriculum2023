import {makeAutoObservable} from 'mobx';

import { HTMLTerm, MobxTerm, ReactTerm, JavascriptTerm, NodeTerm, GitTerm } from '../initial-data/';

export default class ContentStore {
    constructor() {

        this.content = {
            'HTML': <HTMLTerm />,
            'Javascript': <JavascriptTerm />,
            'React': <ReactTerm />,
            'Bootstrap': <></>,
            'React-Bootstrap': <></>,
            'Nodejs': <NodeTerm />,
            'Express': <></>,
            'mobx': <MobxTerm />,
            'Postman': <></>,
            'PostgreSQL': <></>,
            'Git': <GitTerm />,
            'Algoritms': <></>,
            'Project*': <></>
        };
        this.selectedTerm = <div className='Content'/>;
        makeAutoObservable(this)
    }

    set selectedComponent(term) {
        this.selectedTerm = this.content[term];
    }

    get selectedComponent() {
        return this.selectedTerm;
    }

}