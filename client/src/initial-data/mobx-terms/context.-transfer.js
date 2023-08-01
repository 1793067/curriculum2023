import CodeChunk from "../../components/CodeChunk";

export default function InstallationTerm () {
 return (
    <>
        <h1>mobx!</h1>
        <h2>Структура проекта:</h2>
        <p>{`Поддерживать код, написанный на чистом React с прокидыванием данных через десяток дочерних компонентов
        слишком сложно. Удобнее отделить данные от компонентов, используя менеджер состояний. Так данные и 
        структура их хранения будут находиться в одном месте.
        Здесь представлена структура проекта, с тремя компонентами: Header, Main, Footer и заранее подготовлен 
        каталог store с файлом TitleStore для хранения контекста.`}</p>
        
        <p><CodeChunk
        chunk={
`/d/user/project
            └───/client
                ├───/node_modules
                ├───/public
                │      index.html
                └──────/src
                        │      App.js
                        │      index.js
                        ├──────/components
                        │            Header.js
                        │            Main.js
                        │            Footer.js
                        └──────/store
                                    TitleStore.js

`} 
        lang={"text"} /></p>

<p>{`Связь между независимыми компонентами будет осуществляться через хранилище TitleStore. Поля ввода в компоненте
        Main будут контролировать заголовки в компонентах Header и Footer.`}</p>
        <p><CodeChunk
        styleType="scheme"
        chunk={`
    ┌───────────────────────┐ 
    │  TitleStore           │
    │                       │
    │ store:                │
    │  {                    │
    │    headerTitle        │
    │    footerTitle        │
    │   }                   │
    │                       │
    └───────────────────────┘ 

    ┌────────────────────────┐       ┌────────────────────────────────────────────┐       ┌────────────────────────┐
    │  Header                │       │  Main                                      │       │  Footer                │
    │                        │       │                                            │       │                        │
    │ <h1>{headerTitle}</h1> │       │  <input onChange={event => {               │       │ <h1>{footerTitle}</h1> │
    │                        │       │  store.headerTitle = event.target.value}}> │       │                        │
    │                        │       │                                            │       │                        │
    │                        │       │   <input onChange={event => {              │       │                        │
    │                        │       │  store.footerTitle = event.target.value}}> │       │                        │
    │                        │       │                                            │       │                        │
    └────────────────────────┘       └────────────────────────────────────────────┘       └────────────────────────┘
`} 
        lang={"text"} /></p>


        <ol className="terms">
            <li>Устанавливаем необходимые зависимости mobx - стейт менеджер, mobx-react-lite - для связи mobx с функциональными компонентами React:
                <CodeChunk chunk={`/d/user/project/client/\nnpm i mobx mobx-react-lite`} lang={"shell"} />
            </li>
                        
            <li>Создадим в проекте директорию, в которой будут храниться переменные Контекста
                <CodeChunk chunk={`/d/user/project/client/src/\nmkdir store; touch store/TitleStore.js`} lang={"bash"} />
            </li>
            
            <li>В файле index.js:
                <ul>
                    <li>{`импортируем createContext из React, TitleStore из папки store`}</li>
                    <li>{`создадим и экспортируем переменную Context`}</li>
                    <li>{`обернем тег <App /> в тег <Context.Provider>`}</li>
                    <li>{`свойству value тега Context.Provider присвоим значение объекта`}</li>
                    <li>{`добавим созданному объекту свойство value, равное новому экземпляру импортированного класса TitleStore`}</li>
                </ul>
            <div className='filename'>client/src/index.js</div>
                <CodeChunk 
                chunk={`import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TitleStore from './store/TitleStore

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root')
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            store: new ContentStore(),
        }}>
        <App />
        </Context.Provider>
    </React.StrictMode>
)`}
                lang={"jsx"}
                showLineNumbers={true}
                highlight={"4,6,11-13,15"} />
            </li>
            
            <li>
            В компоненте Main мпортируем useContext из React, Context из index.js. Сделаем поля данного объекта наблюдаемыми, 
            тогда все компоненты, использующие данный контекст будут перерендериваться. Добавим два инпута с обработчиками:
            
            <div className='filename'>client/src/components/Main.js</div>
                <CodeChunk 
                chunk={`import { useContext } from 'react';
import { Context } from '../index';

export default function Main () {

	const { store } = useContext(Context)
  return (
    <div>
        <input onChange={(event) => store.headerTitle = event.target.value} placeholder="input header text"/>
        <input onChange={(event) => store.footerTitle = event.target.value} placeholder="input footer text"/>
    </div>
  )
}`}
                lang={"jsx"} />
            </li>
                        
            <li>В файле TitleStore.js создадим и экспортируем объект класса.
                Импортируем функцию makeAutoObservable, вызываем ее в конструкторе объекта и передаем в нее параметром this
                <div className='filename'>client/src/store/TitleStore.js</div>
                <CodeChunk 
                chunk={`import {makeAutoObservable} from 'mobx';

export default class TitleStore {
    constructor() {
        this.headerTitle = '';
        this.footerTitle = '';
        makeAutoObservable(this)

    set headerTitle(titleText) {
        this.headerTitle = titleText;

    set footerTitle(titleText) {
        this.footerTitle = titleText;
    }
}`}
             lang={"jsx"}
             highlight={'1-5'}
             showLineNumbers={true} />
            </li>
            
            <li>{`
            Импортируем { observer } from 'mobx-react-lite' и оборачиваем зависящий от контекста компонент в observer`}
            <div className='filename'>client/src/components/Header.js</div>
            <CodeChunk 
                chunk={`import { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

export default observer(function Header () {

	const { store } = useContext(Context)
  return (
    <h1>{store.headerTitle}</h1>
  )
})`}
                lang={"jsx"} />
                
                <div className='filename'>client/src/components/Footer.js</div>
            <CodeChunk 
                chunk={`import { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

export default observer(function Footer () {

	const { store } = useContext(Context)
  return (
    <h1>{store.footerTitle}</h1>
  )
})`}
                lang={"jsx"} />
            </li>
        </ol>
    </>
 )
}

