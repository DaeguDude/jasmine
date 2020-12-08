## ES6 모듈

우리가 저번 시간에 얘기했던 모듈과 달리, '모듈' 이라는 ES6와 함께 새로 도입된 녀석이 있습니다. 아직은 브라우저에 이 기능을 잘 지원하지는 않지만 점점 더 발전하고 있고 일단 그 전까지는 우리는 모듈 번들러라는 것을 써야 합니다. 

## 자바스크립트의 역사

만약에 여러분이 자바스크립트가 등장했을때 부터 자바스크립트를 배우지 않았다면 아마 자바스크립트를 배우는 것은 어렵게 보일 것입니다. 왜냐하면 자바스크립트 생태계는 아주 빠르게 변화하고 있고 많은 도구들이 무엇을 하는지도 잘 이해하지 못하기 때문입니다.

이번에는 자바스크립트가 어떻게 변화해왔는지에 대해 집중을 하려고 합니다. 처음에 먼저 아무 도구 없이 HTML과 자바스크립트를 보고, 그 다음 각각의 문제에 따라서 도구들을 소개하려고 합니다. 이러한 역사적인 문맥을 보면서 도구를 사용하면 아마도 여러분이 왜 도구를 쓰는지 잘 이해할 수 있을 것 같습니다.

## 자바스크립트를 쓰는 가장 기본적인 방법

먼저 HTML과 자바스크립트를 이용하여 간단하게 웹페이지를 만들어보겠습니다. 자바스크립트 파일을 사용하기 위해서는, HTML에서 자바스크립트 파일을 링크를 걸어주어야 하죠.

`index.html` 파일을 만들어서 자바스크립트 파일과 한 번 연결 시켜보겠습니다.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>자바스크립트 예시</title>
</head>
<body>
  <h1>안녕하세요?</h1>
  <script src="index.js"></script>
</body>
</html>
```

그리고 `script` 태그를 통해 `index.js` 파일과 연결시켜주었죠.

```javascript
console.log('자바스크립트: 안녕하세요~?');
```

이것이 웹사이트를 만들기 위한 여러분이 필요한 전부입니다! 아마도 우리가 보던 것처럼 고급진 웹사이트는 아니긴 하지만요. 이제 예를 들어서 남들이 이미 작성해둔 라이브러리를 사용하고 싶다고 생각해볼게요. 예를 들어서 [moment.js](https://momentjs.com/) 라는 날짜에 관련된 많은 함수가 있는 라이브러리가 있습니다. 

아래와 같이 `moment` 함수를 쓸 수 있습니다. 

```javascript
moment().startOf('day').fromNow();        // 20 hours ago
```

하지만 위의 함수를 작동을 시키려면 moment.js가 HTML에 포함이 되어 있어야겠죠? 홈페이지의 다운로드 부분을 보시면 moment.js라는 파일이 있는데 이 파일을 다운받아 직접 HTML에 링크를 걸어줄게요.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>자바스크립트 예시</title>
</head>
<body>
  <h1>안녕하세요?</h1>
  <script src="moment.min.js"></script> <!-- 새로 추가 -->
  <script src="index.js"></script>
</body>
</html>
```

이렇게 링크를 걸어주고 나면 우리의 `index.js` 파일이 잘 작동을 할 것입니다.

```javascript
console.log('자바스크립트: 안녕하세요~?'); // 자바스크립트: 안녕하세요~?
console.log(moment().startOf('day').fromNow()); // 20 hours ago
```

여기서 주의해야 할점은 `moment.min.js` 파일을 먼저 링크를 걸어주어 먼저 로딩이 되게 했다는 것입니다. 그렇지 않고 `index.js` 파일이 먼저 실행이 되었다면 `moment.min.js` 파일의 함수가 아직 읽어들여지지 않았기 때문에 작동을 하지 않을 것입니다. 이것이 이미 존재하는 자바스크립트 라이브러리를 사용해서 웹사이트를 만드는 방법이다. 이해하기가 엄청 쉬웠죠? 하지만 만약 라이브러리가 업데이트가 되었다면 어떻게 해야될까요? 우리는 주기적으로 홈페이지를 가서 확인을 하며 새로 파일을 받아주어야겠죠. 조금 귀찮을 것입니다.

