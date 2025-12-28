function main(input) {
	const [d, f] = input.split(" ").map(Number);

    const result = 7 - (d - f) % 7;

	console.log(result);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
