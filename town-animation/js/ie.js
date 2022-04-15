const browser = navigator.userAgent
const isIE = /trident/i.test(browser)
if (isIE) alert('IE 로 접속하셨어요. 이 페이지는 IE 를 지원하지 않아요. 다른 브라우저로 접속해주세요')