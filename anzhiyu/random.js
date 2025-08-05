var posts=["GO/G04/","GO/G02/","GO/G03/","GO/G05/","JAVA/J02/","Matlab/M00/","JAVA/J01/","JAVA/J04/","JAVA/J03/","Matlab/M01/","GO/G01/","Matlab/M03/","Python/P001/","Python/P003/","Python/P002/","Python/P004/","Matlab/M02/","YOLO/Y001/","Matlab/M04/","Matlab/M06/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };