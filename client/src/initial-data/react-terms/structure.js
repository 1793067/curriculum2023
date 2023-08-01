import CodeChunk from "../../components/CodeChunk";

export default function StructureTerm () {
    return (
       <>
           <h2>Структура проекта:</h2>
           <p><CodeChunk
           styleType="scheme" 
           chunk={`/d/user/project
           ├───client
           │   ├───.git
           │   ├───node_modules
           │   ├───public
           │   │      favicon.ico
           │   │      index.html
           │   │      logo192.png
           │   │      logo512.png
           │   │      manifest.json
           │   │      robots.txt
           │   └───src
           │       ├───components
           │       │      Header.js
           │       │      Main.js
           │       │      Footer.js
           │       ├───initial-data
           │       │   └───<вспомогательные файлы исходные данные>
           │       ├───pages
           │       │   └───<страницы будущего сайта>
           │       ├───store
           │       │      ContentStore.js
           │       ├───styles
           │       │      App.css
           │       └───utils
           │           └───<переменные, маршруты React роутера>
           │          App.js
           │          index.js
           │          logo.svg
           │       .gitignore
           │       package.json
           │       package-lock.json
           │	    Readme
           └───server`} lang={"jsx"} /></p>
       </>
    )
   }
   
   