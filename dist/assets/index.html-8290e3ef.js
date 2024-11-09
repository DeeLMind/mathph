import{_ as s,K as o,L as c,M as e,N as a,a5 as n,W as l,F as r}from"./framework-edebdfe1.js";const d={},u=e("h1",{id:"tauri-ui",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tauri-ui","aria-hidden":"true"},"#"),a(" Tauri(UI)")],-1),p={href:"https://tauri.app/",target:"_blank",rel:"noopener noreferrer"},h=l(`<h2 id="tauri-的主要特点" tabindex="-1"><a class="header-anchor" href="#tauri-的主要特点" aria-hidden="true">#</a> Tauri 的主要特点</h2><ol><li><p><strong>小尺寸</strong>：Tauri 编译的应用体积较小，通常比 Electron 应用体积小得多，因为它使用了系统的 WebView，而不是捆绑一个完整的浏览器。</p></li><li><p><strong>安全性</strong>：Tauri 强调安全性，提供了多种机制来防止应用中的恶意代码运行，允许精细控制文件系统访问等操作。</p></li><li><p><strong>性能</strong>：Tauri 应用使用 WebView 渲染前端，Rust 作为后端语言具有高性能的优势，尤其在 CPU 密集型任务中表现优异。</p></li><li><p><strong>跨平台支持</strong>：Tauri 支持 Windows、macOS 和 Linux 平台，允许开发者在多个平台上构建和分发应用。</p></li></ol><h2 id="环境安装" tabindex="-1"><a class="header-anchor" href="#环境安装" aria-hidden="true">#</a> 环境安装</h2><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm create tauri-app@latest

✔ Project name · tauri-app
✔ Identifier · com.tauri-app.app
✔ Choose which language to use for your frontend · TypeScript / JavaScript - (pnpm, yarn, npm, deno, bun)
✔ Choose your package manager · npm
✔ Choose your UI template · Vue - (https://vuejs.org/)
✔ Choose your UI flavor · JavaScript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function m(v,_){const i=r("ExternalLinkIcon"),t=r("DocsAD");return o(),c("div",null,[u,e("p",null,[e("a",p,[a("Tauri"),n(i)]),a(" 是一个轻量级的跨平台桌面应用开发框架，允许使用现代前端框架（如 React、Vue.js、Svelte）和 Rust 后端一起构建桌面应用。与 Electron 类似，Tauri 利用 Web 技术来渲染前端，但它的资源占用相对较小，且更注重安全性。")]),n(t),h])}const g=s(d,[["render",m],["__file","index.html.vue"]]);export{g as default};