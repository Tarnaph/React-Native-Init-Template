# Projeto base para React Native
Foi instalado nesse projeto:
Reactron,Eslint,PropTypes,Icons,React Navigation,ApiSauce

## Iniciar um novo projeto
`react-native init projeto`

## Instalando Reactotron
`yarn add reactotron-react-native --dev`
`yarn add reactotron-redux`

#### Crie uma pasta chamada src/config com ReactotronConfig.js
 `
  import { NativeModules } from 'react-native';
  import Reactotron from 'reactotron-react-native';
  import { reactotronRedux } from 'reactotron-redux';

  if (__DEV__) {
    const scriptURL = NativeModules.SourceCode.scriptURL;
    scriptHostname = scriptURL.split('://')[1].split(':')[0];
    const tron = Reactotron
      .configure({ host: scriptHostname })
      .useReactNative()
      .use(reactotronRedux())
      .connect();
    tron.clear();
    console.tron = tron;
  }`

#### No arquivo app.js
`import './config/ReactotronConfig';`

## Eslint
**No sublimetext instale:**
**SublimeLinter,**
**SublimeLinter-contrib-eslint,**
**ESLint**

#### Descubra os pacotes recomendados
  `npm info "eslint-config-airbnb@latest" peerDependencies`
##### Cole nas devDependencies em package.json
  `yarn install`
#### Pacotes
	yarn add babel-eslint eslint-config-airbnb eslint-plugin-react-native --dev
        ou instale todos*:
	yarn add eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react-native eslint-plugin-import babel-eslint eslint-plugin-react --dev

#### Crie .eslintrc

    {
      "parser": "babel-eslint",
      "env": {
        "browser": true,
        "jest": true
      },
      "plugins": [
        "react-native",
        "jsx-a11y",
        "import"
      ],
      "extends": [
        "airbnb",
        "plugin:react-native/all"
      ],
      "rules": {
        "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
        "global-require": "off",
        "no-console": "off",
        "import/prefer-default-export": "off"
      },
      "settings": {
        "import/resolver": {
          "babel-module": {}
        }
      },
      "globals": {
        "__DEV__": true
      }
    }

## PropTypes

`yarn add prop-types`

`import PropTypes from 'prop-types';`

## Module Resolver
`yarn add babel-plugin-module-resolver --dev`

#### Em .babelrc
	{
	  "presets": ["react-native"],
	  "plugins": [
	  	[
	  		"module-resolver",
	  		{
	  			"root": ["./src"],
	  			"extensions": [".js", ".ios.js", ".android.js"]
	  		}
	  	]
	  ]
	}

#### Adicione em .eslintrc

    "setting": {
        "import/resolver": {
            "babel-module": {}
        }
    }

#### Se de erro limpar cache[verificar qual é o certo]

`react-native start -- --reset-cache`


#### Resolver o config para o eslint não achar que é um modulo
`yarn add eslint-import-resolver-babel-module`
ou

`yarn add eslint-plugin-import eslint-import-resolver-babel-module`

## Icons

`yarn add react-native-vector-icons`

####
E para link a nova biblioteca

`react-native link react-native-vector-icons`

#### Import
`import Icon from 'react-native-vector-icons/FontAlvo';`


## ApiSauce
#### [ApiSauce - Site](https://github.com/infinitered/apisauce)
Talking to APIs doesn't have to be awkward anymore.
####
`yarn add apisauce`

Crie uma pasta /src/services/api.js e configure api.

`import api from './services/api';`

## Redux
`yarn add redux`

#### React Redux
`yarn add react-redux`

#### Crie uma pasta chamada redux com store.js

#### Em index. js
`import { Provider } from 'react-redux';`
`import store from 'redux/store';`

##### Envolva o App
  `<Provider store={stpre}>`
    `<Routes />`
  `</Provider>`

#### Em /Redux crie /reducers

#### Reactotron Redux
`yarn add reactotron-redux`


----------------