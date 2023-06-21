# JavaScript 복습: 모멘텀 클론코딩

> 2022년 4월부터 8월까지 4월간 국비지원 교육을 받았으나 개인 사정에 의해 수학학원에서 일을 하게 되면서 1년간의 공백이 생겼다. 다시 개발 공부를 시작하면서 가장 간단하면서도 꼭 알아야 하는 javascript부터 시작하기로 결정했다. 과정은 [Nomad Corder] (https://nomadcoders.co)에서 무료로 제공하는 모멘텀 클론코딩으로 정했다.



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

(`git commit`만 하면 vim 편집기로 커밋 내용을 저장해야 했던 것 같은데 vim 편집기 사용은 아직 어려우니 가급적 `git commit -m`사용)



#### -`git push origin master`

: commit한 내역을 원격저장소로 보내서 동기화한다.

> * push 도중 에러 발생 <br>
>
> ![push_error](./assets/img/push_error.png)
>
> master 브랜치가 없어서 문제가 생겼다면, git init 할 때마다 master 브랜치를 만들어 줘야 하는 건가? 예전에 origin 뭐 설정하는 거 있었던 거 같은데... 다음에 마저 검색해봐야 겠다.
>
> [git에서 origin에 관한 참고자료] (http://daplus.net/git-git-push-origin-master%EC%97%90%EC%84%9C-origin%EC%9D%98-%EC%9D%98%EB%AF%B8%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9E%85%EB%8B%88%EA%B9%8C/)

