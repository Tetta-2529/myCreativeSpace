# Gitまとめ

---

## Git コマンド一覧

### git status

- 変更があるファイルがあるかどうか、変更状況を確認する

### ls

- 現在のディレクトリに格納されているファイル一覧を表示（隠しファイルも含めて表示する場合は -a を追記して実行する）

### git clone https:~.git

- 指定したURLのリモートリポジトリの内容を複製する

### git add index.html

- "indexhtml"ファイルをステージに追加する

### git diff

- ステージに追加__する前の__ファイルの変更差分を確認する

### git commit index.html

- ステージに追加した "index.html"ファイルをコミット（リモートリポジトリへ反映する準備）する

### git diff --staged

- ステージに追加__した後の__ファイルの変更差分を確認する

### git log

- 変更履歴を全て表示する

### git log --oneline

- 変更履歴を各一行で表示

### git rm index.html

- "index.html"ファイルをローカルリポジトリも併せて削除する

### git rm -r hoge

- "hoge"ディレクトリを削除する

### git rm --cached index.html

- "index.html"ファイルをローカルリポジトリのみ削除する

### git checkout -- index.html

- ステージに追加する前の"index.html"ファイルの変更を取り消す

### git reset HEAD index.html

- ステージに追加した"index.html"ファイルをステージから降ろす

### git remote

- リモートの状態を表示

### git remote -v

- リモートの対応するURLを表示

### git remote add origin https:~.git

- GitHubに登録されているリモートリポジトリ（URL）に"origin"という名前でGitHubにアップしたり取得できるように紐づけ登録する（基本的に初回のみ使用）

### git remote show origin

- "origin"リモートリポジトリの詳細を表示する
- "git push"するとリモートリポジトリのどのブランチに反映されるかも表示される

### git push origin master

- "origin"というリモートリポジトリの"master"というブランチにローカルリポジトリの変更を反映する

### git fetch origin

- "origin"リモートリポジトリの内容をローカルリポジトリ（remotes/origin/master）に取得してくる（取得するだけでマージはまだされていない）
- "fetch"して取得した"origin"リモートリポジトリの内容を確認する場合は "git checkout remotes/origin/master" で切り替える
- 問題なければ作業しているブランチに戻って "git merge origin/master" でマージする（"fetch"で取得したリモートリポジトリ "remotes/origin/master" をマージ）

### git pull origin master

- "origin"リモートリポジトリの"master"ブランチの内容をローカルリポジトリに取得し、自動でマージまで行う
- ローカルの作業ブランチが取得したリモートリポジトリのブランチが異なると意図しない反映が行われてしまう
- 例．リモート："hoge"ブランチ、ローカル："master"ブランチの場合、git pullすると**"hoge"ブランチの内容がローカルの"hoge"ブランチではなく"master"ブランチに反映される**
- 上記の事故が起こる可能性があるので、基本的に"git fetch"を使うことが推奨される

### git branch

- ブランチの一覧を表示する

### git branch -a

- リモートリポジトリの情報を含めたブランチの一覧を表示する

### git branch hoge

- 新規に"hoge"ブランチを作成する（切り替えは行われない）

### git branch -d hoge

- "hoge"ブランチを削除する（マージされていない変更点がある場合は削除できない）
- 強制的に削除する場合は"git branch -D hoge"を実行する

### git checkout -b hoge

- 新規に"hoge"ブランチを作成し、そのブランチに切り替える

### git checkout hoge

- 作業ブランチを"hoge"ブランチに移動する
- 変更されたファイルがある状態で移動しようとするとエラーになるため、コミットして変更差分を解消する必要がある

### git merge hoge

- "hoge"ブランチで行われたファイルの変更を現在いるブランチに統合する（ブランチによる枝分かれをまとめる）
- そのためまとめたいベースとなるブランチにいるかどうか確認しておく必要がある
- マージには3種類ある

1. "Fast Foward"（早送りマージ）：ブランチによる枝分かれがない状態でマージすることで行われる
2. "Auto Merge"（基本的なマージ）：ブランチによる枝分かれがある状態で行われるマージ
3. "Conflict"（変更の衝突）：それぞれのブランチで同じファイルの同じ行に対して変更を行ったことで、マージしたときにどちらを反映すればよいか判断できない状態のこと
  
- コンフリクトが発生した場合は対象のファイルを修正してコミットし直す必要がある

---

## 開発におけるブランチの運用

- "master"ブランチをリリース用に、開発には別途ブランチを作成して、最終的に"master"ブランチにマージするという流れで行うことが推奨される

### 開発フロー

1. "git branch hoge"もしくは"git checkout -b hoge"で作業ブランチを作成・移動する
2. 作業ブランチで開発を進めてコミットする
3. 開発が終了したら"git checkout master"で"master"ブランチに移動する
4. "git marge hoge"で"hoge"ブランチで行われた変更点を"master"ブランチにマージする
5. 1～4を繰り返す
