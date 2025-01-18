# Favicon

### Favicon

웹 브라우저의 탭, 북마크 등에 표시되는 작은 아이콘

- 예시 : 깃허브의 고양이!  
  <img src="https://i.ibb.co/ZB4Sfcp/2025-01-19-043535.png" alt="Favicon">

### Favicon 추가 방법

1. [RealFavicongnerator.net](https://realfavicongenerator.net/) 접속 후 패키지 만들기
2. `head` 부분에 코드 삽입!
   ````
   <head>
   	    <link rel="icon" type="image/png" href="./favicon-96x96.png" sizes="96x96" />
   	    <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
   	    <link rel="shortcut icon" href="./favicon.ico" />
   	    <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
   	    <link rel="manifest" href="./site.webmanifest" />
    </head>
    ```
   <br>
   ````

### <u>Favicon이 안 뜬다 !</u>

#### ❌ 문제

해당 방식으로 Favicon을 추가했는데, 로컬에서는 Favicon이 정상 작동 했는데, Github Pages를 통한 배포 시에는 Favicon이 나오지 않았다. ~~내 고양이!!!~~

#### ⭕ 해결

```
<link rel="shortcut icon" href="./favicon.ico?" />
```

- favicon의 아이콘을 설정하는 부분 `./faavicon.ico` 뒤에 `?`를 추가한다!
- 정상 작동 완료!  
  <img src="https://i.ibb.co/Lr31ZHB/2025-01-19-044927.png" alt="2025-01-19-044927" border="0"></a>
