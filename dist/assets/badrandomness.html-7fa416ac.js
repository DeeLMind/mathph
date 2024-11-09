import{_ as a,K as t,L as e,a5 as p,M as n,N as o,W as c,F as i}from"./framework-edebdfe1.js";const l={},u=n("h1",{id:"伪随机数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#伪随机数","aria-hidden":"true"},"#"),o(" 伪随机数")],-1),r=c(`<div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.17</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">BadRandom</span> <span class="token punctuation">{</span>
    <span class="token builtin">string</span> text <span class="token operator">=</span> <span class="token string">&quot;GEEKFZ&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> number<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> randomNumber <span class="token operator">=</span> <span class="token builtin">uint256</span><span class="token punctuation">(</span><span class="token function">blockhash</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>number <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>randomNumber <span class="token operator">==</span> number<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;DeeLMind&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> text<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">Attack</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">attack</span><span class="token punctuation">(</span>BadRandom b<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> number <span class="token operator">=</span> <span class="token builtin">uint256</span><span class="token punctuation">(</span><span class="token function">blockhash</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>number <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function k(d,m){const s=i("DocsAD");return t(),e("div",null,[u,p(s),r])}const b=a(l,[["render",k],["__file","badrandomness.html.vue"]]);export{b as default};