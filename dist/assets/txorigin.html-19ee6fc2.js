const e=JSON.parse('{"key":"v-097a227b","path":"/web3/vulns/txorigin.html","title":"钓鱼攻击","lang":"zh-CN","frontmatter":{"description":"```solidity // SPDX-License-Identifier: MIT pragma solidity ^0.8.17; contract Bank { address public owner;//记录合约的拥有者 //在创建合约时给 owner 变量赋值 constructor() payable { owner = msg.sen...","head":[["meta",{"property":"og:url","content":"https://deelmind.com/web3/vulns/txorigin.html"}],["meta",{"property":"og:site_name","content":"極客方舟"}],["meta",{"property":"og:title","content":"钓鱼攻击"}],["meta",{"property":"og:description","content":"```solidity // SPDX-License-Identifier: MIT pragma solidity ^0.8.17; contract Bank { address public owner;//记录合约的拥有者 //在创建合约时给 owner 变量赋值 constructor() payable { owner = msg.sen..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"钓鱼攻击\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.61,"words":184},"filePathRelative":"web3/vulns/txorigin.md","copyright":{},"autoDesc":true,"excerpt":""}');export{e as data};