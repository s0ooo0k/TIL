# CORS

- CORS(Cross-Origin Resource Sharing) : 다른 출처(origin)에서 리소스를 요청할 때 보안 정책
  - 브라우저 보안 정책(동일 출처 정책, SOP) 때문에 발생
  - 한 웹 사이트에서 다른 도메인의 API를 호출할 수 없다
  - 서버가 CORS 허용을 설정하면 가능

#### CORS 오류 발생 예제

```javascript
fetch("https://external-api.com/data")
  .then((response) => response.json())
  .catch((error) => console.error("CORS 오류 발생!", error));
```

-> 발생 오류 메세지

```shell
Access to fetch at 'https://external-api.com/data' from origin 'https://my-site.com' has been blocked by CORS policy
```

my-site가 다른 출처 external-api의 데이터를 요청했기 때문에 브라우저가 차단.
이 Proxy 문제를 해결하는 사이트를 만들어야 한다.
