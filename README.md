# MYNO-LMS

## Test domain

https://my-style-commerce-rouge.vercel.app/

## 개발환경

- macos
- vscode
- chrome browser
- node version: v14.16
- yarn version: 1.22.10
- main modules:
  - nextjs
  - styled-components
  - mobx

## 실행방법

- sample env

  `https://drive.google.com/file/d/1A_KgD5SBUMQg2Mg49lYYLm5uIJfBI4ln/view`

- development
  ```bash
  yarn dev
  ```
- production

  ```bash
  yarn build
  yarn start
  ```

## Feature

- server side render
- styled-compoents theme
- mobx base state store

## File & directory structure

### pages

- [based nextjs](https://nextjs.org/docs/basic-features/pages)

### public

- [based nextjs](https://nextjs.org/docs/basic-features/static-file-serving)

### styled

- styled-component로만 구성되어 있는 디렉토리입니다.
- 해당 디렉토리내 파일명 규칙은 `some-file-snake-case.styled.tsx`로 약속합니다

### components

- pages안에서 사용되거나 components끼리 구성되는 react-component가 있는 디렉토리입니다..
- 해당 디렉토리내 파일명 규칙은 `FileNamePascalCase.tsx`로 약속합니다

### interfaces

- 해당 프로젝트내에서 필요한 인터페이스를 구성합니다.
- 특정 도메인이 발생하는 경우 새로 파일을 작성합니다.

### modules

- mobx 의 store를 구성하는 디렉토리입니다.
- 특정 도메인 또는 비동기 데이터를 로드해야하는 경우 작성합니다.

### 기타 파일 및 구성사항

- [NextJS](https://nextjs.org) 및 특정 라이브러리의 설정사항을 참고합니다.

## 제안사항