## 자바스크립트 패키지 매니저 사용하기(npm)

2010년 즈음부터, 몇 개의 자바스크립트 패키지 매니저가 등장하기 시작했습니다. 이들은 라이브러리를 다운로드하고 업데이트를 하는 것들을 도와주었는데요. 그 중에 현재 가장 유명한 것이 npm입니다 (yarn이라는 것도 있지만, yarn도 npm을 기초로 해서 만들어졌습니다).

npm은 사실 서버에서 사용되는 자바스크립트 실행환경인 node.js를 위해서 만들어진 패키지 매니저인데요. 프론트엔드에서 자바스크립트 매니저로 사용되는게 사실 웃기긴 합니다.

npm을 사용해서 아까처럼 우리가 직접하는 것이 아닌 자동으로 `moment.js` 라이브러리를 설치하여 보겠습니다. 

<!--  노드 설치 하는 법 가르쳐주기 -->

여러분의 `index.html`이 있는 폴더로 가셔서 아래의 명령어를 입력해주세요.

```shell
npm init
```

이 명령어를 실행하고 나면 여러가지 질문들이 뜰텐데요. 지금은 일단 다 'Enter'를 입력하여 주시면 됩니다. 그리고 질문에 다 대답을 하고나면 `package.json`이라는 파일이 생성될텐데요. 이 파일은 npm이 프로젝트의 정보를 저장하기 위해 만든 설정파일입니다. 

여러분의 `package.json` 파일은 이렇게 생겼을 것입니다.

```json
{
  "name": "여러분의 프로젝트 이름",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

이제 자바스크립트 패키지 `moment.js`를 설치하기 위해서, `npm install` 이라는 명령어를 터미널에서 사용하여 주겠습니다.

```shell
npm install moment --save
```

위의 명령어는 두 가지를 일을 시행합니다 - 첫째로 모든 `moment.js` 패키지의 코드를 `node_modules` 이라는 폴더에 다운로드 합니다. 두번째로, 자동으로 `package.json` 파일을 수정합니다. 이것은 여러분의 프로젝트가 `moment` 라는 패키지를 쓰고 있다는 것을 알려주기 위함입니다.

```json
{
  "name": "historyjs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.29.1"
  }
```

이것을 왜 하는지 궁금하실 수 있는데 이것은 사실 다른 사람들과 프로젝트를 공유할때 아주 유용합니다. 만약에 다른 사람이 여러분의 코드를 실행시키고 싶다면 어떤 모듈이 필요한지 `package.json` 파일을 통해서 확인을 하고 그 패키지들을 설치를 해주면 되기 때문이죠.

이제 우리는 더 이상 웹사이트에서 `moment.js`를 다운받지 않아도 됩니다. npm을 사용해서 업데이트와 다운로드를 하여주실 수 있죠. `node_modules/moment/min` 디렉토리를 보시면 `moment.min.js` 파일이 있음을 확인할 수 있습니다. 이제 우리는 이 파일을 `index.html`과 연결을 시켜주면 되는 것이죠.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>자바스크립트 예시</title>
</head>
<body>
  <h1>안녕하세요?</h1>
  <script src="node_modules/moment/min/moment.min.js"></script>
  <script src="index.js"></script>
</body>
</html>
```

우리가 직접 패키지를 다운로드 하고 업데이트 하지 않아도 되니 아주 편하죠. 하지만.... 이제 우리는 `node_modules` 디렉토리에서 우리 패키지의 위치가 어디에 있는지 샅샅히 뒤져야 됩니다. 지금은 패키지가 한 개 였다 치지만... 이게 여러 개가 되면 아주 귀찮은 일이 되겠죠? 이번에는 이러한 절차를 어떻게 자동화 할 수 있는지 알아보죠.

