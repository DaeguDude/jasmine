## 깃 일반적인 작업흐름도(브랜치)

이번에는 깃의 일반적인 작업흐름에 대해서 배워볼까 합니다. 제가 처음에 설명드렸듯이, 깃은 메인 코드베이스를 망치지 않고 새로운 기능을 개발할 수 있다고 하였습니다. 이것을 가능하게 하는 것이 브랜치라는 것인데요. 보통 개발을 할 때, 어떠한 기능을 구현하고자 할 때 그 기능에 맞는 브랜치를 만들고 그 환경에서 작업을 시작합니다.

### 브랜치 생성

그러면 브랜치를 한 번 생성해보겠습니다.

```shell
$ git branch calc-divide
$ git checkout calc-divide
Switched to branch 'calc-divide'
```

먼저, `git branch` 명령어를 통해 calc-divide라는 나누기에 관련된 기능을 개발할 브랜치를 만들어주고, `git checkout` 을 통해 그 브랜치로 이동을 해줍니다.

한 번 제대로 이동이 되었는지 확인해볼게요. `git branch` 명령어를 아무 인수없이 입력해주면, 현재있는 모든 브랜치가 나타납니다.

```shell
$ git branch
* calc-divide
  master
```

그리고 나서, VScode로 가서 작업을 합니다. 작업이 끝나고 난 뒤, 이제 그 브랜치에서 새로운 커밋을 만들어주면 됩니다.

```shell
$ git add -A
$ git commit -m "Divide Function"
[calc-divide 1fea8f5] Divide Function
 1 file changed, 4 insertions(+)
```

이제 커밋을 완료했으니, 우리 깃허브 레포지터리에도 이 커밋을 업데이트 해주어야 합니다. 이렇게 브랜치를 나누어서 작업을 해주는 이유는, 메인 코드베이스를 망치지 않고 작업을 하기 위해서입니다. 브랜치가 나누어져있으면 이제 나중에 코드가 잘 작동하는지 테스트 할 때 아주 유용하죠.

그러면, 깃허브 레포지터리에도 업데이트를 해주겠습니다.

```shell
$ git push -u origin calc-divide
To github.com:DaeguDude/calculator.git
 * [new branch]      calc-divide -> calc-divide
Branch 'calc-divide' set up to track remote branch 'calc-divide' from 'origin'.
```

업데이트를 하고 나서 깃허브 레포지터리로 가서 한 번 확인을 해보면, 제대로 업로드 된 것을 확인하실 수 있을 겁니다.

그리고 또한, 컴퓨터에서 깃허브 레포지터리에 어떤 브랜치가 있는지도 확인해 줄 수 있습니다. git branch -a 명령어는, 여러분의 로컬 레포지터리와 연결되어있는 레포지터리의 모든 브랜치를 보여줍니다.

```shell
$ git branch -a
* calc-divide
  master
  remotes/origin/calc-divide
  remotes/origin/master
```

총 4개의 브랜치가 있는 것이 확인되실 겁니다.

### 브랜치 합치기

여러분이 이제 calc-divide 브랜치에서 모든 것을 완료했다고 가정해봅시다. 어떤 번호를 집어넣어도 나누기가 제대로 되기 때문에 이제 이 기능은 메인 코드베이스에 합치면 됩니다. 저희 메인 코드베이스는 master 브랜치니까 거기로 한 번 합쳐보겠습니다.

먼저, master 브랜치로 이동해줍니다.

```shell
$ git checkout master
$ git pull origin master
From github.com:DaeguDude/calculator
 * branch            master     -> FETCH_HEAD
Already up to date.
```

그리고 git pull origin master를 통해, 여러분이 calc-divide에서 작업하고 있었던 동안, 다른 사람이 master 브랜치에 새로운 코드를 업데이트 했을 수도 있으니 그 코드를 내려받아 여러분의 코드와 합칩니다.

그리고 나서, 여러분의 master 브랜치에 이때까지 합쳐진 브랜치가 있는지 확인해봅시다.

```shell
$ git branch --merged
* master
```

이 때까지 아무것도 합치지 않았으니, master 브랜치만 나타날 것입니다. 이제, calc-divide 브랜치를 master 브랜치로 합쳐줄 시간입니다.

```shell
$ git merge calc-divide
Updating 2508a62..1fea8f5
Fast-forward
 calc.js | 4 ++++
 1 file changed, 4 insertions(+)
```

Fast-forward를 통해, 합쳐진 것을 확인해 보실 수 있습니다. 혹시 모르니 명령어를 통해 살펴보죠.

```shell
$ git branch --merged
  calc-divide
* master
```

성공적으로 합쳐졌습니다. 하지만, 새로운 master 브랜치는 여러분의 컴퓨터에만 있는 것이지, 깃허브 레포지터리에 업데이트 되지 않았습니다. 그러므로 업데이트를 해주어야 겠죠.

```shell
$ git push origin master
```

저희는 나누기 기능을 이제 개발을 끝내었기 때문에, 그 브랜치가 이제 필요가 없습니다. 그래서 브랜치를 지워주어야 합니다.

```shell
$ git branch -d calc-divide
Deleted branch calc-divide (was 1fea8f5).
```

그러면 성공적으로 브랜치가 지워졌다고 뜰 것입니다. 그러면 어떤 브랜치들이 남아있는지 다시 한 번 확인해볼까요?

```shell
$ git branch -a
* master
  remotes/origin/calc-divide
  remotes/origin/master
```

아차, 아직 깃허브 레포지터리에 있는 calc-divide 브랜치가 남아있음을 알 수 있습니다. 이것도 필요가 없으니 지워주는게 맞겠죠?

```shell
$ git push origin --delete calc-divide
To github.com:DaeguDude/calculator.git
 - [deleted]         calc-divide
```