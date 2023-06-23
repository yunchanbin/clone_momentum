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

<br>

# 0. git, github 사용하기

[*git 사용법 정리](https://backlog.com/git-tutorial/kr/intro/intro1_1.html)

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

앞으로의 수업에서는 js 파일을 편집해가면서 html 파일을 열었을 때 어떻게 작동하는지 확인할 예정이다.<br>



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



