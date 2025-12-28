# javascript-atcoder

## テンプレート
```javascript
function main(input) {
    // 入力の受け取り
	const [d, f] = input.split(" ").map(Number);
    // ロジックの実装

    // 結果の出力`
	console.log(result);
}
```

以下のQiita記事を参考にした。
https://qiita.com/yukoko/items/cffa7c7f3639e4f6a653

## 自動テスト
- [online-judge-tools](https://github.com/online-judge-tools/oj) を使用

### Step1. ディレクトリ作成 & 移動
```bash
mkdir {contest}/{problem}
cd {contest}/{promlem}
```

### Step2. サンプルケースのダウンロード
```bash
oj download {problem_url}
```

### Step3. コーディング
`main.js`ファイルを作成し、問題に対する解答をコーディング
```bash
code main.js
```

### Step4. 自動テスト
```bash
oj test -command "node main.js"
```
