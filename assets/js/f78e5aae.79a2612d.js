"use strict";(self.webpackChunkcln_plugin_tutorial=self.webpackChunkcln_plugin_tutorial||[]).push([[607],{8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(6540);const o={},l=i.createContext(o);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(l.Provider,{value:n},e.children)}},9104:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"python-tutorial/rpc-methods","title":"RPC Methods","description":"- You can define custom behavior for any lightning-cli method by registering that method with lightningd in your getmanifest response.","source":"@site/docs/python-tutorial/rpc-methods.md","sourceDirName":"python-tutorial","slug":"/python-tutorial/rpc-methods","permalink":"/cln-plugin-tutorial/python-tutorial/rpc-methods","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"RPC Methods","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Life Cycle","permalink":"/cln-plugin-tutorial/python-tutorial/life-cycle"},"next":{"title":"Options","permalink":"/cln-plugin-tutorial/python-tutorial/options"}}');var o=t(4848),l=t(8453);const s={title:"RPC Methods",sidebar_position:4},r="RPC Methods",c={},d=[];function h(e){const n={code:"code",h1:"h1",header:"header",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"rpc-methods",children:"RPC Methods"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["You can define custom behavior for any ",(0,o.jsx)(n.code,{children:"lightning-cli"})," method by registering that method with ",(0,o.jsx)(n.code,{children:"lightningd"})," in your ",(0,o.jsx)(n.code,{children:"getmanifest"})," response."]}),"\n",(0,o.jsxs)(n.li,{children:["Whenever ",(0,o.jsx)(n.code,{children:"lightning-cli <method> [options]"})," is called, CLN will pass the method and options back to the plugin, which can handle the call and respond however it wants."]}),"\n",(0,o.jsx)(n.li,{children:"Can register any number of RPC methods, as long as the method names aren\u2019t already taken."}),"\n",(0,o.jsx)(n.li,{children:"If an RPC method is already taken when the plugin registers the method name, the plugin is killed."}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"exercise-add-an-rpc-method-to-your-plugin",children:"Exercise: Add an RPC method to your plugin"}),"\n",(0,o.jsxs)(n.p,{children:["Add this code to your ",(0,o.jsx)(n.code,{children:"helloworld.py"})," file (hint: make sure you insert this before ",(0,o.jsx)(n.code,{children:"plugin.run()"}),"):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'@plugin.method("hello")\ndef hello(plugin, name="world"):\n    """This is the documentation string for the hello-function.\n    It gets reported as the description when registering the function\n    as a method with `lightningd`.\n    """\n    greeting = "Hello"\n    s = \'{} {}\'.format(greeting, name)\n    plugin.log(s)\n    return s\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"Now let's test! Restart your plugin:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"l1-cli plugin stop helloworld.py && l1-cli plugin start $(pwd)/python-plugin/helloworld.py\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now invoke your new RPC method:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"l1-cli hello\n"})}),"\n",(0,o.jsx)(n.p,{children:"Try it with an argument:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"l1-cli hello <your name>\n"})}),"\n",(0,o.jsx)(n.p,{children:"Try causing the rpc call to throw an error:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"l1-cli hello too many arguments\n"})}),"\n",(0,o.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,o.jsxs)(n.li,{className:"task-list-item",children:[(0,o.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Add an RPC method"]}),"\n",(0,o.jsxs)(n.li,{className:"task-list-item",children:[(0,o.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Test that it works as expected"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);