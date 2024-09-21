var posts=["2024/09/21/hello-world/","2021/06/10/测试文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };