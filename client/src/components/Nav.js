import '../styles/App.css';

import { useContext } from 'react';
import { Context } from '../index';

const Decor = () => <div className='decorator'><div/><div/><div/></div>;

export default function Nav() {
    const { store } = useContext(Context);

    let storeKeys = Object.keys(store.content);
    return (
        <div className='Nav'>
            <Decor />

            {storeKeys.map(item => (
                <div className='radio-container' key={item}>
                    <input 
                        type='radio'
                        className='hidden'
                        id={item}
                        name='inputs'
                        key={`${item}-input`}
                        value={item}
                        onChange={(event) => {
                            store.selectedComponent = event.target.value
                            }}
                    />
                    <label className='entry' htmlFor={item} key={`${item}-label`}>
                        <div key={`${item}-div-before`} className='before'/>
                        <div key={`${item}-div-circle`} className='circle'/>
                        <div key={`${item}-div-entry-label`} className='entry-label'>{item}</div>
                    </label>
                </div>
            ))}

            <Decor />
        </div>
    )
}