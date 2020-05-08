// Copyright 2020 Kaan Karakaya
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const trylang = require('./index');
cl = function() { return console.log.apply(console, arguments); };

const init = async() => {
  let lang = await trylang('https://cdn.trylang.net/tttttt-1588951967.json');

  cl(lang.defaultLang('EN')); //* EN
  cl(lang.defaultLang());     //* EN
  cl(lang.listLangs());       //* [ 'EN', 'DE', 'IT', 'ES', 'TR' ]
  cl(lang('CLOSE'));          //* close
  cl(lang('CLOSE',"TR"));     //* kapat


  cl(lang('WELCOME', { 0 : "Kaan" } ));         //* Welcome Kaan
  cl(lang('HELLO',  { name : "Kaan" } ));       //* Hello Kaan
  cl(lang('HELLO',  { name : "Kaan" }, "TR" )); //* Merhaba Kaan

};

init();