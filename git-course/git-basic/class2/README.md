## 실수고치기 & 원상태로 돌리기

이번 시간에는, 기본적인 커밋을 하는 방법에 대해서 알아봤으니 깃을 사용하면서 일어날 수 있는 실수들이나 커밋을 잘못했을 경우 등등의 상황에 대해서 다시 원상태로 복구하는 방법을 알아보겠습니다.

먼저, 우리가 이번 예제에 사용할 폴더와 파일을 만들어 주겠습니다.

```shell
$ mkdir git-example
$ cd git-example
```

그리고 git-example 폴더에 들어갈 파일입니다. `script.js`라고 칭할게요.

```javascript
function add(num1, num2) {
    console.log(num1 + num2);
}

function subtract(num1, num2) {
    console.log(num1 - num2);
}

function multiply(num1, num2) {
    console.log(num1 * num2);
}

function divide(num1, num2) {
    console.log(num1 / num2);
}
```

보통 우리가 깃 레포지터리를 만들고 나서 하는 건, 첫번째 커밋이죠. 첫번째 커밋을 한 번 해보겠습니다.

```shell
$ git add .
$ git commit -m "First Commit"

[master (root-commit) c7b887b] First commit
 1 file changed, 15 insertions(+)
 create mode 100644 script.js
```

성공적으로 첫번째 커밋을 했습니다.

## 시나리오1: 커밋 메세지를 잘못 입력하였을 때(혼자서 작업시 유용)

첫번째 시나리오는 커밋 메세지를 잘못 입력하였을 때 입니다. 예를 들어서 우리가 빼기 함수를 수정하고 커밋을 해볼게요. 먼저 빼기에 관련된 브랜치를 만들어주겠습니다.

```shell
$ git branch subtract-feature
$ git branch
* master
subtract-feature
```

하지만, 실제로 subtract-feature 브랜치로 옮기진 않겠습니다. 왜냐하면 좀있다가 할 시나리오3과 관련이 있기 때문입니다. 그냥 마스터브랜치에서 계속 작업을 하겠습니다. script.js 파일을 고쳐줍니다.

```javascript
function subtract(num1, num2) {
    return num1 - num2;
}
```

subtract 함수의 내용을 `console.log` 에서 `return` 으로 바꾸어 주었습니다. 이제 커밋을 합니다.

```shell
$ git add .
$ git commit -m "Completed Multiply Function"

[master 2b3b6cf] Completed Multiply Function
 1 file changed, 1 insertion(+), 1 deletion(-)
```

혹시 무엇인가 잘못 된 것을 느끼지 못하셨나요? 커밋 메세지에 'Completed Subtract Function'을 해주었어야 하는데 'Multiply Function' 으로 잘못 입력하였습니다. 별 대수롭지 않게 넘길 수 있겠지만, 이렇게 간단한 예시가 아니고 큰 프로그램 이었을때, 커밋의 내용과 맞지 않는 커밋 메세지는 큰 혼란을 일으킬 수 있겠죠. 그러므로 커밋 메세지를 한 번 고쳐보겠습니다.

`--amend -m` 옵션을 통해 가장 최근의 커밋 메세지를 고칠 수 있습니다.

```shell
$ git commit --amend -m "Completed Subtract Function"

[master 2911100] Completed Subtract Function
 Date: Tue Jul 28 17:02:07 2020 +0900
 1 file changed, 1 insertion(+), 1 deletion(-)
```

그리고 나서, 다시 `git log`를 통해, 커밋 메세지를 확인해 봅시다.

```shell
$ git log

commit 2911100e2f6a6dee37161cb5d9ef58fc849c1768 (HEAD -> master)
Author: Daegudude <k3hppk@gmail.com>
Date:   Tue Jul 28 17:02:07 2020 +0900

    Completed Subtract Function

commit c7b887b6f3fe9e55e82f3d7654742f529335f35f
Author: Daegudude <k3hppk@gmail.com>
Date:   Tue Jul 28 16:58:32 2020 +0900

    First commit
```

성공적으로 커밋 메세지가 바뀌었음을 알 수 있습니다. 여기서 명심하셔야 할 것은, **혼자서 작업을 하실 때만 보통 메세지를 `amend`를 통해 수정하시는 것을 추천드립니다.** 왜냐하면, amend를 통해 커밋 메세지를 수정할 시, 커밋의 [해쉬값](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EA%B8%B0%EC%B4%88)이 바뀌기 때문에 다른 사람과 작업을 하고 있을시, 이미 그 사람이 커밋을 수정하기 전의 내용을 내려받았다면 충돌이 일어납니다.

## 시나리오2: 커밋에 파일을 깜빡하고 포함 못 시켰을시

두 번째 시나리오는 커밋에 파일을 깜빡하고 포함 못 시켰을 시 입니다. 먼저 .gitignore라는 파일을 만들어주세요. 그리고 나서, staging 공간에 gitignore 파일을 추가해보겠습니다.

```shell
$ touch .gitignore
$ git add .
$ git status

On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   .gitignore
```

그러면, .gitignore 파일이 커밋을 할 준비가 완료되었다고 뜰 것입니다. 하지만, 어떤 이유로 우리가 새로운 커밋을 하지 않고, 그냥 마지막 커밋에 이 파일을 포함시키고 싶다고 예를 들어볼게요. 이럴 때, 또 다시 `--amend` 를 써서 포함시켜줄 수 있습니다.

```shell
$ git commit --amend

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Tue Jul 28 17:02:07 2020 +0900
#
# On branch master
# Changes to be committed:
#       new file:   .gitignore
#       modified:   script.js
#
~
~
```

그러면, Changes to be commited란에, new file: .gitignore라는 항목이 보이실 겁니다. 마지막 커밋에 .gitignore가 추가된다는 의미입니다. `:wq`를 치시고 Enter를 눌러주시면 됩니다.

```shell
[master 7b76cb2] Completed Subtract Function
 Date: Tue Jul 28 17:02:07 2020 +0900
 2 files changed, 1 insertion(+), 1 deletion(-)
 create mode 100644 .gitignore
```

그러면 이런식으로 출력물이 뜰 것입니다. 그리고 나서 실제로 마지막 커밋에 저희 파일이 포함됬는지 확인을 해볼게요. `--stat` 이라는 옵션을 추가시켜 주면 됩니다.

```shell
$ git log --stat

commit 7b76cb276bbe64167f45a48503201ed57a18292d (HEAD -> master)
Author: Daegudude <k3hppk@gmail.com>
Date:   Tue Jul 28 17:02:07 2020 +0900

    Completed Subtract Function

 .gitignore | 0
 script.js  | 2 +-
 2 files changed, 1 insertion(+), 1 deletion(-)
```

Completed Subtract Function 커밋에 .gitignore 파일도 추가된 것이 보이실 겁니다. 하지만, 또 명심하셔야 할 것이 커밋의 해쉬값을 바꾸기 때문에 깃 히스토리가 바뀌게 됩니다. **혼자서 작업을 하시는 레포지터리 일때만 하시기를 추천드립니다.** 그래야 다른사람이 여러분의 깃 커밋을 내려 받았을 때 충돌이 없게 말이죠.

## 시나리오3: 커밋을 다른 브랜치에 하였을 때

세번째 시나리오는 커밋을 잘못해서 다른 브랜치에 하였을 때 입니다. 현재 제가 있는 브랜치는 마스터 브랜치입니다.

```shell
$ git branch
* master
```

마스터 브랜치의 커밋 히스토리를 확인해보겠습니다.

```shell
$ git log

commit 7b76cb276bbe64167f45a48503201ed57a18292d (HEAD -> master)
Author: Daegudude <k3hppk@gmail.com>
Date:   Tue Jul 28 17:02:07 2020 +0900

    Completed Subtract Function

commit c7b887b6f3fe9e55e82f3d7654742f529335f35f
Author: Daegudude <k3hppk@gmail.com>
Date:   Tue Jul 28 16:58:32 2020 +0900

    First commit
```

보시면, 빼기에 대한 함수의 작업을 마스터 브랜치에서 하였습니다. 사실 우리가 하고자 하는 것은 빼기에 관련된 브랜치를 만들어 작업을 하고 커밋을 하였어야 하는데 말이죠. 그래서, 이렇게 커밋을 다른 브랜치에 하였을 때, 우리가 원하는 브랜치로 커밋을 한 번 옮겨보겠습니다. 이것을 가능하게 하는 것은 `cherry-pick` 이라는 옵션입니다.

