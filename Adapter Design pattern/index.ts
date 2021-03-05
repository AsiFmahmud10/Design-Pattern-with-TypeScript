//Wrong Way

class _Phone {
    private os : string;
    private processor: string;
    private  battery: number;
    private  camera: number;
      
      constructor(os :string, processor:string, battery: number, camera:number ){
            this.os = os;
            this.processor = processor;
            this.battery =battery;
            this.camera =camera;
      }
    
    }
    /*
        The drawbacks of this  design we construct an object of Phone
    
            let obj : Phone = new Phone("////","...")
            we must need to pass ** all argument** of the constructor in order to make obj ..but sometimes we need 
            to make obj with having some variable asigned (perhaps we dont know the charge at this moment ) then we 
            cant make an object. 
            Again we need to pass all the arguments of the obj in order ..so we face problems if there are alots of arguments 
    
    */
    class Phone {
    private os : string;
    private processor: string;
    private  battery: number;
    private  camera: number;
    
    
    
    setOs(Os: string):Phone{
       this.os =  Os;
        return this
     }
      
     setProcessor(processor: string):Phone{
       this.processor =  processor;
        return this
     }
     
     setBattery(Battery: number):Phone{
       this.battery =  Battery;
        return this
     }
     setCamera(camera: number):Phone{
       this.camera =  camera;
        return this
     }
       
    }
    
    let phone : Phone = new Phone()
    
    //phone.setCamera(13) // as we return this in set camera so the phone.setCamera() return the obj 
    
    phone = phone.setBattery(5)
    phone = phone.setCamera(12)
    phone = phone.setOs("Android")
    
    console.log(phone)
    