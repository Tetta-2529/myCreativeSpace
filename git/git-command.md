# Git コマンド一覧

---

## git status

- 変更があるファイルがあるかどうか、変更状況を確認する

## ls

- 現在のディレクトリに格納されているファイル一覧を表示（隠しファイルも含めて表示する場合は -a を追記して実行する）

## git clone https:~.git

- 指定したURLのリモートリポジトリの内容を複製する

## git add index.html

- "indexhtml"ファイルをステージに追加する

## git diff

- ステージに追加__する前の__ファイルの変更差分を確認する

## git commit index.html

- ステージに追加した "index.html"ファイルをコミット（リモートリポジトリへ反映する準備）する

## git diff --staged

- ステージに追加__した後の__ファイルの変更差分を確認する

## git log

- 変更履歴を全て表示する

## git log --oneline

- 変更履歴を各一行で表示

## git rm index.html

- "index.html"ファイルをローカルリポジトリも併せて削除する

## git rm -r hoge

- "hoge"ディレクトリを削除する

## git rm --cached index.html

- "index.html"ファイルをローカルリポジトリのみ削除する

## git checkout -- index.html

- ステージに追加する前の"index.html"ファイルの変更を取り消す

## git reset HEAD index.html

- ステージに追加した"index.html"ファイルをステージから降ろす

＃リモートリポジトリへのアクション

## git remote

- リモートの状態を表示

## git remote -v

- リモートの対応するURLを表示

## git remote add origin https:~.git

- GitHubに登録されているリモートリポジトリ（URL）に"origin"という名前でGitHubにアップしたり取得できるように紐づけ登録する（基本的に初回のみ使用）

## git push origin master

- "origin"というリモートリポジトリの"master"というブランチにローカルリポジトリの変更を反映する

## git fetch origin

- 2origin"リモートリポジトリの内容をローカルリポジトリ（remotes/origin/master）に取得してくる（取得するだけでマージはまだされていない）
- "fetch"して取得した"origin"リモートリポジトリの内容を確認する場合は "git checkout remotes/origin/master" で切り替える
- 問題なければ作業しているブランチに戻って "git merge origin/master" でマージする（"fetch"で取得したリモートリポジトリ "remotes/origin/master" をマージ）

## git merge ＜ローカルリポジトリ名/ブランチ名＞

- リモートリポジトリから取得してきた内容をローカルリポジトリとマージする

## git pull origin master

- "origin"リモートリポジトリの"master"ブランチの内容をローカルリポジトリに取得し、自動でマージまで行う
- ローカルの作業ブランチが取得したリモートリポジトリのブランチが異なると意図しない反映が行われてしまう
- 例．リモート："hoge"ブランチ、ローカル："master"ブランチの場合、git pullすると"hoge"ブランチの内容がローカルの"hoge"ブランチではなく"master"ブランチに反映される

## git branch

- ブランチの一覧を表示する

## git branch -a

- リモートリポジトリの情報を含めたブランチの一覧を表示する

## git branch ＜ブランチ名＞

- 新規にブランチを作成する（切り替えは行われない）

## git checkout ＜ブランチ名＞

- 作業ブランチを移動する

## git checkout -b ＜ブランチ名＞

- 新規にブランチを作成し、そのブランチに移動する

## git merge ＜マージしたいブランチ＞

- ファイルの変更を統合する