먼저 subtract-feature 브랜치로 이동해주겠습니다.

```shell
$ git checkout subtract-feature
Switched to branch 'subtract-feature'
```
그리고 나서 git log를 통해 subtract-feature의 커밋 히스토리를 확인해 볼게요.

```shell
$ git log

commit c7b887b6f3fe9e55e82f3d7654742f529335f35f (HEAD -> subtract-feature)
Author: Daegudude <k3hppk@gmail.com>
Date:   Tue Jul 28 18:23:18 2020 +0900

    First Commit
```

그러면 한 개의 커밋밖에 없을 것입니다. 이제 master 브랜치에 있는 커밋을 옮겨줄게요. 커밋을 옮길 때는, 옮기고자 하는 커밋의 해쉬값을 적어주시면 됩니다. 제가 옮기고자 하는 것은 Completed Subtract Function 라는 메세지를 가진 커밋입니다. 해쉬 값이 `7b76cb` 네요. 다 입력하실 필요 없고 앞의 몇자리 수만 입력해주시면 됩니다.

subtract-feature 브랜치에서, 아래의 명령어를 실행해주세요.

```shell
$ git cherry-pick 7b76cb
[subtract-feature ed237af] Completed Subtract Function
 Date: Tue Jul 28 18:23:46 2020 +0900
 1 file changed, 1 insertion(+), 1 deletion(-)
```

그리고 나서 git log를 확인해볼게요.

```shell
$ git log
commit ed237af265cfa104feacd02b245dc5052cad86cf (HEAD -> subtract-feature)
Author: Daegudude <k3hppk@gmail.com>
Date:   Tue Jul 28 18:23:46 2020 +0900

    Completed Subtract Function

commit 8acd7d6a613e13d20db40367246859d3ec9a4659
Author: Daegudude <k3hppk@gmail.com>
Date:   Tue Jul 28 18:23:18 2020 +0900

    First Commit
```

두 개의 커밋이 생긴 것을 알 수 있습니다. 저희가 마스터 브랜치에서 cherry-pick한 커밋과, 지금 현재 subtract-feature 브랜치에 있는 커밋은 해쉬 값이 다르다는 걸 알아주세요. 

## 시나리오4: 예전 버전으로 돌아가고 싶을 때

시나리오 3에서 `cherry-pick` 을 이용하여, 커밋을 성공적으로 옮겨왔을 때, 아셔야 할 것이 마스터 브랜치의 커밋을 지워주지 않습니다.

마스터 브랜치에서 한 번 커밋 히스토리를 볼게요.

```shell
$ git log

commit 56e21e9c9bc1c06cc527fe9e16cf311925a2c2f4 (HEAD -> master)
Author: Daegudude <k3hppk@gmail.com>
Date:   Tue Jul 28 18:23:46 2020 +0900

    Completed Subtract Function

commit 8acd7d6a613e13d20db40367246859d3ec9a4659
Author: Daegudude <k3hppk@gmail.com>
Date:   Tue Jul 28 18:23:18 2020 +0900

    First Commit
```

저희가 cherry-pick한 커밋이 그대로 있네요. 하지만, 우리가 원하는 것은 master 브랜치의 커밋은 지워주는 것이겠죠? 이럴 때 `reset` 이라는 명령어를 사용하여, 특정 커밋으로 돌아갈 수 있습니다. 

reset에는 3가지 종류가 있습니다.

- soft: 지정해준 커밋으로 돌아감, 하지만 커밋으로 돌아가기 전의 변화는 스테이징 공간에 저장
- mixed(기본값-default): 지정해준 커밋으로 돌아감, 그리고 커밋으로 돌아가기 전의 변화는 워킹 디렉토리에 저장
- hard: 지정해준 커밋으로 돌아감, 커밋으로 돌아가기 전의 변화도 모두 없애줌

이런 것이 있다는 것만 알아두시고, 바로 예시를 보여드릴게요.

