import{d as _,g as u,h as p,i as f,j as v,_ as y,c as r,a,t as d,F as L,k as R,o as m,m as l,f as h}from"./index-a9a08e9e.js";import{m as n}from"./messageBox-e7b00418.js";const g=_({data:()=>({username:"",dataList:[]}),async created(){const e=this.$route.query.username;e!=null&&(this.username=e.toString()),this.username!=null&&(this.dataList=(await u()).data)},methods:{async upDate(){this.dataList=(await u()).data,n(this,"刷新成功！")},async createRoom(e){let s=await p({hostname:this.username,username1:this.username,content:"0".repeat(361)});if(s.code==0){this.dataList=(await u()).data;let i=0;for(let o=0;o<this.dataList.length;o++)this.dataList[o].hostname==this.username&&(i=this.dataList[o].roomId);this.$router.push({path:"/Room",query:{roomId:i,username:this.username,hostname:this.username}}),n(this,"创建成功！")}else n(this,s.msg)},async deleteRoom(e){let s=await f({roomId:e});s.code==0?(this.dataList=(await u()).data,n(this,"删除成功！")):n(this,s.msg)},async joinRoom(e,s,i){let o=await v({roomId:e,username2:i});o.code==0?(this.dataList=(await u()).data,this.$router.push({path:"/Room",query:{roomId:e,username:this.username,hostname:s}}),n(this,"加入成功！")):n(this,o.msg)}}});const k={id:"container"},B={id:"header"},$={id:"welcome"},b={style:{display:"flex"}},C={id:"rooms"},F={class:"room"},w=a("br",null,null,-1),E=a("br",null,null,-1),A=a("br",null,null,-1),j={class:"buttonGroup"},I=["onClick"],q=["onClick"];function D(e,s,i,o,N,V){return m(),r("div",k,[a("div",B,[a("div",$,"-----欢迎您,"+d(e.username)+"!",1),a("div",b,[a("div",{class:"function",onClick:s[0]||(s[0]=t=>e.upDate())},"刷新"),a("div",{class:"function",onClick:s[1]||(s[1]=t=>e.createRoom(e.username))},"创建房间")])]),a("div",C,[(m(!0),r(L,null,R(e.dataList,t=>(m(),r("div",F,[l(" 房间号:"+d(t.roomId),1),w,l(" 房主:"+d(t.hostname),1),E,l(" 玩家一:"+d(t.username1),1),A,l(" 玩家二:"+d(t.username2)+" ",1),a("div",j,[t.username2==null&&t.username1!=e.username?(m(),r("div",{key:0,class:"button",onClick:c=>e.joinRoom(t.roomId,t.username1,e.username)}," 加入 ",8,I)):h("",!0),t.hostname==e.username?(m(),r("div",{key:1,class:"button",onClick:c=>e.deleteRoom(t.roomId)}," 删除 ",8,q)):h("",!0)])]))),256))])])}const T=y(g,[["render",D]]);export{T as default};
