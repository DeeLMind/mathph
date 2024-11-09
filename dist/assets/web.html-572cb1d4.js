import{_ as c,K as u,L as l,M as n,N as s,a5 as a,W as p,F as t}from"./framework-edebdfe1.js";const i={},k=n("h1",{id:"web服务",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#web服务","aria-hidden":"true"},"#"),s(" WEB服务")],-1),r={id:"rocket库",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#rocket库","aria-hidden":"true"},"#",-1),m={href:"https://rocket.rs/",target:"_blank",rel:"noopener noreferrer"},v=p(`<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#[macro_use]</span> <span class="token keyword">extern</span> <span class="token keyword">crate</span> <span class="token module-declaration namespace">rocket</span><span class="token punctuation">;</span>

<span class="token attribute attr-name">#[get(<span class="token string">&quot;/&quot;</span>)]</span>
<span class="token keyword">fn</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;static</span> <span class="token keyword">str</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;Hello, world!&quot;</span>
<span class="token punctuation">}</span>

<span class="token attribute attr-name">#[launch]</span>
<span class="token keyword">fn</span> <span class="token function-definition function">rocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> _ <span class="token punctuation">{</span>
    <span class="token namespace">rocket<span class="token punctuation">::</span></span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token macro property">routes!</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b=p(`<h2 id="原生开发" tabindex="-1"><a class="header-anchor" href="#原生开发" aria-hidden="true">#</a> 原生开发</h2><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span><span class="token punctuation">{</span>
    fs<span class="token punctuation">,</span>
    <span class="token namespace">io<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token namespace">prelude<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">,</span> <span class="token class-name">BufReader</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token namespace">net<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token class-name">TcpListener</span><span class="token punctuation">,</span> <span class="token class-name">TcpStream</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> listener <span class="token operator">=</span> <span class="token class-name">TcpListener</span><span class="token punctuation">::</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1:7878&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> stream <span class="token keyword">in</span> listener<span class="token punctuation">.</span><span class="token function">incoming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> stream <span class="token operator">=</span> stream<span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">handle_connection</span><span class="token punctuation">(</span>stream<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">fn</span> <span class="token function-definition function">handle_connection</span><span class="token punctuation">(</span><span class="token keyword">mut</span> stream<span class="token punctuation">:</span> <span class="token class-name">TcpStream</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> buf_reader<span class="token punctuation">:</span> <span class="token class-name">BufReader</span><span class="token operator">&lt;</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">TcpStream</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token class-name">BufReader</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> stream<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> http_request<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span>_<span class="token operator">&gt;</span> <span class="token operator">=</span> buf_reader
        <span class="token punctuation">.</span><span class="token function">lines</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>result<span class="token closure-punctuation punctuation">|</span></span> result<span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">take_while</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>line<span class="token closure-punctuation punctuation">|</span></span> <span class="token operator">!</span>line<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Request: {:#?}&quot;</span><span class="token punctuation">,</span> http_request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> status_line <span class="token operator">=</span> <span class="token string">&quot;HTTP/1.1 200 OK&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> contents <span class="token operator">=</span> <span class="token namespace">fs<span class="token punctuation">::</span></span><span class="token function">read_to_string</span><span class="token punctuation">(</span><span class="token string">&quot;index.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> length <span class="token operator">=</span> contents<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> response <span class="token operator">=</span>
        <span class="token macro property">format!</span><span class="token punctuation">(</span><span class="token string">&quot;{status_line}\\r\\nContent-Length: {length}\\r\\n\\r\\n{contents}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    stream<span class="token punctuation">.</span><span class="token function">write_all</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">as_bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function f(_,h){const e=t("ExternalLinkIcon"),o=t("DocsAD");return u(),l("div",null,[k,n("h2",r,[d,s(),n("a",m,[s("Rocket库"),a(e)])]),v,a(o),b])}const g=c(i,[["render",f],["__file","web.html.vue"]]);export{g as default};