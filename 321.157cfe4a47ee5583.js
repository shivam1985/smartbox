"use strict";(self.webpackChunksmartbox_fe=self.webpackChunksmartbox_fe||[]).push([[321],{321:(O,g,e)=>{e.r(g),e.d(g,{LoginModule:()=>L});var u=e(9808),l=e(5425),r=e(2382),h=e(2831),a=e(6425),t=e(1223),c=e(8441),d=e(72),m=e(2290),p=e(8356),f=e(8861),v=e(5177);const C=[{path:"",component:(()=>{class o{constructor(s,i,F,R,S,Z,w,B){this.modalService=s,this.elementRef=i,this.ngxService=F,this.spinner=R,this.toastrService=S,this.router=Z,this.fb=w,this.apiservice=B,this.submitted=!1,this.show=!1,this.config=this.ngxService.getDefaultConfig(),this.registrationForm=this.fb.group({email:["",[r.kI.required]],password:["",[r.kI.required,r.kI.minLength(6)]]})}onClick(){"password"===this.password?(this.password="text",this.show=!0):(this.password="password",this.show=!1)}get f(){return this.registrationForm.controls}open(s){this.modalService.open(s,{ariaLabelledBy:"modal-basic-title"}).result.then(i=>{this.closeResult=`Closed with: ${i}`},i=>{this.closeResult=`Dismissed ${this.getDismissReason(i)}`})}getDismissReason(s){return s===a.If.ESC?"by pressing ESC":s===a.If.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${s}`}ngOnInit(){this.password="password"}navigate(){this.router.navigate(["/"+h.O.FORGOTPASSWORD])}ngOndestroy(){this.elementRef.nativeElement.remove()}}return o.\u0275fac=function(s){return new(s||o)(t.Y36(a.FF),t.Y36(t.SBq),t.Y36(c.LA),t.Y36(d.t2),t.Y36(m._W),t.Y36(l.F0),t.Y36(r.qu),t.Y36(p.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:18,vars:0,consts:[[1,"main-page","text-center"],[1,"container","h-100"],["id","Bar",1,"row","mb-4"],[1,"row","mainScreen","flex"],[1,"col-md-3"],[1,"col-md-6","my-auto"],[1,"row","justify-content-center","text-center"],["src","https://smartbox-solutions.nl/wp-content/uploads/2021/03/logo_1200x300-300x75.png"],[1,"row","justify-content-center"],[1,"circle-small","red"],[1,"circle-small","yellow"],[1,"circle-small","green"],[1,"circle-small","blue"]],template:function(s,i){1&s&&(t._UZ(0,"app-header"),t.TgZ(1,"section",0)(2,"div",1),t._UZ(3,"div",2),t.TgZ(4,"div",3),t._UZ(5,"div",4),t.TgZ(6,"div",5)(7,"div",6)(8,"a"),t._UZ(9,"img",7),t.qZA()(),t.TgZ(10,"div",8),t._UZ(11,"button",9)(12,"button",10)(13,"button",11)(14,"button",12),t.qZA()(),t._UZ(15,"div",4),t.qZA()()(),t._UZ(16,"app-footer")(17,"ngx-ui-loader"))},directives:[f.G,v.c,c.Eo],styles:[".basic-addon1[_ngcontent-%COMP%]{cursor:pointer}"]}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.Bz.forChild(C)],l.Bz]}),o})();var x=e(1075);const y={bgsColor:"red",bgsOpacity:.5,bgsPosition:"bottom-right",bgsSize:60,bgsType:"ball-spin-clockwise",blur:5,delay:0,fastFadeOut:!0,fgsColor:"red",fgsPosition:"center-center",fgsSize:60,fgsType:"ball-spin-clockwise",gap:24,logoPosition:"center-center",logoSize:170,logoUrl:"https://raw.githubusercontent.com/t-ho/ngx-ui-loader/master/src/assets/angular.png",masterLoaderId:"master",overlayBorderRadius:"0",overlayColor:"rgba(40, 40, 40, 0.8)",pbColor:"red",pbDirection:"ltr",pbThickness:3,hasProgressBar:!0,text:"",textColor:"#FFFFFF",textPosition:"center-center",maxTime:-1,minTime:300};let L=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[x.m,u.ez,b,a.IJ,r.UX,m.Rh.forRoot({closeButton:!0,timeOut:1e4,progressBar:!0}),d.ef,c.Js.forRoot(y)]]}),o})()}}]);