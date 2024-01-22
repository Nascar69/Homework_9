const rectangles = [
    { width: 3, height: 5 },
    { width: 4, height: 8 },
    { width: 2, height: 6 }
  ];
  
  const S = rectangles.map(rectangle => rectangle.width * rectangle.height);
  
  console.log(S);
  