montageDefine("1d97bb3","ui/dynamic-element.reel/dynamic-element",{dependencies:["montage/ui/component"],factory:function(e,t){var n=e("montage/ui/component").Component;t.DynamicElement=n.specialize({hasTemplate:{value:!1},_innerHTML:{value:null},_usingInnerHTML:{value:null},innerHTML:{get:function(){return this._innerHTML},set:function(e){this._usingInnerHTML=!0,this._innerHTML!==e&&(this._innerHTML=e,this.needsDraw=!0)}},defaultHTML:{value:""},_allowedTagNames:{value:null},allowedTagNames:{get:function(){return this._allowedTagNames},set:function(e){this._allowedTagNames!==e&&(this._allowedTagNames=e,this.needsDraw=!0)}},_range:{value:null},enterDocument:{value:function(e){if(e){var t=document.createRange();this.element.className,t.selectNodeContents(this.element),this._range=t}}},_contentNode:{value:null},draw:{value:function(){var e,t,n=this.innerHTML||0===this.innerHTML?this.innerHTML:this.defaultHTML,i=this.allowedTagNames,r=this._range;this._usingInnerHTML&&(null!==i?(this._contentNode=null,r.deleteContents(),e=r.createContextualFragment(n),t=0!==i.length?e.querySelectorAll("*:not("+i.join("):not(")+")"):e.childNodes,0===t.length?(r.insertNode(e),0===r.endOffset&&r.selectNodeContents(this.element)):console.warn("Some Elements Not Allowed ",t)):(e=this._contentNode,null===e?(r.deleteContents(),this._contentNode=e=document.createTextNode(n),r.insertNode(e),0===r.endOffset&&r.selectNodeContents(this.element)):e.data=n))}}})}});