import CodeChunk from "../../components/CodeChunk";

export default function Regexp () {
 return (
    <>
        <h1>javascript!</h1>
        <h2>Регулярные выражения:</h2>
        <br/>
        
        <p><span className="codeSpan">.test</span> проверка наличия искомого выражения в строке:
<CodeChunk chunk={`let isTrue = /dfdfdf/.test('Lala pattern2 bl j co-coLa-co Pattern3')`}/>
<br/>
Аналогична записи:
<CodeChunk chunk={`new RegExp('co-co-co').test('Lala pattern2 bl j co-coLa-co Pattern3')`}/>
<br/>
Оператор "ИЛИ" <span className="codeSpan">|</span>
<CodeChunk chunk={`let regex1 = /pattern1|pattern2/`}/>
<br/>
Игнорирование прописных букв <span className="codeSpan">i</span>
<CodeChunk chunk={`let regex2 = /pattern3|pattern2/i`}/>
<br/>
<span className="codeSpan">.match</span> Поиск совпадения. Ищет первое вхождение подстроки и формирует результат в виде массива
<CodeChunk chunk={`let array =  'Lala pattern2 bl j co-coLa-co Pattern3'.match(/pattern3|pattern2/i)
/*---> [
         'pattern2',
          index: 5,
          input: 'lala pattern2 bl j co-co-co Pattern3',
          groups: undefined
       ]*/`}/>
<br/>
Поиск ВСЕХ вхождений <span className="codeSpan">g</span>
<CodeChunk chunk={`let regex3 = /la/gi;
array = 'o-la-la, it is LA patent!'.match(regex3); /*---> ['la', 'la', 'La']*/`}/>
<br/>
Замена любого символа <span className="codeSpan">.</span>
<CodeChunk chunk={`let regex4 = /.la./gi;
array = 'black polaroid'.match(regex4); /*---> ['blac', 'olar']*/`}/>
<br/>
Поиск одного любого символа из набора <span className="codeSpan">{`[.]`}</span>
<CodeChunk chunk={`let regex5 = /b[oau0-9]g/gi;
array = 'big bug is on the B2G-bag'.match(regex5) /*---> ['bug', 'B2G', 'bag']*/`}/>
<br/>
Исключения из поиска <span className="codeSpan">{`[^.]`}</span>
<CodeChunk chunk={`let regex6 = /b[^oau0-9]g/gi;
array = 'big bug is on the B2G-bag'.match(regex6) /*---> ['big']*/`}/>
<br/>
Появление символа 1 и более раз <span className="codeSpan">+</span>
<CodeChunk chunk={`let regex7 = /bal+o+n/gi;
array = 'balloon balon'.match(regex7); /*---> ['balloon']*/`}/>
<br/>
Появление символа 0 и более раз <span className="codeSpan">*</span>
<CodeChunk chunk={`let regex8 = /bal*o*n/gi`}/>
<br/>
По умолчанию <span className="codeSpan">.match</span> находит максимально длинное вхождение искомой подстроки. Т.н. "Жадный" поиск
жадные операторы: <span className="codeSpan">{`+`}</span> <span className="codeSpan">{`*`}</span> <span className="codeSpan">{`?`}</span> <span className="codeSpan">{`{}`}</span> - захватывают максимально длинное вхождение
<CodeChunk chunk={`let regex9 = /t[a-z]*i/gi;
array = 'titanic'.match(regex9);/ *---> ['titani']*/`}/>
<br/>
Ленивый" поиск ищет первое вхождение, удовлетворяющее запросу.
чтобы сделать из жадных операторов ленивые, нужно добавить к ним <span className="codeSpan">?</span> <span className="codeSpan">{`+?`}</span> <span className="codeSpan">{`?`}</span> <span className="codeSpan">
   {`??`}</span> <span className="codeSpan">{`{}?`}</span> - тогда они будут находить самые короткие вхождения
 <CodeChunk chunk={`let regex10 = /t[a-z]*?i/gi;
array = 'titanic'.match(regex10); /*---> ['ti', 'tani']*/`}/>
<br/>
Поиск совпадения в начале строки. <span className="codeSpan">^</span>
<CodeChunk chunk={`let regex11 = /^t[ia]/gi;
array = 'titanic'.match(regex11); /*---> ['ti',]*/`}/>
<br/>
Поиск совпадения в конце строки. <span className="codeSpan">$</span>
<CodeChunk chunk={`let regex12 = /.it$/ig;
array = 'It is titanic split'.match(regex12); /*---> ['lit',]*/`}/>
Специальные символы
<CodeChunk chunk={`
\\w === [a-zA-Z0-9_]
\\W === [^a-zA-Z0-9_]
\\d === [0-9]
\\D === [^0-9]
\\s === ' ' а еще [\\r\\t\\f\\n\\v]
\\S === все кроме \\s
`}/>
<br/>
{`Диапазон {minCount, maxCount}, {, maxCount}, {minCount, }, {count}`}
<CodeChunk chunk={`let regex13 = /ab{1,10}h/;
array = 'abbbh'.match(regex13); /*---> ['abbbh',]*/`}/>
<br/>
Ноль или 1 совпадение <span className="codeSpan">?</span>
<CodeChunk chunk={`let regex14 = /colou?r/g;
array = 'color and colour'.match(regex14); /*---> ['color', 'colour']*/`}/>
<br/>
Просмотр вперед <span className="codeSpan">{`(?=...)`}</span> или <span className="codeSpan">{`(?!...)`}</span>
<CodeChunk chunk={`let regex16 = /la{2,}b(?=\\w{3})(?=\\D*\\d)(?!bac)/
ищем la{2,}b за которой следует подстрока удовлетворяющая условиям:
1. w{3},
2. \\D*\\d
3. !== 'bac'

array = 'gh  gh laaababc__123'.match(regex16); /*---> ['laaab']*/`}/>
<br/>
Группировка 1
<CodeChunk chunk={`let regex17 = /P(engui|umpki)n/gi;
array = 'pumpkin penguins'.match(regex17); /*---> [ 'pumpkin', 'penguin' ]*/`}/>
<br/>
Группировка 2
<CodeChunk chunk={`let regex18 = /(Ba+na)+/g;
array = 'BaaanaBananamama'.match(regex18); /*---> [ 'BaaanaBana' ]*/`}/>
<br/>
{`Группировка 3 - присвоение номера подстроке
После группировки подстроке (в скобках) присваивается значение, начиная с 1
дальше для указания группы в подстроке можно указывать ее порядковый номер со слешем:`}
<CodeChunk chunk={`let regex19 = /(bana)-\\d-\\1-\\d-\\1/g;
//                       \\1 == bana
array = 'bana-1-bana-2-bana-3-bana-4-bana'.match(regex19); /*---> [ 'bana-1-bana-2-bana' ]*/`}/>
<br/>
Группировка нескольких подстрок и работа с ними  <span className="codeSpan">{`.replace(regex, ....)`}</span>
<CodeChunk chunk={`let str = 'Bond James'.replace(/(\\w+)\\s(\\w+)/, 'lastName: $1 firstName: $2'); 
//                                                          $1         $2
/*----> lastName: Bond firstName: James*/
`}/>
<br/>
Обработка результатов функцией
<CodeChunk chunk={`str = 'Bond James'.replace(/(\\w+)\\s(\\w+)/, (name) => name.toUpperCase()); /*----> BOND JAMES*/`}/>
<br/>
Как обозначить ВСЕ вхождения <span className="codeSpan">$&</span>
<CodeChunk chunk={`str = 'Bond James'.replace(/\\w+/g, '[==$&==]'); /*----> [==Bond==] [==James==]*/`}/>
</p>
    </>
 )
}

