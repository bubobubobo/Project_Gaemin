# Project_Gaemin
개발의 민족 웹 서비스
url : https://bubobubobo.github.io/Gaemin/main.html

# 기획 의도

1. 배달의 민족 앱은 다양하고 많은 사용자 층을 가졌음에도 iOS, Android 등의 모바일 환경에서만 이용 가능. 다양한 기기에서 접근할 수 있도록 하기 위한 웹페이지 존재의 필요.

2. 배달을 많이 하는 환경을 생각했을 때, 사무직 & 협업 환경에서는 휴대폰보다 큰 PC 화면을 함께 보며 메뉴를 고르고 정하는 것이 해당 환경의 사용자에게 유리.

3. 우리 나라의 연령대가 높은 사용자들은 모바일 환경이 젊은 층에 비해 사용하기에 쉽지 않음.

4. 배달의 민족 앱은 가로 모드나 확대 등의 WCAG 2.1 기준 1레벨 항목들조차 지키지 않음. 접근성 지침을 준수 필요.

5. 키보드로만 접근해야 하는 사용자와 모바일 스크린 리더의 사용자를 고려한 웹페이지 제작 필요.

# Branch Strategy & Commit Convention

5인 구성의 단기간 소규모 프로젝트임을 고려해

<span style="color:red">Github Flow 사용</span>

commit convention은 아래와 같이 "제목 - 설명 - 꼬리말" 구성으로 작성
```
타입[스코프]: 제목 (TYPE[SCOPE]: SUBJECT)

설명 (BODY)
// 간결하게 모든 내용 설명
// 자유 형식

꼬리말 (FOOTER)
// 관련 이슈 넘버가 있다면 명시

e.g.
feat[main_page]: main_page markup complete

header, card slider, footer markup

#162
```
