# JavaScript 복습: 모멘텀 클론코딩

> 2022년 4월부터 8월까지 4월간 국비지원 교육을 받았으나 개인 사정에 의해 수학학원에서 일을 하게 되면서 1년간의 공백이 생겼다. 다시 개발 공부를 시작하면서 가장 간단하면서도 꼭 알아야 하는 javascript부터 시작하기로 결정했다. 과정은 [노마드코더](https://nomadcoders.co) 사이트에서 무료로 제공하는 모멘텀 클론코딩으로 정했다.

<br>

## 학습 목표

- 최대한 빠른 시간 안에 코딩에 대한 감각 익히기
- 기본적인 git, github 사용법 숙지하기
- javascript 복습

<br>

## 목차

- [0. git, github 사용하기](#0-git--github-----)
- [1. requirements](#1-requirements)
- [2 javacript basic](#2-javacript-basic)
    + [- 2.0 Your First JS Project](#--20-your-first-js-project)
    + [- 2.1 Basic Data Types](#--21-basic-data-types)
    + [- 2.2 Variables](#--22-variables)
    + [- 2.3 const and let](#--23-const-and-let)
    + [- 2.4 Booleans](#--24-booleans)
    + [- 2.5 Arrays](#--25-arrays)
    + [- 2.6 Objects](#--26-objects)
    + [- 2.7 Function part One](#--27-function-part-one)
    + [- 2.8 Function part Two](#--28-function-part-two)
    + [- 2.10 Returns](#--210-returns)
    - [- 2.12 Conditionals](#--212-conditionals)
    - [- 2.13 Conditionals part Two](#--213-conditionals-part-two)
    - [- 2.14 Conditionals part Three](#--214-conditionals-part-three)

<br>

# 0. git, github 사용하기

# [*git 사용법 정리](https://backlog.com/git-tutorial/kr/intro/intro1_1.html)

#### -`git init`

: 터미널에서 git으로 관리할 디렉토리로 들어간 후 `git init` 을 입력하면 git으로 관리하는 디렉토리가 된다. (.git 디렉토리가 생긴 것을 확인할 수 있다.)



#### -`git status`

: 디렉토리 내에 있는 파일들의 수정 상태와 commit 여부를 확인할 수 있다.



#### -`git remote`

- `git remote -v`
  : 디렉토리와 원격저장소의 연결 상태를 확인할 수 있다. `git init` 만 했다면 아무것도 뜨지 않는다.

  ![git_remote1](./assets/img/git_remote1.png)

- `git remote add <이름> <원격저장소 주소>`

  :  현재 디렉토리를 github의 원격저장소와 연결한다. 연결 후 다시 `git remote -v`로 연결 상태를 확인할 수 있다.

  ![git_remote2](./assets/img/git_remote2.png)

#### -`git add`

- `git add .`: 모든 파일을 Staging Area로 등록한다.
- `git add <파일명>`: 지정한 파일만 Staging Area로 등록한다.



#### -`git commit -m '커밋메세지'`

: 앞서 Staging Area에 있던 파일들을 commit한다. 커밋메세지는 해당 commit의 이름으로 등록된다.

(`git commit`만 하면 vim 편집기로 커밋 내용을 저장해야 했던 것 같은데 vim 편집기 사용은 아직 어려우니 가급적 `git commit -m`사용. 참고로 vim 편집기에서 빠져나오려면  `:` 키를 먼저 누르고 `q` 를 누른 후 엔터를 눌러 빠져나오면 된다.)



#### -`git push origin master`

: commit한 내역을 원격저장소로 보내서 동기화한다.

> * push 도중 에러 발생<br>
>
> ![push_error](./assets/img/push_error.png)
>
> master 브랜치가 없어서 문제가 생겼다면, git init 할 때마다 master 브랜치를 만들어 줘야 하는 것인가? 하는 의문이 들어서 검색해봤다.
>
> [git에서 origin에 관한 참고자료](http://daplus.net/git-git-push-origin-master%EC%97%90%EC%84%9C-origin%EC%9D%98-%EC%9D%98%EB%AF%B8%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9E%85%EB%8B%88%EA%B9%8C/)
>
> [git에서 기본 브랜치를 바꾸는 방법](https://blog.outsider.ne.kr/1503)
>
> [git에서 원격저장소와 로컬저장소의 브랜치 통일](https://m.blog.naver.com/corrosion521/223041408390)
>
> [git에서 원격, 로컬저장소의 기본 브랜치 바꾸는 방법 (총정리)](https://m.blog.naver.com/corrosion521/223041408390)<br>
>
> 결론은 `git push origin <브랜치 이름>`에서 브랜치는 로컬 저장소의 브랜치 이름과 원격 저장소의 브랜치 이름이 일치해야 한다. 즉, 로컬 저장소에 존재하지 않는 브랜치 이름으로 push할 순 없다. 반면에, 로컬 저장소에만 존재하고 원격 저장소에는 없는 브랜치를 push하면 원격저장소에 같은 이름의 브랜치가 새로 만들어진다.<br>
>
> master, slave 관계가 인종차별적 의미를 가지고 있기 때문에 현재는 main을 기본 브랜치로 사용한다고 한다. 아마 지금 충돌이 났던 이유는 지난 국비지원 교육 과정에서 강사님이 하라는 대로 github와 git의 default 브랜치 이름을 master로 모두 바꾸었다가, 장기간 사용하지 않으면서 git의 default만 main으로 초기화 되어 생긴 이슈라고 생각한다.<br>

### -`git merge <브랜치 이름>`

- ff(fast-forward) : 현재 선택된 브랜치는 수정사항이 없고, 지정한 브랜치만 커밋이 존재할 때, 그 상태로 바꿔주는 것을 의미. 

- non fast-forward : 두 브랜치 모두 수정사항이 존재하여 각각의 수정사항을 합치는 것을 의미.<br>

### -`git pull origin master`

: github의 원격 저장소의 커밋 내용을 로컬 저장소로 가져와서 합친다. (fetch + merge)

> - push 도중 에러 발생
>
> ![push_error](./assets/img/pull_error.png)
>
> 원격 저장소는 그대로 있는 상태에서 로컬 저장소에 커밋한 내용이 있어서 오류가 발생했다. 내용을 합쳐서 다시 push하기 위해서 `git config pull.rebase false`실행하여  충돌한 파일에서 충돌한 지점을 수정하면 다시 commit 할 수 있는 것 같다.



<br>

# 1. requirements

javascrip는 프론트엔드 개발을 하려면 필수적이다. 프레임 워크를 이용하면 백엔드 개발도 가능하다. VScode를 이용하여 javascript를 다뤄 볼 예정이다.

<br>

# 2 javacript basic

### - 2.0 Your First JS Project

: javascript가 작동하는 방식에 대한 설명이다. javascrip는 별도의 프로그램 설치 없이 모든 브라우저에서 작동한다. console에서 명령을 내리면 바로 출력이 나오기도 하지만, 복잡한 프로그램을 만들기 위해서는 파일명.js 형태로 자바스크립트 파일을 만들고, html 파일에서 불러오는 형식으로 작동한다. (css도 마찬가지) 

VScode에서 html 파일을 연 다음 `!`로 자동으로 기본 뼈대를 만들 수 있다.

![!](./assets/img/2.0-1.png)

css 파일은 head안에, 그리고 title 위에서 가져온다. (rel은 relationship의 약자)

그리고 js 파일은 body 안에서 가져온다.

![!](./assets/img/2.0-2.png)

앞으로의 수업에서는 js 파일을 편집해가면서 html 파일을 열었을 때 어떻게 작동하는지 확인할 예정이다.

<br>



### - 2.1 Basic Data Types

자바스크립트에서는 자동으로 Date Type을 인식한다.

<br>

### - 2.2 Variables

- `console.log( )` : ( ) 안의 내용을 콘솔에 출력. 참고로 문자는 따옴표로 묶어줘야 하는데, 큰 따옴표, 작은 따옴표 아무거나 써도 상관 없다.

variable : 값을 저장하거나 유지하는 역할

- const : 바뀌지 않는 값, 바뀌면 안되는 값을 선언할 때 사용한다.

자바스크립트에서 변수명을 작성할 때는 단어와 단어 사이를 구분하기 위해 첫 문자를 대문자로 쓰는 것이 관례(camelCase), 파이썬에서는 _를 이용해서 구분한다.(snake_case)

<br>



### - 2.3 const and let

variable(변수)를 만들 때는 const와 let을 이용해서 선언할 수 있다.

- let : 변하는 값을 선언할 때 사용한다. (const로 선언한 변수는 업데이트 하면 오류가 발생한다.)

그렇다고 let만 쓰면 안된다. const는 변하면 안되는 수에만 쓴다. 이런 특징을 이용하면 변수들만 보고도 작성자의 의도를 유추 할 수 있다. (예를 들면, 'let으로 선언한 걸 보니 어디선가 업데이트 되겠구나') 따라서 기본적으로는 const를 쓰고, 업데이트가 필요한 경우에만 let을 써라.

- var : 과거에 쓰던 형태. 어디서든 업데이트 할 수 있음. 실수로 업데이트 하더라도 문제가 발생하지 않는다.

다시 말하지만, var은 과거에 쓰던 거고 var을 사용한다면 해당 변수가 어떤 의도로 쓰였는지 전혀 알 수 없기 때문에 절대 쓰지 마라. const가 기본이고, 업데이트가 필요한 변수라면 let을 사용한다.

<br>

### - 2.4 Booleans

- true : 참 (켜져있음)
- false : 거짓 (꺼져있음)
- null : 아무것도 없다. 값이 비어있다. null은 자연적으로 발생하는 것이 아니라, 없다는 것을 확실히 하기 위해서 우리가 null이라는 비어있는 값을 주어준 것. 자바스크립트에게 여기엔 비어있다는 것을 알려주려고 사용. (파이썬에서는 None으로 사용.)
- undifined : 만들었지만 아무런 값을 주지 않았다. 컴퓨터 메모리 안에는 공간은 차지하지만, 값이 들어가지 않았다.

이 네가지의 공통점은 text가 아니라 type이라는 것.

<br>

### - 2.5 Arrays

가장 기본적인 데이터 구조.

*vscode에서 단어를 한번에 수정하려면 단어 선택 후 `cmd + shift + L `

[ ]안에 집어넣으면 되고 각각의 자료형은 다 달라도 상관없다. 쉼표(,)로 구분만 잘 하면 된다.

> ![!](./assets/img/2.5-1.png)
>
> 첫번째 줄이 쓰는 법이고 밑이 읽는 법이다. 배열은 0부터 채워넣기 때문에 5를 출력하면 6번째인 "sat"가 출력된다.
>
> ![!](./assets/img/2.5-2.png)
>
> 항목을 추가하고 싶다면, array의 함수 .push( )를 이용해서 맨 뒤에다가 항목을 추가할 수 있다.

<br>

### - 2.6 Objects

배열처럼 여러 항목을 넣을 수 있는데, 각 항목의 순서만 나열된 것이 아니라 이름이 정해진 것.

![!](./assets/img/2.6-1.png)

object는 const로 선언했지만 자유롭게 항목의 값을 업데이트하거나 추가할 수 있다. 여기서 player라는 object 자체는 const이지만 각 항목은 const가 아니라고 생각하면 될 것 같다. 사실은 `console.log( )`에서 사용하는 log도 console이라는 object 안에 있는 하나의 항목이다.

<br>

### - 2.7 Function part One

앞서 player라는 object에서 name항목을 가져올 때 `player.name`을 이용했는데 `console.log( )`와 다른 점은 괄호의 유무이다. 괄호가 있으면 함수이다.

함수란, 자주 사용하는 것을 반복해서 사용하기 편하도록 해놓은 것이다.

<br>

### - 2.8 Function part Two

괄호 안에 있는 값을 받아서 function 안에서 처리할 수 있다. 함수를 선언할 때 괄호 안에 어떤 값을 받을지 순서대로 지정해준 다음, 함수 안에서 그 변수들을 받아서 처리하면 된다. 단, 여기서 사용하는 변수들은 함수 안에서만 존재한다. 함수가 끝나는 순간 사라져버림.

> - object 안에서 함수를 선언하는 방법
>
> ![!](./assets/img/2.8-1.png)
>
> 위와 같이 함수를 선언하면 `console.log()`에서 사용했던 형태의 함수를 만들 수 있다.

<br>

### - 2.10 Returns

이때까지 쓴 함수는 함수 안에 적어놓은 기능만을 수행했다. (예를 들면, console.log( ) )

함수에서 어떤 결과값을 얻으려고 한다. 함수 안에서 `return <반환할 값>`을 적으면  해당 함수를 호출 했을 때 그 결과값이 반환된다.

> ![!](./assets/img/2.10-1.png)
>
> 참고로 상수는 브라우저에서 이름만 쳐보면 값 확인 가능

<br>

### - 2.12 Conditionals
- `prompt("메세지")`: 메세지를 띄워 보여주고, 사용자가 값을 입력하면 그 값을 받아옴. 아주 오래된 방법이고 css를 적용할 수 없을 뿐더러 답하기 전까지 이 라인에서 동작을 멈추기 때문에 사용 안한다.

 - type을 바꾸는 방법 : `parseInt( )`

![!](./assets/img/2.11-1.png)

 123을 입력하고 받아온 값의 type을 확인해보니 string이다.

![](./assets/img/2.11-2.png)

 `parseInt( )`이용해서 string 을 int로 바꿀 수 있다.

![!](./assets/img/2.11-3.png)

 입력한 값이 숫자가 아니면 NaN(Not a Number)이 나온다.

![!](./assets/img/2.11-4.png)

그래서 이런 형태로 쓰면 한번에 처리 가능하다.

<br>



### - 2.13 Conditionals part Two

- `inNaN( )` : 괄호 안의 값이 NaN인지 판별하여 boolean으로 반환해준다.

![!](./assets/img/2.12-1.png)

123을 입력하면 위와 같이 나오고, 

![!](./assets/img/2.12-2.png)

asd를 입력하면 아래와 같이 나온다.

이제 condition을 확인한다. `if ( ) {  }`에서 ( ) 안에 있는 값이 true이면 { }안에 있는 코드를 실행.

![!](./assets/img/2.12-3.png)

숫자가 아닌 값을 입력하면 condition이 true니까 이렇게 나옴.

![!](./assets/img/2.12-4.png)

숫자를 입력하면 condition이 false라서 else안에 있는 코드를 실행.

<br>

### - 2.14 Conditionals part Three

- AND( `&&`) : 둘 다 true 여야 true.
- OR(`||`) : 둘 중 하나라도 true이면 true.

![!](./assets/img/2.14-1.png)

나이를 입력하면 음주 가능 여부를 나타내도록 작성하였다.

<br>

# 3. javascript on the browser

### 3.0 The Document Object

HTML의 요소들은 Object에서 불러오듯이 쓸 수 있다.

<br>

### 3.1 HTML in javascript

javascript에서 HTML의 항목들을 불러오거나 바꿀 수 있다.

<br>

### 3.2 Searching For Elements

- `document.getElementById( 아이디 )` : 아이디가 괄호 안에 있는 텍스트와 일치하는 것을 가져옴

- `document.getElementByClassName( 클래스 )` : 클래스가 괄호안에 있는 텍스트와 일치하는 것을 배열 형태로 가져옴

- `document.querySelector(  )` : 괄호 안에다가 css selector 방식으로 원하는 것을 가져올 수 있다. 하나의 element를 가져올 수 있음. 만족하는 것 중 첫번째 element만 가져올 수 있다.

  ![](./assets/img/3.2-1.png)

- `document.querySelectorAll(  )` : element 전부를 가져올 수 있다.

<br>





