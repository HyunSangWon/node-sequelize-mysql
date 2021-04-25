### TS 설치
- npm install -g typescript
- tsc -v 
- tsc .\test.ts -t ES2016
- tsc --init (tsconfig.json 만들기)

### transpile (babel) 설치 (https://www.daleseo.com/js-babel-node/)
- yarn add @babel/core  
- yarn add @babel/cli  
- yarn add @babel/preset-env  
- npx babel --presets @babel/env .\app.ts (transpile 테스트 실행)