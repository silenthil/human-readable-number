module.exports = function toReadable (number) {
  let numbers=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
  if (number<13){
    return (numbers.reduce((sun,item,index) => {
      if (number==index) return sun=item
      else return sun;
    }))
  }
  numbers=numbers.slice(0,10);
  if(number<100){
    if (number<20){
      number=String(number).split('');
      return (numbers.reduce((sun,item,index) => {
        if (number[1]==index){ return sun=item+'teen'
        }else{
        return sun;
        }
      }))
    }
    if (number>=20){
      number=String(number).split('');
      return (numbers.reduce((sun,item,index) => {
        if (number[1]!=0 && number[0]==index){ 
            return sun=item + 'ty'+' '+numbers[number[1]];
        }
        if (number[0]==index){ 
            return sun=item+'ty'
        }else{
                 return sun;
            }
    }))
    }
  }
  if(number<1000){
    number=String(number).split('');
    return (numbers.reduce((sun,item,index) => {
      if (number[2]!=0 && number[1]!=0 && number[0]==index){ 
        if(number[1])
        return sun=item + ' '+'hundred'+' '+numbers[number[1]]+'ty'+' '+numbers[number[2]];
      }
      if (number[1]!=0 && number[0]==index){ 
        return sun=item + ' '+'hundred'+' '+numbers[number[1]]+'ty';
      }
      if (number[0]==index){ 
        return sun=item + ' '+'hundred'
      }else{
        return sun;
          }
  }))
  }
  }
    
  

/*
  let readed={
    '0':'zero',
    '1':'one',
    '2':'two',
    '3':'three',
    '4':'four',
    '5':'five',
    '6':'six',
    '7':'seven',
    '8':'eight',
    '9':'nine',
    '10':'ten',
    '11':'eleven',
    '12':'twelve'
  }
let arr=String(number).split('');
  return (arr.map(function f(item,index){
    if (arr.length==3) {
        if(index==0) return  readed[String(item)]+' '+'hundred'
        else if (index=1) return  readed[String(item)]+'ty'
        else if (index=2) return  readed[String(item)]
    }
    else if (arr.length==2) {
        if (index=0) return  readed[String(item)]+ty
        else if (index=1) return  readed[String(item)]
    }
    else if (arr.length==1) {
        if (index=0 && item) return  readed[String(item)]
    }
  })).join(' ')
  */