## 자바스크립트 모듈 번들러 사용하기(웹팩 - Webpack)

거의 대부분의 프로그래밍 언어들은 다른 파일의 코드를 또 다른 파일에서 불러들여 그 코드를 사용할 수 있게 하는 기능을 가지고 있습니다. 보통 import, export라는 키워드로 많이 설정이 되어있죠. 하지만 자바스크립트 언어는 이러한 기능을 염두에 두고 설계되지 않았습니다. 왜냐하면 자바스크립트는 브라우저에서 작동하게 만들어진 언어이기 때문이죠. 그래서 오랜 시간 동안 우리는 다른 파일의 코드를 사용하려면 HTML을 통해 전역변수로 노출을 시킨다음, 다른 파일에서 사용을 가능하도록 하게하였죠.

이것이 우리가 `moment.js`를 위에서 사용한 방법입니다. `moment.min.js` 파일을 HTML에 먼저 불러들여서  전역 변수 `moment`를 생성하게 하죠. 그리고 `index.js` 파일에서 `moment`라는 전역변수를 사용할 수 있게 되는 것이죠.

위에서도 얘기하였듯이 이러한 방법은 우리가 사용해야 될 라이브러리가 많아진다면 아주 큰 문제가 됩니다. 순서를 잘 지켜야 하고 아주 많은 파일들을 HTML에 연결시켜줌으로써 브라우저의 로딩속도도 아주 느려지죠. 

그래서 2009년 즈음에, CommonJS라는 프로젝트가 시작되었습니다. 이 프로젝트의 목적은 브라우저 밖에서도 자바스크립트가 동작을 잘 할 수 있도록 생태계를 만드는 것이었는데요. CommonJS의 가장 큰 목표중에 하나가 자바스크립트의 모듈화였습니다. 그렇게 하면 다른 파일에 있는 자바스크립트 코드를 또 다른 파일에서 사용하게 될 수 있는 것이죠. 그 중에 가장 잘 알려진 것은 node.js입니다. 

위에서도 얘기하였듯이 node.js는 서버에서 자바스크립트가 동작할 수 있게 해주는 실행환경입니다. node.js를 사용하여 HTML에서 `moment.min.js`를 연결시켜주지 않고, 자바스크립트 파일간에서 로딩을 해 사용해보겠습니다.

```javascript
// index.js
var moment = require('moment');

console.log('자바스크립트: 안녕하세요~?');
console.log(moment().startOf('day').fromNow());
```

다시 얘기하지만, 이것은 node.js에서 사용하는 모듈 방식입니다. 그리고 이것을 node.js를 통해 작동하여 보시면 아주 잘 작동할 것입니다. 왜냐하면 node.js는 컴퓨터의 파일에 접근 권한을 가지고 있기 때문이죠. Node.js는 각각의 npm 모듈의 파일 경로도 알고 있기 때문에, `require('./node_modules/moment/min/moment.min.js)`라고 적어줄 필요 없이 간단하게 `require('moment')`라고 적어주시면 됩니다. 엄청 쉽지 않나요?

이것은 node.js에게는 엄청 쉽지만, 위의 코드를 브라우저에서 작동시켜보시면 `require is not defined` 라는 에러를 보게 되실 겁니다. 왜 그럴까요? 

왜냐하면 브라우저는 우리 컴퓨터의 파일들에 대한 접근 권한이 없기 때문입니다. 그래서 우리는 이제 모듈 번들러라는 것을 쓰게 됩니다. 자바스크립트 모듈 번들러는 사용되는 모든 자바스크립트 모듈들을 묶어 브라우저에서 작동할 수 있는 한 개의 결과물(파일)을 내놓습니다. 실제로, 모듈 번들러는 브라우저에서 작동하지 않는 `require` 구문을 찾아 실제로 필요한 모듈의 코드로 변환시켜 줄 것입니다. 그리고 최종 결과물은 모든 모듈들이 합쳐진 한 개의 파일이 될 것입니다. 그리고 이 파일은 `require` 문이 없겠죠.

가장 유명한 모듈 번들러는 [Browserify](http://browserify.org/)라는 것이었는데, 2015년 즈음부터, [webpack](https://webpack.js.org/)이라는 것이 가장 유명해지기 시작했습니다. 리액트가 webpawebpawebpawebpack의 많은 기능을 사용함으로써 더 유명해지는데 한 몫 하기도 했죠.

그러면 우리는 webpawebpawebpawebpack을 사용해서 우리의 코드가 브라우저에서도 잘 동작할 수 있게 `require` 구문을 해결해보도록 하죠. 가장 먼저 webpawebpawebpawebpack을 사용하려면 설치를 해주어야 합니다. 다행히도 webpack도 npm 패키지 중 하나이기 때문에 커맨드 명령어를 통해 쉽게 설치하여 줄 수 있습니다.

```shell
$ npm install webpack webpack-cli --save-dev
```

우리는 `webpack`과 `webpack-cli`라는 2개의 패키지를 설치하고 있습니다. 그리고 `--save-dev` 구문은 이것을 개발할 때만 필요한 모듈이라고 `package.json`에 얘기를 해주는 역할을 합니다. 그래서 만약에 다른 사람이 여러분의 프로젝트를 사용을 하려면 개발할 때 사용된 모듈은 설치를 안해도 되는 것이죠.

```shell
{
  "name": "historyjs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.29.1"
  },
  "devDependencies": {
    "webpack": "^5.10.0",
    "webpack-cli": "^4.2.0"
  }
}
```

`package.json` 파일을 보시면 `devDependencies`에 `webpack`과 `webpack-cli`가 잘 설치된 것이 보이실 겁니다.

그러면 이제 webpawebpawebpack을 사용해 `index.js` 파일을 실행시켜보도록 하죠.

```shell
$ ./node_modules/.bin/webpack ./index.js --mode=development
```

위의 커맨드는 `node_modules` 디렉토리에 있는 webpack을 찾아서 `index.js` 파일을 실행시켜줄 것입니다. 그러면 webpawebpawebpack은 `index.js` 파일부터 시작하여 모든 `require` 구문들을 찾아 그것을 브라우저에서 작동을 하는 적절한 코드로 변환시켜주고 최종적으로 모든 모듈들이 합쳐진 한 개의 파일을 만들어 줄 것입니다. 최종적으로 만들어지는 파일의 기본 값은 `dist/main.js` 파일입니다. 이것을 바꾸어 줄 수 있는데 그것은 잠깐만 있다가 설명을 하겠습니다.

또, `--mode=development` 구문은 최종적으로 만들어진 자바스크립트 파일을 개발자가 읽을 수 있는 코드로 만들어 두어라 입니다. 이것을 넘겨주지 않으면 우리가 알아볼 수 없는 이상한 코드로 나타날 것입니다.

webpawebpawebpack을 통해 브라우저에서 동작하는 `dist/main.js` 파일을 만들었으니, `index.js` 대신 `dist/main.js`를 브라우저에서 사용하도록 하겠습니다.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>자바스크립트 예시</title>
</head>
<body>
  <h1>안녕하세요?</h1>
  <script src="dist/main.js"></script>
</body>
</html>
```

그리고 다시 브라우저를 새로고침해보시면, 코드가 잘 작동하는 것이 보이실겁니다!

여기서 팁은, webpawebpack에는 webpawebpack이 어떻게 동작을 할 지 설정을 해 줄 수 있는 파일 - `webpack.config.js`가 있습니다. 우리는 이 파일을 통해서 webpawebpack이 어떻게 동작할지 조정을 하여줄 수 있습니다.

한 번 설정을 해주어 보도록하죠.
```javascript
// webpack.config.js
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    publicPath: 'dist'
  }
};
```

위를 보시면, `./index.js` 를 시작으로 삼아서 `mian.js` 라는 파일을 output으로 달라고 설정을 하였습니다. 그리고 mode는 development로 하여주었죠. 이제 우리는 webpack을 실행할 때마다, 아까보다 더 간단하게 명령어를 실행해 줄 수 있습니다.

```shell
$ ./node_modules/.bin/webpack
```

`webpack.config.js`에서 기본적인 설정을 하여주었기 때문에 이제 더 이상  `index.js`와 `--mode=development`를 터미널에서 안 쳐줘도 됩니다. 

이것이 사실 별로 대단한게 아닌 것처럼 보일지는 몰라도, 이러한 작업환경에는 큰 이점이 있습니다. 왜냐하면 우리는 더이상 HTML에서 여러 개의 자바스크립트 파일을 연결시켜주지 않아도 되기 때문이죠. 그리고 새로운 자바스크립트 라이브러리들은 `require`를 통해서 불러들일 수 있습니다. 

예를 들어, 20개 정도의 자바스크립트 라이브러리를 쓴다면 원래는 HTML에서 그 라이브러리들의 위치를 일일이 찾아 다 연결시켜주어야하고 로딩이 되는 순서도 신경을 써주어야 겠죠. 하지만 지금은 `require` 문으로 아주 간단히 해결해 줄 수 있습니다!

## 코드 변환(Transpiling Code)

코드를 변환환다는 말은 특정 언어의 코드를 비슷한 다른 언어의 코드로 변환시키는 것을 보통 얘기합니다. 이것은 프론트엔드 개발에서 아주 중요한 역할을 합니다. 왜냐하면 브라우저들은 끊임없이 나오는 새로운 기능들을 다 적용시키지 못하기 때문에 우리는 브라우저에서 작동하지 않는 새로운 코드를 브라우저에서 동작하는 코드들로 변환시켜주는 도구가 있어야 하는 것이죠.

CSS는 [Sass](https://sass-lang.com/), [Less](http://lesscss.org/), 그리고 [Stylus](https://stylus-lang.com/) 등이 있습니다. 자바스크립트를 위한 가장 유명한 트랜스파일러는 [CoffeeScript](https://coffeescript.org/#cli)라는 것이 있었고, 요즈음에는 보통 [babel](https://babeljs.io/)이나 [TypeScript](https://www.typescriptlang.org/)를 많이 사용합니다. 우리는 자바스크립트와 가장 가까운 babel에 대해서 다루어 보겠습니다. babel은 새로운 언어는 아니고 브라우저에서 동작하지 않는 새로운 자바스크립트를 브라우저에서 동작하게 만들어주는 트랜스파일러(코드변환기)입니다.

그러면, babel을 webpack과 어떻게 같이 사용하는지 한 번 보겠습니다. 일단 먼저 babel을 설치해주겠습니다(이것도 npm 패키지입니다. npm 대단하쥬?).

```shell
$ npm install @babel/core @babel/preset-env babel-loader --save-dev
```

저희는 개발 환경에 사용될 총 3가지 패키지를 설치해주었습니다. 간략하게 설명을 하자면,

- `@babel/core`: 바벨의 메인
- `@babelt/preset-env`: 변환할 자바스크립트의 새로운 기능들을 지정
- `babel-loader`: loader를 통해 webpack이 babel을 불러들일 수 있게 해줌

입니다. 이제 webpack이 babel-loader를 통해 babel을 사용할 수 있게 `webpack.config.js`를 약간 수정해줄게요.

```javascript
// webpack.config.js
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
```

일단 위의 문법은 아주 헷갈릴텐데요. 지금 당장 이해하려 하지 않으셔도 됩니다. 간략히 설명을 하자면 모든 `node_modules` 폴더를 제외하고 모든 .js 파일들을 찾아 babel을 사용해 코드를 변환을 해주라는 말입니다. 

이제 모든게 준비가 되었으니, ES6 기능들을 자바스크립트에서 사용해보겠습니다. 먼저 `import` 문을 사용해볼게요.

```javascript
// index.js
import moment from 'moment';

