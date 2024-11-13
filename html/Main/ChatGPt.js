function generateLotto() {
    const lottoNumbers = [];

    // 1부터 45까지 중복되지 않는 6개의 숫자 추출
    while (lottoNumbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;

        // 중복 방지
        if (!lottoNumbers.includes(randomNumber)) {
            lottoNumbers.push(randomNumber);
        }
    }

    // 번호 정렬 (선택 사항: 오름차순으로 번호를 정렬)
    lottoNumbers.sort((a, b) => a - b);

    // 화면에 결과 출력
    document.getElementById("result").innerText = "로또 번호: " + lottoNumbers.join(", ");
}
