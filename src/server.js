import express from 'express'

const app =express();
const port = 3000; 

app.set('view engine', 'pug'); //view 엔진을 pug로 쓰겟다 
app.set('views', process.cwd() + '/src/views');
console.log(process.cwd()) // 해당 프로젝트의 경로위치 보여줌

// 서버 생성
app.get("/",(req,res) =>{
    res.render("home"); //sr/views/home 을 렌더시키겠다
});

// // 서버 생성
// app.get("/",(req,res) =>{
//     res.send(`
//     <!DOCTYPE html>
//     <html lang="ko">
//         <head><meta charset="utf-8"></head>
//         <title>하잇</title>
//     <body><h1>여긴 메인이다</h1></body>
//     </html>
//     `);
//     // res.end(); //express에서의 end는 서버 활성화되고 끝냈다.
// });


app.get("/about",(req,res) =>{
    res.send("hello 여긴 about 페이지")
    // res.end(); //express에서의 end는 서버 활성화되고 끝냈다.
})
app.get("/profile",(req,res) =>{
    res.render("about")
    // res.end(); //express에서의 end는 서버 활성화되고 끝냈다.
})

app.listen(port, ()=>{
    console.log('서버가 활성화 됨', port)
})



// const http = require('http'); //nodex는 최신 문법을 이해 못 할떄가 있어서 import 가 아닌 require 씀
// //http 기능을 가져왔따  http=api

// const hostname = '127.0.0.1'; //ip 주소, 사실 없어도 됨.
// const port = 3000; //포트넘버가 겹치면 서버가 안열리기 때문에 보통 4000번대부터 1씩 증가해서 사용

// const server = http.createServer((req, res) => {
//     console.log(req)

// //http에서 사용하는 파라미터는 대부분 request, response 
//     if(req.url === "/"){
//     res.statusCode = 200; //200번대는 활성화가 잘 되어있음. 
//     res.setHeader('Content-Type', 'text/html; charset=utf-8'); //서버가 사용하는 콘텐츠 타입. 
//     res.end('하이 여긴 main'); //서버 접속했을 때 나오는 문구 , 서버가 이미 실행중이라면 다시 실행해줘야 내용 바뀜 
//     }else if(req.url === "/about"){
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/html; charset=utf-8'); 
//         res.end('<h1>하이 여긴 about</h1>'); 
//     }else{
//         // 404  
//         res.statusCode = 404;
//         res.end('404 Not Found Page'); 
//     }
// });

// //서버를 열겠따.
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });








