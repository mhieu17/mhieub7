let math = prompt("nhap vao phep tinh");
let a = prompt("nhap vao so thu nhat");
let aNum = Number(a);
let b = prompt("nhap vao so thu hai");
let bNum = Number(b);

switch (math) {
    case "+" : {
      alert(aNum+bNum);

    }

    break;

        case "-" : {
            alert(aNum-bNum);

    }

    break;
            case "*" : {
                alert(aNum*bNum);

    }

    break;
                case "/*" : {
                    alert(aNum/sbNum);
    }

    break;

    default:{
        alert("xin moi nhap phep tinh");
    }
    break;
}
//  if (math = "+" ) {
//     alert(aNum+bNum);

    
//  }