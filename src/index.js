module.exports = function toReadable (number) {
  let numbers=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
  if (number<13){
    return (numbers.reduce((sun,item,index) => {
      if (number==index) return sun=item
      else return sun;
    }))
  }
  if(number<100){
    if (number<20){
      number=String(number).split('');
      return (numbers.reduce((sun,item,index) => {
        if (number[1]==3) return sun='thirteen';
        if (number[1]==5) return sun='fifteen';
        if (number[1]==8) return sun='eighteen';
        if (number[1]==index){ return sun=item+'teen'
        }else return sun;
      }))
    }
    if (number>=20){
      number=String(number).split('');
        return (numbers.reduce((sun,item,index) => {
            if (number[1]!=0 && number[0]==2){ 
            return sun='twenty'+' '+numbers[number[1]];
            }
            if (number[1]!=0 && number[0]==3){ 
            return sun='thirty'+' '+numbers[number[1]];
            }
            if (number[1]!=0 && number[0]==4){ 
              return sun='forty'+' '+numbers[number[1]];
            }
            if (number[1]!=0 && number[0]==5){ 
              return sun='fifty'+' '+numbers[number[1]];
            }
            if (number[1]!=0 && number[0]==8){ 
              return sun='eighty'+' '+numbers[number[1]];
            }
            if (number[1]!=0 && number[0]==index){ 
              return sun=item + 'ty'+' '+numbers[number[1]];
            }
            if (number[0]==2){ 
                return sun='twenty';
            }
            if (number[0]==3){ 
                return sun='thirty';
            }
            if (number[0]==4){ 
                return sun='forty';
            }
            if (number[0]==5){ 
                return sun='fifty';
            }
            if (number[0]==8){ 
                return sun='eighty';
            }
            if (number[0]==index){ 
              return sun=item+'ty'
            }else return sun;
        }))
    }
  }
  if(number<1000){
    number=String(number).split('');
    return (numbers.reduce((sun,item,index) => {
      if (number[2]!=0 && number[1]!=0 && number[0]==index){ 
        return sun=item +' '+'hundred'+' '+(numbers.reduce((sun,item,index) => {
                                            if(number[1]==0){
                                              return (numbers.reduce((sun,item,index) => {
                                                if (number==index) return sun=item
                                                else return sun;
                                              }))
                                            }
            if (number[1]==1){
              if (number[2]==3) return sun='thirteen';
              if (number[2]==5) return sun='fifteen';
              if (number[2]==8) return sun='eighteen';
              if(number[2]==1) return sun=numbers[11];
              if(number[2]==2) return sun=numbers[12];
              if (number[2]==index){ return sun=item+'teen'
              }else return sun;
            }
            if (number[1]>=2){
              if (number[2]!=0 && number[1]==2){ 
                return sun='twenty'+' '+numbers[number[2]];
              }
              if (number[2]!=0 && number[1]==3){ 
                return sun='thirty'+' '+numbers[number[2]];
              }
              if (number[2]!=0 && number[1]==4){ 
                return sun='forty'+' '+numbers[number[2]];
              }
              if (number[2]!=0 && number[1]==5){ 
                return sun='fifty'+' '+numbers[number[2]];
              }
              if (number[2]!=0 && number[1]==8){ 
                return sun='eighty'+' '+numbers[number[2]];
              }
              if (number[2]!=0 && number[1]==index){ 
                return sun=item + 'ty'+' '+numbers[number[2]];
              }
              if (number[1]==index){ 
                return sun=item+'ty'
              }else return sun;
            }
        }))    
      }
      if (number[2]==0 && number[1]!=0 && number[0]==index){
        return sun=item + ' '+'hundred'+' '+(numbers.reduce((sun,item,index) => {
          if(number[1]==1){
            return sun='ten'
          }
          if (number[1]==2){ 
            return sun='twenty'
          }
          if (number[1]==3){ 
            return sun='thirty'
          }
          if (number[1]==4){ 
            return sun='forty'
          }
          if (number[1]==5){ 
            return sun='fifty'
          }
          if (number[1]==8){ 
            return sun='eighty'
          }
          if (number[1]==index){ 
          return sun=item+'ty'
          }else return sun;
          }))
      }
      if (number[2]!=0 && number[0]==index){ 
        if(number[1]==0){
        return sun=item + ' '+'hundred'+' '+(numbers.reduce((sun,item,index) => {
                                            if (number[2]==index) return sun=item
                                            else return sun;
                                            }))
        }
      }
      if (number[0]==index){ 
        return sun=item + ' '+'hundred'
      }else return sun;
  }))
  }
  }
    

