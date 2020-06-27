# tupa-potter-page

[App](https://tupa-potter-page.web.app) & [Storybook](https://tupa-potter-storybook.web.app)

[potterapi](https://www.potterapi.com/) API를 활용하여 구현한 간단한 React + Redux 웹앱

- [Create React App](https://github.com/facebook/create-react-app)
- [TypeScript](https://www.typescriptlang.org/)
- [Emotion](https://emotion.sh/)
- [Redux](https://redux.js.org/) + Redux Thunk \w [Redux Toolkit](https://redux-toolkit.js.org/)
- [Material UI Icon](https://material-ui.com/components/material-icons/)
- [Storybook](https://storybook.js.org/)
- [Husky](https://github.com/typicode/husky) w\ [lint-staged](https://github.com/okonet/lint-staged)

## Deployment

아래 커맨드로 Firebase Hosting을 사용하여 배포한다.

```
yarn deploy
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- CI 설정을 위해 --passWithNoTests --watchAll=false 옵션이 추가됨.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn lint`

ESlint 적용

- `--ext js,jsx,ts,tsx` 옵션으로 특정 확장자에만 적용되도록 함.

### `yarn storybook`

Storybook을 9009번 포트로 실행

### `yarn build-storybook`

Storybook을 배포를 위해 빌드

## Git Hooks

Husky + lint-staged 를 이용하여 스테이징된 파일에 대하여 미리 정의된 커맨드를 실행하도록 깃훅을 설정한다. 설정은 `package.json` 의 `husky`와 `lint-staged` 프로퍼티를 참조.

- `pre-commit`: 스테이징 파일의 확장자에 따라 ESLint, Prettier을 적용하고 관련된 Test 코드를 실행한다.

깃훅이 실행되지 않거나 문제가 있으면, 각 Github Repo에서 확인한다.

[Husky](https://github.com/typicode/husky)
[lint-staged](https://github.com/okonet/lint-staged)

# Firebase Cloud Functions

## Set config

```bash
cd <project-root>/functions
firebase functions:config:set potterapi.baseurl="https://www.potterapi.com/v1"
```

## Get config

```bash
cd <project-root>/functions
firebase functions:config:get
```

## Copy config for local emulator

아래 커맨드를 실행하면 `<project-root>functions/.runtimeconfig.json`에 저장되고, emulator 실행 시 config로 불러와진다. 해당 설정파일은 `.gitignore`에 추가되어있다.

```bash
cd <project-root>/functions
yarn setconfig
```

이후 allowedorigins에 로컬 프론트엔드 origin 추가하기

```
{
    "allowedorigins": "https://tunapanini.github.io,https://tupa-potter-page.web.app,https://localhost:3000"
}
```

## Run local emulator (serve)

```bash
cd <project-root>/functions
yarn serve
```

## Deploy

```bash
cd <project-root>/functions
yarn deploy
```
