# Layout 📚

### block & inline

#### block

- (세로) 한줄에 하나의 아이템씩 정렬됨
- css 에서 지정한 width, height 등의 값을 받음

#### inline

- 한줄에 공간이 남는다면 여러 아이템이 정렬됨
- 콘텐츠 자체만을 꾸며주는 것 (콘텐츠가 없으면 표시되지 않으며 width, height 등의 값을 받지 않음)

#### inline-block

- 한줄에 공간이 남는다면 여러 아이템이 정렬되지만, 콘텐츠와 상관없이 width, height 등의 css 값을 받음

</br>

### position

- position 은 default 값이 static 임  
  `position: static - html 에 작성된 코드 순서대로 브라우저 상에 정렬되는 포지션`

  - relative 는 원래 아이템이 있어야 할 곳에서 상대적으로 top, bottom, width, height 등의 값을 받아 옮김

  - absolute 는 부모 박스 안에서 절대적으로 위치 변경이 일어남

  - fixed 는 상자에 구애받지 않고, window 안에서 고정된 위치로 변경함

  - sticky 는 원래 있어야 할 위치에 그대로 있지만, 스크롤 등의 변화가 있어도 그 자리 그대로 위치함

### typography & global-CSS

- :root 에 css 값을 가진 전역 변수를 선언할 수 있음  
  ex)`--color-white: white;`

- 변수를 통해 typography 를 만들 수 있음
  ex)

```
h1 {
 font-size: var(--font-large);
 font-weight: var(--weight-bold);
 color: var(--color-black);
 margin: 20px 0px;
}
```
