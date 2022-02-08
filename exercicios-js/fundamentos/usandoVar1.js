//usando VAR siempre devemos ivitar usar de forma gloval
{
  {
    {
      {
        var sera = "sera!!!!";
        
      }
    }
  }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste();
//console.log(local)