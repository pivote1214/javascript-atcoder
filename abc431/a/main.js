function main(input) {
    // 入力の受け取り
	const [d, f] = input.split(" ").map(Number);
    // ロジックの実装
    const result = 7 - (d - f) % 7;
    // 結果の出力`
	console.log(result);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
