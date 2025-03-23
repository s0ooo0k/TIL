# Docker

## Docker란?

- 리눅스에서 유래한 기술
- 어플리케이션을 `컨테이너`라는 격리된 단위로 실행하는 오픈소스 가상화 플랫폼
- 운영체제를 가상화하지 않는 컨테이너 기술로 가상머신보다 가벼움
- 코드, 라이브러리, 환경설정 등을 패키징해서 어디서든 실행 가능

### 📦 컨테이너(Container)

![Image](https://github.com/user-attachments/assets/c0be1d41-295e-4c60-a5e0-6514e7700bbc)

- 어플리케이션 + 실행 환경을 하나로 묶은 독립 실행 단위
- 코드 + 라이브러리 + 설정 등을 패키징해 어디에서든 똑같이 실행되도록 함
- VM처럼 OS 전체를 복사하지 않음 -> 커널을 공유한다
- 시스템간 영향을 최소화하고, 어느 환경에서나 실행가능하게 도와줌

#### 실무에서?

- MySQL, Redis, MongoDB 등 DB 컨테이너로 실행
- 테스트 서버를 로컬에서 컨테이너로 바로 띄움
- MSA에서 각 서비스는 하나의 컨테이너 단위다

## Dockerfile과 Image

컨테이너를 만들기 위해서는 아래 과정으로 진행된다  
📌 `Dockerfile` → docker build → `Image` → docker run → `Container`

### Dockerfile

- 컨테이너 이미지 파일을 만들기 위한 스크립트 파일
- 간단한 예시

```Dockerfile
# 1. 어떤 OS/런타임을 쓸지
FROM node:18

# 2. 앱 디렉토리 생성
WORKDIR /app

# 3. 패키지 파일 복사 및 설치
COPY package*.json ./
RUN npm install

# 4. 소스 코드 복사
COPY . .

# 5. 앱 실행 명령
CMD ["node", "index.js"]
```

- 🔗 https://hub.docker.com/ 에서 공식 이미지를 활용할 수 있다

### Image

- 실행 가능한 패키지
- 애플리케이션과 그 실행 환경을 패키징한 템플릿과 같다
- 도커파일을 빌드하여 생성
- 하나의 이미지는 불변이고, 이미지를 이용해 여러 컨테이너를 생성할 수 있다
