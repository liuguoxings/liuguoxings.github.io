var posts=["GO/G01/","GO/G02/","Matlab/M00/","Matlab/M01/","GO/G05/","GO/G04/","GO/G03/","Matlab/M02/","Matlab/M04/","Matlab/M03/","JAVA/J02/","JAVA/J01/","Matlab/M06/","JAVA/J04/","YOLO/Y001/","JAVA/J03/","Python/P002/","Python/P001/","Python/P003/","Python/P004/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };