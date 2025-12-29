function main(input) {
    // 入力の受け取り
    const lines = input.split("\n");
    const Q = parseInt(lines[0], 10);
    // ロジックの実装
    let a = [];
    for (let i = 1; i <= Q; i++) {
        const [queryType, value] = lines[i].split(" ").map(Number);
        if (queryType === 1) {
            a.push(value);
        } else if (queryType === 2) {
            console.log(a[a.length - value]);
        };
    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
