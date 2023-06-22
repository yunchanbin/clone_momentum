# JavaScript 복습: 모멘텀 클론코딩

> 2022년 4월부터 8월까지 4월간 국비지원 교육을 받았으나 개인 사정에 의해 수학학원에서 일을 하게 되면서 1년간의 공백이 생겼다. 다시 개발 공부를 시작하면서 가장 간단하면서도 꼭 알아야 하는 javascript부터 시작하기로 결정했다. 과정은 [노마드코더](https://nomadcoders.co) 사이트에서 무료로 제공하는 모멘텀 클론코딩으로 정했다.



## 학습 목표

- 최대한 빠른 시간 안에 코딩에 대한 감각 익히기
- javascript 복습
- 기본적인 git, github 사용법 숙지하기



## 0. git, github 사용하기

#### -`git init`

: 터미널에서 git으로 관리할 디렉토리로 들어간 후 `git init` 을 입력하면 git으로 관리하는 디렉토리가 된다. (.git 디렉토리가 생긴 것을 확인할 수 있다.)



#### -`git status`

: 디렉토리 내에 있는 파일들의 수정 상태와 commit 여부를 확인할 수 있다.



#### -`git remote`
- `git remote -v`
  : 디렉토리와 원격저장소의 연결 상태를 확인할 수 있다. `git init` 만 했다면 아무것도 뜨지 않는다.

  ![git_remote1](./assets/img/git_remote1.png)

- `git remote add <이름> <원격저장소 주소>`

  :  현재 디렉토리를 github의 원격저장소와 연결한다. 연결 후 다시 `git remote -v`로 상태를 확인해보면 연결된 것을 확인할 수 있다.

  ![git_remote2](./assets/img/git_remote2.png)

#### -`git add`

- `git add .`: 모든 파일을 Staging Area로 등록한다.
- `git add <파일명>`: 지정한 파일만 Staging Area로 등록한다.



#### -`git commit -m '커밋메세지'`

: 앞서 Staging Area에 있던 파일들을 commit한다. 커밋메세지는 해당 commit의 이름으로 등록된다.

(`git commit`만 하면 vim 편집기로 커밋 내용을 저장해야 했던 것 같은데 vim 편집기 사용은 아직 어려우니 가급적 `git commit -m`사용. 참고로 vim 편집기에서 빠져나오려면  `:` 키를 먼저 누르고 `q` 를 누른 후 엔터를 눌러 빠져나오면 된다.)



#### -`git push origin master`

: commit한 내역을 원격저장소로 보내서 동기화한다.

> * push 도중 에러 발생 <br>
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
> 결론은 `git push origin <브랜치 이름>`에서 브랜치는 로컬 저장소의 브랜치 이름과 원격 저장소의 브랜치 이름이 일치해야 한다. 즉, 로컬 저장소에 존재하지 않는 브랜치 이름으로 push할 순 없다. 반면에, 로컬에는 새로 만들었지만 원격 저장소에는 없는 브랜치를 push하면 원격저장소에 같은 이름의 브랜치가 새로 만들어진다.<br>
>
> master, slave 관계가 인종차별적 의미를 가지고 있기 때문에 현재는 main을 기본 브랜치로 사용한다고 한다. 아마 지금 충돌이 났던 이유는 지난 국비지원 교육 과정에서 강사님이 하라는 대로 github와 git의 기본 브랜치 이름을 master로 모두 바꾸었다가, 장기간 git이 방치되어 git의 기본 브랜치 이름만 main으로 초기화 되면서 생긴 이슈라고 생각한다..

### -`git merge <브랜치 이름>`

: 현재 선택된 브랜치에다가 지정한 브랜치의 변경사항을 합친다.
