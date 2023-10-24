// 액션 (Action)
// 상태에 변화가 필요할 때 발생시킴 (객체하나로 표현)
// type을 필수로 그외의 값들은 개발자 마음대로 생성

// 액션 생성함수 (Action Creator)
// 컴포넌트에서 더욱 쉽게 액션을 발생시키기 위함
// 필수 아님

// 리듀서 (Reducer)
// 변화를 일으키는 함수
// 현재의 상태와 액션을 참조하여 새로운 상태를 반환

// 스토어 (Store)
// 한 애플리케이션당 하나의 스토어
// 현재의 앱 상태와, 리듀서, 내장함수 포함

// 디스패치 (dispatch)
// 스토어의 내장함수
// 액션을 발생 시키는 것

// 구독 (subscribe)
// 스토어의 내장함수
// subscribe 함수에 특정 함수를 전달해주면, 액션이 디스패치 되었을 때 마다 전달해준 함수가 호출
// (리액트에서는 connect 함수 또는 useSelector Hook 을 사용)

// 하나의 애플리케이션에 하나의 스토어

// 상태는 읽기전용
// 리액트의 불변성

// 변화를 일으키는 함수, 리듀서는 순수한 함수
// 동일한 인풋 => 동일한 아웃풋
// new Date(), 랜덤 숫자 생성, 네트워크에 요청 등은 순수하지 않은 작업(?) -> 리듀서 밖에서 처리