console.log("Hello from JavaScript!");
console.log(moment().startOf('day').fromNow());
```

위의 예시에서 우리는 `require` 대신 `import`문을 사용해주었습니다. 어떻게 보면 많이 달라보이지는 않지만 사실 `import`문은 `require` 보다 더 많은 유연성을 가지고 있습니다.

우리가 `index.js` 파일의 내용을 바꾸어 주었으니, 다시 webpack을 통해 빌드를 해주어야 겠죠.

```shell
$ ./node_modules/.bin/webpack
```

그리고 나서 브라우저를 다시 새로 고침해보시면 작동하시는 것을 알 수 있을 겁니다.

이제 저희는 거의 다 끝이 났습니다! 그런데 아직도 약간은 불편함이 있습니다. 파일을 변경해줄때마다 webpack을 다시 실행시켜주어야 하는 것이죠. 또한 우리가 브라우저의 로딩속도에 대해서 신경을 쓴다면, 최종 결과물을 약간 축소시켜 주어야 할 것입니다. 


## 빌드 자동화하기(Task runner)

우리는 webpack을 통하여 자바스크립트 모듈들을 묶어줄 수 있음을 배웠습니다. 그런데 파일이 바뀔 때마다 새로 실행(빌드)시켜주어야 하는 불편함이 있었죠. 그래서 우리는 Task runner라는 것을 사용할 것입니다. Task runner는 쉽게 얘기하여 여러분의 빌드 과정을 자동화시켜주는 도구입니다. 프론트엔드 개발에서는 코드를 축소시키고, 이미지를 최적화하고, 테스트를 실행하는 등등이 있겠죠.

2013년에, Grunt가 가장 유명한 프론트엔드 task runner였습니다. 그리고 Gulp라는 것이 등장하였죠. 최근에는 가장 많이 사용되는 것은 npm의 내장된 스크립트 기능을 사용하는 것입니다. 

그렇다면 npm 스크립트를 이용해 webpack을 조금 더 쉽게 사용하여 보죠. 어렵게 들릴 수 있겠지만 사실 `package.json` 파일을 아주 간단하게 바꾸어 주면 됩니다.

```json
{
  "name": "historyjs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --progress --mode=production",
    "watch": "webpack --progress --watch"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.29.1"
  },
  "devDependencies": {
    "@babel/core": "^7.12.9",
    "@babel/preset-env": "^7.12.7",
    "babel-loader": "^8.2.2",
    "webpack": "^5.10.0",
    "webpack-cli": "^4.2.0"
  }
}
```

위에서 보이듯이 우리는 `build`와 `watch`라는 새로운 스크립트를 추가하여 주었습니다. `build` 스크립트를 사용하기 위해서는 아래의 명령어를 입력하여 주시면 됩니다.

```shell
$ npm run build
```

위의 명령어는 webpack을 실행시킬 것입니다. `package.json` 파일을 보시면 `--progress` 옵션은 진행과정을 퍼센트로 보여주는 것이고, `--mode=production`은 코드를 배포할 수 있게 최적화하라는 것입니다. 

그리고 `dist/main.js`를 확인해보시면 코드가 우리가 알 수 없게 최적화 된 것을 확인하실 수 있습니다.

이번에는 `watch` 스크립트를 한 번 사용해보도록 할게요.

```shell
$ npm run watch
```

위의 명령어는 webpack의 `--watch` 옵션을 사용해 자바스크립트 파일이 바뀔 때마다 webpack을 새로 실행시키라는 것입니다. 이렇게 함으로써 이제 우리는 webpack을 계속 수동적으로 다시 실행시켜줄 필요가 없는 것이죠.

여기서 아주 좋은 점은 `package.json` 파일을 보시면 webpack의 파일 경로(`./node_modules/.bin/webpack`)를 딱히 지정해주지 않아도 된다는 것입니다 :) node.js가 npm 패키지들의 위치를 알기 때문이죠. 좋지 않나요!?

더 나아가서 우리는 webpack-dev-server라는 것을 통해서 자동으로 새로 고침을 해주게 할 수도 있습니다. 먼저 설치를 해볼게요.

```shell
$ npm install webpack-dev-server --save-dev
```

그리고 나서 `webpack-dev-server`를 사용하여 줄 수 있게 `webpack.config.js`에서 약간의 설정을 해주어야 합니다.

```javascript
// webpack.config.js
module.exports = {
  mode: 'development',
  entry: './index.js',
  // 'devServer' 부분을 새로 추가하여 주세요.
  devServer: {
    contentBase: './dist',
    port: 8000,
    open: true
  },
  output: {
    filename: 'main.js',
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
```

우리가 금방 추가한 `devServer`의 내용은 우리가 `./dist`에서 `index.html` 파일을 찾고, `localhost:8000`에서 우리의 기본 브라우저를 열어주라는 설정을 한 것입니다.

그리고 이것을 간편하게 실행시켜줄 수 있게 `package.json`에 npm script를 추가해줄게요.

```json
{
  "name": "historyjs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --progress --mode=production",
    "watch": "webpack --progress --watch",
    "server": "webpack serve"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.29.1"
  },
  "devDependencies": {
    "@babel/core": "^7.12.9",
    "@babel/preset-env": "^7.12.7",
    "babel-loader": "^8.2.2",
    "webpack": "^5.10.0",
    "webpack-cli": "^4.2.0",
    "webpack-dev-server": "^3.11.0"
  }
}
```

그리고 나서 이제 아래의 명령어를 실행시켜서 자동 새로고침이 되는 웹페이지를 열어보겠습니다.

```shell
$ npm run server
```

짜잔~ 여러분의 기본 브라우저에 `localhost:8000` 주소로 `index.html` 파일이 열리는 것을 확인하실 수 있습니다. 여러분이 `index.js` 파일을 변경할 때마다 webpack-dev-server가 다시 webpack을 실행시켜 모듈들을 묶어서 최종 파일을 만들어낸 다음, 브라우저를 자동으로 새로고침 해줄 것입니다.

이렇게 하면 어어엄~청나게 시간이 절약될 것이고 여러분은 코드에만 더 집중할 수 있을 것입니다.

이러한 기능들은 사실 빙산의 일각이고, 더 많은 유용한 기능들이 있지만 지금은 이것을 이해하는 것만으로도 충분할 것 같습니다. 더 많은 기능들을 보기 위해서는 공식 홈페이지([webpack](https://webpack.js.org/))를 참고해주시면 됩니다. 

## 결론

위에서 설명드린 모든 것들은 현대의 자바스크립트를 간략하게 설명한 것입니다. 저희는 아주 간단한 HTML과 자바스크립트 시작해, 패키지 매니저를 사용해 라이브러리를 다운받고, 모듈 번들러를 이용해 하나의 파일을 만들고, 트랜스 파일러를 이용해 코드를 변환하고, 마지막으로 task runner를 이용해 빌드 절차를 자동화시키는 법을 배웠습니다.

### 참고사항

많은 내용들은 오픈소스 프로젝트인 [The Odin Project](https://www.theodinproject.com/dashboard)에서 가져온 내용들입니다. 

위의 내용은 [Modern Javascript Explained For Dinosaurs](https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70)를 번역한 내용입니다.









