module.exports = function toReadable (number) {
    let main = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    ''];
    // let tillDozens = main.map(item => (item='')? '' : item +'teen');
    // tillDozens[1] = 'eleven';
    // tillDozens[2] = 'twelve';
    // tillDozens[3] = 'thirteen';
    // tillDozens[5] = 'fifteen';
    // tillDozens[8] = 'eighteen';
    let tillDozens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", ""];
    // let dozens = main.map(item => (item=''?) '' : item +'ty');
    // dozens[1] = 'ten';
    // dozens[2] = 'twenty';
    // dozens [3] = 'thirty';
    // dozens [4] = 'forty';
    // dozens [5] = 'fifty';
    // dozens[8] = 'eighty';
    let dozens = ["", "ten","twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", ""];
    let hundreds = main.map(item =>  item = item + ' hundred');
    hundreds[0]='';
    let bla = [hundreds,dozens,main];

  let readNum = '';
  let numDig = number.toString().length;
  let newNum = numDig<3? '0'.repeat(3-numDig)+number.toString(): number.toString();
  numDig = newNum.toString().length;
  for (let i = numDig - 1; i >= 0; i--){
    if(newNum[1] == '1') {
        readNum = (bla[i][(newNum[i])] + ' ' + tillDozens[(newNum[2])]).trim();
    } else {
        readNum = (bla[i][(newNum[i])] +' ' + readNum).trim();
    }

    //try without else
    
  }   
  return number===0? 'zero':readNum.trim();

}
