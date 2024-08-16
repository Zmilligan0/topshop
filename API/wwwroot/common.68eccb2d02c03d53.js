"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{8795:(Z,d,s)=>{s.d(d,{b:()=>m});var t=s(1571),_=s(3473),a=s(6895),f=s(9838);function g(n,r){1&n&&(t.TgZ(0,"th")(1,"div",4),t._uU(2,"Remove"),t.qZA()())}function l(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"i",19),t.NdJ("click",function(){t.CHM(e);const p=t.oxw().$implicit,T=t.oxw(2);return t.KtG(T.removeBasketItem(p.id,1))}),t.qZA()}}function v(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"i",20),t.NdJ("click",function(){t.CHM(e);const p=t.oxw().$implicit,T=t.oxw(2);return t.KtG(T.addBasketItem(p))}),t.qZA()}}function c(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"td",13)(1,"a",21)(2,"i",22),t.NdJ("click",function(){t.CHM(e);const p=t.oxw().$implicit,T=t.oxw(2);return t.KtG(T.removeBasketItem(p.id,p.quantity))}),t.qZA()()()}}function u(n,r){if(1&n&&(t.TgZ(0,"tr")(1,"th")(2,"div",7),t._UZ(3,"img",8),t.TgZ(4,"div",9)(5,"h5",10)(6,"a",11),t._uU(7),t.qZA()(),t.TgZ(8,"span",12),t._uU(9),t.qZA()()()(),t.TgZ(10,"td",13)(11,"strong"),t._uU(12),t.ALo(13,"currency"),t.qZA()(),t.TgZ(14,"td",13)(15,"div",14),t.YNc(16,l,1,0,"i",15),t.TgZ(17,"strong",16),t._uU(18),t.qZA(),t.YNc(19,v,1,0,"i",17),t.qZA()(),t.TgZ(20,"td",13)(21,"strong"),t._uU(22),t.ALo(23,"currency"),t.qZA()(),t.YNc(24,c,3,0,"td",18),t.qZA()),2&n){const e=r.$implicit,o=t.oxw(2);t.xp6(3),t.s9C("src",e.pictureUrl,t.LSH),t.s9C("alt",e.productName),t.xp6(3),t.MGl("routerLink","/shop/",e.id,""),t.xp6(1),t.Oqu(e.productName),t.xp6(2),t.hij(" Type: ",e.type," "),t.xp6(3),t.Oqu(t.lcZ(13,13,e.price)),t.xp6(3),t.ekj("justify-content-center",!o.isBasket),t.xp6(1),t.Q6J("ngIf",o.isBasket),t.xp6(2),t.hij(" ",e.quantity,""),t.xp6(1),t.Q6J("ngIf",o.isBasket),t.xp6(3),t.Oqu(t.lcZ(23,15,e.price*e.quantity)),t.xp6(2),t.Q6J("ngIf",o.isBasket)}}function i(n,r){if(1&n&&(t.TgZ(0,"div",1)(1,"table",2)(2,"thead",3)(3,"tr")(4,"th")(5,"div",4),t._uU(6,"Product"),t.qZA()(),t.TgZ(7,"th")(8,"div",4),t._uU(9,"Price"),t.qZA()(),t.TgZ(10,"th")(11,"div",4),t._uU(12,"Quantity"),t.qZA()(),t.TgZ(13,"th")(14,"div",4),t._uU(15,"Total"),t.qZA()(),t.YNc(16,g,3,0,"th",5),t.qZA()(),t.TgZ(17,"tbody"),t.YNc(18,u,25,17,"tr",6),t.qZA()()()),2&n){const e=r.ngIf,o=t.oxw();t.xp6(2),t.ekj("bg-light",o.isBasket),t.xp6(8),t.ekj("text-center",!o.isBasket),t.xp6(6),t.Q6J("ngIf",o.isBasket),t.xp6(2),t.Q6J("ngForOf",e.items)}}let m=(()=>{class n{constructor(e){this.basketService=e,this.addItem=new t.vpe,this.removeItem=new t.vpe,this.isBasket=!0}addBasketItem(e){this.addItem.emit(e)}removeBasketItem(e,o=1){this.removeItem.emit({id:e,quantity:o})}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(_.v))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-basket-summary"]],inputs:{isBasket:"isBasket"},outputs:{addItem:"addItem",removeItem:"removeItem"},decls:2,vars:3,consts:[["class","table-reponsive",4,"ngIf"],[1,"table-reponsive"],[1,"table"],[1,"text-uppercase"],[1,"py-2"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"p-2","d-inline-block"],[1,"img-fluid",2,"max-height","50px",3,"src","alt"],[1,"ms-3","d-inline-block","align-middle"],[1,"mb-0"],[1,"text-dark","text-decoration-none",3,"routerLink"],[1,"text-muted","fst-italic"],[1,"align-middle"],[1,"d-flex","align-items-center"],["class","fa fa-minus-circle text-warning me-2","style","cursor: pointer; font-size: 2em",3,"click",4,"ngIf"],[2,"font-size","1.2em"],["class","fa fa-plus-circle text-warning mx-2","style","cursor: pointer; font-size: 2em",3,"click",4,"ngIf"],["class","align-middle",4,"ngIf"],[1,"fa","fa-minus-circle","text-warning","me-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"fa","fa-plus-circle","text-warning","mx-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"text-danger"],[1,"fa","fa-trash",2,"font-size","2em","cursor","pointer",3,"click"]],template:function(o,p){1&o&&(t.YNc(0,i,19,6,"div",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,p.basketService.basketSource$))},dependencies:[a.sg,a.O5,f.rH,a.Ov,a.H9]})}return n})()},4015:(Z,d,s)=>{s.d(d,{t:()=>u});var t=s(1571),_=s(433),a=s(6895);function f(i,m){1&i&&t._UZ(0,"div",5)}function g(i,m){if(1&i&&(t.TgZ(0,"div",6),t._uU(1),t.qZA()),2&i){const n=t.oxw();t.xp6(1),t.hij(" Please enter your ",n.label," ")}}function l(i,m){1&i&&(t.TgZ(0,"div",6),t._uU(1," Invalid email address "),t.qZA())}function v(i,m){1&i&&(t.TgZ(0,"div",6),t._uU(1," Password not complex enough "),t.qZA())}function c(i,m){1&i&&(t.TgZ(0,"div",6),t._uU(1," Email address is taken "),t.qZA())}let u=(()=>{class i{constructor(n){this.controlDir=n,this.type="text",this.label="",this.controlDir.valueAccessor=this}writeValue(n){}registerOnChange(n){}registerOnTouched(n){}get control(){return this.controlDir.control}static#t=this.\u0275fac=function(r){return new(r||i)(t.Y36(_.a5,2))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-text-input"]],inputs:{type:"type",label:"label"},decls:9,vars:10,consts:[[1,"form-floating","mb-3"],[1,"form-control",3,"type","formControl","placeholder","ngClass"],["class","fa fa-spinner fa-spin loader",4,"ngIf"],["for","floatingInput"],["class","invalid-feedback",4,"ngIf"],[1,"fa","fa-spinner","fa-spin","loader"],[1,"invalid-feedback"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0),t._UZ(1,"input",1),t.YNc(2,f,1,0,"div",2),t.TgZ(3,"label",3),t._uU(4),t.qZA(),t.YNc(5,g,2,1,"div",4),t.YNc(6,l,2,0,"div",4),t.YNc(7,v,2,0,"div",4),t.YNc(8,c,2,0,"div",4),t.qZA()),2&r&&(t.xp6(1),t.s9C("type",e.type),t.s9C("placeholder",e.label),t.Q6J("formControl",e.control)("ngClass",e.control.touched?e.control.invalid?"is-invalid":"is-valid":null),t.xp6(1),t.Q6J("ngIf","PENDING"===e.control.status),t.xp6(2),t.Oqu(e.label),t.xp6(1),t.Q6J("ngIf",null==e.control.errors?null:e.control.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.control.errors?null:e.control.errors.email),t.xp6(1),t.Q6J("ngIf",null==e.control.errors?null:e.control.errors.pattern),t.xp6(1),t.Q6J("ngIf",null==e.control.errors?null:e.control.errors.emailExists))},dependencies:[a.mk,a.O5,_.Fj,_.JJ,_.oH],styles:[".loader[_ngcontent-%COMP%]{position:absolute;width:auto;top:20px;right:40px;margin-top:0}"]})}return i})()},5053:(Z,d,s)=>{s.d(d,{S:()=>g});var t=s(1571),_=s(3473),a=s(6895);function f(l,v){if(1&l&&(t.TgZ(0,"ul",4)(1,"li",5)(2,"strong",6),t._uU(3,"Order subtotal"),t.qZA(),t.TgZ(4,"strong"),t._uU(5),t.ALo(6,"currency"),t.qZA()(),t.TgZ(7,"li",5)(8,"strong",6),t._uU(9,"Shipping and handling"),t.qZA(),t.TgZ(10,"strong"),t._uU(11),t.ALo(12,"currency"),t.qZA()(),t.TgZ(13,"li",5)(14,"strong",6),t._uU(15,"Total"),t.qZA(),t.TgZ(16,"strong"),t._uU(17),t.ALo(18,"currency"),t.qZA()()()),2&l){const c=v.ngIf;t.xp6(5),t.Oqu(t.lcZ(6,3,c.subtotal)),t.xp6(6),t.Oqu(t.lcZ(12,5,c.shipping)),t.xp6(6),t.Oqu(t.lcZ(18,7,c.total))}}let g=(()=>{class l{constructor(c){this.basketService=c}static#t=this.\u0275fac=function(u){return new(u||l)(t.Y36(_.v))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-order-totals"]],decls:7,vars:3,consts:[[1,"bg-light","px-4","py-3","text-upper","fw-bold"],[1,"p-4"],[1,"fst-italic","mb-4"],["class","list-unstyled mb-4",4,"ngIf"],[1,"list-unstyled","mb-4"],[1,"d-flex","justify-content-between","py-3","border-bottom"],[1,"text-muted"]],template:function(u,i){1&u&&(t.TgZ(0,"div",0),t._uU(1,"Order summary"),t.qZA(),t.TgZ(2,"div",1)(3,"p",2),t._uU(4,"Shipping costs will be calculated automagically"),t.qZA(),t.YNc(5,f,19,9,"ul",3),t.ALo(6,"async"),t.qZA()),2&u&&(t.xp6(5),t.Q6J("ngIf",t.lcZ(6,1,i.basketService.basketTotalSource$)))},dependencies:[a.O5,a.Ov,a.H9]})}return l})()}}]);