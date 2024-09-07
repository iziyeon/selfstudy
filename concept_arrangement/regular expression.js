//문자 검사하는 방법
// 양식 : '문자'.includes('찾을 단어')
// 예시
console.log('abc'.includes('a')) // true

//그러나 위 방법은 A로 끝나는 문자, 한글유무, 영어 유무, 숫자 유무 등은 판별하지 못함 => 정규식 사용

//a라는 문자 하나가 'abcde'안에 들어있는지 확인(a를 전부 찾는다는 게 아님)
console.log(/a/.test('abcde')) // true

//정규식은 문자 범위 지정이 가능
//영어 소문자가 존재하는지 확인하려면
console.log(/[a-z]/.test('abcde'))// true
console.log(/[a-z]/.test('안녕'))// false

//영어 대문자가 존재하는지 확인하려면
console.log(/[A-Z]/.test('Abced'))// true

//알파벳이 존재하는지 확인하려면
console.log(/[a-zA-Z]/.test('Abced'))// true

//한글이 포함되어 있는지 확인하려면
console.log(/[ㄱ-ㅎ가-힣ㅏ-ㅣ]/.test('지연'))// true

//숫자가 포함되어 있는지 확인하려면
console.log(/[0-9]/.test('Abced'))// false

//축약어도 존재
// |S는 아무 문자나 1개 존재 여부 확인(특수기호 포함)
console.log(/|S/.test('Abced'))// true

//a라는 글자로 시작하는 지 확인
console.log(/^a/.test('abced'))// true

//a라는 글자로 끝나는지 확인
console.log(/a$/.test('bceda'))// true

// e 또는 f중 아무거나 한 문자가 있나 검사
console.log(/(e|f)/.test('abcd')  ) //false

// 모든 문자 여러개 다음에 t라는 글자가 있는지 검사
console.log(/\S+t/.test('abcdt')  ) // true

//이메일 정규식 양식 /\S+@\S+\.\S+/.test('확인해야 할 값')
