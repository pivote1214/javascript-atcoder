function main(input) {
    // 入力の受け取り
	const [a, b, d] = input.split(" ").map(Number);
    // ロジックの実装
    let result = [];
    for (let i = a; i <= b; i += d) {
        result.push(i);
    }
    // 結果の出力
	console.log(result.join(" "));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
