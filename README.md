# MyBookShelf Frontend

2025 캡스톤디자인 프로젝트 **MyBookShelf**의 프론트엔드(Vue 3) 저장소입니다.
화면이 동작하려면 백엔드 서버가 함께 실행되어야 합니다. 백엔드는 [mybookshelf-backend](https://github.com/TUK-CE-capstone-2025-MyBookShelf/mybookshelf-backend)에서 관리합니다.

책장을 만들어 읽은 책을 모으고, 책장에 담긴 책을 바탕으로 다음에 읽을 책을 추천받는 서비스입니다.

> 이 프로젝트는 하나의 저장소에서 프론트엔드와 백엔드를 함께 관리하다가 두 저장소로 분리했습니다.
> 분리 전 전체 이력은 [원본 저장소](https://github.com/Thedume/TUK-CE-capstone-2025-MyBookShelf)에 보관되어 있습니다.

## 기술 스택

- Vue 3, Vue Router 4
- axios
- Vue CLI 5 (webpack)

## 화면

| 경로 | 화면 |
|---|---|
| `/` | 홈 |
| `/search?query=검색어` | 도서 검색 결과 |
| `/book/:isbn` | 도서 상세 |
| `/mybooks` | 나만의 책장, 도서 추천 |
| `/community` | 커뮤니티 |
| `/guidelines` | 이용 안내 |
| `/login`, `/signup` | 로그인, 회원가입 |

## 실행 방법

### 준비물

- Node.js 18 이상 (Node 22에서 설치와 빌드를 확인했습니다)
- 실행 중인 백엔드 서버 (기본 주소 `http://localhost:8081`)

### 개발 서버 실행

```bash
npm ci
npm run serve
```

`http://localhost:8080`에서 열립니다. 백엔드가 이 주소(`8080`)만 허용하므로 다른 포트로 뜨면 API 호출이 CORS 오류로 실패합니다. 8080을 쓰는 다른 프로그램이 있으면 먼저 종료하세요.

### 스크립트

| 명령 | 설명 |
|---|---|
| `npm run serve` | 개발 서버 (코드 수정 시 자동 갱신) |
| `npm run build` | 배포용 빌드 (`dist/`) |
| `npm run lint` | 코드 검사 |

## 환경변수

서버 주소는 `VUE_APP_API_BASE_URL` 하나로 정합니다.

| 파일 | 용도 |
|---|---|
| `.env.development` | 개발 서버(`npm run serve`)의 기본값. 저장소에 포함되어 있습니다. |
| `.env.development.local` | 내 PC에서만 다른 주소를 쓸 때. 커밋되지 않습니다. |
| `.env.production` | 배포 빌드(`npm run build`)용. 배포 환경에 맞게 직접 만드세요. |

```
VUE_APP_API_BASE_URL=http://localhost:8081
```

환경변수는 서버를 시작할 때만 읽으므로 값을 바꾸면 `npm run serve`를 다시 실행해야 합니다.
이 값은 빌드 결과에 그대로 포함되므로 비밀 값을 넣지 마세요.

## 알려진 제한 사항

- 홈 화면이 호출하는 `/api/books/random`이 백엔드에 구현되어 있지 않아 브라우저 콘솔에 404가 보입니다. 화면 동작에는 영향이 없습니다.
- 프론트엔드를 다른 주소에 배포하려면 백엔드의 CORS 설정도 함께 바꿔야 합니다.
- 도서 추천은 백엔드가 외부 API를 여러 번 호출해서 결과가 나오기까지 1분 정도 걸릴 수 있습니다.