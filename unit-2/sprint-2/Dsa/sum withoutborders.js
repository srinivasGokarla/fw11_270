function sumWithoutBorders(N, M, matrix){
    var sum = 0
   for(var i = 1; i <= N-2; i++){
       for(var j = 1; j <= M-2; j++){
  sum = sum + matrix[i][j]
       }
   }
    console.log(sum)
}
