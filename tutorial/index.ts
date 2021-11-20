///<reference path='./a.ts' />

/* 
예전에 js에 import export가 없을땐 namespace를 사용했었음
*/

import { Name, age } from './a'

let test :Name = "park";

/* 
import같은게 없었기때문에 여러 스크립트를 html에 연결하는 방식을썻는데
그렇게 되면 변수가 곂쳐서 배열에 묶어 사용하게 됬는데 그게 namespace임
파일에 import하는 방법은
///<reference path='./a.ts' />이렇게 사용했다
*/



