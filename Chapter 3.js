var z = '3';

switch (z) {
    case 1: z += 2;
            break;     
    case 2: z = 5;
    case 3: z = 2;
            
    case 4: z *= 2;
            break;
    default: z += 3;
}
console.log ('Value of z is ' + z);
