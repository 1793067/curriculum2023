import { CopyBlock,	a11yLight, atomOneDark, github, dracula, googlecode } from 'react-code-blocks';

export default function CodeChunk(props) {
    const hl = props.highlight || '';
    const ln = props.showLineNumbers || false;
    const st = props.styleType || 'code';
    const th = props.theme || atomOneDark;
    return (
        <div className={st}>
            <CopyBlock    
                language={props.lang || 'javascript'}
                showLineNumbers={ln}
                theme={th}
                highlight={hl}
                text={props.chunk}
                codeBlock
            />
        </div>    
        )
    }