먼저 `git reset --soft`를 해볼게요. 하실 때는, 돌아가고 싶은 커밋을 마지막에 지정해주시면 됩니다. 저는 가장 First commit인 8acd7d로 돌아가보겠습니다.

```shell
$ git reset --soft 8acd7d
```

그리고 나서 git log를 해주면,

```shell
$ git log

commit 8acd7d6a613e13d20db40367246859d3ec9a4659 (HEAD -> master)
Author: Daegudude <k3hppk@gmail.com>
Date:   Tue Jul 28 18:23:18 2020 +0900

    First Commit
```

Completed Subtract Function라는 메세지를 가진 커밋이 없어진 것을 확인해 보실 수 있습니다. 여기서 중요한건, soft옵션은 우리가 지정한 커밋으로 돌려주지만, 그 지정한 커밋 이후의 변화를 스테이징 공간에 간직하고 있습니다. 

```shell
$ git status

On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   script.js
```

script.js 파일을 확인해보시면, `return num1-num2`가 그대로 있음을 알 수 있으실 겁니다.

그러면 두번째로, `git reset --mixed`를 해보겠습니다. mixed 옵션은 기본값이라, --mixed를 안 붙이고 그냥 해주셔도 됩니다.

```shell
$ git reset 8acd7d

Unstaged changes after reset:
M	script.js
```

그리고 나서 다시 git log를 실행해보죠.

```shell
$ git log

commit 8acd7d6a613e13d20db40367246859d3ec9a4659 (HEAD -> master)
Author: Daegudude <k3hppk@gmail.com>
Date:   Tue Jul 28 18:23:18 2020 +0900

    First Commit
```

git reset soft와 똑같이 하나의 커밋만 있습니다. 하지만 다른 점은, 변화를 스테이징 공간에 놔두는 것이 아니라 워킹 디렉토리에 놔두는 것이죠. 사실 큰 차이는 없다고 보셔도 됩니다. `git status`를 통해 워킹디렉토리에 script.js 파일이 있음을 확인하실 수 있습니다.

```shell
$ git status

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   script.js

no changes added to commit (use "git add" and/or "git commit -a")
```

마지막으로 `git reset --hard` 입니다. 이것은 우리가 지정한 커밋 당시의 상황으로 돌아가며, 그 이후의 모든 변화도 제거해줍니다. 말 그대로 그 시점으로 돌아가는 것이죠. 여러분이 지정한 커밋 이후의 변화는 모두 사라집니다. 가장 위험하지만, 이것이 지금 우리가 원하는 것이니 한 번 실행해볼게요.

```shell
$ git reset --hard 8acd7d
HEAD is now at 8acd7d6 First Commit
```

그 다음 `git log`,

```shell
$ git log

commit 8acd7d6a613e13d20db40367246859d3ec9a4659 (HEAD -> master)
Author: Daegudude <k3hppk@gmail.com>
Date:   Tue Jul 28 18:23:18 2020 +0900

    First Commit
```

하지만, 가장 중요한 것은 **우리가 돌아간 시점 이후의 모든 변화가 사라집니다.**
`git status`를 통해 한 번 확인해보면,

```shell
$ git status
On branch master
nothing to commit, working tree clean
```

워킹 디렉토리에 아무 것도 없음을 확인하실 수 있습니다. 제가 처음 깃을 설명할 때, 깃은 특정 버전으로 쉽게 돌아갈 수 있다고 얘기했는데, 어떻게 보면 `reset hard`가 거기에 가장 가까운 결과를 보여주는 것 같습니다.


**하지만, 이 모든 시나리오는 혼자서 작업할 때 유용한 명령어들입니다.** 왜냐하면, 커밋 히스토리를 바꾸기 때문에, 다른 사람과 협업을 하고 있다면 큰 문제가 될 수 있습니다. 그 사람이 가지고 있는 커밋의 기록들과 나의 커밋의 기록이 달라지기 때문이죠.

### 협업을 하고 있다면...

혹시 여러분이 협업을 하고 계시다면, 깃 커밋의 히스토리를 바꾸지 않으셔야 합니다. 하지만 여러분이 특정 시점의 버전으로 돌아가야 할 경우도 생기기 마련이죠. 이 때, `revert` 라는 명령어를 사용해 줍니다.

먼저, `subtract-feature` 브랜치로 이동하여 줍니다.

```shell
$ git checkout subtract-feature
$ git log

commit ed237af265cfa104feacd02b245dc5052cad86cf (HEAD -> subtract-feature)
Author: Daegudude <k3hppk@gmail.com>
Date:   Tue Jul 28 18:23:46 2020 +0900

    Completed Subtract Function

commit 8acd7d6a613e13d20db40367246859d3ec9a4659 (master)
Author: Daegudude <k3hppk@gmail.com>
Date:   Tue Jul 28 18:23:18 2020 +0900

    First Commit
```

두 개의 커밋이 있는데, 두 번째 커밋 `ed237af`를 지우지 않고, 첫 번째 커밋 `8acd7`의 코드 시점으로 돌아가보겠습니다. 아까 언급하였듯이, `git revert <되돌려줄 커밋>` 형식으로 입력해주세요.

```shell
$ git revert ed237af

[subtract-feature 752a286] Revert "Completed Subtract Function"
 1 file changed, 1 insertion(+), 1 deletion(-)
```

그리고 나서 git log를 실행해보시면, 커밋이 지워지지 않고 새로운 커밋이 생기고 또한 코드의 상태는 가장 첫번째 커밋의 상태로 돌아가셨음을 확인해 보실 수 있습니다.

```shell
$ git log

commit 752a28651d89cc1f9a3f2545618c0ea60635b37e (HEAD -> subtract-feature)
Author: Daegudude <k3hppk@gmail.com>
Date:   Tue Jul 28 21:00:42 2020 +0900

    Revert "Completed Subtract Function"

    This reverts commit ed237af265cfa104feacd02b245dc5052cad86cf.

commit ed237af265cfa104feacd02b245dc5052cad86cf
Author: Daegudude <k3hppk@gmail.com>
Date:   Tue Jul 28 18:23:46 2020 +0900

    Completed Subtract Function

commit 8acd7d6a613e13d20db40367246859d3ec9a4659 (master)
Author: Daegudude <k3hppk@gmail.com>
Date:   Tue Jul 28 18:23:18 2020 +0900

    First Commit
```

## 커밋을 하지 않고 이전 시점으로 돌아가기(stash)

이번에는, 실제로 커밋을 하지 않고 이전 시점으로 돌아가는 법을 알아보겠습니다. 먼저 새로운 폴더를 다시 만들고, 거기에 깃 레포지터리를 만들어 주겠습니다.

```shell
$ mkdir git-stash-demo
$ cd git-stash-demo
```

그리고, 아까 전에 사용한 script.js 파일을 그대로 사용할게요.

```shell
$ touch script.js
```

script.js파일입니다
```javascript
function add(num1, num2) {
  console.log(num1 + num2);
}

function subtract(num1, num2) {
  console.log(num1 - num2);
}

function multiply(num1, num2) {
  console.log(num1 * num2);
}

function divide(num1, num2) {
  console.log(num1 / num2);
}
```

그리고 깃 레포지터리를 만들고, 첫번째 커밋을 바로 하겠습니다.

```shell
$ git init

Initialized empty Git repository in /Users/sanghakkim/git-stash-demo/.git/

$ git add .
$ git commit -m "First commit"
[master (root-commit) 8e7a9aa] First Commit
 1 file changed, 15 insertions(+)
 create mode 100644 script.js
```

이제, `add` 라는 브랜치를 만들어서 add 함수에 대한 작업을 하고 있다고 한 번 생각해보죠. script.js의 파일의 add 함수를 조금 바꿔주겠습니다. `console.log` 문을 `return` 문으로 바꾸어 주었습니다.

```shell
$ git branch add
$ git checkout add
```

```javascript
function add(num1, num2) {
  return num1-num2;
}
```

실제로는 이것보다 더 코드 양이 많겠지요? 이렇게 작업을 하다보면, 아직 어떤 기능이 실제로 완성되지 않아서 커밋을 하고 싶지는 않은데, 이전의 코드가 어땠었는지 확인해 보고 싶으실 때가 있습니다. 이 때 `stash` 라는 명령어를 사용하여, 마지막 커밋 이후의 모든 변화를 stash list에 저장하여 주고, 마지막 커밋의 코드로 돌아가실 수 있습니다.

그러면 `git stash`를 이용해 원래의 script.js 파일로 돌아가보겠습니다. `console.log`를 담고 있는 파일로 말이죠. 

```shell
$ git stash save "Worked on add function"
Saved working directory and index state On add: Worked on add function
```

그러면, script.js 파일의 `add` 함수가 다시 원래 상태로 돌아간 것을 확인하실 수 있습니다. 그리고 stash를 할 당시의 저장된 변화는 `git stash list`를 통해 확인해 보실 수 있습니다.

```shell
$ git stash list
stash@{0}: On add: Worked on add function
```

저희는 성공적으로 커밋을 하지 않고, 변화를 stash 명령어를 통해 저장해보았습니다. 

### stash한 변화 다시 불러오기

저희가 금방 stash를 통해 특정 시점의 코드로 돌아가면서 변화를 잠깐 다른 곳에 저장해두었죠. 이것을 다시 불러올 수도 있어야 할 것입니다. `git stash apply <특정 stash>`를 통하여, 그 stash를 불러올 수 있습니다.

`git stash list`를 통하여, 우리가 불러올 stash를 확인하고, 다시 그 stash로 돌아가여 보겠습니다.

```shell
$ git stash list
stash@{0}: On add: Worked on add function

$ git stash apply stash@{0}
On branch add
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   script.js

no changes added to commit (use "git add" and/or "git commit -a")
```

그러면 script.js 파일의 코드가 다시 `return` 문으로 돌아간 것을 확인하실 수 있을 겁니다. 여기서 알아야 할 것이 `apply` 옵션의 특징은 stash list에 stash가 계속 남아있다는 것입니다.

```shell
$ git stash list
stash@{0}: On add: Worked on add function
```

만약에, stash list에 특정 stash를 남기지 않고 싶다면 `pop` 옵션을 사용하여 주시면 됩니다. 먼저 `git checkout -- .`을 이용해, 다시 console.log로 돌려주겠습니다.

```shell
$ git checkout -- .
```

그런 다음, `pop` 옵션을 이용해 다시 stash를 가져와 볼게요. pop은 가장 최근의 stash를 가져오기 때문에 어떤 인수를 넘겨주지 않아도 됩니다.

```shell
$ git stash pop

On branch add
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   script.js

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (fc42158deaef8bc9fba5313cd144296c0f076024)
```

그리고 나서 script.js 파일을 보면 stash가 다시 돌아온 것을 알 수 있고, git stash list를 이용해 stash를 확인해보시면 stash가 list에서 없어진 것을 확인해 보실 수 있습니다.

```shell
$ git stash list
```

### stash가 사용될 수 있는 아주 유용한 시나리오

stash는 어떤 특정 브랜치에서 작업을 하였어야 하는데, 그 기능과 맞지 않는 브랜치에서 작업을 하고 있었을 때 stash를 통해 간단하게 원하는 브랜치로 변화를 옮겨줄 수 있습니다. 시나리오3과 다른 점은 아직 커밋을 하지 않았다는 점이겠죠.

다시 master로 돌아가, script.js 파일의 subtract 함수를 바꾸어 보겠습니다.

```shell
$ git checkout master
```

```javascript
function subtract(num1, num2) {
    return num1 - num2;
}
```

예를 들어, 여러분이 지금 이 코드가 subtract라는 브랜치를 새로 만들어서 작업을 했었어야 함을 깨달았습니다. 그러면 stash를 이용해 변화를 저장해주고, 그 stash를 subtract라는 브랜치를 만들어 불러들여 주면 됩니다. stash는 브랜치에 제약을 받지 않기 때문이죠.

```shell
$ git stash save "Worked on subtract function"
Saved working directory and index state On master: Worked on subtract function

$ git branch subtract-feature
$ git checkout subtract-feature
$ git stash pop

On branch subtract-feature
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   script.js

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (c2e2feb1115570161a4d954f0353ae159929fabb)
```

성공적으로 stash를 subtract-feature 브랜치에서 불러왔습니다.













