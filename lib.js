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

const p = require('phin');

const phin = p.defaults({
  'timeout': 1200,
  'parse': 'json'
})

module.exports = async(url) => {

  // Add caching and version control
  let res = await phin(url);

  let store  = res.body;

  let Lang = (key,values,lang) => {
    if (!store.dictionary[key]) return key
    if(!lang) lang = store.default;
    if (typeof values != "object" && values != null){
      lang = values
    }
    
    
    // console.log(`${key} > ${lang}`,store.dictionary);
    let text = store.dictionary[key][lang];
    if (typeof values === "object" && values !== null){
      Object.keys(values).forEach(key => {
        val = values[key];
        text = text.replace(`{${key}}`,val);
      });
    }

    return text
  }

  Lang["defaultLang"] = (l) => {
    if(!l) return store.default;
    return store.default = l.toUpperCase();
  }

  Lang["listLangs"] = () =>{
    return store.langs;
  }


  return Lang;
}