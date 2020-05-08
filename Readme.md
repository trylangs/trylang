<!--
 Copyright 2020 Kaan Karakaya
 
 Licensed under the Apache License, Version 2.0 (the "License"
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
     http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

# Trylang js package

## Import trylang


```
npm i trylang
yarn add trylang
```

## Init trylang
```
 let lang = await trylang(PROJECT CDN URL);
```

## Usage
```
lang(KEY, VALUES , LANG)
```
## Examples
```
lang.defaultLang('EN') //* EN
lang.defaultLang()     //* EN
lang.listLangs()       //* [ 'EN', 'DE', 'IT', 'ES', 'TR' ]
lang('CLOSE')          //* close
lang('CLOSE',"TR")     //* kapat


lang('WELCOME', { 0 : "Kaan" } )         //* Welcome Kaan
lang('HELLO',  { name : "Kaan" } )       //* Hello Kaan
lang('HELLO',  { name : "Kaan" }, "TR" ) //* Merhaba Kaan
```
